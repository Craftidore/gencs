// import Character from '../../models/character.js';

export const get = {
    getManyCharacters: (req, res) => {
        res.status(200);
        res.json({'message':'Not implemented'});
    },
    getSingleCharacter: (req, res) => {
        res.status(200);
        res.json({'message':'Not implemented'});
    },
    getManyTemplates: (req, res) => {
        res.status(200);
        res.json({'message':'Not implemented'});
    },
    getSingleTemplate: (req, res) => {
        res.status(200);
        res.json({'message':'Not implemented'});
    }
};
export const post = {
    createCharacter: (req, res) => {
        res.status(200);
        res.json({'message':'Not implemented'});
    },
    updateCharacter: (req, res) => {
        res.status(200);
        res.json({'message':'Not implemented'});
    },
    createTemplate: (req, res) => {
        res.status(200);
        res.json({'message':'Not implemented'});
    },
    updateCharacter: (req, res) => {
        res.status(200);
        res.json({'message':'Not implemented'});
    }
};
export const del = {
    removeCharacter: (req, res) => {
        res.status(200);
        res.json({'message':'Not implemented'});
    },
    removeTemplate: (req, res) => {
        res.status(200);
        res.json({'message':'Not implemented'});
    }
};

export default {
    get,
    post,
    del
};
