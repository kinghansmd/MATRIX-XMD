function hi() {
  console.log("MATRIX-XMD CREATED BY HANSTZ");
}
hi();

const os = require('os');
const Config = require('../config');
const { fancytext, tiny, runtime, formatp } = require("../lib");
const astro_patch = require("../lib/plugins");

// Utility Functions
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const trend_usage = randomInt(1, 100);
const database_info = randomInt(1, 499);

// Menu Command
astro_patch.smd({
  cmdname: "menu",
  desc: "Help list - Displays commands and plays audio.",
  react: '🎗️',
  type: 'user',
  filename: __filename
}, async (client, query) => {
  try {
    const { commands } = require("../lib");

    // Box-Styled Menu Header
    let menuText = `
╔═━═══❰ *${Config.botname}* ❱━➳
║🎗️║*Owner:* ${Config.ownername}
║🚀║*Uptime:* ${runtime(process.uptime())}
║💾║*RAM Usage:* ${formatp(os.totalmem() - os.freemem())}
║🕒║*Time:* ${client.time}
║📅║*Date:* ${client.date}
║📈║*Trend Usage:* ${trend_usage}%
║📊║*Database:* ${database_info}
║🛠️║*Commands:* ${commands.length}
╚═━═━══━━━═══─━─➳
`;

    // Organize Commands by Category
    const categorizedCommands = {};
    commands.forEach(cmd => {
      if (!cmd.dontAddCommandList && cmd.pattern) {
        if (!categorizedCommands[cmd.category]) {
          categorizedCommands[cmd.category] = [];
        }
        categorizedCommands[cmd.category].push(cmd.pattern);
      }
    });

    // Add Commands to Menu (Box Styled)
    for (const category in categorizedCommands) {
      menuText += `
╔═━❰ *${tiny(category)}* ❱━═✯
`;
      categorizedCommands[category].forEach(cmd => {
        menuText += `║ ➪║ ${fancytext(cmd, 1)}\n`;
      });
      menuText += `╚══════════╝\n`;
    }

    // Footer
    menuText += `
╔════❰ MATRIX-XMD ❱━➳
║ 🎄 Merry Christmas! 🎄
║ 🎗️ And Happy New Year. 🎊
╚═━═━━═══━══─━─➳
 𝑴𝑨𝑻𝑹𝑰𝑿-𝑿𝑴𝑫-𝑴𝑨𝑫𝑬-𝑩𝒀-\n\n> HANSTZ
`;

    // Send Menu along with Image
    await client.sendMessage(client.chat, {
      image: {
        url: "https://files.catbox.moe/perl56.jpeg"
      },
      caption: menuText
    });

    // Send Audio
    const audioUrl = "https://files.catbox.moe/cxg49c.mp3";

    await client.sendMessage(client.chat, {
      audio: {
        url: audioUrl
      },
      mimetype: "audio/mpeg",
      caption: "keep using Matrix-Xmd"
    });

  } catch (err) {
    await client.error("An error occurred:\n" + err.message);
  }
});