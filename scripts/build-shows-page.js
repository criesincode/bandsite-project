import { BandSiteAPI } from "./band-site-api.js";

const apiKeyFromBandSiteAPI = "f136dc84-db9d-4b97-8f6b-753330864b0d";
const bandSiteAPI = new BandSiteAPI(apiKeyFromBandSiteAPI);

async function generatedShows() {
    let showData = await bandSiteAPI.getShows();
        for (let i=0; i<showData.length; i++) {
            displayShows(showData[i]);
        }
    }   

generatedShows()

const showsContainer = document.querySelector(".showsContainer")
const displayShows = (showDates) => {
    const section = document.createElement("div");
    const details = document.createElement("div");
    const info = document.createElement("div");
    const title = document.createElement("p");
    const dateLabel = document.createElement("p")
    const date = document.createElement("p");
    const venueLabel = document.createElement("p")
    const venue = document.createElement("p");
    const locationLabel = document.createElement("p");
    const location = document.createElement("p");
    const button = document.createElement("button")

    
    section.classList.add("shows-list__section");
    details.classList.add("shows-list__details");
    info.classList.add("shows-list__info");
    title.classList.add("shows-list__title");
    dateLabel.classList.add("shows-lists__label");
    date.classList.add("shows-lists__date");
    venueLabel.classList.add("shows-lists__label");
    venue.classList.add("shows-lists__venue");
    locationLabel.classList.add("shows-lists__label");
    location.classList.add("shows-lists__location");
    button.classList.add("shows-lists__button");

    dateLabel.textContent = "DATE";
    date.textContent = showDates.date;
    venueLabel.textContent = "VENUE";
    venue.textContent = showDates.place;
    locationLabel.textContent = "LOCATION";
    location.textContent = showDates.location;
    button.textContent = "BUY TICKETS";

    info.appendChild(dateLabel);
    info.appendChild(date);
    info.appendChild(venueLabel);
    info.appendChild(venue);
    info.appendChild(locationLabel);
    info.appendChild(location);
    section.appendChild(details);
    section.appendChild(info);
    info.appendChild(button);
    showsContainer.appendChild(section);

}


