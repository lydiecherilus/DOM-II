// Your code goes here

// 1 - mouseover

const contentSection = document.querySelector('section.content-section')
contentSection.addEventListener('mouseover', (event) => {
    console.log('mouse over!');
    event.target.style.fontSize = "4rem";
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
  if((window.innerWidth<800)&&(logoHeading.textContent="Fun Bus")){
    logoHeading.textContent="O La La";
  } else {
    logoHeading.textContent="Fun Bus";
  }
}
window.onresize = resize;


// 6 - scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        document.querySelector('body').style.background = 'pink';
        setTimeout(function() {
            document.querySelector('body').style.background = 'beige';
        }, 2000);
    }
 })


 // 7 - dblclick
const footerElement = document.querySelector('.footer');
footerElement.addEventListener('dblclick', (event) => {
    event.target.style.backgroundColor = 'red'; 
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


// 10 - drag
const introElement = document.getElementsByClassName('intro')
introElement[0].addEventListener('drag', event => {
alert('permission needed')
});