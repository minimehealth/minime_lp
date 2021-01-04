window.onscroll = () => {
  const nav = document.querySelector("#nb");
  if (this.scrollY <= 10)
    nav.className =
      "navbar navbar-expand-lg fixed-top navbar-light bg-light p-3 background-invisible";
  else
    nav.className =
      "navbar navbar-expand-lg fixed-top navbar-light bg-light p-3 scroll";
};
