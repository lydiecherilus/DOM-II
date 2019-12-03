// Your code goes here
// Create 10 [unique event listeners]

// 1 - mouseover
const contentSection = document.querySelector('section.content-section')
contentSection.addEventListener('mouseover', (event) => {
    event.target.style.fontSize = "2.5rem";
});


// 2 - keydown
const headerElement = document.querySelector('header');
headerElement.addEventListener('keydown', () => {
    headerElement.textContent = '';
});
const colorNav = document.querySelector('.nav');
colorNav.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'green';
});


// 3 - wheel
const contentDestination = document.querySelector('section.content-destination')
contentDestination.addEventListener('wheel', (event) => {
    event.target.style.fontSize = '30px';
});


// 4 - load
window.addEventListener('load', (event) => {
    alert("page loading!");
});


// 5 - resize
const logoHeading = document.querySelector('.logo-heading');
function resize() {
    if ((window.innerWidth < 800) && (logoHeading.textContent = "Fun Bus")) {
        logoHeading.textContent = "O La La";
    } else {
        logoHeading.textContent = "Fun Bus";
    }
}
window.onresize = resize;


// 6 - scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        document.querySelector('body').style.background = 'pink';
        setTimeout(function () {
            document.querySelector('body').style.background = 'beige';
        }, 2000);
    }
})


// 7 - dblclick
const footerElement = document.querySelector('.footer');
footerElement.addEventListener('dblclick', (event) => {
    event.target.style.backgroundColor = 'green';
})


// 8 - click
const buttonElement = document.querySelector('.btn');
buttonElement.addEventListener('click', (event) => {
    alert('Let sign you up!')
})


// 9 - copy
const inverseContent = document.querySelector('section.content-section.inverse-content')
inverseContent.addEventListener('copy', (event) => {
    alert("You copied some text!");
});


// 10 - mouseenter and mouseleave
const introElement = document.querySelector('p')
introElement.addEventListener('mouseenter', event => {
    event.target.style.color = 'purple';
});

const imageContent = document.querySelector(".img-content")
imageContent.addEventListener("mouseenter", () => {
    imageContent.style.transform = "scale(1.2)";
    imageContent.style.transition = "transform 0.4s"
})
imageContent.addEventListener("mouseleave", () => {
    imageContent.style.transform = "scale(1)"
})


// -----------------------------------------------
//* [ ] Stop the navigation items from refreshing the page by using `preventDefault()`
const stopNavLink = document.querySelector('nav');
stopNavLink.addEventListener("click", (event) => {
    event.preventDefault();
    alert("link stopped")
})


// -----------------------------------------------

//* [ ] Nest two similar events somewhere in the site 
//and prevent the event propagation properly
// step 2: Stop propogation
const bodyElement = document.querySelector('body');
bodyElement.addEventListener("click", () => {
    bodyElement.style.backgroundColor = "red";

})
introElement.addEventListener('click', event => {
    introElement.style.backgroundColor = "blue";
    event.stopPropagation();
})


// -----------------------------------------------
// create bus image in navbar for future animation
const navElement = document.querySelector('nav');
const movingBus = document.createElement('img');
movingBus.setAttribute('src', "img/moving-bus.jpg");
navElement.prepend(movingBus);