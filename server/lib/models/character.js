import mongoose from 'mongoose';

const characterSchema = new mongoose.Schema({
    name: String
    // FIX: Unfinished!!! Just for testing the api endpoints
});
const Character = mongoose.model('Character', characterSchema);

export default Character;

