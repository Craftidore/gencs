import Character from "../../models/character.js";
import Template from "../../models/template.js";

export async function characterid(req, res, next, id) {
	try {
		const char = await Character.findById(id);
		res.locals.character = char;
		next();
	} catch (error) {
		next(error);
	}
}

export async function templateid(req, res, next, id) {
	try {
		const template = await Template.findById(id);
		res.locals.template = template;
		next();
	} catch (error) {
		next(error);
	}
}

export default {
	characterid,
	templateid,
};
