import { WAMessageStubType } from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return !0;

  let who = m.messageStubParameters[0]
  let taguser = `@${who.split('@')[0]}`
  let chat = global.db.data.chats[m.chat]
  let pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => 'https://files.catbox.moe/3nqn5d.jpg')
  let img = await (await fetch(`${pp}`)).buffer()

    if (chat.welcome && m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_ADD) {
      let bienvenida = `💎 *BIENVENID@* a ${groupMetadata.subject}\n\n➪ ${taguser}\n\n• 𝖲𝖨 𝗎𝗌𝖺𝗌 𝗆𝗎𝗰𝗁𝗈 𝖺𝗅 𝖻𝗼𝗍 𝗀𝖺𝗇𝗮𝗋𝖺𝗌 𝖷𝗣.\n\n> MAKIMA BOT MD.`
      await conn.sendMessage(m.chat, { image: img, caption: bienvenida, mentions: [who] })
    }
       
    if (chat.welcome && m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_LEAVE) {
      let bye = `💎 *Adiós* de ${groupMetadata.subject}\n ➪ ${taguser}\n\n• Vuelve cuando quieras.\n\n> MAKIMA BOT MD.`
      await conn.sendMessage(m.chat, { image: img, caption: bye, mentions: [who] })
    }

    if (chat.welcome && m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_REMOVE) { 
      let kick = `💎 *Adiós* de ${groupMetadata.subject}\n ➪ ${taguser}\n\n• Vuelve cuando quieras.\n\n> MAKIMA BOT MD.`
      await conn.sendMessage(m.chat, { image: img, caption: kick, mentions: [who] })
  }}
