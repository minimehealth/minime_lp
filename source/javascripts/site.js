// function offset(el) {
//   var rect = el.getBoundingClientRect(),
//     scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//     scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//   return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
// }
//

function copyToClipboard() {
  /* Get the text field */
  const copyText = document.querySelector("#websiteLink");
  console.log(copyText.innerText);
  /* Select the text field */
  // copyText.select();
  // copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.innerText);

  /* Alert the copied text */
  // alert("Copied the text: " + copyText.value);
}
// function clickCopy() {
//   /* Get the text field */
//   const copyButton = document.querySelector("#copyNow");
//   console.log(copyButton);
//   copyButton.addEventListener("click", copyToClipboard());

//   /* Alert the copied text */
//   // alert("Copied the text: " + copyText.value);
// }



//= require gdpr/cookie_consent
