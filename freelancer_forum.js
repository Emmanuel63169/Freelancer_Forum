//

// -_-_-_-_-_- This is my items list -_-_-_-_-_-
const freelancers = [
    {Name: "Amelia", Occupation: "Electrician", Price: 50},
    {Name: "Emma", Occupation: "Photograqpher", Price: 70},
    {Name: "Liam", Occupation: "Translator", Price: 45},
    {Name: "Noah", Occupation: "Writer", Price: 40},
    {Name: "Bronya", Occupation: "Illustrator", Price: 60},
    {Name: "Harper", Occupation: "Blogger", Price: 35},
    {Name: "Hector", Occupation: "Online Marketer", Price: 45},
    {Name: "Avery", Occupation: "Tutor", Price: 65},
    {Name: "Ellis", Occupation: "Voiceover Artist", Price: 50},
    {Name: "Bailey", Occupation: "Accountant", Price: 55},
];

// -_-_-_-_-_- This is my functions -_-_-_-_-_-

function renderFreelancers(freelancers) {
    const root = document.querySelector("#root")
    freelancers.forEach ((freelancer) => {
        const freelancerElem = document.createElement("div")
        freelancerElem.innerHTML = `
        <p>${freelancer.Name}</p>
        <p>${freelancer.Occupation}</p>
        <p>${freelancer.Price}</p>
        `
// -_-_-_- Heres some styling for the freelancer list -_-_-_-
        freelancerElem.style.display = "flex";
        freelancerElem.style.justifyContent = "space-evenly";

        root.appendChild(freelancerElem)
    })
}

// -_-_-_-_- This is my Rendering section -_-_-_-_-_-
function render() {
    const title = "Freelancer Forum";
    const root = document.querySelector("#root");
    const h1 = document.createElement("h1");
    h1.textContent = title;
    root.appendChild(h1);
    renderFreelancers(freelancers);
}
render();