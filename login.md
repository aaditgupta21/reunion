<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Login</title>
  </head>

  <body>
    <h1 style="text-align: center; font-size: 30px">
Login
    </h1>
 <div style="margin: 0 auto; text-align: center">
    <input type="text" id="email" name="email" placeholder="Email">
    <input type="password" id="password" name="password" required placeholder="Password">
    <button type="submit" onclick="formSubmit()">Submit</button>
</div>

<script type="text/javascript">
    function formSubmit() {
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        console.log(email);
        data = {email: email, password: password}
        console.log(data);

        let url = 'https://f1-backend.aadit.dev/authenticate';
        // let url = 'http://localhost:8085/authenticate';

        fetch(
          url, {method: "POST", mode: 'cors',cache: 'no-cache', credentials: 'include', headers: {'Content-Type': "application/json"}, body: JSON.stringify(data)})
          .then((response) => {
            console.log(response);
            return response.json();
          })
          .then((data) => {
            console.log(data);
            console.log(data.data);
            localStorage.setItem('ID', data.data);
            console.log('Data saved in sessionStorage');
            console.log(data.status);
            if (data.data === parseInt(data.data, 10)) {
              window.location.href = "https://aaditgupta21.github.io/reunion/nav/about";
            } else {
              alert("Invalid credentials");
            }
          });
      }
</script>
