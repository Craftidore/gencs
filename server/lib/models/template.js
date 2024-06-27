import mongoose from "mongoose";

const templateSchema = new mongoose.Schema({
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
        required: true
    }
},
{
    toJSON: {
        transform: function (doc, obj) {
            obj.id = obj._id;
            delete obj._id;
            delete obj.__v;
            return obj;
        }
	} catch (err) {
		console.log("Error", err);
	}
	next();
});

const Template = mongoose.model("Template", templateSchema);

export default Template;
