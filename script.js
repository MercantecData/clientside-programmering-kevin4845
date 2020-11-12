function setup() {
    var test1modal = document.getElementById("test1-modal");
    var test2modal = document.getElementById("test2-modal");

    var test1button = document.getElementById("test1-button");
    var test2button = document.getElementById("test2-button");

}

function modal(modal) {

    if (modal.style.display === "none") {
        modal.style.display = "block";
    } else {
        modal.style.display = "none";
    }

}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

function scrollToTop() {
    window.scroll(0,0);
    
}