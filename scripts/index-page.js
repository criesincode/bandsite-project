
import { BandSiteAPI } from "./band-site-api.js"
const apiKeyFromBandSiteAPI = "f136dc84-db9d-4b97-8f6b-753330864b0d";
const bandSiteAPI = new BandSiteAPI(apiKeyFromBandSiteAPI);

const displayComment = (commentData) => {
    const commentSection = document.getElementById("comments");
    const info = document.createElement("div");
    const avi = document.createElement("div");
    const details = document.createElement("div");
    const data = document.createElement("div");
    const name = document.createElement("p");
    const timestamp = document.createElement("p");
    const comment = document.createElement("p");

    info.classList.add("comments__info");
    avi.classList.add("comments__avi");
    details.classList.add("comments__details");
    data.classList.add("comments__data");
    name.classList.add("comments__name");
    timestamp.classList.add("comments__time");
    comment.classList.add("comments__comment");
    
    name.textContent = commentData.name;
    timestamp.textContent = commentData.timestamp;
    comment.textContent = commentData.comment;

    data.appendChild(name);
    data.appendChild(timestamp);
    details.appendChild(data);
    details.appendChild(comment);
    info.appendChild(avi);
    info.appendChild(details);
    commentSection.appendChild(info);
}

const displayComments = async () => {
  let generatedComments = await bandSiteAPI.getComments()  
    for (let i=0; i<generatedComments.length; i++) {
        displayComment(generatedComments[i]);
    }
}

displayComments();

const form = document.getElementById("commentForm");
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameInput = document.getElementById("name");
    const commentInput = document.getElementById("comment");
    const timeStamp = new Date();
    generatedComments.unshift({
        name: nameInput.value,
        timestamp: timeStamp.toLocaleDateString(),
        comment: commentInput.value,
    });

    const commentSection = document.getElementById("comments");
    commentSection.replaceChildren();
    displayComments();
})