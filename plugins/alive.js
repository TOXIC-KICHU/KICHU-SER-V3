// ©KICHU
let fetch = require('node-fetch')
let fs = require('fs')
function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}

let handler  = async (m, { conn }) => {
  pplink = await conn.getProfilePicture(conn.user.jid)
  ppstatus = await conn.getStatus(conn.user.jid)
  totaluser = Object.keys(DATABASE.data.users)
  ppbuffer = await fetch(pplink).then(v => v.buffer())
  conn.sendMessage(m.chat, ppbuffer, 'imageMessage', { caption:`
ツ *ʙᴏᴛ ɴᴀᴍᴇ* : κιcнusᴇʀ v³
ツ *ɢʀᴏᴜᴘs ᴄʜᴀᴛs* : ${conn.chats.array.filter(v => v.jid.endsWith('g.us')).map(v => v.jid).length}
ツ *ᴘᴇʀsᴏɴᴀʟ ᴄʜᴀᴛs* : ${conn.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net')).map(v => v.jid).length}
ツ *ᴜsᴇʀ ᴛᴏᴛᴀʟ* : ${totaluser.length}
ツ *ᴡᴀ ᴡᴇʙ ɴᴀᴍᴇ* : ${conn.browserDescription[0]}
ツ *ᴡᴀ ᴡᴇʙ ᴠᴇʀsɪᴏɴ* : ${conn.browserDescription[2]}
ツ *ʙʀᴏᴡsᴇʀ* : ${conn.browserDescription[1]}
ツ *ᴜᴘᴛɪᴍᴇ ʙᴏᴛ* : ${clockString(process.uptime() * 1000)}
ツ *ʜᴏsᴛ ɴᴜᴍʙᴇʀ* : @${global.conn.user.jid.split('@')[0]}
ツ *ʙɪᴏ ʙᴏᴛ* : ${ppstatus.status}`, quoted: m, sendEphemeral: true, thumbnail: fs.readFileSync('https://telegra.ph/file/d4753818ba4a1d159c0a6.jpg'), contextInfo: { mentionedJid: [global.conn.user.jid]}})
}
handler.help = ['alive']
handler.tags = ['main']
handler.command = /^(alive)$/i
handler.fail = null

module.exports = handler
