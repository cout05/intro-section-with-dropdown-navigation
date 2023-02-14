const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile_menu');
const closeToggle = document.querySelector('.close_toggle');
const backGround = document.querySelector('.landing_page');

function toggleMobileMenu() {
  mobileMenu.classList.toggle('show');
  backGround.classList.toggle('show');
}

menuToggle.addEventListener('click', toggleMobileMenu);
closeToggle.addEventListener('click', toggleMobileMenu);


const dropdownbtn = document.getElementsByClassName("dropdown_btn");
  
dropdownbtn[0].addEventListener("click", function() {
  const dropdownMenu = document.getElementsByClassName("dropdown_menu");
  if (dropdownMenu[0].style.display === "block") {
    dropdownMenu[0].style.display = "none";
  } else {
    dropdownMenu[0].style.display = "block";
  }

  const myArrow = document.getElementsByClassName("arrow_down");
  if (myArrow[0].src.match("images/icon-arrow-down.svg")) {
    myArrow[0].src = "images/icon-arrow-up.svg";
  } else {
    myArrow[0].src = "images/icon-arrow-down.svg";
  }

})

const dropdownbtn2 = document.getElementsByClassName("dropdown_btn2");
  
dropdownbtn2[0].addEventListener("click", function() {
  const dropdownMenu2 = document.getElementsByClassName("dropdown_menu2");
  if (dropdownMenu2[0].style.display === "block") {
    dropdownMenu2[0].style.display = "none";
  } else {
    dropdownMenu2[0].style.display = "block";
  }

  const myArrow = document.getElementsByClassName("arrow_down");
  if (myArrow[1].src.match("images/icon-arrow-down.svg")) {
    myArrow[1].src = "images/icon-arrow-up.svg";
  } else {
    myArrow[1].src = "images/icon-arrow-down.svg";
  }
})

const dropdownbtnMobile = document.getElementsByClassName("dropdown_btn_mobile");
  
dropdownbtnMobile[0].addEventListener("click", function() {
  const dropdownMenu = document.getElementsByClassName("dropdown_menu_mobile");
  if (dropdownMenu[0].style.display === "block") {
    dropdownMenu[0].style.display = "none";
  } else {
    dropdownMenu[0].style.display = "block";
  }

  const myArrow = document.getElementsByClassName("arrow_down_mobile");
  if (myArrow[0].src.match("images/icon-arrow-down.svg")) {
    myArrow[0].src = "images/icon-arrow-up.svg";
  } else {
    myArrow[0].src = "images/icon-arrow-down.svg";
  }

})

const dropdownbtnMobile2 = document.getElementsByClassName("dropdown_btn_mobile2");
  
dropdownbtnMobile2[0].addEventListener("click", function() {
  const dropdownMenu2 = document.getElementsByClassName("dropdown_menu_mobile2");
  if (dropdownMenu2[0].style.display === "flex") {
    dropdownMenu2[0].style.display = "none";
  } else {
    dropdownMenu2[0].style.display = "flex";
  }

  const myArrow = document.getElementsByClassName("arrow_down_mobile2");
  if (myArrow[0].src.match("images/icon-arrow-down.svg")) {
    myArrow[0].src = "images/icon-arrow-up.svg";
  } else {
    myArrow[0].src = "images/icon-arrow-down.svg";
  }

})

const image = document.getElementById("imageHero");
  const windowWidth = window.innerWidth;

  if (windowWidth <= 600) {
    image.src = "images/image-hero-mobile.png";
  }
