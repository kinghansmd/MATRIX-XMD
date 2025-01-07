let antiCallMessage1 = "⚠️ WARNING: THIS IS MATRIX-XMD. MY OWNER IS UNAVAILABLE FOR CALLS. PLEASE SEND A TEXT MESSAGE.";
let antiCallMessage2 = "🚫YOU STUPID DO NOT CALL AGAIN! 🚫 I WILL BLOCK YOU ";
let antiCallMessage3 = "⚠️ THIRD WARNING: REPEATED CALLS ARE STRICTLY PROHIBITED. TEXT ONLY.";

let antiCallCountries = [];
let antiCallusers = {};
let bots = false;

const {
  smd,
  botpic,
  send,
  Config,
  tlang,
  sleep,
  smdBuffer,
  prefix,
  bot_
} = require("../lib");

smd({
  'pattern': "anticall",
  'desc': "Detects calls and decline them.",
  'category': "owner",
  'use': "<on | off>",
  'filename': __filename
}, async (_0x3079c3, _0x16cfc8) => {
  let _0x20f464 = (await bot_.findOne({
    'id': "bot_" + _0x3079c3.user
  })) || (await bot_["new"]({
    'id': "bot_" + _0x3079c3.user
  }));
  let _0xfa720 = _0x16cfc8 ? _0x16cfc8.toLowerCase().trim() : '';
  if (_0xfa720.startsWith("off") || _0xfa720.startsWith("deact") || _0xfa720.startsWith('disable')) {
    if (_0x20f464.anticall === "false") {
      return await _0x3079c3.send("*anticall Already Disabled In Current Chat!*");
    }
    await bot_.updateOne({
      'id': "bot_" + _0x3079c3.user
    }, {
      'anticall': "false"
    });
    return await _0x3079c3.send("*anticall Disabled Successfully!*");
  } else {
    if (!_0x16cfc8) {
      return await _0x3079c3.send("*_anticall " + (_0x20f464.anticall === 'false' ? "Not set to any" : "set to \"" + _0x20f464.anticall + "\"") + " Country Code!_*\n *Provide Country code to Update Status*\n*Eg: _.anticall all | 212, 91_*");
    }
  }
  let _0x550952 = _0xfa720.includes("all") ? "all" : _0x16cfc8 ? _0x16cfc8.split(',').map(_0x5dedec => parseInt(_0x5dedec)).filter(_0x388aec => !isNaN(_0x388aec)).join(',') : false;
  if (!_0x16cfc8 || !_0x550952) {
    return await _0x3079c3.send("*_Please provide country code to block calls_*\n*_eg: " + prefix + "anticall all | 92_*");
  } else {
    if (_0x550952) {
      await bot_.updateOne({
        'id': "bot_" + _0x3079c3.user
      }, {
        'anticall': '' + _0x550952
      });
      return await _0x3079c3.send("*anticall Successfully set to \"" + _0x550952 + "\"!*");
    } else {
      return await _0x3079c3.send("*_Please provide a Valid country code_*\n*example: " + prefix + "anticall all,212,91,231_*");
    }
  }
});

smd({
  'call': "offer"
}, async callData => {
  try {
    if (!bots) {
      bots = await bot_.findOne({
        'id': "bot_" + callData.user
      });
    }

    if (callData.fromMe || !bots || !bots.anticall || bots.anticall === "false") {
      return;
    }

    if (!antiCallusers[callData.from]) {
      antiCallusers[callData.from] = { warn: 0 };
    }

    let userWarnings = antiCallusers[callData.from].warn;

    if (userWarnings === 0) {
      // First call warning
      await callData.send(antiCallMessage1);
    } else if (userWarnings === 1) {
      // Second call warning
      await callData.send(antiCallMessage2);
    } else if (userWarnings === 2) {
      // Third call warning
      await callData.send(antiCallMessage3);
    } else {
      // Block the user on the fourth call
      await callData.send(`*Master☠️*\n\n*This idiot @${callData.from.split('@')[0]} has been blocked for spamming calls*\n\n> I tried to warn the idiot but not worked‼️.\n\n> You can unblock the idiot if yoou wish sir‼️\n\n> Matrix-Xmd By HansTz`, {
        mentions: [callData.from]
      });
      await callData.block();
      return;
    }

    // Increment warning count for the user
    antiCallusers[callData.from].warn++;

    // Decline the call
    await callData.decline();
  } catch (error) {
    console.error("Error handling anti-call:", error);
  }
});