const deviceType = () =>
 /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    ? 'Mobile'
    : 'Desktop';

const handleResponsiveness = () => {
    if (deviceType() == "Mobile"){
        links = document.querySelectorAll(".nav-link")
        for (var i=0;i<links.length;i++){
            links[i].style.display = "none"
        }
    }
}

window.onresize = event => {
    handleResponsiveness()
}

window.onload = event => {
    handleResponsiveness()
}