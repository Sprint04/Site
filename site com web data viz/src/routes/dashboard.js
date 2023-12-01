var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/obterDadosGraficoCPU/:idEmpresa", function (req, res) {
    dashboardController.buscarUltimasMedidasCPU(req, res);
});

router.get("/obterDadosGraficoRAM/:idEmpresa", function (req, res) {
    dashboardController.buscarUltimasMedidasRAM(req, res);
});

router.get("/obterDadosGraficoDISCO/:idEmpresa", function (req, res) {
    dashboardController.buscarUltimasMedidasDISCO(req, res);
});

router.get("/disco_tempo-real/:idEmpresa", function (req, res) {
    dashboardController.buscarTempoRealDisco(req, res);
});

router.get("/cpu_tempo-real/:idEmpresa", function (req, res) {
    dashboardController.buscarTempoRealCpu(req, res);
});

router.get("/ram_tempo-real/:idEmpresa", function (req, res) {
    dashboardController.buscarTempoRealRam(req, res);
});

router.get("/obterDadosGraficoNathan/:idEmpresa", function (req, res) {
    dashboardController.buscarUltimasMedidasNathan(req, res);
});

router.get("/obter_dados_rede/:idDispositivo", function (req, res) {
    dashboardController.buscar_dados_rede(req, res);
});

router.get("/obter_dados_cpu/:idDispositivo", function (req, res) {
    dashboardController.buscar_dados_cpu(req, res);
});

router.get("/obter_dados_ram/:idDispositivo", function (req, res) {
    dashboardController.buscar_dados_ram(req, res);
});

router.get("/obter_dados_disco/:idDispositivo", function (req, res) {
    dashboardController.buscar_dados_disco(req, res);
});

router.get("/tempo_real_rede/:idDispositivo", function (req, res) {
    dashboardController.tempo_real_rede(req, res);
});

router.get("/tempo_real_cpu/:idDispositivo", function (req, res) {
    dashboardController.tempo_real_cpu(req, res);
});

router.get("/tempo_real_ram/:idDispositivo", function (req, res) {
    dashboardController.tempo_real_ram(req, res);
});

router.get("/tempo_real_disco/:idDispositivo", function (req, res) {
    dashboardController.tempo_real_disco(req, res);
});

router.post("/ultimosCpu/:idDispositivo", function (req, res){
    dashboardController.recuperarCpu(req, res);
});

router.post("/ultimosRam/:idDispositivo", function (req, res){
    dashboardController.recuperarRam(req, res);
});

router.post("/ultimosDisco/:idDispositivo", function (req, res){
    dashboardController.recuperarDisco(req, res);
});

router.post("/ultimosRede/:idDispositivo", function (req, res){
    dashboardController.recuperarRede(req, res);
});

router.get("/buscarDispositivos/:idEmpresa", function (req, res){
    dashboardController.buscarDispositivo(req, res);
});
router.get("/tempo_real_cesar", function (req, res) {
    dashboardController.tempo_real_cesar(req, res);
});
router.get("/obter_dados_cesar", function (req, res) {
    dashboardController.buscar_dados_cesar(req, res);
});

module.exports = router;