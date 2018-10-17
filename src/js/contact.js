import $ from "jquery";
import "./jqBootstrapValidation";

$(function() {
  $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
    preventSubmit: true,
    submitError: function($form, event, errors) {
      // Fail message
      $("#success").html("<div class='alert alert-danger'>");
      $("#success > .alert-danger").append(
        $("<strong>").text("jqBootstrapValidation failed.")
      );
      $("#success > .alert-danger").append("</div>");
    },
    submitSuccess: function($form, event) {
      event.preventDefault();

      var name = $("input#name").val();
      var email = $("input#email").val();
      var message = $("textarea#message").val();

      var $this = $("#sendMessageButton");
      $this.prop("disabled", true);
      $.ajax({
        url: "../includes/contact.inc.php",
        type: "POST",
        contentType: "application/json",
        processData: false,
        data: JSON.stringify({ name: name, email: email, message: message }),
        cache: false,
        success: function() {
          // Success message
          $("#success").html("<div class='alert alert-success'>");
          $("#success > .alert-success").append(
            "<strong>Your message has been sent! </strong>"
          );
          $("#success > .alert-success").append("</div>");
          // clear all fields
          $("#contactForm").trigger("reset");
        },
        error: function() {
          // Fail message
          $("#success").html("<div class='alert alert-danger'>");
          $("#success > .alert-danger").append(
            $("<strong>").text(
              "The mail server is not responding. Please try again later!"
            )
          );
          $("#success > .alert-danger").append("</div>");
          // clear all fields
          $("#contactForm").trigger("reset");
        },
        complete: function() {
          setTimeout(function() {
            $this.prop("disabled", false);
          }, 1000);
        }
      });
    },
    filter: function() {
      return $(this).is(":visible");
    }
  });

  $('a[data-toggle="tab"]').click(function(e) {
    e.preventDefault();
    $(this).tab("show");
  });
});

/* When clicking on Full hide fail/success boxes */
$("#name").focus(function() {
  $("#success").html("");
});
