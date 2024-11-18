/*
make a image rotate on hover
*/
const atomImg = document.getElementById("atom")

atomImg.addEventListener("mouseover", () => {
  atomImg.style.transform = "rotate(360deg)"
})
