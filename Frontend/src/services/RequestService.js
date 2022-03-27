export default class RequestService {

    GATEWAY_URL = `https://localhost:8077/api/v1/`;

    static async getHeroes() {
        heroList = `https://localhost:8077/api/v1/` + "heroes/";
        result = await(await fetch(heroList)).json();
    }

    static async getHeroDetail(id) {
        heroDetail = `https://localhost:8077/api/v1/` + "heroes/"+id;
        result = await(await fetch(heroDetail)).json();
    }
}