/* 
<div class="shows-list">
  <p class="shows-list__headerText">Shows</p>
  <div class="shows-list__section">
      <div class="shows-list__details"></div>
      <div class="shows-list__info">

        <p class="shows-lists__date">date</p>
        <p class="shows-lists__venue">venue</p>
        <p class="shows-lists__location">location</p>
      </div>
      <button class="shows-lists__button">Buy Tickets</button>
   </div>
</div>
*/

const generatedShows = [
    {
      date: "Mon Sept 06 2021",
      venue: "Ronald Lane",
      location: "San Francisco, CA",   
    },

    {
        date: "Tue Sept 21 2021",
        venue: "Pier 3 East",
        location: "San Francisco, CA",
    },

    {
        date: "Fri Oct 15 2021",
        venue: "View Lounge",
        location: "San Francisco, CA",
    },

    {
        date: "Sat Nov 06 2021",
        venue: "Hyatt Agency",
        location: "San Francisco, CA",
    },

    {
        date: "Fri Nov 26 2021",
        venue: "Moscow Center",
        location: "San Francisco, CA",
    },

    {
        date: "Wed Dec 15 2021",
        venue: "Press Club",
        location: "San Francisco, CA",
    }

]
const displayTitle = () => {
    const shows = document.querySelector(".shows");
    const heading = document.createElement("p");
    const showList = document.createElement("div");

    heading.classList.add("shows-list__headerText");
    showList.classList.add("shows-list");

    heading.textContent = "Shows";

    shows.appendChild(heading);
    shows.appendChild(showList);
}

const displayShow = (showsListing) => {
    const showList = document.querySelector(".shows-list");
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
    date.textContent = showsListing.date;
    venueLabel.textContent = "VENUE";
    venue.textContent = showsListing.venue;
    locationLabel.textContent = "LOCATION";
    location.textContent = showsListing.location;
    button.textContent = "BUY TICKETS";

    info.appendChild(dateLabel);
    info.appendChild(date);
    info.appendChild(venueLabel);
    info.appendChild(venue);
    info.appendChild(locationLabel);
    info.appendChild(location);
    section.appendChild(details);
    section.appendChild(info);
    section.appendChild(button);
    showList.appendChild(section);
}

const displayShows = () => {

    for (let i=0; i<generatedShows.length; i++) {
        displayShow(generatedShows[i]);
    }
}
displayTitle()
displayShows()