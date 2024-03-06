const db = require("../database/models");
const Kategori = db.Kategori;

// Controller untuk menambahkan kategori baru
exports.create = (req, res) => {
    const kategori = {
        name: req.body.name,
    };

    //proses menyimpan kedalam database
    Kategori.create(kategori).then((data) => {
        res.json({
            message: "Kategori created succesfully.",
            data: data,
        });
    }).catch((err) => {
        res.status(500).json({
            message: err.message || "some error occurred while creating the kategori.",
            data: null,
        });
    });
};

exports.findAll = (req, res) => {
    Kategori.findAll({
        atributes: { exclude: ['password'] }
    }).then((kategoris) => {
        res.json({
            message: "Kategori retrived successfully.",
            data: kategoris,
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
    const kategoriData = {
        name: req.body.name,
    };

    Kategori.update(kategoriData, {
        where: { id },
    }).then((num) => {
        if (num == 1) {
            res.json({
                message: "Kategori updated successfully.",
                data: kategoriData, // Return the updated data
            });
        } else {
            res.json({
                message: `Cannot update Kategori with id=${id}. Maybe Kategori was not found or req.body is empty!`,
                data: kategoriData,
            });
        }
    }).catch((err) => {
        res.status(500).json({
            message: err.message || "Some error occurred while updating the kategori.",
            data: null,
        });
    });
};

// DELETE: Menghapus data sesuai id yang dikirimkan
exports.delete = (req, res) => {
    const id = req.params.id;
    Kategori.destroy({
        where: { id },
    }).then((num) => {
        if (num == 1) {
            res.json({
                message: "Kategori deleted successfully.",
                data: req.body,
            });
        } else {
            res.json({
                message: `Cannot delete user with id=${id}. Maybe kategori was not found!`,
                data: req.body,
            });
        }
    }).catch((err) => {
        res.status(500).json({
            message: err.message || "Some error occurred while deleting the kategori.",
            data: null,
        });
    });
};

// BONUS ===> Mengambil data sesuai id yang dikirimkan
exports.findOne = (req, res) => {
    Kategori.findByPk(req.params.id).then((kategori) => {
        res.json({
            message: "kategori retrieved successfully.",
            data: kategori,
        });
    }).catch((err) => {
        res.status(500).json({
            message: err.message || "Some error occurred while retrieving kategori.",
            data: null,
        });
    });
};
