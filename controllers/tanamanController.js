const db = require("../database/models");
const tanaman = db.tanaman;

// Controller untuk menambahkan kategori baru
exports.create = (req, res) => {
    const tanamann = {
        name: req.body.name,
        deskripsi: req.body.deskripsi,
        id_kategori: req.body.id_kategori
    };

    //proses menyimpan kedalam database
    tanaman.create(tanamann).then((data) => {
        res.json({
            message: "Tanaman created succesfully.",
            data: data,
        });
    }).catch((err) => {
        res.status(500).json({
            message: err.message || "some error occurred while creating the tanaman.",
            data: null,
        });
    });
};

exports.findAll = (req, res) => {
    tanaman.findAll({
        atributes: { exclude: ['password'] }
    }).then((tanamans) => {
        res.json({
            message: "Kategori retrived successfully.",
            data: tanamans,
        });
    }).catch((err) => {
        res.status(500).json({
            message: err.message || "some error occurred while retrieving kategories.",
            data: null,
        });
    });
};

exports.update = (req, res) => {
    const id = req.params.id;

    // If the password is included in the request body, hash it before updating
    if (req.body.password) {
        req.body.password = bcrypt.hashSync(req.body.password, 10);
    }

    // Fields for updating user data
    const tanamanData = {
        name: req.body.name,
        deskripsi: req.body.deskripsi,
        id_kategori: req.body.id_kategori
    };

    tanaman.update(tanamanData, {
        where: { id },
    }).then((num) => {
        if (num == 1) {
            res.json({
                message: "Kategori updated successfully.",
                data: tanamanData, // Return the updated data
            });
        } else {
            res.json({
                message: `Cannot update Kategori with id=${id}. Maybe Kategori was not found or req.body is empty!`,
                data: tanamanData,
            });
        }
    }).catch((err) => {
        res.status(500).json({
            message: err.message || "Some error occurred while updating the kategori.",
            data: null,
        });
    });
};

// // DELETE: Menghapus data sesuai id yang dikirimkan
// exports.delete = (req, res) => {
//     const id = req.params.id;
//     Kategori.destroy({
//         where: { id },
//     }).then((num) => {
//         if (num == 1) {
//             res.json({
//                 message: "Kategori deleted successfully.",
//                 data: req.body,
//             });
//         } else {
//             res.json({
//                 message: `Cannot delete user with id=${id}. Maybe kategori was not found!`,
//                 data: req.body,
//             });
//         }
//     }).catch((err) => {
//         res.status(500).json({
//             message: err.message || "Some error occurred while deleting the kategori.",
//             data: null,
//         });
//     });
// };

// // BONUS ===> Mengambil data sesuai id yang dikirimkan
// exports.findOne = (req, res) => {
//     Kategori.findByPk(req.params.id).then((kategori) => {
//         res.json({
//             message: "kategori retrieved successfully.",
//             data: kategori,
//         });
//     }).catch((err) => {
//         res.status(500).json({
//             message: err.message || "Some error occurred while retrieving kategori.",
//             data: null,
//         });
//     });
// };
