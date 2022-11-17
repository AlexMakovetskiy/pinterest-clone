const modal = document.getElementById("myModal");
const btn = document.getElementById("choose-border");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.removeAttribute("style");
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) 
        modal.style.display = "none";
}

function hideModal() {
    const modalBackground = document.getElementById("myModal");
    modalBackground.setAttribute("style", "display: none");
    console.log('gtr');
}