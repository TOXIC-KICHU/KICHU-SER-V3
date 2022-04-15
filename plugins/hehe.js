let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*Come on, what are you going to do with it?*
*Here, thanks, I'm so sorry you press y, that's the link*
*https://github.com/Itsme-soman/KICHU-SER-V3*
`.trim()
        {
          await conn.sendButtonText(m.chat,`@${global.conn.user.jid.split('@')[0]} *Deploy it bro✨👣*`.trim(), '©κιcнusᴇʀ', 'TAKE IT BRO', 'TNX FOR SPRT', m)
        }

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*Hehe*', 'status@broadcast', 'thumbnail')
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
 
