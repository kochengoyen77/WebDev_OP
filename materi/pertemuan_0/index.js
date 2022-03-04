let image = document.querySelector(".portrait-img");
let button = document.querySelector(".btn");
button.addEventListener("click", () => {
  if (image.src == "public/portrait1.jpeg") image.src = "public/portrait.jpg";
  else {
    image.src = "public/portrait1.jpeg";
  }
  console.log(image.src);
});
