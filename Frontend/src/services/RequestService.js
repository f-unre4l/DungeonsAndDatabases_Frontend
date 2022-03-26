export default class RequestService {

    GATEWAY_URL = `https://localhost:8077/api/v1/`;

    static getHeroes() {
        heroList = GATEWAY_URL + "heroes/";
        result = await(await fetch(heroList)).json();
    }

    static getHeroDetail(id) {
        heroDetail = GATEWAY_URL + "heroes/"+id;
        result = await(await fetch(heroDetail)).json();
    }
}