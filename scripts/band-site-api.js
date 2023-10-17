
class BandSiteAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseURL = "https://project-1-api.herokuapp.com"
    }




async getComments() {
    try {
        const response = await axios.get(`${this.baseURL}/comments?api_key=${this.apiKey}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}


async postComment(comment, name) {
    try {
        const response = await axios.post(`${this.baseURL}/comments?api_key=${this.apiKey}`, {
            comment,
            name
        });
        return response.data;
    } catch (error) {
        if (error.response) {
            console.error("error response data", error.response.data);
            throw new Error("request failed" + error.response.status);
        }
    }
}

/*SHOWS */

async getShows() {
    try {
        const response = await axios.get(`${this.baseURL}/showdates?api_key=${this.apiKey}`);
        return response.data
    } catch (error) {
        console.log(error);
    }
}

};

const apiKey = "f136dc84-db9d-4b97-8f6b-753330864b0d"
export { BandSiteAPI, apiKey }