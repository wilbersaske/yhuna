let handler = async (m, { conn, command, usedPrefix }) => {
let creadorID = '5351524614@s.whatsapp.net'
let isInGroup = m.isGroup && (await conn.groupMetadata(m.chat)).participants.some(p => p.id === creadorID)

let numeroTexto = isInGroup ? `@${creadorID.split('@')[0]}` : `+53 51524614`

let creador = `🩵 *C R E A D O R🩵*

🩵 *NOMBRE:* 𓆩‌۫᷼ ִֶָღܾ݉͢ғ꯭ᴇ꯭፝ℓɪ꯭ͨא𓆪
🩵 *Bot:* MAKIMA
🩵 *LINK CREADOR:* wa.me/18293142989

👑 *ENLACES OFICIALES:*

• *GRUPO OFC:*
https://chat.whatsapp.com/DEGsbJYf7BBDe8c7R2dUxU
• *CANAL OFC*
https://whatsapp.com/channel/0029VbAa5sNCsU9Hlzsn651S`

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
