import mongoose from 'mongoose';

const templateSchema = new mongoose.Schema({
    name: String
    // FIX: Unfinished!!! Just for testing the api endpoints
});

const Template = mongoose.model('Template', templateSchema);

export default Template;

