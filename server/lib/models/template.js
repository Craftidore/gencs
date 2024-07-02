<<<<<<< HEAD
import mongoose from "mongoose";
=======
import mongoose from 'mongoose';
import {
    validateContainer,
    validateLabel,
    validateTextInput,
    validateTextboxInput,
    validateNumberInput
} from '../validation.js';
>>>>>>> e7b78529a980de7115adecd320b85c972b9ac6dd

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

<<<<<<< HEAD
const Template = mongoose.model("Template", templateSchema);
=======
templateSchema.pre('save', function (next) {
    const template = this; // only works because this _isn't_ an arrow function. Gotta love JS.
    let isValid = true;
    console.log(template)
    // TODO: Check to make sure templateData is valid, recursively
    //       throw error if not valid
    const validateRecurse = (obj) => {
        if (!isValid) {
            return;
        }
        switch (obj.type) {
            case 'container':
                isValid &= validateContainer(obj);
                for (const child of obj.children) {
                    validateRecurse(child);
                }
                break;
            case 'label':
                isValid &= validateLabel(obj);
                break;
            case 'text-input':
                isValid &= validateTextInput(obj);
                break;
            case 'textbox-input':
                isValid &= validateTextboxInput(obj);
                break;
            case 'number-input':
                isValid &= validateNumberInput(obj);
                break;
            case 'choice-input':
                isValid &= true; // validateChoiceInput(obj);
                break;
            case 'radio-input':
                isValid &= true; // validateRadioInput(obj);
                break;
            case 'checkbox-input':
                isValid &= true; // validateCheckboxInput(obj);
                break;
            default:
                isValid &= false;
                break;
        }
    };
    validateRecurse(template.templateData);
    if (!isValid) {
        next(new Error('Invalid templateData'));
    }
    next();
});

const Template = mongoose.model('Template', templateSchema);
>>>>>>> e7b78529a980de7115adecd320b85c972b9ac6dd

export default Template;
