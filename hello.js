
    
    
   document.getElementById('loginForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting normally

      // Perform your login logic here
      var username = document.getElementsByName('username')[0].value;
      var password = document.getElementsByName('password')[0].value;

      // Example validation - check if the username and password match
      if (username === 'admin@gmail.com' && password === 'password') {
        // Redirect to the next page
        window.location.href = 'next.html';
      } else {
        alert("invalid");
      }
    });

    