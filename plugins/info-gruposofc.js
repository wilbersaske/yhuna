let media = './src/Grupo.jpg'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
   // await conn.sendMessage(m.chat, { react: { text: '🩵', key: m.key } })
 await m.react('🩵')
let str = `*🩵 GRUPO OFICIAL*

   *_̶۫̄͟ঔৣ͜͡ீ͜❥🌺𝐁𝐎𝐓 𝐒𝐄𝐓︦︦𝐒𝐔𝐍𝐀么͟͞──_*
  ┃🧸❏ https://chat.whatsapp.com/K6z5EvV3EXkGdTzYwn8VU6


   *_Canal Oficial_*
┃🩵❏ https://whatsapp.com/channel/0029VbAYhpiDJ6HAM3YDi32i
`
await conn.sendButton(m.chat, str, `͟͞𓆩‌۫᷼𝑩𝒚 ঔৣ͜͡🔥͜͡𝑲𝒆𝒊𝒍𝒊 𝒔.𝒓🔥᮫꫶ฺ໋⃜𝆹𝅦ۣ𝄁᭄\n` + wm, media, [
['🩵Menu Lista🩵', '/lista']], null, [
['─̄͟͞ঔৣ͜͡ீ͜❥🌺𝐁𝐎𝐓 𝐒𝐄𝐓︦︦𝐒𝐔𝐍𝐀˚─̄͟͞🩵', `${md}`]], fkontak)}
                      
handler.command = ['grupos','linksk','gruposofc','gruposoficiales']
handler.register = true
handler.exp = 33

export default handler
