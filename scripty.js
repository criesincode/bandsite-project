const generatedComments = [
    "Connor Walton",
     "02/17/2021",
    "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",

    "Emilie Beach" ,
    "01/09/2021",
    "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",

    "Miles Acosta",
    "12/20/2020",
    "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
 ];

 // Function to display comments
 function displayComments(comments) {
     const commentsDiv = document.getElementById("comments");
     commentsDiv.innerHTML = "";
     comments.forEach(function(comment) {
         const commentElement = document.createElement("div");
         commentElement.innerText = comment;
         commentsDiv.appendChild(commentElement);
     });
 }

 // Function to add a new comment
 function commentForm(event) {
     event.preventDefault(); // Prevent form submission

     // Get the new comment from the form
     const newComment = document.getElementById("comment").value;

     // Add the new comment to the list of comments
     generatedComments.push(newComment);

     // Display the updated list of comments
     displayComments(generatedComments);

     // Clear the comment input field
     document.getElementById("comment").value = "";
 }

 // Display initial comments
 displayComments(generatedComments);