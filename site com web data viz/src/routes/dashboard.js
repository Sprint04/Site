var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/obterDadosGraficoCPU/:idEmpresa", function (req, res) {
    dashboardController.buscarUltimasMedidasCPU(req, res);
})

router.get("/obterDadosGraficoRAM/:idEmpresa", function (req, res) {
    dashboardController.buscarUltimasMedidasRAM(req, res);
})

router.get("/obterDadosGraficoDISCO/:idEmpresa", function (req, res) {
    dashboardController.buscarUltimasMedidasDISCO(req, res);
})
router.get("/disco_tempo-real/:idEmpresa", function (req, res) {
    dashboardController.buscarTempoRealDisco(req, res);
})
router.get("/cpu_tempo-real/:idEmpresa", function (req, res) {
    dashboardController.buscarTempoRealCpu(req, res);
})
router.get("/ram_tempo-real/:idEmpresa", function (req, res) {
    dashboardController.buscarTempoRealRam(req, res);
})

module.exports = router;