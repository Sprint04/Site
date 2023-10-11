var express = require("express");
var router = express.Router();

var cartaoController = require("../controllers/cartaoController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
  cartaoController.cadastrar(req, res);
})

router.post("/listar", function (req, res) {
  cartaoController.listar(req, res);
});

module.exports = router;