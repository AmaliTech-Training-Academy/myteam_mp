document.addEventListener("DOMContentLoaded",() => {
    console.log("JS ready");
    function validateForm() {
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var message = document.getElementById("message").value;
      var name_error = document.getElementById("name_error");
      var email_error = document.getElementById("email_error");
      var message_error = document.getElementById("message_error");
      var name_valid = true;
      var email_valid = true;

      if (email.trim() === ""){
        email_error.innerHTML = "This field is required";
        email_error.style.color = "red";
        // document.getElementById("email").style.border = "red";
        email_valid = false;
      } else {
        email_error.innerHTML = "";
        document.getElementById("email").style.border = "";
      }
      
      return email_valid;
    }

    document.getElementById("form").addEventListener("submit", (e) => {
        e.preventDefault();
        console.log("Submit button clicked");
        validateForm();
        form.reset();
    });

});