const menu = document.querySelector('.menu-svg');
const menuIcon = document.querySelector('.menu-icon');

menuIcon.addEventListener('click',()=>{
    console.log('Clicked')
})



function myFunction() {
  if (menuIcon.style.display === "block") {
    menu.style.display = "none";
  } else {
    menuIcon.style.display = "block";
  }
}

