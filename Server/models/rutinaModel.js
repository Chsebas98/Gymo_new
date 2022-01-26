const mongoose = require("mongoose");
const rutinaSchema = new mongoose.Schema(
	{
		name_rt: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
			trim: true,
		},
		description_rt: {
			type: String,
			required: true,
		},
		categoria: {
			type: String,
			required: true,
			trim: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Rutina", rutinaSchema);
