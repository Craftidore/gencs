import mongoose 'mongoose';

const templateSchema = new mongoose.Schema({
    name: String
    // FIX: Unfinished!!! Just for testing the api endpoints
});

export default const Character = mongoose.moodle('Template', templateSchema);

