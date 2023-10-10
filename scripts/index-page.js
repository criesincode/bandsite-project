const generatedComments = [
   { 
        name: "Connor Walton",
        timestamp: "02/17/2021",
        comment:"This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
   },

    {
        name: "Emilie Beach" ,
        timestamp: "01/09/2021",
        comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    },

    {
        name: "Miles Acosta",
        timestamp: "12/20/2020",
        comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    }
]


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

const displayComments = () => {
    
    for (let i=0; i<generatedComments.length; i++) {
        displayComment(generatedComments[i]);
    }
}

displayComments()

//  // Function to add a new comment
//  function commentForm(event) {
//      event.preventDefault(); // Prevent form submission

//      // Get the new comment from the form
//      const newComment = document.getElementById("comment").value;

//      // Add the new comment to the list of comments
//      generatedComments.push(newComment);

//      // Display the updated list of comments
//      displayComments(generatedComments);

//      // Clear the comment input field
//      document.getElementById("comment").value = "";
//  }

//  // Display initial comments
//  displayComments(generatedComments);