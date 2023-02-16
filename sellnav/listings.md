<div id="title" style="margin-top: -50px">
{% include sellnav.html %}
</div>

<div style="margin: 0 auto; text-align: center">
  

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

        fetch("https://f1-backend.aadit.dev/api/item/post/?" + queryString, {
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
  const url = "https://f1-backend.aadit.dev/api/item/";

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

              const partType = document.createElement("td");
              const description = document.createElement("td");
              const cost = document.createElement("td");
              const weight = document.createElement("td");
              const date = document.createElement("td");
              const imageUrl = document.createElement("td");

              partType.innerHTML = row.id;
              description.innerHTML = row.email;
              cost.innerHTML = row.password;
              weight.innerHTML = row.weight;
              date.innerHTML = row.gender;
              imageUrl.innerHTML = row.age;

              tr.appendChild(partType);
              tr.appendChild(description);
              tr.appendChild(cost);
              tr.appendChild(weight);
              tr.appendChild(date);
              tr.appendChild(imageUrl);

              userContainer.appendChild(tr);
            }
        })
    })
  }

  listIDS();
</script>
