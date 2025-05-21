const handler = async (m, {conn, isAdmin, groupMetadata }) => {
  if (isAdmin) return m.reply('🩵 *Ya eres administrador\n\n>MakimaBot*.',m, rcanal);
  try {
    await conn.groupParticipantsUpdate(m.chat, [m.sender], 'promote');

   // m.reply('🩵 *Listo ya te puse de admin*.', m);

  } catch {
    m.reply('💎 Ah ocurrido un error.');
  }
};
handler.tags = ['mods'];
handler.help = ['autoadmin'];
handler.command = ['autoadmin'];
handler.rowner = true;
handler.botAdmin = true;
export default handler;
