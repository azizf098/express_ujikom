// Mengimpor modul dotenv untuk konfigurasi
require('dotenv').config()

// Mengimpor modul jsonwebtoken
const jwt = require('jsonwebtoken')

// Middleware untuk memverifikasi token
const verifyToken = async (req, res, next) => {

    // Cek jika header memiliki parameter authorization dengan format bearer
    if (req.headers.authorization) {
        // Mengambil token bearer dari header
        const token = req.headers.authorization.split(' ')[1]

        /* 
            Proses verifikasi token menggunakan secret key yang telah dibuat
            Jika terdapat kesalahan (error), akan mengirimkan respon dengan status 500
            Jika verifikasi berhasil, melanjutkan ke middleware atau endpoint berikutnya
        */
        jwt.verify(token, process.env.JWT_KEY, (err) => {
            if (err) {
                return res.status(500).send({ auth: false, message: err })
            }
            next()
        })
    } else {
        // Jika header tidak memiliki token, mengirim respon dengan status 401 (Unauthorized)
        res.status(401).send({
            auth: false,
            message: 'Token required'
        })
    }
}

// Mengekspor fungsi verifyToken agar dapat digunakan pada file lain
module.exports = { verifyToken };