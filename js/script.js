window.addEventListener("resize", function () {
var nav = document.querySelector('.header');
// var navlogo = document.querySelector('.nav-logo');
    var viewportWidth = window.innerWidth;
    nav.style.display = "none";
    if (viewportWidth < 640) {

        nav.style.display = "none";

    } else {
        nav.style.display = "flex";


    }
});





function toggleMenu(){
    // alert("Working");
    var myDiv = document.querySelector('.header');
    var computedStyle = window.getComputedStyle(myDiv);
    var secondLogo = document.querySelector('.logo-mob a');


if (computedStyle.display === 'block') {
    myDiv.style.display = "none";
    secondLogo.style.display = "block";
} else {
    myDiv.style.display = "block";
    secondLogo.style.display = "none";
}
    
}






// function toggleMenu() {
//     var myDiv = document.querySelector('.menu-btn');

//     // Get the computed style of the div
//     var computedStyle = window.getComputedStyle(myDiv);


//     var navlogo = document.querySelector('.nav-logo');
//     var navlogoStyle = window.getComputedStyle(navlogo);
//     var nav = document.getElementById('navmain');
//     var navstyle = window.getComputedStyle(nav);
//     var btnlinesA = document.querySelector('.btnA');
//     var btnlinesB = document.querySelector('.btnB');
//     var btnlinesC = document.querySelector('.btnC');

//     var navBtn = document.querySelector('#nav-btn');
//     // Check if the display property is set to 'block'
//     if (computedStyle.display === 'block') {
//         myDiv.style.display = "none";
//         navlogo.style.display = "block";
//         nav.style.padding = "10px 20px";

//         navBtn.style.top = "10px";


//         btnlinesA.style.transform = "rotate(0deg)";
//         btnlinesB.style.transform = "rotate(0deg)";
//         btnlinesC.style.transform = "rotate(0deg)";
//         btnlinesA.style.margin = "5px";
//         btnlinesB.style.margin = "5px";
//         btnlinesC.style.display = "block";
//     } else {
//         myDiv.style.display = "block";
//         navlogo.style.display = "none";
//         navBtn.style.top = "20px";
//         nav.style.padding = "0";
//         btnlinesA.style.transform = "rotate(45deg)";
//         btnlinesB.style.transform = "rotate(-45deg)";
//         btnlinesA.style.margin = "0px";
//         btnlinesB.style.margin = "0px";
//         btnlinesC.style.display = "none";


//     }



// };