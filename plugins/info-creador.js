let handler = async (m, { conn, command, usedPrefix }) => {
let creadorID = '51931651504@s.whatsapp.net'
let isInGroup = m.isGroup && (await conn.groupMetadata(m.chat)).participants.some(p => p.id === creadorID)

let numeroTexto = isInGroup ? `@${creadorID.split('@')[0]}` : `+53 931651504`

let creador = `🩵 *C R E A D O R🩵*

🩵 *NOMBRE:* ঔৣ͜͡🔥͜͡𝑲𝒆𝒊𝒍𝒊 𝒔.𝒓🔥᮫꫶ฺ໋⃜𝆹𝅦ۣ𝄁᭄
🩵 *Bot:* SETSUNA
🩵 *LINK CREADOR:* wa.me/51931651504

👑 *ENLACES OFICIALES:*

• *GRUPO OFC:*
https://chat.whatsapp.com/K6z5EvV3EXkGdTzYwn8VU6
• *CANAL OFC*
https://whatsapp.com/channel/0029VbAYhpiDJ6HAM3YDi32i`

await conn.sendMessage(m.chat, {
  text: creador.trim(),
  contextInfo: {
    forwardingScore: 200,
    isForwarded: false,
    mentionedJid: isInGroup ? [creadorID] : [],
    externalAdReply: {
      showAdAttribution: true,
      renderLargerThumbnail: true,
      title: `🩵 Developer 🩵`,
      body: packname,
      mediaType: 1,
      sourceUrl: redes,
      thumbnailUrl: imagen1
    }
  }
}, {
  quoted: fkontak
})

}
handler.help = ['creador']
handler.command = ['creador', 'creator', 'owner', 'propietario', 'dueño']
handler.register = true
handler.tags = ['main']

export default handler
