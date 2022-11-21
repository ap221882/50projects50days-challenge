const ExperienceData = [
  {
    id: "01",
    title: "Frontend Developer",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore cumque blanditiis porro aspernatur atque, inventore qui?",
  },
  {
    id: "02",
    title: "Website Design",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore cumque blanditiis porro aspernatur atque, inventore qui?",
  },
  {
    id: "03",
    title: "SEO",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore cumque blanditiis porro aspernatur atque, inventore qui?",
  },
];

const separator = document.querySelector(".separator");
ExperienceData.map((singleExperience) => {
  const elementToBeAdded = document.createElement("h3");
  elementToBeAdded.textContent = "Ajay";
  separator.appendChild(elementToBeAdded);
  console.log(singleExperience);
});
// console.log(ExperienceData);
