const search = document.querySelector(".search");
const btn = document.querySelector("#btn");
const text = document.querySelector(".text");

btn.addEventListener("click", () => {
  search.classList.toggle("active");
  text.focus();
});
