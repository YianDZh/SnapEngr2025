/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */


// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

// This function adds cards the page to display the data in the array
document.addEventListener("DOMContentLoaded", showCards);

function showCards() {
  const Area = document.querySelector("#DisplayArea")
  const cardContainer = document.querySelector(".card-container");
  const templateCard = document.querySelector(".card");
  cardContainer.innerHTML = "";

  for (let i = 0; i < shoes.length; i++) {
    let name = shoes[i].model;
    let image = shoes[i].image;
    // console.log("name:", {name})
    // console.log("image:", {image})
    // console.log(i);
    if (i%2===0){
      const NewSeparation = cardContainer.cloneNode(true); // Copy the  separation
      NewSeparation.innerHTML="";
      Area.appendChild(NewSeparation);
    }
    // const currentContainer = displayArea.lastElementChild;
    const nextCard = templateCard.cloneNode(true); // Copy the template card
    // nextCard.style.display = "block"; // Make sure it's visible

    editCardContent(nextCard, name, image); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

function editCardContent(card, newTitle, newImageURL) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newTitle;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = newTitle + " Poster";

  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded



//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function FilterReveal(){
  document.getElementById("filter_Area").style.width = "250px";

}
function HideFilters() {
  document.getElementById("filter_Area").style.width = "0";

}
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!"
  );
}


function removeLastCard() {
  shoes.pop(); // Remove last item in titles array
  showCards(); // Call showCards again to refresh
}