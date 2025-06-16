import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = '' //Ejemplo: +573218138672
global.confirmCode = ''

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.owner = [
  ['51931651504', '🩵CREADOR🩵', true],
  ['51931651504', 'DIONEIBI-RIP', true],
  ['51931651504', 'BrayanOfC', true],
  ['51931651504', 'JonathanG', true],
  ['51931651504', 'Abraham Ch', true], 
  ['51931651504', 'HaroldOfc', true], 
  ['51931651504', '💖💝 Y⃟o⃟ S⃟o⃟y⃟ Y⃟o⃟ 💝 💖', true],  
  ['18293142989', 'Makima oficial Bot', true], 
  ['18293142989', 'M500 ULTRA BOT', true],
  ['18293142989', 'Félix Manuel 2.0', true],
  ['176742836768966', 'SoyMaycol', true],
];

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.mods = ['18293142989', '18293142989', '18293142989', '18293142989', '18293142989']
global.suittag = ['584120346669']
global.prems = []
global.numcreador = '+51 931 651 504'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.libreria = 'Baileys'
global.baileys = 'V 6.7.9' 
global.languaje = 'Español'
global.vs = '2.1.5'
global.vsJB = '5.0'
global.nameqr = 'ঔৣ͜͡ீ͜❥🌺𝐁𝐎𝐓 𝐒𝐄𝐓︦︦𝐒𝐔𝐍𝐀˚'
global.namebot = 'ঔৣ͜͡ீ͜❥🌺𝐁𝐎𝐓 𝐒𝐄𝐓︦︦𝐒𝐔𝐍𝐀˚'
global.sessions = 'MeguminSession'
global.jadi = 'MeguminJadiBot'
global.meguminJadibts = true

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.packsticker =`°.⎯⃘̶⎯̸⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸.°\n✦ Bσƚ: Makima\n✦ Creador: Félix\n♾━━━━━━━━`
global.packsticker2 = `━━━━━━━━♾\n─̄͟͞⛛̵̅𝐌𝐚𝐤𝖎𝖒𝔞 ✠ 𝐁o͟t͜͡─̄͟͞🩵\nFélix Manuel\n⇝ ${moment.tz('america/Los_angeles').format('DD/MM/YY')}\n⇝ ${moment.tz('America/Los_angeles').format('HH:mm:ss')} \n°.⎯⃘̶⎯̸⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸.°\n\nѕτιϲκєя ϐγ: 𝐌A͜͡𝑲𝑖𝐌ꪖ - 𝐁o͟T͎ - 𝙼𝙳`

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.packname = `ঔৣ͜͡ீ͜❥🌺𝐁𝐎𝐓 𝐒𝐄𝐓︦︦𝐒𝐔𝐍𝐀˚`
global.botname = '─̄͟͞ঔৣ͜͡ீ͜❥🌺𝐁𝐎𝐓 𝐒𝐄𝐓︦︦𝐒𝐔𝐍𝐀˚'
global.wm = '🩵𝑩𝒚 ঔৣ͜͡🔥͜͡𝑲𝒆𝒊𝒍𝒊 𝒔.𝒓🔥᮫꫶ฺ໋⃜𝆹𝅦ۣ𝄁᭄'
global.author = 'Made with wilbersaske'
global.dev = '© ⍴᥆ᥕᥱrᥱძ ᑲᥡ Wilbersaske'
global.textbot = 'ঔৣ͜͡🔥͜͡𝑲𝒆𝒊𝒍𝒊 𝒔.𝒓🔥᮫꫶ฺ໋⃜𝆹𝅦ۣ𝄁᭄'

global.moneda = 'Diamantes'
global.welcom1 = 'Mucho gusto'
global.welcom2 = 'Good Bye'
global.banner = 'https://files.catbox.moe/nz7yzz.jpg'
global.catalogo = 'https://files.catbox.moe/nz7yzz.jpg'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.imagen1 = 'https://files.catbox.moe/1n7i9o.jpg'
global.imagen2 = 'https://files.catbox.moe/d7mnug.jpg'
global.imagen3 = 'https://files.catbox.moe/6u3zkv.jpg'
global.imagenadult = 'https://files.catbox.moe/sufqlc.jpg'
global.logo = 'https://files.catbox.moe/yuq36d.jpg'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.gp4 = 'https://chat.whatsapp.com/DEGsbJYf7BBDe8c7R2dUxU'
global.gp1 = 'https://chat.whatsapp.com/E1gpC3hj6ZkG0CCEZ4isRs' 
global.gp2 = 'https://chat.whatsapp.com/DEGsbJYf7BBDe8c7R2dUxU'
global.comunidad1 = 'https://chat.whatsapp.com/IEK8CGIqrI5L7KYtMGJNnx'
global.channel = 'https://whatsapp.com/channel/0029VbAYhpiDJ6HAM3YDi32i'
global.channel2 = 'https://whatsapp.com/channel/0029VbAYhpiDJ6HAM3YDi32i'
global.md = 'https://whatsapp.com/channel/0029VbAYhpiDJ6HAM3YDi32i'
global.correo = 'wilbersaske@gmail.com'
global.cn ='https://chat.whatsapp.com/IEK8CGIqrI5L7KYtMGJNnx';

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: '❀ ᥎ᥱgᥱ𝗍ᥲ-𝑏𝑜𝑡-𝑀𝐵2.0 ☄︎︎', orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.ch = {
ch1: '120363401697981206@newsletter',
ch2: '120363418804796632@newsletter',
}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment   

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase();
    const emot = {
      level: '🌟 Nivel',
      coin: '💸 Coin',
      exp: '✨ Experiencia',
      bank: '🏦 Banco',
      diamond: '💎 Diamante',
      health: '❤️ Salud',
      kyubi: '🌀 Magia',
      joincount: '💰 Tokens',
      emerald: '♦️ Esmerala',
      stamina: '⚡ Energía',
      role: '⚜️ Rango',
      premium: '🎟️ Premium',
      pointxp: '📧 Puntos Exp',
      gold: '👑 Mot',
      iron: '⛓️ Hierro',
      coal: '🌑 Carbón',
      stone: '🪨 Piedra',
      potion: '🥤 Poción',
    };
    const results = Object.keys(emot).map((v) => [v, new RegExp(v, 'gi')]).filter((v) => v[1].test(string));
    if (!results.length) return '';
    else return emot[results[0][0]];
  }};
global.rpgg = { 
  emoticon(string) {
    string = string.toLowerCase();
    const emott = {
      level: '🌟',
      coin: '💸',
      exp: '✨',
      bank: '🏦',
      diamond: '💎',
      health: '❤️',
      kyubi: '🌀',
      joincount: '💰',
      emerald: '♦️',
      stamina: '⚡',
      role: '⚜️',
      premium: '🎟️',
      pointxp: '📧',
      gold: '👑',
      iron: '⛓️',
      coal: '🌑',
      stone: '🪨',
      potion: '🥤',
    };
    const results = Object.keys(emott).map((v) => [v, new RegExp(v, 'gi')]).filter((v) => v[1].test(string));
    if (!results.length) return '';
    else return emott[results[0][0]];
  }};  

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.multiplier = 69
global.maxwarn = '3'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
