const handler = (m) => m;
handler.before = async function(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner} ) {
  if (!m.isGroup) return !1;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[conn.user.jid] || {};
  if (isBotAdmin && chat.antiArab && !isAdmin && !isOwner && !isROwner) {
    if (m.sender.startsWith('212' || '212')) {
      m.reply(`✧ En este grupo no se permiten números con el Prefijo *212* por lo que serás eliminado.`)
      const responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      if (responseb[0].status === '404') return;
    }
    if (m.sender.startsWith('265' || '265')) {
      m.reply(`✧ En este grupo no se permiten números con el Prefijo *265* por lo que serás eliminado.`)
      const responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      if (responseb[0].status === '404') return;
    }
    if (m.sender.startsWith('92' || '92')) {
      m.reply(`✧ En este grupo no se permiten números con el Prefijo *92* por lo que serás eliminado.`)
      const responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      if (responseb[0].status === '404') return;
    }
  }
};
export default handler;
