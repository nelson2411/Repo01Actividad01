/*
make a image rotate on hover
*/
const atomImg = document.getElementById("atom")

atomImg.addEventListener("mouseover", () => {
  atomImg.classList.add("rotate")
})

atomImg.addEventListener("mouseout", () => {
  atomImg.classList.remove("rotate")
})
