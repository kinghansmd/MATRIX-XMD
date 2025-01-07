const {
    smd,
    sleep
} = require('../lib'), myloveM = {"smd" : "Matrix-xmd" }

smd({
    cmdname: "mylove",    
    type: "fun",    
    info: "spread love and affection",   
    on: "text",
    filename: __filename,
}, async (citel, match, { smd }) => {
    let islove = smd === "mylove" ? true : citel.isPublic && match.toLowerCase().includes("mylove") ? true : "";
    if (islove && !myloveM[citel.id]) {
        myloveM[citel.id] = true;
        let loveEmojis = ['❤️', '💕', '💞', '💖', '💓', '💗', '💘', '💝', '💌', '💟', '❣', '💙', '💚', '💛', '🧡', '💜', '🖤', '💝', '💏', '💑', '💋', '😍', '😘', '🥰', '🤩', '💋', '🌹', '💐', '🌸', '🍓', '🍫', '🍬', '🧁', '🍰', '🌟', '✨', '💫', '💞', '💘', '🫶'];
        const { key } = await citel.reply(`💖 Sending you all my love...`);
        for (let i = 0; i < loveEmojis.length; i++) {
            await sleep(500);
            await citel.reply(`${loveEmojis[i]} My love is endless!`, { edit: key });
        }
    }
});

const {
    smd,
    sleep
    } = require('../lib'), bunnyM = {"smd" : "Matrix-xmd" }

smd({
    cmdname: "bunny",    
    type: "fun",    
    info: "cute bunny",   
    on: "text",
    filename: __filename,
}, async (citel, match, { smd }) => {
    let isbunny = smd === "bunny" ? true : citel.isPublic && match.toLowerCase().includes("bunny") ? true : "";
    if (isbunny && !bunnyM[citel.id]) {
        bunnyM[citel.id] = true;
        let bunny = ['🐰', '🥕', '🌸', '🎀', '💐', '🌷', '🍭', '💖', '💕', '🍀', '🧡', '🌼', '🎉', '🎊', '💞', '♥', '💌', '😊', '🤗', '🌟', '💎', '🐇'];
        const { key } = await citel.reply(`(\\_/)\n( •.•)\n/>🥕`);
        for (let i = 0; i < bunny.length; i++) {
            await sleep(500);
            await citel.reply(`(\\_/)\n( •.•)\n/>${bunny[i]}`, { edit: key });
        }
    }
});

const {
    smd,
    sleep
} = require('../lib'), chuckM = {"smd" : "Matrix-xmd" }

smd({
    cmdname: "chuck",    
    type: "fun",    
    info: "funny chuck reaction",   
    on: "text",
    filename: __filename,
}, async (citel, match, { smd }) => {
    let ischuck = smd === "chuck" ? true : citel.isPublic && match.toLowerCase().includes("chuck") ? true : "";
    if (ischuck && !chuckM[citel.id]) {
        chuckM[citel.id] = true;
        let chuckEmojis = ['🤪', '😜', '😝', '🤡', '🎩', '🃏', '🎭', '😂', '🤣', '💥', '👻', '👹', '🕺', '💃', '👯‍♀️', '🐒', '🐯', '🦁', '🎯', '🏹', '💨', '🍕', '🍔', '🌮', '🍟', '🎮', '🏆', '🚀', '🛸', '🌍', '🎤', '🎶', '🎧', '🎷', '🎸'];
        const { key } = await citel.reply(`🤣 Chuck is here... let's get wild!`);
        for (let i = 0; i < chuckEmojis.length; i++) {
            await sleep(500);
            await citel.reply(`${chuckEmojis[i]} Chuck's on a roll!`, { edit: key });
        }
    }
});

const {
    smd,
    sleep
} = require('../lib'), lolM = {"smd" : "Matrix-xmd" }

smd({
    cmdname: "Lol",    
    type: "fun",    
    info: "funny lol reaction",   
    on: "text",
    filename: __filename,
}, async (citel, match, { smd }) => {
    let islol = smd === "lol" ? true : citel.isPublic && match.toLowerCase().includes("lol") ? true : "";
    if (islol && !lolM[citel.id]) {
        lolM[citel.id] = true;
        let lolEmojis = ['😂', '🤣', '😆', '😹', '😜', '🤣', '😛', '😝', '😹', '😋', '🤣', '😋', '🙃', '💀', '💬', '📱', '🎤', '🎧', '🎶', '🎮', '🎬', '🎥', '🎭', '🎉', '🎊', '🥳', '🕺', '💃', '🍿', '🎁', '🎈', '🎠', '🎪', '🎡'];
        const { key } = await citel.reply(`😂 LOL Incoming...`);
        for (let i = 0; i < lolEmojis.length; i++) {
            await sleep(500);
            await citel.reply(`${lolEmojis[i]} That was hilarious!`, { edit: key });
        }
    }
});
