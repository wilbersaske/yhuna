import {toAudio} from '../lib/converter.js';
const handler = async (m, {conn, usedPrefix, command}) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (q || q.msg).mimetype || q.mediaType || '';
  if (!/video|audio/.test(mime)) throw `*🩵 ̸̷᮫໊᷐͢᷍ᰍ  Responde a la nota de voz que deseas convertir en Audio/MP3.*`;
  const media = await q.download();
  if (!media) throw '*✖️ Disculpa\n\nOcurrio un error al intentar descargar tu video.\n\nVuelve a intentarlo.*';
  const audio = await toAudio(media, 'mp4');
  if (!audio.data) throw '*✖️ Disculpa\n\nOcurrio un grabe error al intentar convertir tu nota de voz a MP3, vuelve a intentarlo.*';
  conn.sendMessage(m.chat, {audio: audio.data, mimetype: 'audio/mpeg'}, {quoted: m});
};
handler.alias = ['tomp3', 'toaudio'];
handler.command = ['tomp3','toaudio'];
handler.register = true
export default handler;
