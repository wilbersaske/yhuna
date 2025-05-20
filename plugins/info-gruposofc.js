let media = './src/Grupo.jpg'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
   // await conn.sendMessage(m.chat, { react: { text: '🩵', key: m.key } })
 await m.react('🩵')
let str = `*🩵 GRUPO OFICIAL*

   *_🩵̶۫̄͟Ⓜ︎𝐌𝐚𝐤𝖎𝖒𝔞 🝮︎︎︎︎︎︎︎ 𝐁o͟t͜͡么͟͞──_*
  ┃🧸❏ https://chat.whatsapp.com/DEGsbJYf7BBDe8c7R2dUxU


   *_Canal Oficial_*
┃🩵❏ https://whatsapp.com/channel/0029VbAa5sNCsU9Hlzsn651S
`
await conn.sendButton(m.chat, str, `͟͞𓆩‌۫᷼ ִֶָღܾ݉͢ғ꯭ᴇ꯭፝ℓɪ꯭ͨא𓆪\n` + wm, media, [
['🩵Menu Lista🩵', '/lista']], null, [
['─̄͟͞⛛̵̅𝐌𝐚𝐤𝖎𝖒𝔞 ✠ 𝐁o͟t͜͡─̄͟͞🩵', `${md}`]], fkontak)}
                      
handler.command = ['grupos','linksk','gruposofc','gruposoficiales']
handler.register = true
handler.exp = 33

export default handler
