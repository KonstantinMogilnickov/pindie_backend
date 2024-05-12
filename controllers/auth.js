const users = require('../models/user');
const jwt = require("jsonwebtoken");
const path = require("path");

const login = (req, res) => {
    const { email, password } = req.body;

    users
        .findUserByCredentials(email, password)
        .then((user) => {
            const token = jwt.sign({ _id: user._id }, "some-secret-key", {
                expiresIn: 3600
            });
            res.status(200).send({
                _id: user._id,
                username: user.username,
                email: user.email,
                jwt: token
            });
        })
        .catch(error => {
            res.status(401).send({ message: error.message });
        });
};

const sendMe = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(req.user));
};

const sendIndex = (req, res) => {
    if (req.cookies.jwt) {
        try {
            jwt.verify(req.cookies.jwt, "some-secret-key");
            return res.redirect("/admin/dashboard");
        } catch (err) {
            res.sendFile(path.join(__dirname, "../public/index.html"));
        }
    }
    res.sendFile(path.join(__dirname, "../public/index.html"));
};

const sendDashboard = (req, res) => {
    res.sendFile(path.join(__dirname, "../public/admin/dashboard.html"));
};

module.exports = { login, sendMe , sendIndex, sendDashboard};