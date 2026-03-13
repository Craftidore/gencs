import mongoose from "mongoose";
import logger from "../logger.js"
mongoose.set('debug', true);
import {
    validateContainer,
    validateLabel,
    validateTextInput,
    validateTextboxInput,
    validateNumberInput
} from '../validation.js';

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
				obj.id = obj._id.toString();
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
    if (!isValid) {
        return
    }

	const validateRecurse = (obj) => {
        if (!isValid) {
            return;
        }
        logger.info(obj.type);
        switch (obj.type) {
            case 'container':
                isValid &= validateContainer(obj);
                logger.info('is valid container');
                logger.info(validateContainer(obj));
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
        let err = new Error('Invalid templateData')
        err.name = 'Invalid templateData';
        next(err);
    }
    next();
});

const Template = mongoose.model('Template', templateSchema);

export default Template;
