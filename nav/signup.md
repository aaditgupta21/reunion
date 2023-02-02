<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Signup</title>
  </head>

  <body>
    <h1 style="text-align: center; font-size: 30px">
Signup
    </h1>
 <div style="margin: 0 auto; text-align: center">
    <input type="text" id="email" name="email" placeholder="Email">
    <input type="password" id="password" name="password" required placeholder="Password">
    <input type="text" id="name" name="name" placeholder="Name">
    <input type="date" id="dob" name="dob" placeholder="MM-dd-yyyy" style="width: 50%;
  padding: 5px 5px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid #CD2A2A;
  border-radius: 40px;
  color: gray;">
    <input type="text" id="gender" name="gender" placeholder="Gender">
    <input type="text" id="teamName" name="teamName" placeholder="Team Name">
    <button type="submit" onclick="formSubmit()">Submit</button>
</div>

<script type="text/javascript">
    function formSubmit() {
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let name = document.getElementById("name").value;
        let dob = document.getElementById("dob").value;
        let gender = document.getElementById("gender").value;
        let teamName = document.getElementById("teamName").value;
        console.log(email);
        data = {email: email, password: password, name: name, dob: dob, gender: gender, teamName: teamName}
        console.log(data);

        fetch(
          `https://f1-backend.aadit.dev/authenticate`, {method: "POST", mode: 'cors',cache: 'default', credentials: 'same-origin', headers: {'Content-Type': "application/json"}, body: JSON.stringify(data)})
          .then((data) => {
            console.log(data);
            if (data.status == 200) {
              window.location.href = "https://aaditgupta21.github.io/reunion";
            } else {
              alert("Invalid credentials");
            }
          });
      }
</script>
