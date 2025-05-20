let handler = async (m, { conn, command, usedPrefix }) => {
let staff = `🩵 *LISTA DE STAFF*
💫 *Bot:* MAKIMA BOT MD 
💫 *Versión:* 0.0.1

🩵 *CREADOR:*

• *Félix*
✨ *Rol:* Propietario
⚡ *Número:* wa.me/18293142989

🩵  *Colaborador:*

• *Dioneibi-rip* 
✨ *Rol:* Developer
⚡ *Número:* Wa.me/18294868853`
  
await conn.sendFile(m.chat, icons, 'megumin.jpg', staff.trim(), fkontak, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `🩵 Developers 🩵`,
body: `🩵 Staff Oficial`,
mediaType: 1,
sourceUrl: redes,
thumbnailUrl: icono
}}
}, { mentions: m.sender })
m.react(emoji)

}
handler.help = ['staff']
handler.command = ['colaboradores', 'staff']
handler.register = true
handler.tags = ['main']

export default handler
