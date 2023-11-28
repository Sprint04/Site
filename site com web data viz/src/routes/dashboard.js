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

router.get("/obter_dados_rede", function (req, res) {
    dashboardController.buscar_dados_rede(req, res);
});

router.get("/obter_dados_cpu", function (req, res) {
    dashboardController.buscar_dados_cpu(req, res);
});

router.get("/obter_dados_ram", function (req, res) {
    dashboardController.buscar_dados_ram(req, res);
});

router.get("/obter_dados_disco", function (req, res) {
    dashboardController.buscar_dados_disco(req, res);
});

router.get("/tempo_real_rede", function (req, res) {
    dashboardController.tempo_real_rede(req, res);
});

router.get("/tempo_real_cpu", function (req, res) {
    dashboardController.tempo_real_cpu(req, res);
});

router.get("/tempo_real_ram", function (req, res) {
    dashboardController.tempo_real_ram(req, res);
});

router.get("/tempo_real_disco", function (req, res) {
    dashboardController.tempo_real_disco(req, res);
});

router.post("/ultimosCpu", function (req, res){
    dashboardController.recuperarCpu(req, res);
});

router.post("/ultimosRam", function (req, res){
    dashboardController.recuperarRam(req, res);
});

router.post("/ultimosDisco", function (req, res){
    dashboardController.recuperarDisco(req, res);
});

router.post("/ultimosRede", function (req, res){
    dashboardController.recuperarRede(req, res);
});

module.exports = router;