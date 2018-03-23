const deviceType = () =>
 /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    ? 'Mobile'
    : 'Desktop';

const team = [
    {name: "Person 1", role: "Person 1's role", picture: "team.jpg"},
    {name: "Person 2", role: "Person 2's role", picture: "team.jpg"},
    {name: "Person 3", role: "Person 3's role", picture: "team.jpg"},
    {name: "Person 4", role: "Person 4's role", picture: "team.jpg"},
    {name: "Person 5", role: "Person 5's role", picture: "team.jpg"},
    {name: "Person 6", role: "Person 6's role", picture: "team.jpg"}
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

window.onresize = event => handleResponsiveness();

window.onload = event => {
    handleResponsiveness()
    loadTeam()
    loadSponsors()
}

// Close mobile-nav menu when a link is clicked
window.onhashchange = event => document.querySelector("#nav-btn").click();