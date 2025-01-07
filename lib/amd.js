function hi() {
  console.log("Hello World!");
}
hi();
const fs = require('fs');
const path = require("path");
const Config = require(__dirname + '/../config.js');
const blockJid = ['' + (process.env.BLOCKJIDS || "120363023983262391@g.us"), ...(typeof global.blockJids === 'string' ? global.blockJids.split(',') : [])];
const allowJid = ["null", ...(typeof global.allowJids === "string" ? global.allowJids.split(',') : [])];
const Pino = require("pino");
const {
  Boom
} = require("@hapi/boom");
const FileType = require("file-type");
const express = require('express');
const app = express();
const events = require("./plugins");
const {
  imageToWebp,
  videoToWebp,
  writeExifImg,
  writeExifVid
} = require('./exif');
let {
  default: SuhailMDConnect,
  proto,
  prepareWAMessageMedia,
  downloadContentFromMessage,
  DisconnectReason,
  useMultiFileAuthState,
  generateForwardMessageContent,
  generateWAMessageFromContent,
  makeInMemoryStore,
  jidDecode
} = require("@whiskeysockets/baileys");
var last_status = {};
global.setCmdAlias = {};
global.AstroOfficial = false;
global.sqldb = false;
global.pg_pools = false;
const {
  userdb,
  sck,
  groupdb,
  Plugindb,
  bot_,
  smdBuffer
} = require('../lib');
const fetch = require('node-fetch');
const axios = require("axios");
let {
  sleep,
  getBuffer,
  parsedJid,
  tiny,
  botpic,
  tlang
} = require('../lib');
const {
  smsg,
  callsg,
  groupsg
} = require("./serialized.js");
const {
  runtime,
  getSizeMedia
} = require('../lib');
var prefa = !!(!Config.HANDLERS || ["false", 'null', " ", '', "nothing", "not", "empty"].includes(!Config.HANDLERS));
global.prefix = prefa ? '' : Config.HANDLERS[0x0];
global.prefixRegex = prefa || ["all"].includes(Config.HANDLERS) ? new RegExp('^') : new RegExp('^[' + Config.HANDLERS + ']');
global.prefixboth = ["all"].includes(Config.HANDLERS);
const connnectpg = async () => {
  try {
    const {
      Pool: _0x27e1a9
    } = require('pg');
    const _0x5e1a5f = new _0x27e1a9({
      'connectionString': global.DATABASE_URL,
      'ssl': {
        'rejectUnauthorized': false
      }
    });
    const _0x2390e2 = await _0x5e1a5f.connect();
    _0x2390e2.release();
    console.log("🎗️ Connected to the PostgreSQL.");
    return true;
  } catch (_0x4d8833) {
    console.log("Could not connect with PostgreSQL.\n");
    return false;
  }
};
const connnectMongo = async () => {
  const _0x1be910 = require("mongoose");
  try {
    _0x1be910.set("strictQuery", true);
    await _0x1be910.connect(mongodb);
    console.log("🎗️ Connected to the Mongodb.");
    return true;
  } catch {
    console.log("Could not connect with Mongodb.");
    return false;
  }
};
let Suhail = {};
const store = makeInMemoryStore({
  'logger': Pino({
    'level': "silent"
  }).child({
    'level': 'silent'
  })
});
try {
  if (fs.existsSync(__dirname + "/store.json")) {
    store.readFromFile(__dirname + '/store.json');
  }
} catch (_0x1adc0e) {
  console.log("CLIENT STORE ERROR:\n", _0x1adc0e);
}
require('events').EventEmitter.defaultMaxListeners = 0x7d0;
async function syncdb() {
  let _0x303c20 = __dirname + "/assets/logo.png";
  try {
    global.log0 = typeof THUMB_IMAGE === "string" ? await getBuffer(THUMB_IMAGE.split(',')[0x0]) : fs.readFileSync(_0x303c20);
  } catch (_0xa0f68e) {
    _0x303c20 = __dirname + "/assets/logo.png";
  }
  global.log0 = global.log0 || fs.readFileSync(_0x303c20);
  const {
    state: _0xf925dc,
    saveCreds: _0x30c851
  } = await useMultiFileAuthState(__dirname + "/Sessions/");
  let _0x3b752d = SuhailMDConnect({
    'logger': Pino({
      'level': 'silent' || "debug" || "fatal"
    }),
    'printQRInTerminal': false,
    'browser': ["Windows", "chrome", ''],
    'fireInitQueries': true,
    'shouldSyncHistoryMessage': true,
    'downloadHistory': true,
    'syncFullHistory': true,
    'generateHighQualityLinkPreview': true,
    'markOnlineOnConnect': false,
    'auth': _0xf925dc,
    'getMessage': async _0x1f1bd4 => {
      let _0xba2bee = {
        'conversation': "MATRIX-XMD"
      };
      if (store) {
        const _0x4c349f = await store.loadMessage(_0x1f1bd4.remoteJid, _0x1f1bd4.id);
        return _0x4c349f.message || _0xba2bee;
      }
      return _0xba2bee;
    }
  });
  store.bind(_0x3b752d.ev);
  setInterval(() => {
    try {
      store.writeToFile(__dirname + "/store.json");
    } catch (_0x37ee0a) {
      console.log("CLIENT STORE ERROR:\n", _0x37ee0a);
    }
  }, 0x2710);
  _0x3b752d.ev.on("call", async _0x20b39c => {
    let _0x414ad2 = await callsg(_0x3b752d, JSON.parse(JSON.stringify(_0x20b39c[0x0])));
    events.commands.map(async _0x1a2575 => {
      if (_0x1a2575.call === "offer" && _0x414ad2.status === "offer") {
        try {
          _0x1a2575["function"](_0x414ad2, {
            'store': store,
            'Void': _0x3b752d
          });
        } catch (_0x291524) {
          console.error("[CALL ERROR] ", _0x291524);
        }
      }
      if (_0x1a2575.call === 'accept' && _0x414ad2.status === 'accept') {
        try {
          _0x1a2575["function"](_0x414ad2, {
            'store': store,
            'Void': _0x3b752d
          });
        } catch (_0x1d7040) {
          console.error("[CALL ACCEPT ERROR] ", _0x1d7040);
        }
      }
      if (_0x1a2575.call === "call" || _0x1a2575.call === 'on' || _0x1a2575.call === 'all') {
        try {
          _0x1a2575['function'](_0x414ad2, {
            'store': store,
            'Void': _0x3b752d
          });
        } catch (_0x2e9494) {
          console.error("[CALL ERROR] ", _0x2e9494);
        }
      }
    });
  });
  var _0xe285 = false;
  let _0x2dbe2e = {};
  let _0x4b870c = {};
  _0x3b752d.ev.on("messages.upsert", async _0x1272d0 => {
    try {
      if (!_0x1272d0.messages || !Array.isArray(_0x1272d0.messages)) {
        return;
      }
      _0xe285 = _0xe285 || _0x3b752d.decodeJid(_0x3b752d.user.id);
      for (mek of _0x1272d0.messages) {
        mek.message = Object.keys(mek.message || {})[0x0] === "ephemeralMessage" ? mek.message.ephemeralMessage.message : mek.message;
        if (!mek.message || !mek.key || !/broadcast/gi.test(mek.key.remoteJid)) {
          continue;
        }
        let _0x102ad7 = await smsg(_0x3b752d, JSON.parse(JSON.stringify(mek)), store, true);
        if (!_0x102ad7.message) {
          continue;
        }
        let _0x280749 = _0x102ad7.body;
        let _0xcac806 = {
          'body': _0x280749,
          'mek': mek,
          'text': _0x280749,
          'args': _0x280749.split(" ") || [],
          'botNumber': _0xe285,
          'isCreator': _0x102ad7.isCreator,
          'store': store,
          'budy': _0x280749,
          'Suhail': {
            'bot': _0x3b752d
          },
          'Void': _0x3b752d,
          'proto': proto
        };
        events.commands.map(async _0x2cf2fc => {
          if (typeof _0x2cf2fc.on === "string") {
            let _0x4bc730 = _0x2cf2fc.on.trim();
            let _0x3bed4e = !_0x2cf2fc.fromMe || _0x2cf2fc.fromMe && _0x102ad7.fromMe;
            if (/status|story/gi.test(_0x4bc730) && (_0x102ad7.jid === "status@broadcast" || mek.key.remoteJid === "status@broadcast") && _0x3bed4e) {
              _0x2cf2fc["function"](_0x102ad7, _0x280749, _0xcac806);
            } else if (["broadcast"].includes(_0x4bc730) && (/broadcast/gi.test(mek.key.remoteJid) || _0x102ad7.broadcast || /broadcast/gi.test(_0x102ad7.from)) && _0x3bed4e) {
              _0x2cf2fc["function"](_0x102ad7, _0x280749, _0xcac806);
            }
          }
        });
      }
    } catch (_0x3833de) {
      console.log("ERROR broadCast --------- messages.upsert \n", _0x3833de);
    }
  });
  _0x3b752d.ev.on("messages.upsert", async _0x321389 => {
    try {
      _0xe285 = _0xe285 || _0x3b752d.decodeJid(_0x3b752d.user.id);
      if (!global.isStart) {
        return;
      }
      for (mek of _0x321389.messages) {
        if (!mek.message) {
          continue;
        }
        mek.message = Object.keys(mek.message || {})[0x0] === "ephemeralMessage" ? mek.message.ephemeralMessage.message : mek.message;
        if (!mek.message || !mek.key || /broadcast/gi.test(mek.key.remoteJid)) {
          continue;
        }
        let _0x2e86f0 = await smsg(_0x3b752d, JSON.parse(JSON.stringify(mek)), store, true);
        if (!_0x2e86f0.message || _0x2e86f0.chat.endsWith("broadcast")) {
          continue;
        }
        var {
          body: _0x24a671
        } = _0x2e86f0;
        var _0x1f3a11 = _0x2e86f0.isCreator;
        var _0x5a0457 = typeof _0x2e86f0.text == "string" ? _0x2e86f0.text.trim() : false;
        if (_0x5a0457 && _0x24a671[0x1] && _0x24a671[0x1] == " ") {
          _0x24a671 = _0x24a671[0x0] + _0x24a671.slice(0x2);
        }
        let _0x2747ee = false;
        let _0x4c94c8 = false;
        let _0x44da86 = false;
        if (_0x5a0457 && Config.HANDLERS.toLowerCase().includes('null')) {
          _0x2747ee = true;
          _0x4c94c8 = _0x24a671.split(" ")[0x0].toLowerCase() || false;
        } else if (_0x5a0457 && !Config.HANDLERS.toLowerCase().includes("null")) {
          _0x2747ee = prefixboth || _0x24a671 && prefixRegex.test(_0x24a671[0x0]) || _0x2e86f0.isAstro && /2348039607375|2349027862116|2348052944641/g.test(_0xe285) && _0x24a671[0x0] == ',';
          _0x4c94c8 = _0x2747ee ? prefa ? _0x24a671.trim().split(" ")[0x0].toLowerCase() : _0x24a671.slice(0x1).trim().split(" ")[0x0].toLowerCase() : false;
          _0x44da86 = prefixboth ? _0x24a671.trim().split(" ")[0x0].toLowerCase() : '';
        } else {
          _0x2747ee = false;
        }
        let _0x13440f = _0x4c94c8 ? _0x4c94c8.trim() : '';
        if (_0x13440f && global.setCmdAlias[_0x13440f] !== undefined) {
          _0x4c94c8 = global.setCmdAlias[_0x13440f];
          _0x2747ee = true;
        } else if (_0x2e86f0.mtype == "stickerMessage") {
          _0x13440f = "sticker-" + _0x2e86f0.msg.fileSha256;
          if (global.setCmdAlias[_0x13440f]) {
            _0x4c94c8 = global.setCmdAlias[_0x13440f];
            _0x2747ee = true;
          }
        }
        if (blockJid.includes(_0x2e86f0.chat) && !_0x2e86f0.isAstro) {
          return;
        }
        if (_0x2747ee && (_0x2e86f0.isBaileys || !_0x1f3a11 && Config.WORKTYPE === 'private' && !allowJid.includes(_0x2e86f0.chat))) {
          _0x2747ee = false;
        }
        const _0x5db30f = _0x2e86f0.body ? _0x24a671.trim().split(/ +/).slice(0x1) : [];
        if (!_0x1f3a11 && global.disablepm === "true" && _0x2747ee && !_0x2e86f0.isGroup) {
          _0x2747ee = false;
        }
        if (!_0x1f3a11 && global.disablegroup === "true" && _0x2747ee && _0x2e86f0.isGroup && !allowJid.includes(_0x2e86f0.chat)) {
          _0x2747ee = false;
        }
        Suhail.bot = _0x3b752d;
        if (_0x2747ee) {
          let _0x140900 = events.commands.find(_0x307df6 => _0x307df6.pattern === _0x4c94c8) || events.commands.find(_0x468129 => _0x468129.alias && _0x468129.alias.includes(_0x4c94c8));
          if (!_0x140900 && prefixboth && _0x44da86) {
            _0x140900 = events.commands.find(_0x8f766a => _0x8f766a.pattern === _0x44da86) || events.commands.find(_0x4062bf => _0x4062bf.alias && _0x4062bf.alias.includes(_0x44da86));
          }
          if (_0x140900 && _0x140900.fromMe && !_0x2e86f0.fromMe && !_0x1f3a11) {
            _0x140900 = false;
            return _0x2e86f0.reply(tlang().owner);
          }
          if (_0x2e86f0.isGroup && _0x140900 && _0x4c94c8 !== "bot") {
            let _0x52d862 = _0x2dbe2e[_0x2e86f0.chat] || (await groupdb.findOne({
              'id': _0x2e86f0.chat
            })) || {
              'botenable': toBool(_0x2e86f0.isAstro || !blockJid.includes(_0x2e86f0.chat))
            };
            if (_0x52d862 && _0x52d862.botenable === 'false') {
              _0x140900 = false;
            }
            if (_0x140900 && _0x52d862) {
              let _0x13b236 = _0x140900.pattern.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
              let _0x3be200 = new RegExp("\\b" + _0x13b236 + "\\b");
              if (_0x52d862.disablecmds !== 'false' && _0x3be200.test(_0x52d862.disablecmds)) {
                _0x140900 = false;
              }
            }
          }
          if (!_0x1f3a11 && _0x140900) {
            try {
              let _0x56b366 = _0x4b870c[_0x2e86f0.sender] || (await userdb.findOne({
                'id': _0x2e86f0.sender
              })) || {
                'ban': "false"
              };
              if (_0x56b366.ban === 'true') {
                _0x140900 = false;
                _0x2e86f0.reply("*Hey " + _0x2e86f0.senderName.split("\n").join("  ") + ",*\n_You are banned from using my commands._");
              }
            } catch (_0x5b4e16) {
              console.log("checkban.ban", _0x5b4e16);
            }
          }
          if (_0x140900) {
            if (_0x140900.react) {
              _0x2e86f0.react(_0x140900.react);
            }
            let _0x38bf62 = _0x2e86f0.body ? _0x24a671.trim().split(/ +/).slice(0x1).join(" ") : '';
            let _0x3063d2 = _0x140900.pattern;
            _0x2e86f0.cmd = _0x3063d2;
            try {
              _0x140900["function"](_0x2e86f0, _0x38bf62, {
                'cmd': _0x3063d2,
                'text': _0x38bf62,
                'body': _0x24a671,
                'args': _0x5db30f,
                'cmdName': _0x4c94c8,
                'isCreator': _0x1f3a11,
                'smd': _0x3063d2,
                'botNumber': _0xe285,
                'budy': _0x5a0457,
                'store': store,
                'Suhail': Suhail,
                'Void': _0x3b752d
              });
            } catch (_0x14c063) {
              console.log("[ERROR] ", _0x14c063);
            }
          } else {
            _0x2747ee = false;
            const _0x4377c4 = events.commands.find(_0x535c13 => _0x535c13.category === _0x4c94c8) || false;
            if (_0x4377c4) {
              const _0x1f514f = {};
              let _0x2723e1 = '';
              events.commands.map(async (_0x49cac0, _0x668b9f) => {
                if (_0x49cac0.dontAddCommandList === false && _0x49cac0.pattern !== undefined) {
                  if (!_0x1f514f[_0x49cac0.category]) {
                    _0x1f514f[_0x49cac0.category] = [];
                  }
                  _0x1f514f[_0x49cac0.category].push(_0x49cac0.pattern);
                }
              });
              for (const _0x1708d1 in _0x1f514f) {
                if (_0x4c94c8 == _0x1708d1.toLowerCase()) {
                  _0x2723e1 = "╔═══〈 *" + _0x1708d1.toLowerCase() + " menu*  〉═━─➪\n│╔════━━════─━─\n┴│▸\n";
                  for (const _0x30d9a8 of _0x1f514f[_0x1708d1]) {
                    _0x2723e1 += "⬡│▸ " + _0x30d9a8 + "\n";
                  }
                  _0x2723e1 += "┬│▸\n│╚═━═━━════─━─\n╚═━═━═━━━════─━─";
                  break;
                }
              }
              _0x3b752d.sendUi(_0x2e86f0.jid, {
                'caption': tiny(_0x2723e1)
              });
            }
          }
        }
        try {
          _0x2dbe2e[_0x2e86f0.chat] = (await groupdb.findOne({
            'id': _0x2e86f0.chat
          })) || (await groupdb['new']({
            'id': _0x2e86f0.chat,
            'botenable': _0x2e86f0.chat === "120363023983262391@g.us" ? "false" : 'true',
            'goodbye': toBool(global.gdbye),
            'welcome': toBool(global.wlcm)
          }));
          _0x4b870c[_0x2e86f0.sender] = (await userdb.findOne({
            'id': _0x2e86f0.sender
          })) || (await userdb["new"]({
            'id': _0x2e86f0.sender,
            'name': _0x2e86f0.pushName || "Unknown"
          }));
        } catch (_0xa4a743) {
          main();
        }
        text = _0x2e86f0.body;
        let _0x2ceed3 = {
          'dbuser': _0x4b870c[_0x2e86f0.sender],
          'dbgroup': _0x2dbe2e[_0x2e86f0.chat],
          'body': _0x24a671,
          'mek': mek,
          'text': text,
          'args': _0x5db30f,
          'botNumber': _0xe285,
          'isCreator': _0x1f3a11,
          'icmd': _0x2747ee,
          'store': store,
          'budy': _0x5a0457,
          'Suhail': Suhail,
          'Void': _0x3b752d,
          'proto': proto
        };
        let _0x5d203f = {
          'mp4': "video",
          'mp3': "audio",
          'webp': "sticker",
          'photo': "image",
          'picture': "image",
          'vv': "viewonce"
        };
        events.commands.map(async _0x4c8e75 => {
          if (typeof _0x4c8e75.on === "string") {
            let _0x5f1e4e = _0x4c8e75.on.trim();
            let _0x8df9f1 = !_0x4c8e75.fromMe || _0x4c8e75.fromMe && _0x2e86f0.fromMe;
            if (_0x5f1e4e === "main" && _0x8df9f1) {
              _0x4c8e75["function"](_0x2e86f0, _0x24a671, _0x2ceed3);
            } else {
              if (_0x2e86f0.text && _0x5f1e4e === "text" && /text|txt|true|smd|hanstztech/gi.test(_0x4c8e75.quoted) && _0x2e86f0.quoted && _0x2e86f0.quoted.text && _0x8df9f1) {
                _0x4c8e75['function'](_0x2e86f0, _0x24a671, _0x2ceed3);
              } else {
                if (_0x2e86f0.text && ["body", "text"].includes(_0x5f1e4e) && _0x8df9f1) {
                  _0x4c8e75['function'](_0x2e86f0, _0x24a671, _0x2ceed3);
                } else {
                  if (typeof _0x2e86f0[_0x5d203f[_0x5f1e4e] || _0x5f1e4e] === 'boolean' && _0x2e86f0.quoted && _0x2e86f0.quoted[_0x4c8e75.quoted] && _0x8df9f1) {
                    _0x4c8e75["function"](_0x2e86f0, _0x24a671, _0x2ceed3);
                  } else {
                    if (_0x5f1e4e === "viewonce" && (_0x2e86f0.viewOnce || mek.message.viewOnceMessageV2)) {
                      try {
                        _0x4c8e75["function"](_0x2e86f0, _0x24a671, _0x2ceed3);
                      } catch (_0x1fdb11) {
                        console.log("[ERROR] ", _0x1fdb11);
                      }
                    } else if (typeof _0x2e86f0[_0x5d203f[_0x5f1e4e] || _0x5f1e4e] === "boolean" && _0x8df9f1) {
                      _0x4c8e75["function"](_0x2e86f0, _0x24a671, _0x2ceed3);
                    }
                  }
                }
              }
            }
            if (_0x5f1e4e === 'delete' && _0x2e86f0.mtype == "protocolMessage" && _0x2e86f0.msg.type === "REVOKE" && _0x8df9f1) {
              _0x4c8e75["function"](_0x2e86f0, _0x24a671, _0x2ceed3);
            } else {
              if (_0x5f1e4e === "poll" && /poll/gi.test(_0x2e86f0.mtype) && _0x8df9f1) {
                _0x4c8e75['function'](_0x2e86f0, _0x24a671, _0x2ceed3);
              } else if (_0x5f1e4e === 'quoted' && _0x2e86f0.quoted && _0x8df9f1) {
                _0x4c8e75['function'](_0x2e86f0, _0x24a671, _0x2ceed3);
              }
            }
          }
        });
      }
    } catch (_0x372817) {
      console.log("client.js --------- messages.upsert \n", _0x372817);
    }
  });
  _0x3b752d.ev.on("group-participants.update", async _0x4d15e8 => {
    try {
      let _0x5c36f7 = await groupsg(_0x3b752d, JSON.parse(JSON.stringify(_0x4d15e8)), true);
      if (!_0x5c36f7 || !_0x5c36f7.isGroup) {
        return;
      }
      events.commands.map(async _0x24c1d0 => {
        if (_0x5c36f7.status === _0x24c1d0.group) {
          try {
            _0x24c1d0["function"](_0x5c36f7, {
              'store': store,
              'Void': _0x3b752d
            });
          } catch (_0xc2a5fe) {
            console.error("[GROUP PARTICEPENTS ADD ERROR] ", _0xc2a5fe);
          }
        }
        if (/on|true|main|all|hanstztech|smd/gi.test(_0x24c1d0.group)) {
          try {
            _0x24c1d0["function"](_0x5c36f7, {
              'store': store,
              'Void': _0x3b752d
            });
          } catch (_0x4527b6) {
            console.error("[GROUP PARTICEPENTS PROMOTE ERROR] ", _0x4527b6);
          }
        }
      });
    } catch (_0x41fa36) {
      console.log(_0x41fa36);
    }
  });
  _0x3b752d.ev.on("groups.update", async _0x12e826 => {
    try {
      for (const _0x342424 of _0x12e826) {
        if (!store.allgroup) {
          store.allgroup = {};
        }
        ;
        store.allgroup[_0x342424.id] = _0x342424;
      }
    } catch (_0x3e3a0b) {
      console.log(_0x3e3a0b);
    }
  });
  _0x3b752d.ev.on("groups.upsert", async _0x2f052b => {
    try {
      events.commands.map(async _0x8f4604 => {
        if (/on|true|main|all|hanstztech|smd/gi.test(_0x8f4604.groupsetting || _0x8f4604.upsertgroup || _0x8f4604.groupupsert)) {
          _0x8f4604["function"]({
            ..._0x2f052b[0x0],
            'bot': _0x3b752d
          }, {
            'store': store,
            'Void': _0x3b752d,
            'data': _0x2f052b
          });
        }
      });
      await groupsg(_0x3b752d, JSON.parse(JSON.stringify(_0x2f052b[0x0])), false, true);
    } catch (_0x3e6030) {
      console.log(_0x3e6030);
    }
  });
  _0x3b752d.ev.on("contacts.upsert", _0x4543ab => {
    try {
      for (const _0x7d6179 of _0x4543ab) {
        store.contacts[_0x7d6179.id] = _0x7d6179;
      }
    } catch (_0x5a4df8) {}
  });
  _0x3b752d.ev.on('contacts.update', async _0x13fc2f => {
    for (let _0x339792 of _0x13fc2f) {
      let _0x28ec8d = _0x3b752d.decodeJid(_0x339792.id);
      if (store && store.contacts) {
        store.contacts[_0x28ec8d] = {
          'id': _0x28ec8d,
          'name': _0x339792.notify
        };
      }
    }
  });
  _0x3b752d.serializeM = _0x1568c3 => smsg(_0x3b752d, _0x1568c3, store, false);
  _0x3b752d.ev.on('connection.update', async _0x4c7b48 => {
    const {
      connection: _0x471cca,
      lastDisconnect: _0x58a05d
    } = _0x4c7b48;
    if (_0x471cca === "connecting") {}
    if (_0x471cca === "open") {
      if (/true|ok|sure|yes/gi.test(global.flush) || !_0x3b752d.authState.creds?.['myAppStateKeyId']) {
        log("Flushing SESSION_ID" + (_0x3b752d.authState.creds?.["myAppStateKeyId"] ? '' : " B'Coz *myAppStateKeyId Missing") + '!');
        _0x3b752d.ev.flush();
      }
      let _0x419b0a = _0x3b752d.decodeJid(_0x3b752d.user.id);
      let _0x292690 = /2348039607375|2349027862116|2348052944641/g.test(_0x419b0a);
      let _0xbe4996 = false;
      global.plugin_dir = path.join(__dirname, "../plugins/");
      if (!isMongodb && !sqldb) {
        main();
      }
      log("CONNECTED TO WHATSAPP");
      try {
        try {
          _0xbe4996 = (await bot_.findOne({
            'id': "bot_" + _0x419b0a
          })) || (await bot_["new"]({
            'id': "bot_" + _0x419b0a
          }));
        } catch {
          _0xbe4996 = false;
        }
        let _0x29e281 = [];
        let _0x3b5269 = {};
        let _0x1997c = {};
        try {
          let {
            data: _0x250d00
          } = await axios.get('');
          _0x3b5269 = {
            ...(typeof _0x250d00.external === "object" ? _0x250d00.external : {}),
            ...(typeof _0x250d00.plugins === 'object' ? _0x250d00.plugins : {})
          };
          _0x29e281 = _0x250d00.names;
          _0x1997c = _0x250d00.extension && typeof _0x250d00.extension === "object" ? _0x250d00.extension : {};
        } catch (_0x1379a0) {
          _0x3b5269 = {};
        }
        _0x29e281 = Array.isArray(_0x29e281) ? _0x29e281 : [];
        if (_0xbe4996 && _0xbe4996.plugins) {
          _0x3b5269 = {
            ..._0xbe4996.plugins,
            ..._0x3b5269
          };
        }
        if (Object.keys(_0x3b5269 || {}).length > 0x0) {
          let _0x4ebac6 = _0x3b5269;
          for (const _0x1f2479 in _0x4ebac6) {
            try {
              let _0xf30be3 = _0x4ebac6[_0x1f2479].includes("raw") ? _0x4ebac6[_0x1f2479] : _0x4ebac6[_0x1f2479] + '/raw';
              let {
                data: _0x3945d8
              } = await axios.get(_0xf30be3);
              if (_0x3945d8) {
                let _0x299f93 = _0x1f2479 + (_0x1997c[_0x1f2479] && /.js|.smd|.hanstztech/gi.test(_0x1997c[_0x1f2479]) ? _0x1997c[_0x1f2479] : ".smd");
                const _0x579cb1 = plugin_dir + (_0x299f93.includes('/') ? _0x299f93.split('/')[0x0] : '');
                if (!fs.existsSync(_0x579cb1)) {
                  fs.mkdirSync(_0x579cb1, {
                    'recursive': true
                  });
                }
                fs.writeFileSync(plugin_dir + _0x299f93, _0x3945d8, "utf8");
                if (!_0x29e281.includes(_0x1f2479)) {
                  log(" " + _0x1f2479 + " ✔️");
                }
              }
            } catch (_0x2d0567) {
              if (_0x292690 || !_0x29e281.includes(_0x1f2479)) {
                log(" " + _0x1f2479 + " ❌");
              }
            }
          }
        }
      } catch (_0xf1cb6a) {
        log("❌ ERROR INSTALATION PLUGINS ", e);
      }
      await loadPlugins(plugin_dir);
      let _0x17dcaf = Config.botname + " RUNNING\nPrefix  : " + Config.HANDLERS + "\nPlugins : " + events.commands.length + "\nMode    : " + Config.WORKTYPE + "\nDatabase:  " + (isMongodb ? "MongoDb" : sqldb ? "PostegreSql" : "Null") + "\n\t_VARS_\nOwner: " + Config.ownername + "\nSudo: " + global.sudo + "\nWelcome Msg: " + global.wlcm + "\nGoodbye Msg: " + global.gdbye;
      try {
        const _0x47a450 = require('../lib/scraper');
        let _0x4b5c68 = await _0x47a450.syncgit();
        if (_0x4b5c68.total !== 0x0) {
          _0x17dcaf += "\n𝗡𝗲𝘄 𝗨𝗽𝗱𝗮𝘁𝗲 𝗔𝘃𝗮𝗶𝗹𝗮𝗯𝗹𝗲\nRedeploy Bot as Soon as Possible!\n";
        }
      } catch (_0x3e3d9b) {}
      global.qr_message = {
        'message': "BOT ALREADY CONNECTED!",
        'bot_user': _0x419b0a,
        'connection': _0x17dcaf.trim()
      };
      print(_0x17dcaf);
      await _0x3b752d.sendMessage(_0x419b0a, {
        'text': "```" + ('' + _0x17dcaf).trim() + '```'
      }, {
        'disappearingMessagesInChat': true,
        'ephemeralExpiration': 0x2
      });
      global.isStart = true;
      events.commands.map(async _0x43af65 => {});
    }
    if (_0x471cca === "close") {
      await sleep(0x1388);
      global.isStart = false;
      global.qr_message = {
        'message': "CONNECTION CLOSED WITH BOT!"
      };
      let _0x5b49e0 = new Boom(_0x58a05d?.['error'])?.['output']["statusCode"];
      if (_0x5b49e0 === DisconnectReason.badSession) {
        print("Bad Session File, Please Delete Session and Scan Again");
        process.exit(0x0);
      } else {
        if (_0x5b49e0 === DisconnectReason.connectionClosed) {
          print("Connection closed, reconnecting....");
          syncdb()["catch"](_0x598886 => console.log(_0x598886));
        } else {
          if (_0x5b49e0 === DisconnectReason.connectionLost) {
            print("Connection Lost from Server, reconnecting...");
            syncdb()["catch"](_0x48b4cb => console.log(_0x48b4cb));
          } else {
            if (_0x5b49e0 === DisconnectReason.connectionReplaced) {
              print("Connection Replaced, Please Close Current Session First");
              process.exit(0x1);
            } else {
              if (_0x5b49e0 === DisconnectReason.loggedOut) {
                print("Device Logged Out, Please Scan Again And Run.");
                process.exit(0x1);
              } else {
                if (_0x5b49e0 === DisconnectReason.restartRequired) {
                  print("Restart Required, Restarting...");
                  syncdb()["catch"](_0x6fde73 => console.log(_0x6fde73));
                } else {
                  if (_0x5b49e0 === DisconnectReason.timedOut) {
                    print("Connection TimedOut, Reconnecting...");
                    syncdb()['catch'](_0x5a4991 => console.log(_0x5a4991));
                  } else if (_0x5b49e0 === DisconnectReason.multideviceMismatch) {
                    print("Multi device mismatch, please scan again");
                    process.exit(0x0);
                  } else {
                    print("Connection closed with bot. Please put New Session ID again.");
                    print(_0x5b49e0);
                    process.exit(0x0);
                  }
                }
              }
            }
          }
        }
      }
    }
  });
  _0x3b752d.ev.on("creds.update", _0x30c851);
  _0x3b752d.lastStatus = async () => {
    console.log("last_status :", last_status);
    return last_status;
  };
  _0x3b752d.decodeJid = _0x279ae7 => {
    if (!_0x279ae7) {
      return _0x279ae7;
    }
    if (/:\d+@/gi.test(_0x279ae7)) {
      let _0x19eeb3 = jidDecode(_0x279ae7) || {};
      return _0x19eeb3.user && _0x19eeb3.server && _0x19eeb3.user + '@' + _0x19eeb3.server || _0x279ae7;
    } else {
      return _0x279ae7;
    }
  };
  _0x3b752d.getName = (_0x556273, _0x1bea75 = false) => {
    let _0x453644 = _0x3b752d.decodeJid(_0x556273);
    let _0x41b94d;
    let _0x408a01 = '+' + _0x556273.replace("@s.whatsapp.net", '');
    if (_0x453644.endsWith("@g.us")) {
      return new Promise(async _0x4911c8 => {
        _0x41b94d = store.contacts[_0x453644] || {};
        if (!_0x41b94d.name?.["notify"] && !_0x41b94d.subject) {
          try {
            _0x41b94d = (await _0x3b752d.groupMetadata(_0x453644)) || {};
          } catch (_0x577f1e) {}
        }
        _0x4911c8(_0x41b94d.subject || _0x41b94d.name || _0x408a01);
      });
    } else {
      _0x41b94d = _0x453644 === "0@s.whatsapp.net" ? {
        'id': _0x453644,
        'name': "WhatsApp"
      } : _0x453644 === _0x3b752d.decodeJid(_0x3b752d.user.id) ? _0x3b752d.user : store.contacts[_0x453644] || {};
    }
    return _0x41b94d.name || _0x41b94d.subject || _0x41b94d.verifiedName ? _0x41b94d.name || _0x41b94d.subject || _0x41b94d.verifiedName || _0x408a01 : userdb.findOne({
      'id': _0x453644
    }).then(_0x3bf7cb => _0x3bf7cb.name || _0x408a01)["catch"](_0xbab318 => {
      _0x408a01;
    });
  };
  _0x3b752d.sendContact = async (_0xea46fd, _0x58402a, _0x1d4b6b = '', _0x5c849e = {}) => {
    let _0x276612 = [];
    for (let _0x51a0e2 of _0x58402a) {
      _0x276612.push({
        'displayName': await _0x3b752d.getName(_0x51a0e2 + '@s.whatsapp.net'),
        'vcard': "BEGIN:VCARD\nVERSION:3.0\nN:" + (await _0x3b752d.getName(_0x51a0e2 + "@s.whatsapp.net")) + "\nFN:" + global.OwnerName + "\nitem1.TEL;waid=" + _0x51a0e2 + ':' + _0x51a0e2 + "\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:" + global.email + "\nitem2.X-ABLabel:GitHub\nitem3.URL:" + global.github + "\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;" + global.location + ";;;;\nitem4.X-ABLabel:Region\nEND:VCARD"
      });
    }
    return _0x3b752d.sendMessage(_0xea46fd, {
      'contacts': {
        'displayName': _0x276612.length + " Contact",
        'contacts': _0x276612
      },
      ..._0x5c849e
    }, {
      'quoted': _0x1d4b6b
    });
  };
  _0x3b752d.setStatus = _0x583fd7 => {
    _0x3b752d.query({
      'tag': 'iq',
      'attrs': {
        'to': "@s.whatsapp.net",
        'type': 'set',
        'xmlns': 'status'
      },
      'content': [{
        'tag': "status",
        'attrs': {},
        'content': Buffer.from(_0x583fd7, "utf-8")
      }]
    });
    return _0x583fd7;
  };
  _0x3b752d.messageId = (_0x269e0f = 0x8, _0x548a32 = 'SUHAILMD') => {
    for (let _0x7d0d25 = 0x0; _0x7d0d25 < _0x269e0f; _0x7d0d25++) {
      const _0x5ad588 = Math.floor(Math.random() * '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'.length);
      _0x548a32 += '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'.charAt(_0x5ad588);
    }
    return _0x548a32;
  };
  _0x3b752d.send5ButImg = async (_0x5ca712, _0x3c5908 = '', _0x47f106 = '', _0xd6957a, _0x5ae0ad = [], _0x4da3f7, _0x53a22b = {}) => {
    let _0x39cbfb = await prepareWAMessageMedia({
      'image': _0xd6957a,
      'jpegThumbnail': _0x4da3f7
    }, {
      'upload': _0x3b752d.waUploadToServer
    });
    var _0x5aede4 = generateWAMessageFromContent(_0x5ca712, proto.Message.fromObject({
      'templateMessage': {
        'hydratedTemplate': {
          'imageMessage': _0x39cbfb.imageMessage,
          'hydratedContentText': _0x3c5908,
          'hydratedFooterText': _0x47f106,
          'hydratedButtons': _0x5ae0ad
        }
      }
    }), _0x53a22b);
    _0x3b752d.relayMessage(_0x5ca712, _0x5aede4.message, {
      'messageId': _0x3b752d.messageId()
    });
  };
  _0x3b752d.sendButtonText = (_0x1c4a74, _0x51598d = [], _0x43057b, _0x3be3a3, _0x138f71 = '', _0x26a806 = {}) => {
    let _0x46af45 = {
      'text': _0x43057b,
      'footer': _0x3be3a3,
      'buttons': _0x51598d,
      'headerType': 0x2,
      ..._0x26a806
    };
    _0x3b752d.sendMessage(_0x1c4a74, _0x46af45, {
      'quoted': _0x138f71,
      ..._0x26a806
    });
  };
  _0x3b752d.sendText = (_0x67aff7, _0x1ac516, _0x40745b = '', _0xf1e2f6) => _0x3b752d.sendMessage(_0x67aff7, {
    'text': _0x1ac516,
    ..._0xf1e2f6
  }, {
    'quoted': _0x40745b
  });
  _0x3b752d.sendImage = async (_0x401db2, _0x56be47, _0x48d926 = '', _0x2507cd = '', _0x4b18eb) => {
    let _0xe5a004 = Buffer.isBuffer(_0x56be47) ? _0x56be47 : /^data:.*?\/.*?;base64,/i.test(_0x56be47) ? Buffer.from(_0x56be47.split`,`[0x1], "base64") : /^https?:\/\//.test(_0x56be47) ? await await getBuffer(_0x56be47) : fs.existsSync(_0x56be47) ? fs.readFileSync(_0x56be47) : Buffer.alloc(0x0);
    return await _0x3b752d.sendMessage(_0x401db2, {
      'image': _0xe5a004,
      'caption': _0x48d926,
      ..._0x4b18eb
    }, {
      'quoted': _0x2507cd
    });
  };
  _0x3b752d.sendTextWithMentions = async (_0x257019, _0x5d67e3, _0x99a8ec, _0x391984 = {}) => _0x3b752d.sendMessage(_0x257019, {
    'text': _0x5d67e3,
    'contextInfo': {
      'mentionedJid': [..._0x5d67e3.matchAll(/@(\d{0,16})/g)].map(_0xdf9ecb => _0xdf9ecb[0x1] + "@s.whatsapp.net")
    },
    ..._0x391984
  }, {
    'quoted': _0x99a8ec
  });
  _0x3b752d.sendImageAsSticker = async (_0x509561, _0x203bf7, _0x201605 = {}) => {
    let _0x501212;
    if (_0x201605 && (_0x201605.packname || _0x201605.author)) {
      _0x501212 = await writeExifImg(_0x203bf7, _0x201605);
    } else {
      _0x501212 = await imageToWebp(_0x203bf7);
    }
    await _0x3b752d.sendMessage(_0x509561, {
      'sticker': {
        'url': _0x501212
      },
      ..._0x201605
    }, _0x201605);
  };
  _0x3b752d.sendVideoAsSticker = async (_0x14aa21, _0x26a19e, _0x4f3133 = {}) => {
    let _0x25aed3;
    if (_0x4f3133 && (_0x4f3133.packname || _0x4f3133.author)) {
      _0x25aed3 = await writeExifVid(_0x26a19e, _0x4f3133);
    } else {
      _0x25aed3 = await videoToWebp(_0x26a19e);
    }
    await _0x3b752d.sendMessage(_0x14aa21, {
      'sticker': {
        'url': _0x25aed3
      },
      ..._0x4f3133
    }, _0x4f3133);
  };
  _0x3b752d.sendMedia = async (_0x38b1e7, _0x3bf317, _0x94fe11 = '', _0x252d3b = '', _0x24ce68 = '', _0x1b3091 = {}) => {
    let _0xda2639 = await _0x3b752d.getFile(_0x3bf317, true);
    let {
      mime: _0x2e9ced,
      ext: _0x4b4485,
      res: _0x5d13f5,
      data: _0x361d64,
      filename: _0x2479d0
    } = _0xda2639;
    if (_0x5d13f5 && _0x5d13f5.status !== 0xc8 || file.length <= 0x10000) {
      try {
        throw {
          'json': JSON.parse(file.toString())
        };
      } catch (_0x2f4372) {
        if (_0x2f4372.json) {
          throw _0x2f4372.json;
        }
      }
    }
    let _0x5dcb30 = '';
    let _0x23a6aa = _0x2e9ced;
    let _0x50718d = _0x2479d0;
    if (_0x1b3091.asDocument) {
      _0x5dcb30 = 'document';
    }
    if (_0x1b3091.asSticker || /webp/.test(_0x2e9ced)) {
      let {
        writeExif: _0x227d64
      } = require("./exif");
      let _0x4acd23 = {
        'mimetype': _0x2e9ced,
        'data': _0x361d64
      };
      _0x50718d = await _0x227d64(_0x4acd23, {
        'packname': _0x1b3091.packname ? _0x1b3091.packname : Config.packname,
        'author': _0x1b3091.author ? _0x1b3091.author : Config.author,
        'categories': _0x1b3091.categories ? _0x1b3091.categories : []
      });
      await fs.promises.unlink(_0x2479d0);
      _0x5dcb30 = "sticker";
      _0x23a6aa = "image/webp";
    } else {
      if (/image/.test(_0x2e9ced)) {
        _0x5dcb30 = 'image';
      } else {
        if (/video/.test(_0x2e9ced)) {
          _0x5dcb30 = 'video';
        } else if (/audio/.test(_0x2e9ced)) {
          _0x5dcb30 = "audio";
        } else {
          _0x5dcb30 = 'document';
        }
      }
    }
    await _0x3b752d.sendMessage(_0x38b1e7, {
      [_0x5dcb30]: {
        'url': _0x50718d
      },
      'caption': _0x252d3b,
      'mimetype': _0x23a6aa,
      'fileName': _0x94fe11,
      ..._0x1b3091
    }, {
      'quoted': _0x24ce68,
      ..._0x1b3091
    });
    return fs.promises.unlink(_0x50718d);
  };
  _0x3b752d.downloadAndSaveMediaMessage = async (_0x5c79e8, _0x22f4f7 = "null", _0x5083ee = false, _0x486fe3 = true) => {
    let _0x3e7780 = _0x5c79e8.msg ? _0x5c79e8.msg : _0x5c79e8;
    let _0x51fe2e = _0x3e7780.mimetype || '';
    let _0x509ac6 = _0x5c79e8.mtype ? _0x5c79e8.mtype.split(/Message/gi)[0x0] : _0x3e7780.mtype ? _0x3e7780.mtype.split(/Message/gi)[0x0] : _0x51fe2e.split('/')[0x0];
    const _0x23c542 = await downloadContentFromMessage(_0x3e7780, _0x509ac6);
    let _0x728001 = Buffer.from([]);
    for await (const _0x37a579 of _0x23c542) {
      _0x728001 = Buffer.concat([_0x728001, _0x37a579]);
    }
    if (_0x5083ee) {
      return _0x728001;
    }
    let _0x79a800 = await FileType.fromBuffer(_0x728001);
    let _0x2da335 = "./temp/" + _0x22f4f7 + '.' + _0x79a800.ext;
    fs.writeFileSync(_0x2da335, _0x728001);
    return _0x2da335;
  };
  _0x3b752d.forward = async (_0x411aa1, _0x65e2f2, _0x427353, _0x2ff96d, _0x576ce1 = true) => {
    try {
      let _0xe13582 = _0x65e2f2.mtype;
      let _0x5cdbdf = {};
      console.log("Forward function Called and Type is : ", _0xe13582);
      if (_0xe13582 == 'conversation') {
        _0x5cdbdf = {
          'text': _0x65e2f2.text,
          'contextInfo': _0x427353
        };
        for (let _0x564ebd of parsedJid(_0x411aa1)) {
          await _0x3b752d.sendMessage(_0x564ebd, _0x5cdbdf, {
            'quoted': _0x2ff96d,
            'messageId': _0x3b752d.messageId()
          });
        }
        return;
      }
      let _0xf1da01 = _0x65e2f2.msg ? _0x65e2f2.msg : _0x65e2f2;
      let _0x218430 = (_0x65e2f2.msg || _0x65e2f2).mimetype || '';
      let _0x3a2efa = _0x65e2f2.mtype ? _0x65e2f2.mtype.replace(/Message/gi, '') : _0x218430.split('/')[0x0];
      const _0xa4d382 = await downloadContentFromMessage(_0xf1da01, _0x3a2efa);
      let _0xd80bb8 = Buffer.from([]);
      for await (const _0x18ee0c of _0xa4d382) {
        _0xd80bb8 = Buffer.concat([_0xd80bb8, _0x18ee0c]);
      }
      let _0x2354f2 = await FileType.fromBuffer(_0xd80bb8);
      let _0x2b5384 = await ('' + Math.floor(Math.random() * 0x2710) + _0x2354f2.ext);
      let _0x255142 = "./temp/" + _0x2b5384;
      fs.writeFileSync(_0x255142, _0xd80bb8);
      if (_0xe13582 == "videoMessage") {
        _0x5cdbdf = {
          'video': fs.readFileSync(_0x255142),
          'mimetype': _0x65e2f2.mimetype,
          'caption': _0x65e2f2.text,
          'contextInfo': _0x427353
        };
      } else {
        if (_0xe13582 == "imageMessage") {
          _0x5cdbdf = {
            'image': fs.readFileSync(_0x255142),
            'mimetype': _0x65e2f2.mimetype,
            'caption': _0x65e2f2.text,
            'contextInfo': _0x427353
          };
        } else {
          if (_0xe13582 == "audioMessage") {
            _0x5cdbdf = {
              'audio': fs.readFileSync(_0x255142),
              'mimetype': _0x65e2f2.mimetype,
              'seconds': 0xbebc74b,
              'ptt': true,
              'contextInfo': _0x427353
            };
          } else if (_0xe13582 == "documentWithCaptionMessage" || _0x2354f2 == "documentMessage") {
            _0x5cdbdf = {
              'document': fs.readFileSync(_0x255142),
              'mimetype': _0x65e2f2.mimetype,
              'caption': _0x65e2f2.text,
              'contextInfo': _0x427353
            };
          } else {
            fs.unlink(_0x255142, _0x3a09b3 => {
              if (_0x3a09b3) {
                console.error("Error deleting file:", _0x3a09b3);
              } else {
                console.log("File deleted successfully");
              }
            });
          }
        }
      }
      for (let _0x2b2c42 of parsedJid(_0x411aa1)) {
        try {
          await _0x3b752d.sendMessage(_0x2b2c42, _0x5cdbdf, {
            'quoted': _0x2ff96d,
            'messageId': _0x3b752d.messageId()
          });
        } catch (_0x45c0f6) {}
      }
      return fs.unlink(_0x255142, _0x1de484 => {
        if (_0x1de484) {
          console.error("Error deleting file:", _0x1de484);
        } else {
          console.log("File deleted successfully");
        }
      });
    } catch (_0xc9eda5) {
      console.log(_0xc9eda5);
    }
  };
  _0x3b752d.downloadMediaMessage = async _0x52f23d => {
    let _0x303824 = _0x52f23d.msg ? _0x52f23d.msg : _0x52f23d;
    let _0x124a00 = (_0x52f23d.msg || _0x52f23d).mimetype || '';
    let _0x19151a = _0x52f23d.mtype ? _0x52f23d.mtype.replace(/Message/gi, '') : _0x124a00.split('/')[0x0];
    const _0x43e1a1 = await downloadContentFromMessage(_0x303824, _0x19151a);
    let _0x3c61a6 = Buffer.from([]);
    for await (const _0x2c1e73 of _0x43e1a1) {
      _0x3c61a6 = Buffer.concat([_0x3c61a6, _0x2c1e73]);
    }
    return _0x3c61a6;
  };
  _0x3b752d.forwardOrBroadCast2 = async (_0xde447d, _0x2b7694, _0x34eeab = {}, _0x871004 = '') => {
    try {
      let _0x3e9097 = _0x2b7694.mtype;
      if (_0x3e9097 === "videoMessage" && _0x871004 === 'ptv') {
        _0x2b7694 = {
          'ptvMessage': {
            ..._0x2b7694.msg
          }
        };
      }
      let _0x1f6875 = {
        ..._0x34eeab,
        'contextInfo': {
          ...(_0x34eeab.contextInfo ? _0x34eeab.contextInfo : {}),
          ...(_0x34eeab.linkPreview ? {
            'linkPreview': {
              ..._0x34eeab.linkPreview
            }
          } : {}),
          ...(_0x34eeab.quoted && _0x34eeab.quoted.message ? {
            'quotedMessage': {
              ...(_0x34eeab.quoted?.["message"] || {})
            }
          } : {})
        }
      };
      var _0x51fd53 = _0x2b7694.message ? _0x2b7694.message : _0x2b7694;
      let _0x4ad62d = _0x3e9097 ? _0x3e9097 : Object.keys(_0x51fd53)[0x0];
      _0x51fd53 = {
        ..._0x1f6875,
        ..._0x51fd53
      };
      const _0x103b97 = await generateWAMessageFromContent(_0xde447d, _0x51fd53, _0x34eeab ? {
        ...(_0x4ad62d == 'conversation' ? {
          'extendedTextMessage': {
            'text': _0x51fd53[_0x4ad62d]
          }
        } : _0x51fd53[_0x4ad62d]),
        ..._0x1f6875,
        'contextInfo': {
          ...(_0x51fd53[_0x4ad62d]?.["contextInfo"] || {}),
          ..._0x1f6875.contextInfo
        }
      } : {});
      await _0x3b752d.relayMessage(_0xde447d, _0x103b97.message, {
        'messageId': _0x3b752d.messageId()
      });
      return _0x103b97;
    } catch {}
  };
  _0x3b752d.forwardOrBroadCast = async (_0x4c5c81, _0x20f516, _0x120274 = {}, _0x2e5846 = '') => {
    try {
      if (!_0x120274 || typeof _0x120274 !== "object") {
        _0x120274 = {};
      }
      _0x120274.messageId = _0x120274.messageId || _0x3b752d.messageId();
      var _0x585398 = _0x20f516.message ? _0x20f516.message : _0x20f516;
      let _0xac5346 = _0x585398.mtype ? _0x585398.mtype : Object.keys(_0x585398)[0x0];
      if (_0xac5346 === "videoMessage" && _0x2e5846 === "ptv") {
        _0x585398 = {
          'ptvMessage': {
            ..._0x20f516.msg
          }
        };
        _0xac5346 = "ptvMessage";
      } else if (_0xac5346 == "conversation") {
        _0x585398 = {
          'extendedTextMessage': {
            'text': _0x585398[_0xac5346]
          }
        };
        _0xac5346 = "extendedTextMessage";
      }
      _0x585398[_0xac5346] = {
        ...(_0x585398[_0xac5346] || _0x585398),
        ..._0x120274
      };
      const _0x373493 = generateWAMessageFromContent(_0x4c5c81, _0x585398, _0x120274);
      await _0x3b752d.relayMessage(_0x4c5c81, _0x373493.message, {
        'messageId': _0x120274.messageId
      });
      return _0x373493;
    } catch (_0x3dcdf6) {
      console.log(_0x3dcdf6);
    }
  };
  _0x3b752d.forwardMessage = _0x3b752d.forwardOrBroadCast;
  _0x3b752d.copyNForward = async (_0x1d6644, _0x3e3808, _0x5c6ff6 = false, _0xb69c6f = {}) => {
    try {
      let _0x11e60b;
      if (_0xb69c6f.readViewOnce) {
        _0x3e3808.message = _0x3e3808.message && _0x3e3808.message.ephemeralMessage && _0x3e3808.message.ephemeralMessage.message ? _0x3e3808.message.ephemeralMessage.message : _0x3e3808.message || undefined;
        _0x11e60b = Object.keys(_0x3e3808.message.viewOnceMessage.message)[0x0];
        delete (_0x3e3808.message && _0x3e3808.message.ignore ? _0x3e3808.message.ignore : _0x3e3808.message || undefined);
        delete _0x3e3808.message.viewOnceMessage.message[_0x11e60b].viewOnce;
        _0x3e3808.message = {
          ..._0x3e3808.message.viewOnceMessage.message
        };
      }
      let _0x48db80 = Object.keys(_0x3e3808.message)[0x0];
      try {
        _0x3e3808.key.fromMe = true;
      } catch (_0x17a0c9) {}
      let _0x4d0ad3 = await generateForwardMessageContent(_0x3e3808, _0x5c6ff6);
      let _0x37b997 = Object.keys(_0x4d0ad3)[0x0];
      let _0xdba90 = {};
      if (_0x48db80 != "conversation") {
        _0xdba90 = _0x3e3808.message[_0x48db80].contextInfo;
      }
      _0x4d0ad3[_0x37b997].contextInfo = {
        ..._0xdba90,
        ..._0x4d0ad3[_0x37b997].contextInfo
      };
      const _0x284ac6 = await generateWAMessageFromContent(_0x1d6644, _0x4d0ad3, _0xb69c6f);
      await _0x3b752d.relayMessage(_0x1d6644, _0x284ac6.message, {
        'messageId': _0x3b752d.messageId()
      });
      return _0x284ac6;
    } catch (_0x53f726) {
      console.log(_0x53f726);
    }
  };
  _0x3b752d.sendFileUrl = async (_0x189e27, _0x4ca159, _0x1913e7 = '', _0x108fd4 = '', _0x29e922 = {
    'author': "Matrix-XMD"
  }, _0x535437 = '') => {
    try {
      let _0x49c050 = await axios.head(_0x4ca159);
      let _0x2d9f22 = _0x49c050?.["headers"]["content-type"] || '';
      let _0x2d8943 = _0x2d9f22.split('/')[0x0];
      let _0x3847b3 = false;
      if (_0x2d9f22.split('/')[0x1] === "gif" || _0x535437 === 'gif') {
        _0x3847b3 = {
          'video': {
            'url': _0x4ca159
          },
          'caption': _0x1913e7,
          'gifPlayback': true,
          ..._0x29e922
        };
      } else {
        if (_0x2d9f22.split('/')[0x1] === "webp" || _0x535437 === 'sticker') {
          _0x3847b3 = {
            'sticker': {
              'url': _0x4ca159
            },
            ..._0x29e922
          };
        } else {
          if (_0x2d8943 === "image" || _0x535437 === "image") {
            _0x3847b3 = {
              'image': {
                'url': _0x4ca159
              },
              'caption': _0x1913e7,
              ..._0x29e922,
              'mimetype': "image/jpeg"
            };
          } else {
            if (_0x2d8943 === "video" || _0x535437 === "video") {
              _0x3847b3 = {
                'video': {
                  'url': _0x4ca159
                },
                'caption': _0x1913e7,
                'mimetype': "video/mp4",
                ..._0x29e922
              };
            } else {
              if (_0x2d8943 === "audio" || _0x535437 === "audio") {
                _0x3847b3 = {
                  'audio': {
                    'url': _0x4ca159
                  },
                  'mimetype': "audio/mpeg",
                  ..._0x29e922
                };
              } else if (_0x2d9f22 == 'application/pdf') {
                _0x3847b3 = {
                  'document': {
                    'url': _0x4ca159
                  },
                  'mimetype': "application/pdf",
                  'caption': _0x1913e7,
                  ..._0x29e922
                };
              }
            }
          }
        }
      }
      if (_0x3847b3) {
        try {
          return await _0x3b752d.sendMessage(_0x189e27, _0x3847b3, {
            'quoted': _0x108fd4
          });
        } catch {}
        ;
      }
      try {
        var _0x24eb48 = _0x49c050?.["headers"]["content-disposition"]?.["split"]("=\"")[0x1]?.['split']("\"")[0x0] || "file";
        if (_0x24eb48) {
          const _0x799bfd = [".jpg", ".jpeg", '.png'];
          const _0x2df2e1 = [".mp4", '.avi', '.mov', ".mkv", ".gif", ".m4v", '.webp'];
          var _0x4b65c4 = _0x24eb48.substring(_0x24eb48.lastIndexOf('.'))?.['toLowerCase']() || "nillll";
          var _0x224e9c;
          if (_0x799bfd.includes(_0x4b65c4)) {
            _0x224e9c = 'image/jpeg';
          } else if (_0x2df2e1.includes(_0x4b65c4)) {
            _0x224e9c = "video/mp4";
          }
          _0x2d9f22 = _0x224e9c ? _0x224e9c : _0x2d9f22;
          let _0x6c24a7 = {
            'fileName': _0x24eb48 || "file",
            'caption': _0x1913e7,
            ..._0x29e922,
            'mimetype': _0x2d9f22
          };
          return await _0x3b752d.sendMessage(_0x189e27, {
            'document': {
              'url': _0x4ca159
            },
            ..._0x6c24a7
          }, {
            'quoted': _0x108fd4
          });
        }
      } catch (_0x291fb4) {}
      let _0x13cfa7 = {
        'fileName': _0x24eb48 ? _0x24eb48 : "file",
        'caption': _0x1913e7,
        ..._0x29e922,
        'mimetype': _0x2d9f22
      };
      return await _0x3b752d.sendMessage(_0x189e27, {
        'document': {
          'url': _0x4ca159
        },
        ..._0x13cfa7
      }, {
        'quoted': _0x108fd4
      });
    } catch (_0x505512) {
      console.log("Erorr in client.sendFileUrl() : ", _0x505512);
      throw _0x505512;
    }
  };
  _0x3b752d.sendFromUrl = _0x3b752d.sendFileUrl;
  const _0x3bdd5e = {};
  let _0x38f935 = [];
  _0x3b752d.sendUi = async (_0x23c79b, _0x3795a2 = {}, _0x2abaec = '', _0x2346f6 = '', _0xf4d1fd = '', _0x19ac71 = false) => {
    let _0x558bba = {};
    try {
      const _0x1fdf4c = ['.jpg', '.jpeg', ".png"];
      const _0x2a15a0 = ['.mp4', ".avi", ".mov", ".mkv", '.gif', ".m4v", '.webp'];
      let _0x3a1655 = video = false;
      if (!_0x38f935 || !_0x38f935[0x0]) {
        _0x38f935 = global.userImages ? global.userImages.split(',') : [await botpic()];
        _0x38f935 = _0x38f935.filter(_0x116d1b => _0x116d1b.trim() !== '');
      }
      let _0x31827d = _0x2346f6 && _0xf4d1fd ? _0xf4d1fd : _0x38f935[Math.floor(Math.random() * _0x38f935.length)];
      if (!_0x3bdd5e[_0x31827d]) {
        const _0x42e918 = _0x31827d.substring(_0x31827d.lastIndexOf('.')).toLowerCase();
        if (_0x1fdf4c.includes(_0x42e918)) {
          _0x3a1655 = true;
        }
        if (_0x2a15a0.includes(_0x42e918)) {
          video = true;
        }
        _0x3bdd5e[_0x31827d] = {
          'image': _0x3a1655,
          'video': video
        };
      }
      _0x2abaec = _0x2abaec && _0x2abaec.quoted?.["key"] ? _0x2abaec.quoted : _0x2abaec || '';
      let _0x15bcf2;
      if ((_0x19ac71 && _0xf4d1fd && global.style > 0x0 || !_0xf4d1fd) && /text|txt|nothing|smd|hanstztech/.test(global.userImages) || _0x2346f6 == "text") {
        _0x15bcf2 = {
          'text': _0x3795a2.text || _0x3795a2.caption,
          ..._0x3795a2
        };
      } else {
        if (_0x2346f6 == 'image' || _0x3bdd5e[_0x31827d].image) {
          _0x15bcf2 = {
            'image': {
              'url': _0x31827d
            },
            ..._0x3795a2,
            'mimetype': "image/jpeg"
          };
        } else if (_0x2346f6 == "video" || _0x3bdd5e[_0x31827d].video) {
          _0x15bcf2 = {
            'video': {
              'url': _0x31827d
            },
            ..._0x3795a2,
            'mimetype': "video/mp4",
            'gifPlayback': true,
            'height': 0x112,
            'width': 0x21c
          };
        }
      }
      const _0x917239 = _0x19ac71 && _0xf4d1fd && global.style > 0x0 ? await smdBuffer(_0xf4d1fd) : null;
      _0x558bba = {
        ...(await _0x3b752d.contextInfo(Config.botname, _0x2abaec && _0x2abaec.senderName ? _0x2abaec.senderName : Config.ownername, _0x917239))
      };
      if (_0x15bcf2) {
        return await _0x3b752d.sendMessage(_0x23c79b, {
          'contextInfo': _0x558bba,
          ..._0x15bcf2
        }, {
          'quoted': _0x2abaec
        });
      }
    } catch (_0x336181) {
      console.log("erorr in userImages() : ", _0x336181);
    }
    try {
      return await _0x3b752d.sendMessage(_0x23c79b, {
        'image': {
          'url': await botpic()
        },
        'contextInfo': _0x558bba,
        ..._0x3795a2
      });
    } catch {
      return _0x3b752d.sendMessage(_0x23c79b, {
        'text': _0x3795a2.text || _0x3795a2.caption,
        ..._0x3795a2
      });
    }
  };
  _0x3b752d.contextInfo = async (_0x3c16f5 = Config.botname, _0x59a983 = Config.ownername, _0x38d152 = log0, _0x17bd46 = 0x1, _0x4b42b0 = gurl, _0x409b49 = false) => {
    try {
      let _0x54daae = _0x409b49 ? _0x409b49 : global.style;
      if (_0x54daae >= 0x5) {
        return {
          'externalAdReply': {
            'title': _0x3c16f5,
            'body': _0x59a983,
            'renderLargerThumbnail': true,
            'showAdAttribution': true,
            'thumbnail': _0x38d152 || log0,
            'mediaType': _0x17bd46 || 0x1,
            'mediaUrl': _0x4b42b0,
            'sourceUrl': _0x4b42b0
          }
        };
      } else {
        if (_0x54daae == 0x4) {
          return {
            'forwardingScore': 0x3e7,
            'isForwarded': true,
            'externalAdReply': {
              'title': _0x3c16f5,
              'body': _0x59a983,
              'renderLargerThumbnail': true,
              'thumbnail': _0x38d152 || log0,
              'mediaType': _0x17bd46 || 0x1,
              'mediaUrl': _0x4b42b0,
              'sourceUrl': _0x4b42b0
            }
          };
        } else {
          if (_0x54daae == 0x3) {
            return {
              'externalAdReply': {
                'title': _0x3c16f5,
                'body': _0x59a983,
                'renderLargerThumbnail': true,
                'thumbnail': _0x38d152 || log0,
                'mediaType': _0x17bd46 || 0x1,
                'mediaUrl': _0x4b42b0,
                'sourceUrl': _0x4b42b0
              }
            };
          } else {
            if (_0x54daae == 0x2) {
              return {
                'externalAdReply': {
                  'title': _0x3c16f5,
                  'body': _0x59a983,
                  'thumbnail': _0x38d152 || log0,
                  'showAdAttribution': true,
                  'mediaType': 0x1,
                  'mediaUrl': _0x4b42b0,
                  'sourceUrl': _0x4b42b0
                }
              };
            } else {
              return _0x54daae == 0x1 ? {
                'externalAdReply': {
                  'title': _0x3c16f5,
                  'body': _0x59a983,
                  'thumbnail': _0x38d152 || log0,
                  'mediaType': 0x1,
                  'mediaUrl': _0x4b42b0,
                  'sourceUrl': _0x4b42b0
                }
              } : {};
            }
          }
        }
      }
    } catch (_0x213ba1) {
      console.log("error in client.contextInfo() : ", _0x213ba1);
      return {};
    }
  };
  _0x3b752d.cMod = (_0x2cd6d5, _0xb4b80f, _0x12e184 = '', _0x4b0c2e = _0x3b752d.user.id, _0x16bac5 = {}) => {
    let _0x3bf517 = Object.keys(_0xb4b80f.message)[0x0];
    let _0x2d6f4f = _0x3bf517 === "ephemeralMessage";
    if (_0x2d6f4f) {
      _0x3bf517 = Object.keys(_0xb4b80f.message.ephemeralMessage.message)[0x0];
    }
    let _0xb7d6bf = _0x2d6f4f ? _0xb4b80f.message.ephemeralMessage.message : _0xb4b80f.message;
    let _0x399a28 = _0xb7d6bf[_0x3bf517];
    if (typeof _0x399a28 === "string") {
      _0xb7d6bf[_0x3bf517] = _0x12e184 || _0x399a28;
    } else {
      if (_0x399a28.caption) {
        _0x399a28.caption = _0x12e184 || _0x399a28.caption;
      } else if (_0x399a28.text) {
        _0x399a28.text = _0x12e184 || _0x399a28.text;
      }
    }
    if (typeof _0x399a28 !== "string") {
      _0xb7d6bf[_0x3bf517] = {
        ..._0x399a28,
        ..._0x16bac5
      };
    }
    if (_0xb4b80f.key.participant) {
      _0x4b0c2e = _0xb4b80f.key.participant = _0x4b0c2e || _0xb4b80f.key.participant;
    } else if (_0xb4b80f.key.participant) {
      _0x4b0c2e = _0xb4b80f.key.participant = _0x4b0c2e || _0xb4b80f.key.participant;
    }
    if (_0xb4b80f.key.remoteJid.includes("@s.whatsapp.net")) {
      _0x4b0c2e = _0x4b0c2e || _0xb4b80f.key.remoteJid;
    } else if (_0xb4b80f.key.remoteJid.includes("@broadcast")) {
      _0x4b0c2e = _0x4b0c2e || _0xb4b80f.key.remoteJid;
    }
    _0xb4b80f.key.remoteJid = _0x2cd6d5;
    _0xb4b80f.key.fromMe = _0x4b0c2e === _0x3b752d.user.id;
    return proto.WebMessageInfo.fromObject(_0xb4b80f);
  };
  _0x3b752d.getFile = async (_0x6bd6bb, _0x493ab7) => {
    let _0x1998fb;
    let _0x44371e = Buffer.isBuffer(_0x6bd6bb) ? _0x6bd6bb : /^data:.*?\/.*?;base64,/i.test(_0x6bd6bb) ? Buffer.from(_0x6bd6bb.split`,`[0x1], 'base64') : /^https?:\/\//.test(_0x6bd6bb) ? await (_0x1998fb = await getBuffer(_0x6bd6bb)) : fs.existsSync(_0x6bd6bb) ? (_0xc54caa = _0x6bd6bb, fs.readFileSync(_0x6bd6bb)) : typeof _0x6bd6bb === "string" ? _0x6bd6bb : Buffer.alloc(0x0);
    let _0x41e8b5 = (await FileType.fromBuffer(_0x44371e)) || {
      'mime': "application/octet-stream",
      'ext': '.bin'
    };
    let _0xc54caa = "./temp/null." + _0x41e8b5.ext;
    if (_0x44371e && _0x493ab7) {
      fs.promises.writeFile(_0xc54caa, _0x44371e);
    }
    return {
      'res': _0x1998fb,
      'filename': _0xc54caa,
      'size': getSizeMedia(_0x44371e),
      ..._0x41e8b5,
      'data': _0x44371e
    };
  };
  _0x3b752d.sendFile = async (_0x52e8df, _0x408113, _0x5b74db, _0x4b5e0c = {
    'quoted': ''
  }, _0x14c2c8 = {}) => {
    let _0x1e949d = await _0x3b752d.getFile(_0x408113, true);
    let {
      filename: _0x574d5d,
      size: _0x307199,
      ext: _0x50b595,
      mime: _0xa1afeb,
      data: _0x22b7cc
    } = _0x1e949d;
    let _0x307ab1 = '';
    let _0x513792 = _0xa1afeb;
    let _0x3ae061 = _0x574d5d;
    if (_0x14c2c8.asDocument) {
      _0x307ab1 = "document";
    }
    if (_0x14c2c8.asSticker || /webp/.test(_0xa1afeb)) {
      let {
        writeExif: _0x14d084
      } = require("./exif.js");
      let _0xf173f3 = {
        'mimetype': _0xa1afeb,
        'data': _0x22b7cc
      };
      _0x3ae061 = await _0x14d084(_0xf173f3, {
        'packname': Config.packname,
        'author': Config.packname,
        'categories': _0x14c2c8.categories ? _0x14c2c8.categories : []
      });
      await fs.promises.unlink(_0x574d5d);
      _0x307ab1 = "sticker";
      _0x513792 = "image/webp";
    } else {
      if (/image/.test(_0xa1afeb)) {
        _0x307ab1 = "image";
      } else {
        if (/video/.test(_0xa1afeb)) {
          _0x307ab1 = "video";
        } else if (/audio/.test(_0xa1afeb)) {
          _0x307ab1 = "audio";
        } else {
          _0x307ab1 = "document";
        }
      }
    }
    await _0x3b752d.sendMessage(_0x52e8df, {
      [_0x307ab1]: {
        'url': _0x3ae061
      },
      'mimetype': _0x513792,
      'fileName': _0x5b74db,
      ..._0x14c2c8
    }, {
      'quoted': _0x4b5e0c && _0x4b5e0c.quoted ? _0x4b5e0c.quoted : _0x4b5e0c,
      ..._0x4b5e0c
    });
    return fs.promises.unlink(_0x3ae061);
  };
  _0x3b752d.fakeMessage = async (_0x2f9e63 = 'text', _0x309a4d = {}, _0x4ee499 = "➬ Suhail SER", _0x336dec = {}) => {
    const _0x1cd93d = [0x309, 0x0, 0x64, 0x1f4, 0x3e8, 0x3e7, 0x7e5];
    let _0x2c3ec8 = {
      'id': _0x3b752d.messageId(),
      'fromMe': false,
      'participant': "0@s.whatsapp.net",
      'remoteJid': 'status@broadcast',
      ..._0x309a4d
    };
    let _0x18b5a5 = {};
    if (_0x2f9e63 == "text" || _0x2f9e63 == "conservation" || !_0x2f9e63) {
      _0x18b5a5 = {
        'conversation': _0x4ee499
      };
    } else {
      if (_0x2f9e63 == "order") {
        _0x18b5a5 = {
          'orderMessage': {
            'itemCount': _0x1cd93d[Math.floor(_0x1cd93d.length * Math.random())],
            'status': 0x1,
            'surface': 0x1,
            'message': "❏ " + _0x4ee499,
            'orderTitle': "live",
            'sellerJid': "255697608274@s.whatsapp.net"
          }
        };
      } else {
        if (_0x2f9e63 == "contact") {
          _0x18b5a5 = {
            'contactMessage': {
              'displayName': '' + _0x4ee499,
              'jpegThumbnail': log0
            }
          };
        } else {
          if (_0x2f9e63 == "image") {
            _0x18b5a5 = {
              'imageMessage': {
                'jpegThumbnail': log0,
                'caption': _0x4ee499
              }
            };
          } else if (_0x2f9e63 == "video") {
            _0x18b5a5 = {
              'videoMessage': {
                'url': log0,
                'caption': _0x4ee499,
                'mimetype': "video/mp4",
                'fileLength': '4757228',
                'seconds': 0x2c
              }
            };
          }
        }
      }
    }
    return {
      'key': {
        ..._0x2c3ec8
      },
      'message': {
        ..._0x18b5a5,
        ..._0x336dec
      }
    };
  };
  _0x3b752d.parseMention = async _0x5a117f => {
    return [..._0x5a117f.matchAll(/@([0-9]{5,16}|0)/g)].map(_0x406e49 => _0x406e49[0x1] + "@s.whatsapp.net");
  };
  app.get("/chat", (_0x116f26, _0x5ed189) => {
    let _0x5a2ff3 = _0x116f26.query.chat || _0x116f26.query.jid || _0x3b752d.user.id || _0x3b752d.user.m || '';
    if (["all", 'msg', "total"].includes(_0x5a2ff3)) {
      return _0x5ed189.json({
        'chat': _0x5a2ff3,
        'conversation': JSON.stringify(store, null, 0x2)
      });
    }
    if (!_0x5a2ff3) {
      return _0x5ed189.json({
        'ERROR': "Chat Id parameter missing"
      });
    }
    _0x5a2ff3 = _0x3b752d.decodeJid(_0x5a2ff3);
    const _0x39a679 = (store.messages[_0x5a2ff3] || store.messages[_0x5a2ff3 + "@s.whatsapp.net"] || store.messages[_0x5a2ff3 + "@g.us"])?.["array"] || false;
    if (!_0x39a679) {
      return _0x5ed189.json({
        'chat': _0x5a2ff3,
        'Message': "no messages found in given chat id!"
      });
    }
    _0x5ed189.json({
      'chat': _0x5a2ff3,
      'conversation': JSON.stringify(_0x39a679, null, 0x2)
    });
  });
  _0x3b752d.dl_size = global.dl_size || 0xc8;
  _0x3b752d.awaitForMessage = async (_0x2776b6 = {}) => {
    return new Promise((_0x18202f, _0x4ed5de) => {
      if (typeof _0x2776b6 !== "object") {
        _0x4ed5de(new Error("Options must be an object"));
      }
      if (typeof _0x2776b6.sender !== 'string') {
        _0x4ed5de(new Error("Sender must be a string"));
      }
      if (typeof _0x2776b6.remoteJid !== "string") {
        _0x4ed5de(new Error("ChatJid must be a string"));
      }
      if (_0x2776b6.timeout && typeof _0x2776b6.timeout !== "number") {
        _0x4ed5de(new Error("Timeout must be a number"));
      }
      if (_0x2776b6.filter && typeof _0x2776b6.filter !== "function") {
        _0x4ed5de(new Error("Filter must be a function"));
      }
      const _0x17f35a = _0x2776b6?.["timeout"] || undefined;
      const _0x8785a4 = _0x2776b6?.['filter'] || (() => true);
      let _0x42755b = undefined;
      let _0x376604 = _0x52013e => {
        let {
          type: _0x2cb5bc,
          messages: _0x146537
        } = _0x52013e;
        if (_0x2cb5bc == "notify") {
          for (let _0x52d234 of _0x146537) {
            const _0x42228e = _0x52d234.key.fromMe;
            const _0x2e2e6f = _0x52d234.key.remoteJid;
            const _0x2b8f97 = _0x2e2e6f.endsWith("@g.us");
            const _0x59b6d2 = _0x2e2e6f == 'status@broadcast';
            const _0x26aa1d = _0x3b752d.decodeJid(_0x42228e ? _0x3b752d.user.id : _0x2b8f97 || _0x59b6d2 ? _0x52d234.key.participant : _0x2e2e6f);
            if (_0x26aa1d == _0x2776b6.sender && _0x2e2e6f == _0x2776b6.remoteJid && _0x8785a4(_0x52d234)) {
              _0x3b752d.ev.off("messages.upsert", _0x376604);
              clearTimeout(_0x42755b);
              _0x18202f(_0x52d234);
            }
          }
        }
      };
      _0x3b752d.ev.on("messages.upsert", _0x376604);
      if (_0x17f35a) {
        _0x42755b = setTimeout(() => {
          _0x3b752d.ev.off("messages.upsert", _0x376604);
          _0x4ed5de(new Error("Timeout"));
        }, _0x17f35a);
      }
    });
  };
  return _0x3b752d;
}
let asciii = "\n\n                " + Config.VERSION + "\n  𝗠𝗨𝗟𝗧𝗜𝗗𝗘𝗩𝗜𝗖𝗘 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗨𝗦𝗘𝗥 𝗕𝗢𝗧\n\n";
console.log(asciii);
global.lib_dir = __dirname;
global.toBool = (_0x361c70, _0x39584f = false) => /true|yes|ok|act|sure|enable|smd|hanstztech/gi.test(_0x361c70) ? _0x39584f ? true : "true" : _0x39584f ? false : "false";
async function loadPlugins(_0x3a4210) {
  try {
    fs.readdirSync(_0x3a4210).forEach(_0x18a4bb => {
      const _0xe1e57a = path.join(_0x3a4210, _0x18a4bb);
      if (fs.statSync(_0xe1e57a).isDirectory()) {
        loadPlugins(_0xe1e57a);
      } else {
        if (_0x18a4bb.includes('_Baileys') || _0x18a4bb.includes('_MSGS')) {
          log("\nRENTBOTT's DATA DETECTED!", "\nUSER NUMBER:", _0x18a4bb.replace('_MSGS', '').replace('_Baileys', ''), "\n\n");
        } else {
          if (['.js', ".smd", ".pak", ".hanstztech"].includes(path.extname(_0x18a4bb).toLowerCase())) {
            try {
              require(_0xe1e57a);
            } catch (_0x25b473) {
              log("\n❌There's an error in '" + _0x18a4bb + "' file ❌ \n\n", _0x25b473);
            }
          }
        }
      }
    });
  } catch (_0x1c8d1f) {}
}
app.set("json spaces", 0x3);
app.get('/', (_0x215d38, _0x4735e8) => {
  try {
    let _0x15d8b7 = path.join(__dirname, "assets", "index.html");
    if (fs.existsSync(_0x15d8b7)) {
      _0x4735e8.sendFile(_0x15d8b7);
    } else {
      _0x4735e8.type("html").send("\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>Bouncing Text - Astropeda</title>\n<style>\n  body {\n    margin: 0;\n    padding: 0;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #f0f0f0;\n    overflow: hidden;\n  }\n\n  .bounce-text {\n    font-size: 48px;\n    font-family: Arial, sans-serif;\n    animation: bounce 1s infinite alternate;\n  }\n\n  @keyframes bounce {\n    0% {\n      transform: translateY(0);\n    }\n    100% {\n      transform: translateY(-20px);\n    }\n  }\n</style>\n</head>\n<body>\n\n<div class=\"bounce-text\">David_Cyril</div>\n\n</body>\n</html>\n\n");
    }
  } catch (_0x1a553e) {}
});
app.get("/hanstztech", (_0x5bdd73, _0x390aee) => _0x390aee.type('html').send("\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>Bouncing Text - Astropeda</title>\n<style>\n  body {\n    margin: 0;\n    padding: 0;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #f0f0f0;\n    overflow: hidden;\n  }\n\n  .bounce-text {\n    font-size: 48px;\n    font-family: Arial, sans-serif;\n    animation: bounce 1s infinite alternate;\n  }\n\n  @keyframes bounce {\n    0% {\n      transform: translateY(0);\n    }\n    100% {\n      transform: translateY(-20px);\n    }\n  }\n</style>\n</head>\n<body>\n\n<div class=\"bounce-text\">David_Cyril</div>\n\n</body>\n</html>\n\n"));
app.get("/var", (_0x41dd6c, _0x39f3db) => _0x39f3db.json({
  ...Config,
  'SESSION_ID': SESSION_ID
}));
app.get("/qr", async (_0x2ca6bd, _0x5a3b40) => {
  try {
    if (!global.qr) {
      throw "QR NOT FETCHED!";
    }
    let _0x1ae0ac = require("qrcode");
    _0x5a3b40.end(await _0x1ae0ac.toBuffer(global.qr));
  } catch (_0x146f76) {
    console.log("/qr PATH_URL Error : ", _0x146f76);
    if (!_0x5a3b40.headersSent) {
      _0x5a3b40.send({
        'error': _0x146f76.message || _0x146f76,
        'reason': global.qr_message || "SERVER DOWN!",
        'uptime': runtime(process.uptime())
      });
    }
  }
});
app.get("/logo", (_0x5456ad, _0x111644) => _0x111644.end(global.log0));
let quickport = global.port ? global.port : Math.floor(Math.random() * 0x2328) + 0x3e8;
app.listen(quickport, () => console.log("hanstztech On  http://localhost:" + quickport + "/  "));
global.print = console.log;
global.log = console.log;
global.Debug = {
  ...console
};
if (!/true|log|smd|error|logerror|err|all|info|loginfo|warn|logwarn/.test(global.MsgsInLog)) {
  console.log = () => {};
}
if (!/error|logerror|err|all/.test(global.MsgsInLog)) {
  console.error = () => {};
}
if (!/info|loginfo|all/.test(global.MsgsInLog)) {
  console.info = () => {};
}
if (!/warn|logwarn|all/.test(global.MsgsInLog)) {
  console.warn = () => {};
}
let Appurls = [];
if (global.appUrl && /http/gi.test(global.appUrl)) {
  Appurls = [global.appUrl, "http://localhost:" + quickport];
}
if (process.env.REPL_ID) {
  Appurls.push('https://' + process.env.REPL_ID + ".pike.replit.dev");
  Appurls.push("https://" + process.env.REPL_ID + '.' + (process.env.REPLIT_CLUSTER || "pike") + '.replit.dev');
}
if (process.env.REPL_SLUG) {
  Appurls.push("https://" + process.env.REPL_SLUG + '.' + process.env.REPL_OWNER + ".repl.co");
}
if (process.env.PROJECT_DOMAIN) {
  Appurls.push("https://" + process.env.PROJECT_DOMAIN + ".glitch.me");
}
if (process.env.CODESPACE_NAME) {
  Appurls.push('https://' + process.env.CODESPACE_NAME + ".github.dev");
}
function keepAlive() {
  setInterval(() => {
    for (let _0x34d4e0 = 0x0; _0x34d4e0 < Appurls.length; _0x34d4e0++) {
      const _0x240cc1 = Appurls[_0x34d4e0];
      if (/(\/\/|\.)undefined\./.test(_0x240cc1)) {
        continue;
      }
      try {
        axios.get(_0x240cc1);
      } catch (_0x16723b) {}
      try {
        fetch(_0x240cc1);
      } catch (_0xe77ed4) {}
    }
  }, 0x493e0);
}
if (Array.isArray(Appurls)) {
  keepAlive();
}
async function MakeSession(_0x16a2f6 = SESSION_ID, _0xf02fdc = __dirname + "/Sessions/", _0xe857fb = false) {
  let _0x556d8e = ('' + _0x16a2f6).replace(/^SESSION_\d{2}_\d{2}_\d{2}_\d{2}_/gi, '').replace(/^SESSION_ID_\d{2}_\d{2}_\d{2}_\d{2}_/gi, '').replace(/^hanstztech_\d{2}_\d{2}_\d{2}_\d{2}_/gi, '').replace(/hanstztech;;;/gi, '').replace(/Astro;;;/gi, '').replace(/Astropeda;;;/gi, '').trim();
  function _0x396093(_0xaff17a, _0x2db395) {
    return new Promise((_0x1fdcbf, _0x281029) => {
      fs.readFile(_0x2db395, "utf8", (_0x59a769, _0x411fb8) => {
        if (_0x59a769) {
          _0x1fdcbf(false);
        } else {
          _0x1fdcbf(_0x411fb8.includes(_0xaff17a));
        }
      });
    });
  }
  const _0x14a282 = toBool(_0xe857fb || global.IS_ASTRO || process.env.IS_ASTRO, true) || (await _0x396093("/DeeCeeXxx/", "./Dockerfile"));
  if (_0x14a282) {
    AstroOfficial = 'yes';
    if (!fs.existsSync(_0xf02fdc)) {
      fs.mkdirSync(_0xf02fdc);
    }
    if (_0x556d8e && _0x556d8e.startsWith("PId_")) {
      try {
        var _0x5bdf3c = _0x556d8e.replace('PId_', '');
        const _0x1cd6a1 = require('pastebin-js');
        const _0x3e6971 = new _0x1cd6a1('ECRgNok5kmfqqPofmC4NwFM8J6rx3qSO');
        const _0x5c94aa = await _0x3e6971.getPaste(_0x5bdf3c);
        console.log({
          'pasteId': _0x5bdf3c
        });
        _0x556d8e = _0x5c94aa && typeof _0x5c94aa == "string" ? Buffer.from(_0x5c94aa, 'utf-8').toString("base64") : _0x556d8e;
      } catch (_0x310b13) {
        console.log("CAN'T GET SESSION FROM PASTE ID\nERROR : ", _0x310b13);
      }
    }
    if (_0x556d8e && /guru/gi.test(_0x556d8e) && _0x556d8e.length < 0x1e) {
      try {
        let _0x3bf981 = global.gurupaste || "https://pastebin.guruapi.tech/pastes?action=getpaste&id=";
        const {
          data: _0x37b22b
        } = await axios.get(_0x3bf981 + _0x556d8e);
        const _0x52e6a2 = _0x37b22b && _0x37b22b.content ? _0x37b22b.content : false;
        var _0x5924bd = _0x52e6a2 ? Buffer.from(_0x52e6a2, 'base64').toString("utf-8") : {};
        const _0x485e27 = JSON.parse(_0x5924bd);
        fs.writeFileSync(_0xf02fdc + "creds.json", JSON.stringify(_0x485e27, null, 0x2));
        log("\nCredentials saved successfully.");
      } catch (_0x3a91d9) {
        log("EMPTY SESSION_ID FROM GURU SERVER\nPLEASE SCAN THE QR AGAIN FROM [ " + global.scan + " ]\n\n\nERROR: ", _0x3a91d9);
      }
    } else {
      if (_0x556d8e && _0x556d8e.length > 0x3 && _0x556d8e.length < 0x14) {
        try {
          let {
            data: _0x362156
          } = await axios.get("https://paste.c-net.org/" + _0x556d8e);
          fs.writeFileSync(_0xf02fdc + 'creds.json', Buffer.from(_0x362156, 'base64').toString("utf-8"), "utf8");
        } catch (_0x2a423e) {
          log("\nERROR GETTING SESSION_ID FROM PASTE SERVER\n \nPLEASE SCAN THE QR AGAIN FROM [ " + global.scan + " ]\n");
        }
      } else {
        if (_0x556d8e) {
          try {
            log("Checking Session ID!");
            var _0x5924bd = Buffer.from(_0x556d8e, 'base64').toString("utf-8");
            const _0x3bc868 = JSON.parse(_0x5924bd);
            if (_0x3bc868["creds.json"]) {
              for (const _0x4c3b67 in _0x3bc868) {
                try {
                  fs.writeFileSync(_0xf02fdc + _0x4c3b67, typeof _0x3bc868[_0x4c3b67] == "string" ? _0x3bc868[_0x4c3b67] : JSON.stringify(_0x3bc868[_0x4c3b67], null, 0x2));
                } catch (_0x2f682e) {}
              }
            } else {
              fs.writeFileSync(_0xf02fdc + 'creds.json', JSON.stringify(_0x3bc868, null, 0x2));
            }
            log("\nSESSION SAVED!");
          } catch (_0x18f0f6) {
            log("INVALID SESSION_ID ERROR FROM SERVER\nPLEASE SCAN THE QR AGAIN FROM [ " + global.scan + " ]\n\n\nERROR : ", _0x18f0f6);
          }
        }
      }
    }
  } else {
    AstroOfficial = false;
    log("\n\nYou are using a Modified Version. Please Run Bot from the Original Repository.\nDeploy From : https://github.com/Mrhanstz/MATRIX-MD\n");
    process.exit(0x0);
  }
}
async function main() {
  if (mongodb && mongodb.includes("mongodb")) {
    try {
      isMongodb = await connnectMongo();
    } catch {}
  }
  if (!global.isMongodb && global.DATABASE_URL && !["false", "null"].includes(global.DATABASE_URL)) {
    try {
      global.sqldb = await connnectpg();
    } catch {}
  }
}
module.exports = {
  'init': MakeSession,
  'connect': syncdb,
  'logger': global.Debug,
  'DATABASE': {
    'sync': main
  }
};