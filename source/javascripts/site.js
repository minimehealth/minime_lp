window.onscroll = () => {
  const nav = document.querySelector("#nb");
  const navbrand = nav.querySelector("a");
  const navlink = nav.querySelectorAll("li.nav-item > a");
  if (this.scrollY <= 10) {
    nav.className =
      "navbar navbar-expand-lg fixed-top navbar-light bg-light p-3 background-invisible";
    navlink.className = "nav-link color-linen";
    navbrand.className = "navbar-brand color-linen";
  } else {
    navbrand.className = "navbar-brand color-dark";
    nav.className =
      "navbar navbar-expand-lg fixed-top navbar-light bg-light p-3 scroll";
    navlink.className = "nav-link color-dark";
  }
};
