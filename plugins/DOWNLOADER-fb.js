import fetch from 'node-fetch'
import { facebook } from '@xct007/frieren-scraper'

var handler = async (m, { conn, args, command, usedPrefix, text }) => {
if (m.sender === conn.user.jid) return;

let vid
const isCommand7 = /^(facebook|fb|facebookdl|fbdl)$/i.test(command)

async function reportError(e) {
await conn.reply(m.chat, `✧ Ocurrió un error inesperado.`, m, fake, )
console.log(e)
}

switch (true) {   
case isCommand7:
if (!text) return conn.reply(m.chat, `✧ Ingrese el Link del video que quiera descargar.`,m )
if (!args[0].match(/www.facebook.com|fb.watch|web.facebook.com|business.facebook.com|video.fb.com/g)) return conn.reply(m.chat, '✧ Link invalido.', m, fake, )
await conn.reply(m.chat, '❀ Procesando, espere un momento.', m, fake, )
m.react('🕒')
let messageType = checkMessageType(args[0])
let message = ''
switch (messageType) {
case 'groups':
message = '❀ Aquí tiene.'
break
case 'reel':
message = '❀ Aquí tiene.'
break
case 'stories':
message = '❀ Aquí tiene.'
break
case 'posts':
message = '❀ Aquí tiene.'
break
default:
message = '❀ Aquí tiene.'
break
}
try {
let res = await fetch(`https://api.lolhuman.xyz/api/facebook?apikey=BrunoSobrino&url=${args[0]}`)
let _json = await res.json()
vid = _json.result[0]
if (vid == '' || !vid || vid == null) vid = _json.result[1]
await conn.sendFile(m.chat, vid, 'error.mp4', `*${message}*`, m)
} catch (error1) {
try {
const d2ata = await facebook.v1(args[0])
let r2es = ''
if (d2ata.urls && d2ata.urls.length > 0) {
r2es = `${d2ata.urls[0]?.hd || d2ata.urls[1]?.sd || ''}`
}
await conn.sendFile(m.chat, r2es, 'error.mp4', `*${message}*`, m)
} catch (error2) {
try {
var get = await fetch(`https://api.botcahx.live/api/dowloader/fbdown?url=${args[0]}&apikey=QaepQXxR`)
var js = await get.json()
await conn.sendFile(m.chat, js.result.HD, 'error.mp4', `*${message}*`, m)
} catch (e) {
reportError(e)}
}}}

}
handler.help = ['fb <link>']
handler.tags = ['downloader']
handler.command = ['faceboook', 'fb']
handler.registrado = true
handler.diamantes = 10

export default handler

function checkMessageType(url) {
if (url.includes('www.facebook.com')) {
if (url.includes('/groups/')) {
return 'groups'
} else if (url.includes('/reel/')) {
return 'reel'
} else if (url.includes('/stories/')) {
return 'stories'
} else if (url.includes('/posts/')) {
return 'posts'
}}
return 'default'
}