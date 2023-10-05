var express = require("express");
var router = express.Router();

var enderecoController = require("../controllers/enderecoController");

router.post("/autenticarEndereco", function (req, res){
    enderecoController.autenticarEndereco(req, res);
});

router.post("/cadastrarComplemento", function (req, res){
    enderecoController.cadastrarComplemento(req, res);
});

router.post("/recuperarComplemento", function (req, res){
    enderecoController.recuperarComplemento(req, res);
});
module.exports = router;