//

// -_-_-_-_-_- This is my items list -_-_-_-_-_-
// const freelancers = [
//     {Name: "Amelia", Occupation: "Electrician", Price: 50},
//     {Name: "Emma", Occupation: "Photographer", Price: 70},
//     {Name: "Liam", Occupation: "Translator", Price: 45},
//     {Name: "Noah", Occupation: "Writer", Price: 40},
//     {Name: "Bronya", Occupation: "Illustrator", Price: 60},
//     {Name: "Harper", Occupation: "Blogger", Price: 35},
//     {Name: "Hector", Occupation: "Online Marketer", Price: 45},
//     {Name: "Avery", Occupation: "Tutor", Price: 65},
//     {Name: "Ellis", Occupation: "Voiceover Artist", Price: 75},
//     {Name: "Bailey", Occupation: "Accountant", Price: 55},
// ];
const names = ["Amelia", "Emma", "Liam", "Noah", "Bronya", "Harper", "Hector", "Avery", "Ellis", "Bailey"];

const occupations = ["Electrician", "Photographer", "Translator", "Writer", "Illustrator", "Blogger", "Online Marketer", "Tutor", "Voiceover Artist", "Accountant"];

const prices = [50,70,45,40,60,35,45,65,75,55];

const freelancers = [
    {name: "Ellis", occupation: "engineer", price: 80}
];

const maxFreelancers = 15;

const randomPrices = []
// -_-_-_-_-_- This is my functions -_-_-_-_-_-

function addFreelancer() {
    const name = names[Math.floor(Math.random() * names.length)]
    const occupation = occupations[Math.floor(Math.random() * occupations.length)]
    const price = prices[Math.floor(Math.random() * prices.length)]
    randomPrices.push(price)
    return {name,occupation,price} 
}

function renderFreelancers() {
    const freelancerList = document.getElementById("freelancerList")
    freelancerList.innerHTML = "freelancers";
    freelancers.forEach((freelancer) => {
        const li = document.createElement("li");
        li.textContent = `${freelancer.name} - ${freelancer.occupation} - ${freelancer.price}`
        freelancerList.appendChild(li);
    });
}

function averagePrice() {
    for (let i = 0; i < randomPrices.length; i++) {
        let total = 0
        freelancers.forEach(freelancer => total += freelancer.price);
        return total / freelancers.length;
    }
}

// -_-_-_-_- This is my organized Rendering section -_-_-_-_-_-
function render() {
    // title of the page -_-_-_-
    const title = "Freelancer Forum";
    const root = document.getElementById("root");
    if (!root) {
        const h1 = document.createElement("h1");
        h1.textContent = title;
        root.appendChild(h1);
    }
    renderFreelancers();
    renderAverage();
}
function addFreelancers() {
    const intervalId = setInterval(() => {
        const newFreelancer = addFreelancer();
        freelancers.push(newFreelancer);
        render();
        if (freelancers.length >= maxFreelancers) {
            clearInterval(intervalId);
        }
    }, 2000);
}

const renderAverage = () => {
    const average = document.getElementById("averagePrice");
    if (freelancers.length === 1) {
        average.textContent = "Average Starting Price"
        return 
    }
    const avg = averagePrice()
    average.textContent = `${avg.toFixed(2)}`
    
}

render();
addFreelancers();