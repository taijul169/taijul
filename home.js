//type-js activation-------
var typed = new Typed('.typed', {
  strings: [
    'Web Designer!',
    'Web Developer!',
    'Frelancer!'],
  typeSpeed: 60,
  backSpeed: 60,
  loop:true
});

// // header-search-bar
// const searchBtn = document.querySelector('.fa-search');
// const closeBtn = document.querySelector('.fa-close');
// const searchBar = document.querySelector('.search-bar');
// searchBtn.addEventListener('click', () => {
//     searchBar.style = "display:block";
//     searchBtn.style = "display:none";
//     closeBtn.style = "display:block";
// });
// closeBtn.addEventListener('click', () => {
//     searchBar.style = "display:none";
//     searchBtn.style = "display:block";
//     closeBtn.style = "display:none";
// });

// sidebar-collapse
const controlerButton = document.querySelector('.three-bar');
const sidebar = document.getElementById('navbarNav');
const closeBtn = document.getElementById('closeBtn');
// const closebtnLeft  = document.getElementById('left-sidenav-close-btn');
// const registerBtn   = document.getElementById('register-btn');
// const sidenavLeft   = document.getElementById('side-menu-left');
// const sidenavRight  = document.getElementById('sidemenu-right');
// const threebarLeft  = document.getElementById('threebar-left');
//--------------------------------------------
// const threeBar = document.querySelector('.three-bars');
// const sidebarModal = document.querySelector('.sidebar-modal-section');
// const sidebarcloseBtn = document.querySelector('.close-btn-sidebar');
// const sidebarInner = document.querySelector('.sidebar-inner-content');

// ---left-sidebar-collpase--------------------
controlerButton.addEventListener('click', () => {
    sidbarDisplay();
});
closeBtn.addEventListener('click', () => {
   sidbarClose();
});

function sidbarDisplay() {
  setTimeout(function () {
    sidebar.style = "left:0px";
    controlerButton.style = "opacity:0";
    controlerButton.style = "visibility:hidden";
  }, 100);
}
function sidbarClose() {
  setTimeout(function () { sidenavLeft.style = "left:-320px"; }, 100);
  sidebar.style = "left:-275px";
  controlerButton.style = "opacity:1";
  controlerButton.style = "visibility:visible";
}
// ----right-sidebar-collpase---------------------
registerBtn.addEventListener('click', () => {
    sidbarDisplayRight();
});
closebtnRight.addEventListener('click', () => {
   sidbarCloseRight();
});

function sidbarDisplayRight() {
  setTimeout(function () {
    sidenavRight.style = "right:0px";
   
  }, 100);
}
function sidbarCloseRight() {
  setTimeout(function () { sidenavRight.style = "right:-360px"; }, 100);
  
}
  // cart-dropdown-------------------------------
        /* When the user clicks on the button, 
          toggle between hiding and showing the dropdown content */
          function myFunction() {
            document.getElementById("cart-box-home").classList.toggle("show");
          }
          // Close the dropdown if the user clicks outside of it
          window.onclick = function(event) {
            if (!event.target.matches('.dropbtn')) {
              var dropdowns = document.getElementsByClassName("dropdown-content");
              var i;
              for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                  openDropdown.classList.remove('show');
                }
              }
            }
          }

//--------------searchbar -collpase-----------------
// //--------------active-class activation-------------------
// // Get the container element
// var btnContainer = document.getElementById("tab-nav");

// // Get all buttons with class="btn" inside the container
// var btns = btnContainer.getElementsByClassName("nav-link");

// // Loop through the buttons and add the active class to the current/clicked button
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("btn-active-bg");
//     current[0].className = current[0].className.replace(" btn-active-bg", "");
//     this.className += " btn-active-bg";
//   });
// }