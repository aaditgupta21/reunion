<br>
<br>
<h1 style ="text-align: center">Our FRQs</h1>

<div id="title">
{% include nav2.html %}
</div>

<h1 style="text-align: center; font-size: 30px">
      FRQ
      <span style="font-weight: bold">#2: Step Tracker</span>
    </h1>

<form method="POST" id="signupForm">
      <p>
        <label for="name">Name:</label>
        <input type="text" name="name" id="name" class="inputText" />
      </p>
      <p>
        <label for="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
        />
      </p>
      <p>
        <label for="graduatingYear">Graduating Year:</label>
        <input
          type="text"
          name="graduatingYear"
          id="graduatingYear"
        />
      </p>
      <p>
        <label for="email">Old Email:</label>
        <input type="email" name="email" id="email" class="inputText" />
      </p>
      <p>
        <label for="phoneNumber">Phone Number:</label>
        <input
          type="text"
          name="phoneNumber"
          id="phoneNumber"
        />
      </p>
      <input value="Submit" type="submit" />
    </form>

<table>
  <thead>
  <tr>
    <th>id</th>
    <th>email</th>
    <th>password</th>
    <th>name</th>
    <th>height</th>
    <th>weight</th>
    <th>gender</th>
  </tr>
  </thead>
  <tbody id = "result">

  </tbody>
</table>

<script>
  // prepare HTML result container for new output
  const resultContainer = document.getElementById("result");

  // prepare fetch options
  const url = "https://f1.aadit.dev/api/person/";

  const options = {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'omit', // include, *same-origin, omit
      headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
      },
  };

  const putOptions = {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'omit', // include, *same-origin, omit
      headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
      },
  };

    // fetch the API
  fetch(url, options)
    // response is a RESTful "promise" on any successful fetch
    .then(response => {
      // check for response errors
      if (response.status !== 200) {
          const errorMsg = 'Database response error: ' + response.status;
          console.log(errorMsg);
          const tr = document.createElement("tr");
          const td = document.createElement("td");
          td.innerHTML = errorMsg;
          tr.appendChild(td);
          resultContainer.appendChild(tr);
          return;
      }
      // valid response will have json data
      response.json().then(data => {
          for (const row of data) {

            const tr = document.createElement("tr");

            const id = document.createElement("td");
            const email = document.createElement("td");
            const password = document.createElement("td");
            const name = document.createElement("td");
            const height = document.createElement("td");
            const weight = document.createElement("td");
            const gender = document.createElement("td");

            id.innerHTML = row.id;
            email.innerHTML = row.email;
            password.innerHTML = row.password;
            name.innerHTML = row.name;
            height.innerHTML = row.height;
            weight.innerHTML = row.weight;
            gender.innerHTML = row.gender;

            tr.appendChild(id);
            tr.appendChild(email);
            tr.appendChild(password);
            tr.appendChild(name)
            tr.appendChild(height);
            tr.appendChild(weight);
            tr.appendChild(gender);

            resultContainer.appendChild(tr);
          }
      })
  })
</script>
