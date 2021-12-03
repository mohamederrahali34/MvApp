const mv = require("../model/mv");
var mongoose = require("mongoose");

getMvs = (req, res) => {
	mv.find({}, function (err, docs) {
		if (err) res.send("server error !");
		else res.status(200).send(docs);
	});
};
changeSate = (req, res) => {
	var myquery = { nom: req.body.nom };
	var newvalues = { $set: { etat: req.body.etat == 1 ? 0 : 1 } };

	mv.updateOne(myquery, newvalues, (err, result) => {
		if (err) {
			res.status(500).send("error in server");
			console.log("error in server");
		} else {
			res.status(200).send("mv updated !!");

			console.log("mv updated !!");
		}
	});
};
saveMv = (req, res) => {
	console.log("adding Mv ...............");
	const newMv = new mv({
		_id: mongoose.Types.ObjectId(),
		nom: req.body.nom,
		Ip: req.body.Ip,
		OS: req.body.OS,
		etat: req.body.etat,
	});
	newMv.save((err) => {
		if (err) res.status(500).send(false);
		else res.status(200).json(true);
	});
};

module.exports = { getMvs, saveMv, changeSate };
