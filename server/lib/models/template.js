import mongoose from "mongoose";

const templateSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			minlength: 1,
			maxlength: 50,
			trim: true,
		},
		summary: {
			type: String,
			required: false,
			minlength: 1,
			maxlength: 400,
			trim: false,
		},
		templateData: {
			type: Object,
			required: true,
		},
	},
	{
		toJSON: {
			transform: function (doc, obj) {
				obj.id = obj._id;
				delete obj._id;
				delete obj.__v;
			},
		},
	}
);

templateSchema.pre("save", function (next) {
	const template = this; // only works because this _isn't_ an arrow function. Gotta love JS.
	console.log(template);
	// TODO: Check to make sure templateData is valid, recursively
	//       throw error if not valid
	try {
		if (typeof template !== object) {
			throw new Error("template not an object");
		}

        if (template.container) {
            validateContainer(container)
        }
	} catch (err) {
		console.log("Error", err);
	}
	next();
});

const Template = mongoose.model("Template", templateSchema);

export default Template;
