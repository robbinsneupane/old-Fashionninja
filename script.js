const bar = document.getElementById('bars');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}


var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img");
for (var i = 0; i < smallimg.length; ++i) {
    var smallPic = smallimg[i];
    smallPic.addEventListener("click", function (event) {
        var picClicked = event.target;
        MainImg.src = picClicked.src;
    })
}