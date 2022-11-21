const ExperienceData = [
  {
    id: "1",
    title: "Frontend Developer",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore cumque blanditiis porro aspernatur atque, inventore qui?",
  },
  {
    id: "2",
    title: "React Developer",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore cumque blanditiis porro aspernatur atque, inventore qui?",
  },
  {
    id: "3",
    title: "JavaScript Developer",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore cumque blanditiis porro aspernatur atque, inventore qui?",
  },
];

const separator = document.querySelector(".card-container");
ExperienceData.map((singleExperience) => {
  const elementToBeAdded = document.createElement("div");
  elementToBeAdded.insertAdjacentHTML(
    "afterbegin",
    `<h3>${singleExperience.title}</h3><p>${singleExperience.info}</p>`
  );
  // elementToBeAdded.textContent = singleExperience.title;
  elementToBeAdded.classList.add("experiences");
  elementToBeAdded.setAttribute("dataid", singleExperience.id);
  separator.appendChild(elementToBeAdded);
  console.log(singleExperience);
});
// console.log(ExperienceData);
