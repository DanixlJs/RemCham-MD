import MessageType from '@whiskeysockets/baileys'
import { generateWAMessageFromContent } from '@whiskeysockets/baileys'

let handler = async (m, { conn, text, participants }) => {
let users = participants.map(u => conn.decodeJid(u.id))
let q = m.quoted ? m.quoted : m
let c = m.quoted ? m.quoted : m.msg

 if (!text) return m.reply('✧ Ingresa un texto.')
 
 const msg = conn.cMod(m.chat,
generateWAMessageFromContent(m.chat, {
[c.toJSON ? q.mtype : 'extendedTextMessage']: c.toJSON ? c.toJSON() : {
text: c || ''
}
}, {
quoted: m,
userJid: conn.user.id
}),
text || q.text, conn.user.jid, { mentions: users }
)
await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id })
}

handler.help = ['hidetag <texto>', 'tag <texto>']
handler.tags = ['grupo']
handler.command = ['hidetag', 'tag'] 
handler.group = true
handler.admin = true
handler.registrado = true

export default handler 