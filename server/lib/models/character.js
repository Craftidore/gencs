import mongoose from 'mongoose';

const characterSchema = new mongoose.Schema({
    name: String
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
