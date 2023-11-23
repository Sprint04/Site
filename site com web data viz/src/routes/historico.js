var express = require("express");
var router = express.Router();

var historicoController = require("../controllers/historicoController");

router.get("/historico/:id", function (req, res) {
    historicoController.historico(req, res);
})
router.get("/funcionario/:id", function (req, res) {
    historicoController.funcionario(req, res);
})
router.get("/removerFuncionario/:id/:id2", function (req, res) {
    historicoController.remover(req, res);
})
router.get("/cargo/:id", function (req, res) {
    historicoController.cargo(req, res);
})
router.get("/user/:id", function (req, res) {
    historicoController.user(req, res);
})
router.get("/processo/:id", function (req, res) {
    historicoController.processo(req, res);
})
router.get("/ocorrencia/:id", function (req, res) {
    historicoController.ocorrencia(req, res);
})
router.get("/removerProcesso/:nome/:id", function (req, res) {
    historicoController.removerProcesso(req, res);
})
router.post("/adicionarProcesso", function (req, res) {
    historicoController.adicionarProcesso(req, res);
})

module.exports = router;