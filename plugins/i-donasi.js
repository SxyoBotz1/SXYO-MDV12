let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, `
╭─「 Donasi • Dana 」
│ • Xl     [6287793236775]
│ • Gopay  [6285338890541]
│ • tlkm   [6282147562437]
│ • Saweria  [https://saweria.co/sxylbotz9]
╰────
╭─「 *NOTE* 」
│ > Ingin donasi? Wa.me/6287793236775
│ _Hasil donasi akan digunakan buat sewa_
│ _atau beli *RDP/VPS* agar bot bisa jalan_
│ _24jam tanpa kendala_
╰────
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
