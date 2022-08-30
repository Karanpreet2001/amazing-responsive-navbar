const menuButton = document.querySelector(".mobile-navbar-button");
const header = document.querySelector(".header");



const toggleNavBar = () =>{
        header.classList.toggle('active');
}

menuButton.addEventListener('click', toggleNavBar);