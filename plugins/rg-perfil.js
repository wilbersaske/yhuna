import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
var handler = async (m, { conn }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => imagen1)
let { premium, level, chocolates, exp, lastclaim, registered, regTime, age, role } = global.db.data.users[m.sender]
let username = conn.getName(who)
let noprem = `
⚡ *PERFIL DE USUARIO*
🩵 *Nombre:* ${username}
💎 *Tag:* @${who.replace(/@.+/, '')}
✨ *Registrado:* ${registered ? '✅': '❌'}

🏆 *RECURSOS*
💎 *Diamantes:* ${chocolates}
⚡ *Nivel:* ${level}
✨ *Experiencia:* ${exp}
🌟 *Rango:* ${role}

💫 *Premium:* ${premium ? '✅': '❌'}
`.trim()
let prem = `╭──⪩ 𝐔𝐒𝐔𝐀𝐑𝐈𝐎 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 ⪨
│⧼👤⧽ *Usuario:* 「${username}」
│⧼💌⧽ *Registrado:* ${registered ? '✅': '❌'}
│⧼🔱⧽ *VIP:* Vip 👑
╰───⪨

╭────⪩ 𝐑𝐄𝐂𝐔𝐑𝐒𝐎𝐒 ⪨
│⧼💎⧽ *Diamantes:* ${chocolates}
│⧼🔰⧽ *Nivel:* ${level}
│⧼💫⧽ *Exp:* ${exp}
│⧼⚜️⧽ *Rango:* ${role}
╰───⪨ * ᵐᵃᵏⁱᵐᵃ ᵇᵒᵗ* ⪩`.trim()
conn.sendFile(m.chat, pp, 'perfil.jpg', `${premium ? prem.trim() : noprem.trim()}`, m, rcanal, { mentions: [who] })
}
handler.help = ['profile']
handler.register = true
handler.tags = ['rg']
handler.command = ['profile', 'perfil']
export default handler
