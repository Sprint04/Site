var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrarUsuario", function (req, res) {
    usuarioController.cadastrarUsuario(req, res);
})

router.post("/recuperarUsuario", function (req, res) {
    usuarioController.recuperarUsuario(req, res);
});

router.post("/cadastrarTelefone", function (req, res){
    usuarioController.cadastrarTelefone(req, res)
});

module.exports = router;