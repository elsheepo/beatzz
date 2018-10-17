import $ from "jquery";
import "./jqBootstrapValidation";

$(function() {
  $("#loginForm input").jqBootstrapValidation({
    preventSubmit: true,
    submitError: function($form, event, errors) {
      // Fail message
      $("#loginSuccess").html("<div class='alert alert-danger'>");
      $("#loginSuccess > .alert-danger").append(
        $("<strong>").text("jqBootstrapValidation failed.")
      );
      $("#loginSuccess > .alert-danger").append("</div>");
    },
    submitSuccess: function($form, event) {
      event.preventDefault();

      var uid = $("input#loginUid").val();
      var pwd = $("input#loginPwd").val();

      var $this = $("#loginButton");
      $this.prop("disabled", true);
      $.ajax({
        url: "../includes/login.inc.php",
        type: "POST",
        contentType: "application/json",
        processData: false,
        data: JSON.stringify({
          uid,
          pwd
        }),
        cache: false,
        success: function(data) {
          if (data["status"] === "error") {
            // Fail message
            $("#loginSuccess").html("<div class='alert alert-danger'>");
            $("#loginSuccess > .alert-danger").append(
              $("<strong>").text(data["message"])
            );
            $("#loginSuccess > .alert-danger").append("</div>");
            if (data["code"] === "2") {
              // clear password field
              document.getElementById("loginPwd").value = "";
              document.getElementById("loginPwd").focus();
            } else if (data["code"] === "1") {
              // clear all fields
              $("#loginForm").trigger("reset");
              document.getElementById("loginUid").focus();
            }
          } else if (data["status"] === "success") {
            // success message
            $("#loginSuccess").html("<div class='alert alert-success'>");
            $("#loginSuccess > .alert-success").append(
              $("<strong>").text(data["message"])
            );
            $("#loginSuccess > .alert-success").append("</div>");
            setTimeout(function() {
              window.location.search += data["url"];
            }, 1500);
          }
        },
        error: function() {
          // fail message
          $("#loginSuccess").html("<div class='alert alert-danger'>");
          $("#loginSuccess > .alert-danger").append(
            $("<strong>").text("The server is not responding.")
          );
          $("#loginSuccess > .alert-danger").append("</div>");
          // clear all fields
          $("#loginForm").trigger("reset");
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
  $("#loginSuccess").html("");
});
