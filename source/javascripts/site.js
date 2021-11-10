// window.onscroll = () => {
//   const nav = document.querySelector("#nb");
//   const navbrand = nav.querySelector("a");
//   const navlinks = nav.querySelectorAll("li.nav-item > a");
//   console.log(navlinks);
//   if (this.scrollY <= 10) {
//     nav.className =
//       "navbar navbar-expand-lg fixed-top navbar-light bg-light p-3 background-invisible";
//     navlinks.forEach((link) => (link.className = "nav-link color-linen"));
//     navbrand.className = "navbar-brand color-linen";
//   } else {
//     navbrand.className = "navbar-brand color-dark";
//     nav.className =
//       "navbar navbar-expand-lg fixed-top navbar-light bg-light p-3 scroll";
//     navlinks.forEach((link) => (link.className = "nav-link color-dark"));
//   }
// };

// window.onload = function () {
//   const navlink = document.querySelectorAll(".nav-link");
//   navlink.addEventListener;
// };


function offset(el) {
  var rect = el.getBoundingClientRect(),
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

window.onload = () => {
  document.querySelector('[data-bs-target="#examplePopup"]').click();
}

document.addEventListener('scroll', function(e) {
  // const appsteps = document.getElementById("app-steps")
  const how = document.getElementById("how")
  var howOffset = offset(how);
  // let appPosition = document.height - top - appsteps.height;
  // console.log(how)
  lastKnownScrollPosition = window.scrollY;
  // return how.top + window.scrollY;
  // console.log(lastKnownScrollPosition)
  // console.log(appPosition)
  const navbar = document.getElementById("navbar")
  // console.log(navbar)
  if (lastKnownScrollPosition > (howOffset.top - 180) ) {  
    navbar.classList.remove("border-nav");
  } else {
    navbar.classList.add("border-nav");
  }
});
//= require gdpr/cookie_consent
