class BandSiteAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.URL = "https://project-1-api.herokuapp.com"
    }

}
const apiKey = "f136dc84-db9d-4b97-8f6b-753330864b0d"
async function getComments() {
    try {
        const response = await axios.get(`${this.URL}showdates?api_key=${this.apiKey}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
async function postComments() {
    try {
        const response = await axios.post(`${this.URL}showdates?api_key=${this.apiKey}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
//get shows

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