var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
for(var i = 1 ; i<=5 ; i++){
  if(i === 1){
    value = 'images/pic1.jpg';
  }
  else if(i === 2){
    value = 'images/pic2.jpg';
  }
  else if(i === 3){
    value = 'images/pic3.jpg';
  }
  else if(i === 4){
    value = 'images/pic4.jpg';
  }
  else{
    value = 'images/pic5.jpg';
  }
  // creates a new image element
  var newImage = document.createElement('img', '');
  // sets the content of an image
  newImage.setAttribute('src', value);
  // appends the image to the thumbar element
  thumbBar.appendChild(newImage);

  //on click handler for the images in the thumbnail
  newImage.onclick = function(e){
    var clickedImage = e.target.getAttribute('src'); //e is an event associated with every element, getAttribute gives you the src of an image
    changeDisplayImage(clickedImage); //calling the function to change the display image
  }
  
}
// changes the displayImage to the image that was clicked
function changeDisplayImage(image){
  displayedImage.setAttribute('src', image);
}
  

/* Wiring up the Darken/Lighten button */
btn.onclick = function(e){
  var btnClass = e.target.getAttribute('class');
  console.log(btnClass);
  if(btnClass === 'dark'){
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';

  }
  else{
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
}
