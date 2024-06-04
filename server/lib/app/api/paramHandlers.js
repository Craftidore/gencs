import Character from '../../models/character.js';
import Template from '../../models/character.js';

export async function characterid(req, res, next, id) {
    const char = await Character.findById(id);
    res.locals.character = char;
    next();
}

export function templateid(req, res, next, id) {
    const template = await Template.findById(id);
    res.locals.template = template;
    next();
}

export default {
    characterid,
    templateid
};
