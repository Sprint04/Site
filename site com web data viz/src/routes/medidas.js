var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.post("/ultimosProcessos", function (req, res){
    medidaController.recuperarProcessos(req, res);
});

router.post("/ultimosCpu", function (req, res){
    medidaController.recuperarCpu(req, res);
});

router.get("/ultimas_temperatura", function (req, res) {
    medidaController.buscarUltimasMedidas_temperatura(req, res);
});

router.get("/tempo-real_temperatura", function (req, res) {
    medidaController.buscarMedidasEmTempoReal_temperatura(req, res);
});

module.exports = router;