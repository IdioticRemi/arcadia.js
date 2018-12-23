const axios = require("axios"),
    categories = require('./constants/categories');

const red = "\x1b[31m",
    yellow = "\x1b[33m",
    green = "\x1b[32m",
    grey = "\u001B[90m",
    reset = "\x1b[0m";

class Endpoint {
    constructor(API_URL, name, reqURL, options = {}) {
        this.API_URL = API_URL;
        this.category = Object.keys(categories).filter(c => categories[c].includes(name))[0];
        this.name = name;
        this.reqURL = reqURL;
        this.bufferURL = `${this.API_URL}${name}?url=${this.reqURL}${options.type ? `&type=${options.type}` : ""}${options.back ? `&back=${options.back}` : ""}${options.text ? `&text=${options.text.replace(/\s/g, "%20")}` : ""}${options.style ? `&style=${options.style}` : ""}${options.hype ? `&type=${options.hype}` : ""}${options.urlbis ? `&urlbis=${options.urlbis}` : ""}`;
        this.options = options;
        this.buffer = null;
        this.image = null;
    }
}

module.exports = class {
    constructor(token) {
        this.API_URL = "https://arcadia-api.xyz/api/v1/";
        this.TOKEN = token;

        this.categories = categories;

        this.generators = this.categories.generators;
        this.filters = this.categories.filters;
        this.texts = this.categories.texts;
        this.others = this.categories.others;
    }

    async GET(name, url = null, options = {}) {
        return new Promise(async (resolve, reject) => {
            name = name ? name.toLowerCase() : "UwU";

            if (!this.TOKEN) return reject(`Looks like you forgot your token! Correct usage is:\n\n${yellow}const ArcadiaAPI = require(\"arcadia-api\");\nconst Arcadia = new ArcadiaAPI(\"token here\");\n${grey}// Your code next ;)`);
            if (!name || name === "UwU") return reject(`No endpoint name provided! Valid endpoints are:\n\n${Object.keys(this.categories).map(c => `${yellow}${c}: ${green}${this.categories[c].map(e => e)}`).join("\n")}`);

            let endpoint = new Endpoint(this.API_URL, name, url, options);
            console.log(endpoint.category);

            if (!endpoint.category) return reject(`Provided endpoint doesn't exist! Valid endpoints are:\n\n${Object.keys(this.categories).map(c => `${yellow}${c}: ${green}${this.categories[c].map(e => e)}`).join("\n")}`);
            if (endpoint.category !== "texts" && !url || name === "wanted" && !url) return reject(`No URL provided!\n\n${yellow}Please provide a valid URL.`);
            if (name !== "hypesquad" && options.type && ![0, 1].includes(options.type)) return reject(`Invalid type!\n\n${yellow}\"options.type\" must be either 0 or 1!`);
            if (name === "hypesquad" && options.hype && ![0, 1, 2].includes(options.hype) || options.type && ![0, 1, 2].includes(options.type)) return reject(`Invalid hype type!\n\n${yellow}\"options.hype\" must be either 0, 1 or 2!\nHint: ${green}0=Bravery,1=Balance,2=Brilliance`);

            axios.get(endpoint.bufferURL, {
                headers: {
                    Authorization: this.TOKEN,
                },
                responseType: 'arraybuffer'
            }).then((response) => {
                if (!response.data) return reject("Error: Request failed with status code 404");

                endpoint.buffer = response.data;
                endpoint.image = response.data;
                return resolve(endpoint);
            }).catch((err) => {
                if (err) return reject(`${err}`);
            });
        }).catch(e => console.error(`${red}[ARCADIA-API - GET - ERROR] ${e}${reset}`));
    }

    async generate(generator = "UwU", url = null, options = {}) {
        return new Promise(async (resolve, reject) => {
            if (!this.generators.includes(generator.toLowerCase())) return reject(`Invalid Generator!\n\nValid generators are:\n${green}${this.generators.map(g => g)}`);
    
            return resolve(await this.GET(generator, url, options));
        }).catch(e => console.error(`${red}[ARCADIA-API - GENERATE - ERROR] ${e}${reset}`));
    }

    async filter(filter = "UwU", url = null) {
        return new Promise(async (resolve, reject) => {
            if (!this.filters.includes(filter.toLowerCase())) return reject(`Invalid Filter!\n\nValid filters are:\n${green}${this.filters.map(g => g)}`);
            
            return resolve(await this.GET(filter, url));
        }).catch(e => console.error(`${red}[ARCADIA-API - FILTER - ERROR] ${e}${reset}`));
    }
    
    async text(name = "UwU", url = null, options) {
        return new Promise(async (resolve, reject) => {
            if (!this.texts.includes(name.toLowerCase())) return reject(`Invalid Text!\n\nValid texts are:\n${green}${this.texts.map(g => g)}`);
            
            return resolve(await this.GET(name, url, options));
        }).catch(e => console.error(`${red}[ARCADIA-API - TEXT - ERROR] ${e}${reset}`));
    }
    
    async other(name = "UwU", url = null, background = null, text = null, style = null) {
        return new Promise(async (resolve, reject) => {
            if (!this.others.includes(name.toLowerCase())) return reject(`Invalid Other!\n\nValid others are:\n${green}${this.others.map(g => g)}`);
            
            if (style && !["italic", "bold"].includes(style.toLowerCase())) return reject(`Style is not valid! Valid styles are:\n\n${yellow}italic,bold`);

            return resolve(await this.GET(name, url, { back: background, text: text, style: style ? style.toLowerCase() : null }));
        }).catch(e => console.error(`${red}[ARCADIA-API - OTHERS - ERROR] ${e}${reset}`));
    }

    async fetchEndpoints() {
        return new Promise(async (resolve, reject) => {
            axios.get(this.API_URL).then(response => {
                if (!response.data) return reject("Error: Request failed with status code 404")

                return resolve(response.data.endpoints);
            }).catch(err => {
                if (err) return reject(`${err}`);
            });
        }).catch(e => console.error(`${red}[ARCADIA-API - FETCH_ENDPOINTS - ERROR] ${e}${reset}`));
    }

    async fetchEndpointCategory(name) {
        return new Promise(async (resolve, reject) => {
            name = name ? name.toLowerCase() : "UwU";

            if (!name) return reject(`No endpoint name provided! Valid endpoints are:\n\n${Object.keys(this.categories).map(c => `${yellow}${c}: ${green}${this.categories[c].map(e => e)}`).join("\n")}`);
            if (!Object.keys(categories).filter(c => categories[c].includes(name))[0]) return reject(`Invalid endpoint name! Valid endpoints are:\n\n${Object.keys(this.categories).map(c => `${yellow}${c}: ${green}${this.categories[c].map(e => e)}`).join("\n")}`)

            return resolve(Object.keys(categories).filter(c => categories[c].includes(name))[0] || null);
        }).catch(e => console.error(`${red}[ARCADIA-API - FETCH_ENDPOINT_CATEGORY - ERROR] ${e}${reset}`));
    }

    async fetchEndpoint(name) {
        return new Promise(async (resolve, reject) => {
            name = name ? name.toLowerCase() : "UwU";

            if (!name) return reject(`No endpoint name provided! Valid endpoints are:\n\n${Object.keys(this.categories).map(c => `${yellow}${c}: ${green}${this.categories[c].map(e => e)}`).join("\n")}`);

            return resolve(new Endpoint(this.API_URL, name, null));
        }).catch(e => console.error(`${red}[ARCADIA-API - FETCH_ENDPOINT - ERROR] ${e}${reset}`));
    }

    async fetchCategory(name) {
        return new Promise(async (resolve, reject) => {
            name = name ? name.toLowerCase() : "UwU";

            if (!Object.keys(this.categories).includes(name)) return reject(`No category provided or Invalid category name!\nValid categories are:\n\n${yellow}${Object.keys(this.categories).map(c => c)}`);
            
            return resolve(this.categories[name]);
        }).catch(e => console.error(`${red}[ARCADIA-API - FETCH_CATEGORY - ERROR] ${e}${reset}`));
    }

}