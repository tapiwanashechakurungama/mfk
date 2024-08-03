const images = [
  "url(images/1-INSPIRE.png)",
  "url(images/3-LEARNDEEPLY.png)",
  "url(./../images/banner.jpeg)",
  "url(./../images/header.jpg)",
  // Add more image URLs as needed
];
const body = document.body
const ham = document.querySelector(".hamburger")
const links = document.querySelectorAll("a")

let currentIndex = 0;

function changeBackgroundImage() {
  banner.style.backgroundImage = images[currentIndex];
  currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackgroundImage, 10000); // Change image every 5 seconds

// Initial call to set the first background image
changeBackgroundImage();


//hamburger and phone links showing


ham.addEventListener("click",()=>{
  body.classList.toggle("close")
  body.classList.toggle("show")
})

// removing links show when links are clicked

links.forEach(link =>{
  link.addEventListener("click",()=>{
    body.classList.remove("close");
    body.classList.remove("show");
  })
})