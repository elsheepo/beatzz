import $ from "jquery";
import Login from "../components/login";

$(function () {
  // Get the modal forms
  const loginForm = document.getElementById("login");
  const signupForm = document.getElementById("signup");
  const privacyModal = document.getElementById("privacyModal");

  // When the user clicks anywhere outside of an active modal window, close it.
  window.onclick = function (event) {
    if (event.target === loginForm) {
      loginForm.style.display = "none";
    } else if (event.target === signupForm) {
      signupForm.style.display = "none";
    } else if (event.target === privacyModal) {
      privacyModal.style.display = "none";
    }
  };

  // When the user clicks anywhere, hide the collapsed navigation menu.
  // $("html").click(function (event) {
  //   if ($(".navbar-collapse").is(":visible") && $(".navbar-toggler").is(":visible")) {
  //     $(".navbar-collapse").collapse("toggle");
  //   }
  // });
});
