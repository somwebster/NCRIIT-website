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

const handleResponsiveness = () => {
    if (deviceType() == "Mobile"){
        links = document.querySelectorAll(".links")
        for (var i=0;i<links.length;i++){
            links[i].style.display = "none"
        }
        document.querySelector("#nav-toggle").style.display = "block";
    }else{
        document.querySelector("#nav-toggle").style.display = "none"; 
        links = document.querySelectorAll(".links")
        for (var i=0;i<links.length;i++){
            links[i].style.display = "block"
        }       
    }
}

const loadTeam = () => {
    document.querySelector("#team-holder").innerHTML = "";

    team.map(member => {
        let card = `
            <div class="card col-sm-3">
                <img class="card-img-top" src="asset/${member.picture}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${member.name}</h5>
                    <p class="card-text">${member.role}</p>
                </div>
            </div>
        `;

        document.querySelector("#team-holder").innerHTML += card;

    })
}

window.onresize = event => {
    handleResponsiveness()
}

window.onload = event => {
    handleResponsiveness()
    loadTeam()
}