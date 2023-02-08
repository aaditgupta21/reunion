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

        fetch(
          `https://f1-backend.aadit.dev/authenticate`, {method: "POST", mode: 'cors',cache: 'default', credentials: 'include', headers: {'Content-Type': "application/json"}, body: JSON.stringify(data)})
          .then((data) => {
            console.log(data);
          //   if (data.status == 200) {
          //     window.location.href = "https://aaditgupta21.github.io/reunion";
          //   } else {
          //     alert("Invalid credentials");
          //   }
          // });
      }
</script>
