import axios from "axios";
const BASE8_URL = "https://api.themoviedb.org/3/";
const API_KEY_PARAM = "?api_key=2a5570797261a0771163263a7ec83038";

export class TVShowAPI{
    static async fetchPopulars(){
        const response = await axios.get(`${BASE8_URL}tv/popular${API_KEY_PARAM}`);
        console.log(response.data.results)
        return response.data.results;
    }
}