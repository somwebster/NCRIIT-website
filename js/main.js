const deviceType = () =>
 /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    ? 'Mobile'
    : 'Desktop';

const team = [
    {name: "Ranjith Anbalagan", role: "President", picture: "team.jpg"},
    {name: "Vignesh Prakash", role: "Treasurer", picture: "team.jpg"},
    {name: "Mohit Sharma", role: "Student Affairs", picture: "team.jpg"},
    {name: "Suyan Ramesh", role: "Marketing", picture: "team.jpg"},
    {name: "Bidisha Panja", role: "Sponsorship Head", picture: "team.jpg"},
    {name: "Balakrishnan", role: "Logistics", picture: "team.jpg"},
    {name: "Abhishek Uniyal", role: "Technical Head", picture: "team.jpg"},
    {name: "Anah Veronica", role: "Content Writer", picture: "team.jpg"},
    {name: "Vijay Saboo", role: "Paper Selection", picture: "team.jpg"},
    {name: "Aman Vira", role: "Design Team", picture: "team.jpg"}
]

const sponsors = [
    {name: "Sponsor 1", picture: ""},
    {name: "Sponsor 2", picture: ""},
    {name: "Sponsor 3", picture: ""},
    {name: "Sponsor 4", picture: ""},
    {name: "Sponsor 5", picture: ""},
    {name: "Sponsor 6", picture: ""}
]

const handleResponsiveness = () => {
    if (deviceType() == "Mobile"){
        document.querySelector("#links").style.display = "none";
        document.querySelector("#nav-toggle").style.display = "block";
    }else{
        document.querySelector("#nav-toggle").style.display = "none"; 
        document.querySelector("#links").style.display = "block";
    }
}

// Create cards for team section
const loadTeam = () => {
    document.querySelector("#team-holder").innerHTML = "";

    team.map(member => {
        document.querySelector("#team-holder").innerHTML += `
            <div class="card team-card col-sm-3">
                <img class="card-img-top" src="asset/${member.picture}" alt="${member.name}">
                <div class="card-body">
                    <h5 class="card-title">${member.name}</h5>
                    <p class="card-text">${member.role}</p>
                </div>
            </div>
        `;
    })
}

// Create cards for sponsors section
const loadSponsors = () => {
    document.querySelector("#sponsors-holder").innerHTML = "";

    sponsors.map(sponsor => {
        document.querySelector("#sponsors-holder").innerHTML += `
            <div class="card sponsors-card col-sm-3">
                <div class="card-body">
                    <h5 class="card-title">${sponsor.name}</h5>
                </div>
            </div>
        `;
    })
}

// Toggle between mobile and desktop UI
window.onresize = event => handleResponsiveness();

window.onload = event => {
    handleResponsiveness()

    // Render team and sponsors
    loadTeam()
    loadSponsors()
}

// Close mobile-nav menu when a link is clicked
window.onhashchange = event => {
    if(deviceType() == "Mobile"){
        document.querySelector("#nav-btn").click()
    }
}