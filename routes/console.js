const express = require("express");
const router = express.Router();
const consoleController = require("../controllers/console");

router.get("/pagina", consoleController.getPage);

router.post("/validacion", consoleController.postAngles);

module.exports = router;