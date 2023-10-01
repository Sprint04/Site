var express = require("express");
var router = express.Router();

var enderecoController = require("../controllers/enderecoController");

router.post("/autenticarEndereco", function (req, res){
    enderecoController.autenticarEndereco(req, res);
});

module.exports = router;