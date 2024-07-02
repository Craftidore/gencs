import Character from "../../models/character.js";
import Template from "../../models/template.js";

export const get = {
	getManyCharacters: async (req, res) => {
		try {
			const chars = await Character.find({});
			res.status(200);
			res.json(chars);
		} catch (error) {
			next(error);
		}
	},
	getSingleCharacter: (req, res) => {
		try {
			res.status(200);
			res.json(res.locals.character);
		} catch (error) {
			next(error);
		}
	},
	getManyTemplates: async (req, res) => {
		try {
			const templates = await Template.find({});
			res.status(200);
			res.json(templates);
		} catch (error) {
			next(error);
		}
	},
	getSingleTemplate: (req, res) => {
		try {
			res.status(200);
			res.json(res.locals.template);
		} catch (error) {
			next(error);
		}
	},
};
export const post = {
	createCharacter: async (req, res) => {
		try {
			const char = new Character({
				name: req.body.name,
				summary: req.body.summary,
				characterData: req.body.characterData,
				template: req.body.template,
			});
			await char.save();
			res.status(200);
			res.json(char);
		} catch (error) {
			next(error);
		}
	},
	updateCharacter: async (req, res) => {
		try {
			const char = res.locals.character;
			res.status(200);
			char.name = req.body.name;
			char.summary = req.body.summary;
			char.characterData = req.body.characterData;
			char.template = req.body.template;
			await char.save();
			res.json(char);
		} catch (error) {
			next(error);
		}
	},
	createTemplate: async (req, res, next) => {
		try {
			//await not needed here
			const template = new Template({
				name: req.body.name,
				summary: req.body.summary,
				templateData: req.body.templateData,
			});
			await template.save();
			res.status(200);
			res.json(template);
		} catch (error) {
			next(error);
		}
	},
	updateTemplate: async (req, res) => {
		try {
			const template = res.locals.template;
			res.status(200);
			template.name = req.body.name;
			template.summary = req.body.summary;
			template.templateData = req.body.templateData;
			await template.save();
			res.json(template);
		} catch (error) {
			next(error);
		}
	},
};
export const put = {};
export const del = {
	removeCharacter: async (req, res) => {
		try {
			const character = res.locals.character;
			res.status(200);
			await Character.deleteOne({ _id: character._id }); // NOTE: I think there was a cleaner way of doing this...
			res.json(character);
		} catch (error) {
			next(error);
		}
	},
	removeTemplate: async (req, res) => {
		try {
			const template = res.locals.template;
			res.status(200);
			await Template.deleteOne({ _id: template._id });
			res.json(template);
		} catch (error) {
			next(error);
		}
	},
};

export default {
	get,
	post,
	put,
	del,
};
