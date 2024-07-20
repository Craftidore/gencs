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
				return obj;
			},
		},
	}
);

templateSchema.pre('save', function (next) {
    const template = this;
    let isValid = true;
    if (isValid) {
        next();
    }
    else {
        let err = new Error('Invalid Template');
        err.name = 'templateDataError';
        next(err);
    }
});

const Template = mongoose.model("Template", templateSchema);

export default Template;
