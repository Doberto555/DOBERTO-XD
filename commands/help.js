const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, message) {
    const helpMessage = `🌑⚡ 𝑫𝑶𝑩𝑬𝑹𝑻𝑶-𝑿𝑫 // 𝑺𝒀𝑺𝑻𝑬𝑴 𝑽1.0.9 ⚡🌑
╔══════════════════════╗
👑 𝑪𝑶𝑹𝑬 𝑶𝑾𝑵𝑬𝑹: DEVDOBERTO
📡 𝑺𝑻𝑨𝑻𝑼𝑺: ONLINE & ACTIVE
📺 CHANNEL: dobertomrlit
╚══════════════════════╝
⚠️ Access Granted… Welcome to the unknown. ⚠️
━━━━━━━━━━━━━━━━━━━━━━━
🚀 𝑮𝑬𝑵𝑬𝑹𝑨𝑳 𝑷𝑹𝑶𝑻𝑶𝑪𝑶𝑳𝑺
➤ .help | .menu
➤ .ping | .alive
➤ .tts  | .owner
➤ .joke | .quote | .fact
➤ .weather | .news
➤ .attp | .lyrics
➤ .8ball | .groupinfo
➤ .staff | .vv
➤ .trt | .ss | .jid | .url
━━━━━━━━━━━━━━━━━━━━━━━
🛡️ 𝑨𝑫𝑴𝑰𝑵 𝑪𝑶𝑵𝑻𝑹𝑶𝑳
➤ .ban | .kick | .warn
➤ .promote | .demote
➤ .mute | .unmute
➤ .delete | .clear
➤ .tagall | .hidetag
➤ .antilink | .antibadword
➤ .welcome | .goodbye
➤ .setgname | .setgpp
━━━━━━━━━━━━━━━━━━━━━━━
🔒 𝑶𝑾𝑵𝑬𝑹 𝑨𝑪𝑪𝑬𝑺𝑺
➤ .mode <public/private>
➤ .clearsession | .cleartmp
➤ .update | .settings
➤ .autostatus | .autoread
➤ .anticall | .pmblocker
➤ .setpp | .setmention
━━━━━━━━━━━━━━━━━━━━━━━
🎨 𝑬𝑫𝑰𝑻𝑰𝑵𝑮 𝑳𝑨𝑩
➤ .sticker | .simage
➤ .remini | .removebg
➤ .blur | .crop | .meme
➤ .take | .emojimix
➤ .igs | .igsc
━━━━━━━━━━━━━━━━━━━━━━━
🧠 𝑨𝑰 & 𝑮𝑨𝑴𝑬 𝑴𝑶𝑫𝑬
➤ .gpt | .gemini
➤ .imagine | .flux | .sora
➤ .tictactoe | .hangman
➤ .trivia | .truth | .dare
━━━━━━━━━━━━━━━━━━━━━━━
📥 𝑫𝑶𝑾𝑵𝑳𝑶𝑨𝑫 𝑺𝒀𝑺𝑻𝑬𝑴
➤ .play | .song | .video
➤ .spotify | .ytmp4
➤ .instagram | .facebook
➤ .tiktok
━━━━━━━━━━━━━━━━━━━━━━━
🔤 𝑻𝑬𝑿𝑻 𝑭𝑶𝑹𝑮𝑬
➤ .neon | .glitch | .fire
➤ .ice | .snow | .matrix
➤ .hacker | .devil | .sand
━━━━━━━━━━━━━━━━━━━━━━━
💻 𝑺𝒀𝑺𝑻𝑬𝑴 𝑭𝑰𝑳𝑬𝑺
➤ .git | .github
➤ .sc | .repo | .script
━━━━━━━━━━━━━━━━━━━━━━━
🌌 𝑬𝑵𝑻𝑬𝑹 𝑻𝑯𝑬 𝑵𝑬𝑻𝑾𝑶𝑹𝑲…
⚡ Stay connected. Stay powerful. ⚡
━━━━━━━━━━━━━━━━━━━━━━━
`;

    try {
        const imagePath = path.join(__dirname, '../assets/bot_image.jpg');
        
        const contextInfo = {
            forwardingScore: 1,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363423792937578@newsletter',
                newsletterName: 'DOBERTO XD',
                serverMessageId: -1
            }
        };

        if (fs.existsSync(imagePath)) {
            const imageBuffer = fs.readFileSync(imagePath);
            await sock.sendMessage(chatId, {
                image: imageBuffer,
                caption: helpMessage,
                contextInfo
            }, { quoted: message });
        } else {
            await sock.sendMessage(chatId, { 
                text: helpMessage,
                contextInfo
            });
        }
    } catch (error) {
        console.error('Error in help command:', error);
        await sock.sendMessage(chatId, { text: helpMessage });
    }
}

module.exports = helpCommand;