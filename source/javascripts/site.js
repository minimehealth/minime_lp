function offset(el) {
  var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}


function copyToClipboard() {
  /* Get the text field */
  let copyText = document.getElementById("websiteLink");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);

  /* Alert the copied text */
  // alert("Copied the text: " + copyText.value);
}


// document.addEventListener('scroll', function (e) {
//   // const appsteps = document.getElementById("app-steps")
//   const how = document.getElementById("testi")

//   // if (how) {

//   //   var howOffset = offset(how);
//   //   // let appPosition = document.height - top - appsteps.height;
//   //   // console.log(how)
//   //   lastKnownScrollPosition = window.scrollY;
//   //   // return how.top + window.scrollY;
//   //   // console.log(lastKnownScrollPosition)
//   //   // console.log(appPosition)
//   //   const navbar = document.getElementById("nb")
//   //   // console.log(navbar)
//   //   if (lastKnownScrollPosition > nb.clientHeight) {
//   //     navbar.classList.add("bg-white");
//   //   } else {
//   //     navbar.classList.remove("bg-white");
//   //   }
//   // } else {
//   //   const navbar = document.getElementById("nb")
//   //   navbar.classList.add("bg-white");
//   // };
// });










//= require gdpr/cookie_consent
