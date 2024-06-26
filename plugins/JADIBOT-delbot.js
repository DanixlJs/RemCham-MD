import { promises as fs } from 'fs';
import path from 'path';
async function handler(m, { conn }) {
  const targetJid = m.sender;
  const targetUser = `${targetJid.split('@')[0]}`;
  if (global.conn.user.jid !== conn.user.jid) {
    return conn.sendMessage(m.chat, {
      text: "✧ Este comando solo se puede usar en el Bot Principal."
    }, {
      quoted: m
    });
  } else {
    await conn.sendMessage(m.chat, {
      text: "❀ Eliminando Datos del SubBot."
    }, {
      quoted: m
    });
  }
  try {
    await fs.rmdir(path.join('./JadiBotSessions/', targetUser), {
      recursive: true,
      force: true
    });
    await conn.sendMessage(m.chat, {
      text: "❀ Se cerró la sesión y se eliminaron todos los Datos del SubBot."
    }, {
      quoted: m
    });
  } catch (error) {
    console.error(error);
    m.reply('✧ Ocurrió un error inesperado.');
  }
};
handler.help = ['delbot'];
handler.command = ['delbot'];
handler.tags = ['jadibot'];
handler.registrado = true;
handler.disabled = true;
handler.private = true;
export default handler;
