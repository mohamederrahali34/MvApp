mongoose = require("mongoose");

const mvSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	nom: { type: String, required: true },
	Ip: { type: String, required: true },
	OS: { type: String, required: false },
	etat: { type: Number, required: true },
});

const mv = mongoose.model("Mv", mvSchema);

module.exports = mv;
