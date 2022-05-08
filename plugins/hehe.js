let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*Hey vro u want script?*
*Vro deploy it😼!!*
*https://github.com/TOXIC-KICHU/KICHU-SER-V3*
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*Nthada mwonu nokkunne😹*', 'status@broadcast', 'thumbnail')
}
handler.help = ['git']
handler.tags = ['tutor']
handler.command = /^(git)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler
 
