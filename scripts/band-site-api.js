class BandSiteAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseURL = "https://project-1-api.herokuapp.com"
    }

}
const apiKey = "f136dc84-db9d-4b97-8f6b-753330864b0d"
async function getComments() {
    try {
        const response = await axios.get(`${this.baseURL}showdates?api_key=${this.apiKey}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
async function postComments() {
    try {
        const response = await axios.post(`${this.baseURL}showdates?api_key=${this.apiKey}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

/*SHOWS */

async function getShows() {
    try {
        const response = await axios.get(`${this.baseURL}showdates?api_key=${this.apiKey}`);
        console.log(response.data)
        const showInfo = repsonse.data;
        showDate(showInfo);
    } catch (error) {
        console.log(error);
    }
};