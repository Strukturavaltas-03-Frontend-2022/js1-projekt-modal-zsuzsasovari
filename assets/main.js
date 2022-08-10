function on(){
    modal.style.display = "block";
    document.getElementById("overlay").style.display = "block";
    document.getElementById("button2").focus();
}

function off() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("myModal").style.display = "none";
}

let modal = document.getElementById("myModal");

let btn = document.getElementById("myBtn");

let span = document.getElementsByClassName("close")[0];
 
btn.onclick = () => on();

span.onclick = () => off();

document.getElementById("button1").onclick = () => off();

document.getElementById("button2").onclick = () => off();