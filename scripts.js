
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

document.addEventListener("DOMContentLoaded", function() {
  // FisherYates();
  

  loadtoList("brand");
  showCards();
  initializeSearch ();
});

function showCards() {
  const Area = document.querySelector("#DisplayArea")
  const templateCard = document.querySelector(".card");
  Area.innerHTML = "";

  for (let i = 0; i < shoes.length; i+=2) {
    const cardContainer = document.createElement("div");
    cardContainer.className = "card-container"
    let card1 = templateCard.cloneNode(true);
    editCardContent(card1, shoes[i]);
    cardContainer.appendChild(card1);
    if (i+1<shoes.length ) {
      let card2 = templateCard.cloneNode(true);
      editCardContent(card2, shoes[i+1]);
      cardContainer.appendChild(card2);
    }

      // console.log("name:", {shoes[i].model})
    // console.log("image:", {shoes[i].image})
    // console.log(i);

      Area.appendChild(cardContainer);
  }
}

function editCardContent(card, item) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = item.model;

  const cardImage = card.querySelector("img");
  cardImage.src = item.image;

  
  const cardBrand = card.querySelector("#brand");
  cardBrand.textContent= item.brand;
  const cardCategory = card.querySelector("#main-category");
  cardCategory.textContent = item.main_category;
  const lowCategorie= card.querySelector("#category");
  lowCategorie.textContent=item.category;
  const price= card.querySelector("#price");
  price.textContent="$"+item.price;
  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  // console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded



//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function FilterReveal(){
  document.getElementById("filter_Area").style.width = "250px";
  document.querySelector('.filterbtn').style.display = "none";

}
function HideFilters() {
  document.getElementById("filter_Area").style.width = "0";
  document.querySelector('.filterbtn').style.display = "block";

}
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!"
  );
}


function removeLastCard() {
  let last = shoes.pop(); // Remove last item in titles array
  console.log(last.model);
  for (let i = 0; i<original.length;i++){
    if (original [i]===last){
      original.splice(i,1);
    }
  }
  shoes = original;
  showCards(); // Call showCards again to refresh
}


//I tried doing queryselector but it didn't seem to work as intended. So I thought call this was the easiest way without making it more complex
function filtertop(){
  resetAllCheckboxes();
  shoes = original;
  let category =  this.textContent;
  console.log("Our category is: ", category);
  let filtered = [];
  console.log("here");
  for (let i = 0 ; i<shoes.length;i++){

    console.log(i, shoes[i].main_category.toUpperCase());

    if (shoes[i].main_category.toUpperCase()===category){
      filtered.push(shoes[i]);
      // console.log(fil)
    }
  }
  // for (let i = 0 ; i<filtered.length;i++){
  //   console.log(filtered[i].model);
  // }
  shoes=filtered;
  showCards();
}

let backup = [...shoes];
function filternew(){
  const checkbox = document.getElementById("new");
  if (checkbox.checked){
    let filtered = [];
    for (let i = 0 ; i<shoes.length;i++){
      console.log(i, shoes[i].new);
      if (shoes[i].new){
        filtered.push(shoes[i]);
        // console.log(fil)
      }
    }
    shoes = filtered;
  }
  else {
    shoes = backup;
  }
  showCards();

}
const back2 = [... shoes];
function orderbyprice(){
  const highToLowRadio = document.getElementById("Highest");
  const lowToHighRadio = document.getElementById("Lowest");
  shoes.sort(function(a, b){return a.price - b.price});
  if (highToLowRadio.checked){
    shoes.reverse();
  }
  else if (lowToHighRadio.checked){
  }
  else {
    shoes = back2;
    resetAllCheckboxes();
  }
  showCards();
}

function resetAllCheckboxes() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
    checkbox.checked = false;
  });
  const highToLowRadio = document.getElementById("Highest");
  const lowToHighRadio = document.getElementById("Lowest");
  const radioreset = document.getElementById("None");
  highToLowRadio.checked = false;
  lowToHighRadio.checked = false;
  radioreset.checked = false;
}
function refresh(){
  location.reload(true);
}

function loadtoList (key){
  let data = removeDuplicates (original , key);
  data.sort();
  for (let i = 0; i < data.length; i++) {
    console.log("Filtered Unique fields: " + data[i]);
  }    

  const section = document.getElementById(key+'-dropdown');
    
  if (!section) {
    console.log (key+'-dropdown');
    console.error(`Could not find element with selector: .dropdown-content name="${key}"`);
    return;
  }
  for (let i = 0; i < data.length; i++) {
    const option = document.createElement("a");
    option.textContent = data[i];
    option.addEventListener ('click', function() {
      filterDropDown(data[i]);
    });
    section.appendChild(option);

  }
}
const back3 = [... shoes];
function filterDropDown(brand){
  shoes = back3;
  const filteredProducts = shoes.filter(obj => obj.brand === brand);
  shoes = filteredProducts;
  showCards();

}
function removeDuplicates(arr, key) {
  const seen = new Set();
  return arr.filter(obj => {
    const keyValue = obj[key];
    return seen.has(keyValue) ? false : (seen.add(keyValue), true);
  }).map(obj => obj[key]);
}

//? Search Bar Filter
function searchByName (){
  shoes = [...original];
  const searchInput = document.getElementById('search-bar');
  const target = searchInput.value.toLowerCase();
  console.log ("found in search" + target);
  if (target === "" || target.length === 0) {

    showCards();
    return;
  }
  const filteredArray = shoes.filter(obj => 
    obj.model.toLowerCase().includes(target)
  );
  shoes = filteredArray;
  resetAllCheckboxes();
  showCards();
}

//!Wraper created because creating listeners individually was not working at first
function initializeSearch() {
  const searchInput = document.getElementById('search-bar');
  const searchButton = document.getElementById('search-button');
  
  if (searchInput && searchButton) {
    searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        searchByName();
      }
    });
    
    searchButton.addEventListener('click', searchByName);
  } else {
    console.error("Search elements not found:", {
      input: !!searchInput,
      button: !!searchButton
    });
  }
}
