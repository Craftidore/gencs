import Character from '../../models/character.js';
import Template from '../../models/template.js';

export const get = {
    getManyCharacters: async (req, res) => {
        const chars = await Character.find({});
        res.status(200);
        res.json(chars);
    },
    getSingleCharacter: (req, res) => {
        res.status(200);
        res.json(res.locals.character);
    },
    getManyTemplates: async (req, res) => {
        const templates = await Template.find({});
        res.status(200);
        res.json(templates);
    },
    getSingleTemplate: (req, res) => {
        res.status(200);
        res.json(res.locals.template);
    }
};
export const post = {
    createCharacter: async (req, res) => {
        const char = new Character({
            name:req.body.name
        });
        await char.save();
        res.status(200);
        res.json(char);
    },
    updateCharacter: async (req, res) => {
        const char = res.locals.character;
        res.status(200);
        char.name = res.body.name;
        // NOTE: Incomplete
        await char.save();
        res.json(char);
    },
    createTemplate: async (req, res) => {
        const template = await new Template({
            name:res.body.name
        });
        res.status(200);
        res.json(template);
    },
    updateCharacter: async (req, res) => {
        const template = res.locals.template;
        res.status(200);
        template.name = res.body.name;
        await template.save();
        res.json(template);
    }
};
export const put = {

};
export const del = {
    removeCharacter: async (req, res) => {
        const character = res.locals.character;
        res.status(200);
        await Character.deleteOne({ _id:character._id }); // NOTE: I think there was a cleaner way of doing this...
        res.json(character);
    },
    removeTemplate: async (req, res) => {
        const template = res.locals.template;
        res.status(200);
        await Template.deleteOne({ _id:template._id });
        res.json(template);
    }
};

export default {
    get,
    post,
    put,
    del
};
