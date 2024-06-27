import mongoose from 'mongoose';

const characterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 100,
        trim: true,
    },
    summary: {
        type: String,
        required: false,
        minlength: 1,
        trim: false,
    },
    characterData: {
        type: Object,
        required: true
    },
    template: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Template',
        required: true,
    },
},
{
    toJSON: {
            getters:false,
            virtuals:false,
            transform(doc, obj, options) {
                obj.id = obj._id.toString();
                delete obj._id;
                delete obj.__v;
                return obj;
            }
        }
});

const Character = mongoose.model('Character', characterSchema);

export default Character;
