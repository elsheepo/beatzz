import $ from "jquery";
import "./jqBootstrapValidation";

$(function() {
  $("#signupForm input").jqBootstrapValidation({
    preventSubmit: true,
    submitError: function($form, event, errors) {
      // Fail message
      $("#signupSuccess").html("<div class='alert alert-danger'>");
      $("#signupSuccess > .alert-danger").append(
        $("<strong>").text("jqBootstrapValidation failed.")
      );
      $("#signupSuccess > .alert-danger").append("</div>");
    },
    submitSuccess: function($form, event) {
      event.preventDefault();

      var first = $("input#firstName").val();
      var last = $("input#lastName").val();
      var email = $("input#signupEmail").val();
      var uid = $("input#signupUid").val();
      var pwd = $("input#signupPwd").val();
      var pwdRepeat = $("input#signupPwdRepeat").val();

      var $this = $("#signupButton");
      $this.prop("disabled", true);
      $.ajax({
        url: "../includes/signup.inc.php",
        type: "POST",
        contentType: "application/json",
        processData: false,
        data: JSON.stringify({
          first,
          last,
          email,
          uid,
          pwd,
          pwdRepeat
        }),
        cache: false,
        success: function(data) {
          if (data["status"] === "error") {
            $("#signupSuccess").html("<div class='alert alert-danger'>");
            $("#signupSuccess > .alert-danger").append(
              $("<strong>").text(data["message"])
            );
            $("#signupSuccess > .alert-danger").append("</div>");
            if (data["code"] === "1") {
              document.getElementById("firstName").value = "";
              document.getElementById("firstName").focus();
            } else if (data["code"] === "2") {
              document.getElementById("lastName").value = "";
              document.getElementById("lastName").focus();
            } else if (data["code"] === "3") {
              document.getElementById("signupUid").value = "";
              document.getElementById("signupUid").focus();
            } else if (data["code"] === "4") {
              document.getElementById("signupPwd").value = "";
              document.getElementById("signupPwdRepeat").value = "";
              document.getElementById("signupPwd").focus();
            }
          } else if (data["status"] === "success") {
            // Success message
            $("#signupSuccess").html("<div class='alert alert-success'>");
            $("#signupSuccess > .alert-success").append(
              $("<strong>").text(data["message"])
            );
            $("#signupSuccess > .alert-success").append("</div>");
            // clear all fields
            $("#signupForm").trigger("reset");
            setTimeout(function() {
              window.location.search += data["url"];
            }, 1500);
          }
        },
        error: function() {
          // Fail message
          $("#signupSuccess").html("<div class='alert alert-danger'>");
          $("#signupSuccess > .alert-danger").append(
            $("<strong>").text("The server is not responding!")
          );
          $("#signupSuccess > .alert-danger").append("</div>");
          // clear all fields
          $("#signupForm").trigger("reset");
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
  $("#signupSuccess").html("");
});
