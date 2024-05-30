import mongoose 'mongoose';

const characterSchema = new mongoose.Schema({
    name: String
    // FIX: Unfinished!!! Just for testing the api endpoints
});

export default const Character = mongoose.moodle('Character', characterSchema);

