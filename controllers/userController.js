const db = require("../database/models");
const User = db.User;
const bcrypt = require("bcrypt");

//CREATE: untuk menambahkan data ke dalam tabel user
exports.create = (req, res) => {
    const user = {
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        role: req.body.role ? req.body.role : false,
    };

    //proses menyimpan kedalam database
    User.create(user).then((data) => {
        res.json({
            message: "User created succesfully.",
            data: data,
        });
    }).catch((err) => {
        res.status(500).json({
            message: err.message || "some error occurred while creating the user.",
            data: null,
        });
    });
};

// Read: menampilkan atau mengambil semua data sesuai model dari  database
exports.findAll = (req, res) => {
    User.findAll({
        atributes: { exclude: ['password'] }
    }).then((users) => {
        res.json({
            message: "User retrived successfully.",
            data: users,
        });
    }).catch((err) => {
        res.status(500).json({
            message: err.message || "some error occurred while retrieving users.",
            data: null,
        });
    });
};

// UPDATE: Merubah data sesuai dengan id yang dikirimkan sebagai params 
exports.update = (req, res) => {
    const id = req.params.id;

    // If the password is included in the request body, hash it before updating
    if (req.body.password) {
        req.body.password = bcrypt.hashSync(req.body.password, 10);
    }

    // Fields for updating user data
    const userData = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password, // Updated password (hashed if present in the request)
        role: req.body.role ? req.body.role : false,
        // Add other fields as needed
    };

    User.update(userData, {
        where: { id },
    }).then((num) => {
        if (num == 1) {
            res.json({
                message: "User updated successfully.",
                data: userData, // Return the updated data
            });
        } else {
            res.json({
                message: `Cannot update user with id=${id}. Maybe user was not found or req.body is empty!`,
                data: userData,
            });
        }
    }).catch((err) => {
        res.status(500).json({
            message: err.message || "Some error occurred while updating the user.",
            data: null,
        });
    });
};

// DELETE: Menghapus data sesuai id yang dikirimkan
exports.delete = (req, res) => {
    const id = req.params.id;
    User.destroy({
        where: { id },
    }).then((num) => {
        if (num == 1) {
            res.json({
                message: "User deleted successfully.",
                data: req.body,
            });
        } else {
            res.json({
                message: `Cannot delete user with id=${id}. Maybe user was not found!`,
                data: req.body,
            });
        }
    }).catch((err) => {
        res.status(500).json({
            message: err.message || "Some error occurred while deleting the user.",
            data: null,
        });
    });
};

// BONUS ===> Mengambil data sesuai id yang dikirimkan
exports.findOne = (req, res) => {
    User.findByPk(req.params.id).then((user) => {
        res.json({
            message: "user retrieved successfully.",
            data: user,
        });
    }).catch((err) => {
        res.status(500).json({
            message: err.message || "Some error occurred while retrieving user.",
            data: null,
        });
    });
};