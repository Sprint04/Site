var express = require("express");
var router = express.Router();

var historicoController = require("../controllers/historicoController");

router.get("/historico/:id", function (req, res) {
    historicoController.historico(req, res);
})

module.exports = router;