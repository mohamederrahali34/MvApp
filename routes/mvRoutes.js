const express = require("express");
const router = express.Router();
const MvController = require("../controllers/mvController");

router.post("/newmv", (req, res) => {
	MvController.saveMv(req, res);
});
router.get("/mvs", (req, res) => {
	MvController.getMvs(req, res);
});
router.post("/change", (req, res) => {
	MvController.changeSate(req, res);
});
module.exports = router;
