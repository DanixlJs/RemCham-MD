let handler = async (m, { conn, text }) => {
if ( m.sender === conn.user.jid) return
   if (!text) return m.reply(`✧ Ingresa la nueva biografía del Bot.`)
     try {
                await conn.updateProfileStatus(text).catch(_ => _)
                conn.reply(m.chat, `❀ Biografía actualizada con éxito.`, m)
} catch {
       throw '✧ Ocurrió un error inesperado.'
     }
}

handler.help = ['setbotbio <texto>']
handler.tags = ['owner']
handler.command = ['setbiobot']
handler.owner = true
handler.registrado = true

export default handler