const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  const pesan = args.join` `;
  const oi = `✰ *Mensaje ⪼* ${pesan}`;
  let teks = `❀ *INVOCANDO GRUPO*\n${oi}\n\n◈ *Tag:*\n`;
  for (const mem of participants) {
    teks += `> @${mem.id.split('@')[0]}\n`;
  }
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['grupo'];
handler.command = ['tagall', 'invocar'];
handler.admin = true;
handler.group = true;
export default handler;
