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

<div style="margin: 0 auto; text-align: center">
  <h5 style="text-align: center; font-size: 30px">
    Create New User
  </h5>
  <form method="POST" id="newUserForm">
    <p>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="type email here"
        class="text"
      />
    </p>
    <p>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="type password here"
        class="text"
      />
    </p>
    <p>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="type name here"
      />
    </p>
    <p>
      <input
        type="text"
        name="dob"
        id="dob"
        placeholder="type date of birth here"
      />
    <p>
      <input
        type="text"
        name="height"
        id="height"
        placeholder="type height here"
      />
    </p>
    <p>
      <input
        type="text"
        name="weight"
        id="weight"
        placeholder="type weight here"
      />
    </p>
    <p>
      <input
        type="text"
        name="gender"
        id="gender"
        placeholder="type gender here"
      />
    </p>
    <input value="Submit" type="submit" class="button"/>
  <form>

  <p id="bruh"></p>
  <table id = "users">
    <thead>
      <tr>
        <th>id</th>
        <th>email</th>
        <th>password</th>
        <th>name</th>
        <th>height</th>
        <th>weight</th>
        <th>gender</th>
        <th>age</th>
        <th>stepgoal</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>

  <h5 style="text-align: center; font-size: 30px">
    Create New Step Log
  </h5>
  <form method="POST" id="newStepLogForm">
    <p>
      <input
        type="text"
        name="id"
        id="id"
        placeholder="type id here"
      />
    <p>
      <input
        type="text"
        name="date"
        id="date"
        placeholder="type date here"
      />
    <p>
      <input
        type="text"
        name="steps"
        id="steps"
        placeholder="type steps here"
      />
    <p>
      <input
        type="text"
        name="calories"
        id="calories"
        placeholder="type calories here"
      />
    </p>
    <input value="Submit" type="submit" class="button"/>
  <form>

  <h5 style="text-align: center; font-size: 30px">
    Get Step Logs
  </h5>
  <form method="POST" id="getStepLogForm">
      <input
        type="text"
        name="id"
        id="idInput"
        placeholder="type id here"
      />
    <input value="Submit" type="submit" class="button"/>
  <form>

  <p id="bruh"></p>
  <table id = "stepLogReport">
    <thead>
      <tr>
        <th>id</th>
        <th>stepGoal</th>
        <th>totalSteps</th>
        <th>daysRecorded</th>
        <th>activeDays</th>
        <th>caloriesConsumed</th>
        <th>caloriesBurnt</th>
        <th>netCalories</th>
        <th>netWeightReport</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>

  <p id="bruh"></p>
  <table id = "stepLogStats">
    <thead>
      <tr>
        <th>id</th>
        <th>date</th>
        <th>steps</th>
        <th>calories</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>
<div>

<script>
  // on submit, api call sends json for updated entry to be sent
      function submitform(event) {
        event.preventDefault();

        // forms data
        const data = new FormData(event.target);

        const queryString = new URLSearchParams(data).toString();

        fetch("https://f1-backend.aadit.dev/api/person/post/?" + queryString, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json"
          }
        })

        const form = document.getElementById("newUserForm");
        form.reset();
      }

      const form = document.getElementById("newUserForm");
      form.addEventListener("submit", submitform);

  // prepare HTML user container for new output
  const userContainer = document.getElementById("users");
  const stepTrackerContainer = document.getElementById("steptracker");

  // prepare fetch options
  const url = "https://f1-backend.aadit.dev/api/person/";

  // not needed
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

  // not needed
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

  // for nicky follow this example
  function listIDS() {
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
            userContainer.appendChild(tr);
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
              const age = document.createElement("td");
              const stepgoal = document.createElement("td");

              id.innerHTML = row.id;
              email.innerHTML = row.email;
              password.innerHTML = row.password;
              name.innerHTML = row.name;
              height.innerHTML = row.height;
              weight.innerHTML = row.weight;
              gender.innerHTML = row.gender;
              age.innerHTML = row.age;
              stepgoal.innerHTML = row.stepgoal;

              tr.appendChild(id);
              tr.appendChild(email);
              tr.appendChild(password);
              tr.appendChild(name)
              tr.appendChild(height);
              tr.appendChild(weight);
              tr.appendChild(gender);
              tr.appendChild(age);
              tr.appendChild(stepgoal);

              userContainer.appendChild(tr);
            }
        })
    })
  }

  listIDS();
</script>
