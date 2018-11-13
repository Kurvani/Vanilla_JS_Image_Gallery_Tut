const current = document.querySelector("#current");
const imgs = document.querySelectorAll(".imgs img");
const opacity = 0.6;

//Also works
//const [current, imgs] = [document.querySelector('#current'), document.querySelectorAll(".imgs img")];

// Set first img opacity
imgs[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener("click", imgClick));

// origina evenListener fucntion e => (current.src = e.target.src

function imgClick(e) {
  // Reset the opacity
  imgs.forEach(img => (img.style.opacity = 1));
  // Change current image to src of clicked image
  current.src = e.target.src;

  // Add fade in class effect
  current.classList.add("fade-in");

  // Remove fade-in class after .5 seconds
  setTimeout(() => current.classList.remove("fade-in"), 500);

  // Change the opacity to opacity variable value
  e.target.style.opacity = opacity;
}
