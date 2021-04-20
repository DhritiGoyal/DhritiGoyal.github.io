// load the airtable library, call it "Airtable"
var Airtable = require("airtable");
console.log(Airtable);

// use the airtable librar to get a variable that represents one of our bases
var base = new Airtable({ apiKey: "keyw22OoSmXFs7z8j" }).base(
  "appj5Abcnz0lEN1iA"
);

//get the "photos" table from the base, select ALL the records, and specify the functions that will receive the data
base("photos").select({}).eachPage(gotPageOfPhotos, gotAllPhotos);

// an empty array to hold our photo data
const photos = [];

// callback function that receives our data
function gotPageOfPhotos(records, fetchNextPage) {
  console.log("gotPageOfPhotos()");
  // add the records from this page to our books array
  photos.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllPhotos(err) {
  console.log("gotAllPhotos()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading photos");
    console.error(err);
    return;
  }

  // call functions to log and show the books
  consoleLogPhotos();
  showPhotos();
}

// just loop through the books and console.log them
function consoleLogPhotos() {
  console.log("consoleLogPhotos()");
  photos.forEach((photo) => {
    console.log("Photo:", photo);
  });
}



// look through our airtable data, create elements 
function showPhotos() {
  console.log("showPhotos()");
  photos.forEach((photo) => {


    //var photoTitle = document.createElement("h1");
    //photoTitle.innerText = photo.fields.title;
    //document.body.append(photoTitle);

    //var photoImage = document.createElement("img");
    //photoImage.src = photo.fields.photo_image[0].url;
    //document.body.append(photoImage);

    // creating a new div container, this is where 
    var photoContainer = document.createElement("div");
    photoContainer.classList.add("photo-container");
    document.querySelector(".container").append(photoContainer);

    //add photo titles to our photo container
    var photoTitle = document.createElement("h1");
    photoTitle.classList.add("title");
    photoTitle.innerText = photo.fields.title;
    photoContainer.append(photoTitle);

   //add image to our photo container
   var photoImage = document.createElement("img");
   photoImage.classList.add("photo-image");
   photoImage.src = photo.fields.photo_image[0].url;
   photoContainer.append(photoImage);

   //add event listener
   //when user clicks on photo container 
   // image and description will appear or disappear
   photoContainer.addEventListener("click", function(){
     photoImage.classList.toggle("active");
   })
   
  });
}


/*
// elements of page
let tagElement = document.querySelector('#tags');
let photosElement = document.querySelector('#photos');



function filterByTag(event) {
  let allImages = document.querySelectorAll('.photos');
  allImages.forEach(function (item) {
    if (item.classList.contains(event.target.dataset.type)){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });

}

function showInfo(event) {
  //show model
  if (event.target.classList.contains('photos')){
    infoDetails.innerHTML = `
      <h1>${event.target.dataset.name}</h1>
      <p>size: ${event.target.dataset.size}</p>
    `;
    infoElement.classList.add('show');
  }
}

function closeInfo() {
 infoElement.classList.remove('show');
}

function displayPhotos() {
console.log(photos);
let addedTags = [];

photos.forEach(function (item) {
  //add our tags to the header
 item.fields.Tags.forEach(function (tag) {
   if (!addedTags.includes(tag)) {
    let ourTag = document.createElement('button');
    ourTag.innerText = tag;
    ourTag.dataset.type = tag;
    ourTag.addEventListener('click', filterByTag);
    tagElement.append(ourTag);
    addedTags.push(tag);
   }
 });

  item.fields.photo_image.forEach(function (photo_image) {
    let img = document.createElement('img');
    img.src = photo_image.thumbnails.large.url;

    img.style.left = `calc(${Math.random()} * (100% - 7.5rem))`;
    img.style.top = `calc(${Math.random()} * (100% - 7.5rem))`;

    //adding a unified class
    img.classList.add('photos');

    //adding our produce type tags
    item.fields.Tags.forEach(function (tag) {
      img.classList.add(tag);
    });

    //associate title
    img.dataset.title = item.fields.title;

    //associate the size
    img.dataset.size = item.fields.Size;

    photosElement.append(img);
   
  });
});
}
*/