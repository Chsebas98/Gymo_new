const mongoose = require("mongoose");
const recetaSchema = new mongoose.Schema(
	{
		name_rc: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
			trim: true,
		},
		description_rc: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Receta", recetaSchema);
