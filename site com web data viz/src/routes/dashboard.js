var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/obterDadosGrafico/", function (req, res) {
    dashboardController.buscarUltimasMedidas(req, res);
})

module.exports = router;