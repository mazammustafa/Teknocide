let counts_01 = setInterval(updated_01);
let upto_01 = 0;
function updated_01() {
    let count_01 = document.getElementById("counter-01");
    count_01.innerHTML = `${++upto_01}+`;
    if (upto_01 === 7) {
        clearInterval(counts_01);
    }
}

let counts_02 = setInterval(updated_02);
let upto_02 = 0;
function updated_02() {
    let count_02 = document.getElementById("counter-02");
    count_02.innerHTML = `${++upto_02}+`;
    if (upto_02 === 570) {
        clearInterval(counts_02);
    }
}

let counts_03 = setInterval(updated_03);
let upto_03 = 0;
function updated_03() {
    let count_03 = document.getElementById("counter-03");
    count_03.innerHTML = `${++upto_03}+`;
    if (upto_03 === 145) {
        clearInterval(counts_03);
    }
}

let counts_04 = setInterval(updated_04);
let upto_04 = 0;
function updated_04() {
    let count_04 = document.getElementById("counter-04");
    count_04.innerHTML = `${++upto_04}+`;
    if (upto_04 === 45) {
        clearInterval(counts_04);
    }
}

// Pre Loader
// const tl = gsap.timeline();
// tl.to("body", {
//     overflow: "hidden"
// })
//     .to(".preloader .text-container", {
//         duration: 0,
//         opacity: 1,
//         ease: "Power3.easeOut"
//     })
//     .from(".preloader .text-container h1", {
//         duration: 1.5,
//         delay: 1,
//         y: 70,
//         skewY: 10,
//         stagger: 0.4,
//         ease: "Power3.easeOut"
//     })
//     .to(".preloader .text-container h1", {
//         duration: 1.2,
//         y: 70,
//         skewY: -20,
//         stagger: 0.2,
//         ease: "Power3.easeOut"
//     })
//     .to(".preloader", {
//         duration: 1.5,
//         height: "0vh",
//         ease: "Power3.easeOut"
//     })
//     .to(
//         "body",
//         {
//             overflow: "auto"
//         },
//         "-=2"
//     )
//     .to(".preloader", {
//         display: "none"
//     });

new WOW().init();


// function onover() {
//     document.addEventListener('DOMContentLoaded', function () {
//         var service = document.querySelector('.service'); // Assuming 'service' is a class
//         var services_img = document.querySelector('.services_img');

//         service.addEventListener('mouseenter', function (e) {
//             services_img.classList.add('animate__animated', 'animate__lightSpeedInLeft');
//         });
//     });

// }

// function onout() {
//     document.addEventListener('DOMContentLoaded', function () {
//         var service = document.querySelector('.service'); // Assuming 'service' is a class
//         var services_img = document.querySelector('.services_img');

//         service.addEventListener('mouseleave', function () {
//             services_img.classList.remove('animate__animated', 'animate__lightSpeedInLeft');
//         });
//     });
// }


$(() => {
    $("#header").load("../templetes/header.html");
    $("#footer").load("../templetes/footer.html");
    $("#contactForm").load("../templetes/contactForm.html");
    $("#achievements").load("../templetes/achievements.html");
    $("#marquee").load("../templetes/marquee.html");
    $("#ourServices").load("../templetes/ourServices.html");
    $("#ourWork").load("../templetes/ourWork.html");
    $("#marketingRequirments").load("../templetes/marketingRequirments.html");
});




