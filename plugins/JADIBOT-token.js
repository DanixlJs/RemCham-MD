import fs from "fs"

async function handler(m, {usedPrefix}) {
if (m.sender === conn.user.jid) return

    const user = m.sender.split("@")[0]
    if (fs.existsSync("./JadiBotSessions/" + user + "/creds.json")) {
        let token = Buffer.from(fs.readFileSync("./JadiBotSessions/" + user + "/creds.json"), "utf-8").toString("base64")
        await m.reply(`✧ No compartas tu Token con nadie.\n✰ Tu Token es:`)
        await m.reply(token)
    } else {
        await m.reply(`✧ No tienes un Token activo.`)
    }
  }

  handler.command = ['token']
  handler.help = ['token']
  handler.tags = ['jadibot']
  handler.registrado = true
  handler.private = true

  export default handler
