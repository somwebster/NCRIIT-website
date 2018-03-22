const deviceType = () =>
 /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    ? 'Mobile'
    : 'Desktop';

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

window.onresize = event => {
    handleResponsiveness()
}

window.onload = event => {
    handleResponsiveness()
}