function handler(m) {
  this.sendContact(m.chat, +91 99618 57267, KICHU SER + '@s.whatsapp.net'), m)
  this.sendContact(m.chat, +91 96339 27168, NIHAL + '@s.whatsapp.net'), m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
