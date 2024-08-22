const apiAddr = "http://localhost:8001";
class api {
    constructor() {

    }
    async getCharacters() {
        const addr = `${apiAddr}/api/v1/characters`;
        const response = await fetch(addr, {
            'headers': {
                'mode':'cors'
            }
        });
        const result = await response.json();
        return result;
    }
    async getTemplates() {
        const addr = `${apiAddr}/api/v1/templates`;
        const response = await fetch(addr, {
            'headers': {
                'mode':'cors'
            }
        });
        const result = await response.json();
        return result;
    }
    async getCharacter(charid) {
        const addr = `${apiAddr}/api/v1/characters/${charid}`;
        const response = await fetch(addr, {
            'headers': {
                'mode':'cors'
            }
        });
        const result = await response.json();
        return result;
    }
    async getTemplate(templateid) {
        const addr = `${apiAddr}/api/v1/templates/${templateid}`;
        const response = await fetch(addr, {
            'mode':'cors'
        });
        const result = await response.json();
        console.log(result);
        return result;
    }
    async postCharacter(name, summary, data, template) {
        const addr = `${apiAddr}/api/v1/characters`;
        const post = {
            'name':name,
            'summary':summary,
            'characterData':data,
            'template':template
        };
        const response = await fetch(addr, {
            'method':'POST',
            'mode': 'cors',
            'body': JSON.stringify(post)
        });
        const result = await response.json();
        return result;
    }
    async postTemplate(name, summary, data) {
        const addr = `${apiAddr}/api/v1/templates`;
        const post = {
            'name':name,
            'summary':summary,
            'templateData':data
        };
        const response = await fetch(addr, {
            'method':'POST',
            'mode': 'cors',
            'headers': {
                'Content-Type': 'application/json'
            },
            'body': JSON.stringify(post)
        });
        const result = await response.json();
        return result;
    }
}

export default api;

