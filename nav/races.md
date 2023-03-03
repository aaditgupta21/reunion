## Races of the year

### British Grand Prix

![](../static/BritishGP.png)

<ul style="color: black">
  <li>Location: Silverstone, Britain</li>
  <li>Founded in 1926</li>
  <li>52 Laps</li>
  <li>Most wins: Lewis Hamilton (8)</li>
</ul>

<style>
    ul {
  list-style: none; /* Remove default bullets */
}

ul li::before {
  content: "\2022";  /* Add content: \2022 is the CSS Code/unicode for a bullet */
  color: red; /* Change the color */
  font-weight: bold; /* If you want it to be bold */
  display: inline-block; /* Needed to add space between the bullet and the text */
  width: 1em; /* Also needed for space (tweak if needed) */
  margin-left: -1em; /* Also needed for space (tweak if needed) */
}
</style>

<body>


<div id="years" class=
            "container-fluid">
    </div>
</body>

<!-- button to create table -->
<div lik style="margin: 0 auto; text-align: center">
    <input type="text" id="year" name="year" placeholder="Enter Year Here"
    style="width: 50%;
  padding: 5px 5px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid #CD2A2A;
  border-radius: 40px;
  color: black;">
    <button type="submit" onclick="formSubmit()">Get Info</button>
</div>
<div style="margin: 0 auto; text-align: center">
    <input type="text" id="comment" name="comment" placeholder="Your Opinion"
     style="width: 50%;
  padding: 5px 5px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid #CD2A2A;
  border-radius: 40px;
  color: gray;">
    <button type="Save Notes" onclick="notesSubmit()">Submit</button>
    <br>
</div>

<!-- button to delete table -->
<div lik style="margin: 0 auto; text-align: center">
    <button type="submit" onclick="deleteTable(id)">Delete Table</button>
</div>
<div lik style="margin: 0 auto; text-align: center">
    <button type="submit" onclick="deleteComments(id)">Delete Comments</button>
</div>



<script type="text/javascript">

  let year = -1;
    function formSubmit() {
        year = document.getElementById("year").value;
        console.log(year);
        // data = {year: year}
        // console.log(data);
        console.log("https://f1-backend.aadit.dev/api/race/races/" + year);
        // console.log("https://f1-backend.aadit.dev/api/race/races/winner/" + year);

        const races = document.querySelector(".races");
      // https://f1-backend.aadit.dev/api/race/races?year=2021
      fetch("https://f1-backend.aadit.dev/api/race/races/" + year, {method: "GET", mode: 'cors',cache: 'default', credentials: 'include', headers: {'Content-Type': "application/json"}})
        .then((data) => data.json())
        .then((data) => {
          console.log(data);
          data.MRData.RaceTable.Races.forEach((data) => {
            races.innerHTML += `
        <tr>
          <td>${data.date}</td>
            <td>${data.round}</td>
            <td>${data.season}</td>
            <td>${data.raceName}</td>
            <td>${data.Circuit.circuitName}</td>
            <td>${data.Circuit.Location.country}</td>
            <td>${data.Circuit.Location.locality}</td>
        </tr>`;
          });
        });

        // fetch("https://f1-backend.aadit.dev/api/race/races/winner/" + year, {method: "GET", mode: 'cors',cache: 'default', credentials: 'include', headers: {'Content-Type': "application/json"}})
        // .then((data) => data.json())
        // .then((data) => {
        //   console.log(data);
        //   data.MRData.RaceTable.Races.forEach((data) => {
        //     races.innerHTML += `
        // <tr>
        //   <td>${data.Results.number}</td>
        // </tr>`;
        //   });
        // });
    }

    function notesSubmit() {

      let user = "2";
      let season = year;
      let comment = "";
      comment = document.getElementById("comment").value;
        console.log(comment);

        data = {user: user, season: season, comment: comment}

       var requestOptions = {
          method: 'POST',
          headers: {'Content-Type': "application/json"},
          mode: 'cors',
          cache: 'default', 
          credentials: 'include',
          redirect: 'manual',
          body: JSON.stringify(data)
        };

      fetch(
          `https://f1-backend.aadit.dev/api/race/makeComment`, requestOptions
        )
          .then(response => response.text())
  .then(result => {
    console.log(result);
    if (result == "comment made teehee") {
      alert("Comment Successful!");
    } else {
      alert("Error");
    }
  })
  .catch(error => console.log('error', error));

    }
    function deleteTable() {
      for (i = raceTable.rows.length - 1; i > 0; i--) {
      document.getElementById("raceTable").deleteRow(i); 
      }  
       }

    function deleteComments() {

      let user = "2";
        data = {user: user}

       var requestOptions = {
          method: 'POST',
          headers: {'Content-Type': "application/json"},
          mode: 'cors',
          cache: 'default', 
          credentials: 'include',
          redirect: 'manual',
          body: JSON.stringify(data)
        };

      fetch(
          `https://f1-backend.aadit.dev/api/race/delete`, requestOptions
        )
          .then(response => response.text())
  .then(result => {
    console.log(result);
    if (result == "user " + user + " comments deleted") {
      alert("Comment Delete Successful!");
    } else {
      alert("Error");
    }
  })
  .catch(error => console.log('error', error));
  }

  </script>

  ---------------------------


<table id = "comments">
    <thead>
      <tr>
        <th>User</th>
        <th>Season</th>
        <th>Comment</th>
      </tr>
    </thead>
    <tbody></tbody>
</table>

<script>
  const commentContainer = document.getElementById("comments");
//   const options = {
//       method: 'GET', // *GET, POST, PUT, DELETE, etc.
//       mode: 'no-cors', // no-cors, *cors, same-origin
//       cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
//       credentials: 'omit', // include, *same-origin, omit
//       headers: {
//       'Content-Type': 'application/json'
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//       },
//   };
  
    function listComments() {
    // fetch the API
    fetch("https://f1-backend.aadit.dev/api/race/getCommentsByUser/2", {method: "GET", mode: 'cors',cache: 'no-cache', credentials: 'include', headers: {'Content-Type': "application/json"}})
      // response is a RESTful "promise" on any successful fetch
      .then(response => {
        // check for response errors
        if (response.status !== 200) {
            const errorMsg = 'Database response error: ' + response.status;
            console.log(errorMsg);
            const tr = document.createElement("tr");
            const td = document.createElement("td");
            const button = document.createElement("button");
            td.innerHTML = errorMsg;
            tr.appendChild(td);
            tr.appendChild(button);
            commentContainer.appendChild(tr);
            return;
        }
        // valid response will have json data
        response.json()
        .then(data => {
            for (const row of data) {

              const tr = document.createElement("tr");

              const user = document.createElement("td");
              const season = document.createElement("td");
              const comment = document.createElement("td");
              button.setAttribute('onclick', 'NotesSubmit()')

              user.innerHTML = row.user;
              season.innerHTML = row.season;
              comment.innerHTML = row.comment;
              button.innerHTML = "Delete";

              tr.appendChild(user);
              tr.appendChild(season);
              tr.appendChild(comment);
              tr.appendChild(button);

              commentContainer.appendChild(tr);
            }
        })
    })
  }

<html>
  <head>
    <meta charset="utf-8" />
    <title>F1 Races</title>
    <meta name="description" content="F1 Races and their Information." />
    <style>
      table.center {
        margin-left: auto;
        margin-right: auto;
      }
    </style>
  </head>
    <h1 style="text-align: center; font-size: 50px">
      F1 Races
    </h1>
    <table id= "raceTable" class="races" border="1" style="position: absolute; top: 100%;left: -15%;">
      <tr>
        <th>Date (year,month,day)</th>
        <th>Round</th>
        <th>Season</th>
        <th>Race Name</th>
        <th>Circuit Name</th>
        <th>Country</th>
        <th>Locality</th>
      </tr>
    </table>
    <script type="text/javascript">
      const races = document.querySelector(".races");
      // https://f1-backend.aadit.dev/api/race/races?year=2021
      fetch("https://f1-backend.aadit.dev/api/race/races/" + year)
        .then((data) => data.json())
        .then((data) => {
          console.log(data);
          data.MRData.RaceTable.Races.forEach((data) => {
            races.innerHTML += `
        <tr>
          <td>${data.date}</td>
            <td>${data.round}</td>
            <td>${data.season}</td>
            <td>${data.raceName}</td>
            <td>${data.Circuit.circuitName}</td>
            <td>${data.Circuit.Location.country}</td>
            <td>${data.Circuit.Location.locality}</td>
        </tr>`;
          });
        });
    </script>
    <style type="text/css">
      @import url("https://rsms.me/inter/inter.css");
      @import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap");
      * {
        font-family: "Inter", sans-serif !important;
      }
      .races {
        margin-right: auto;
        margin-left: auto;
        padding: 0;
        columns: 3;
        font-size: 20px;
      }
      img {
        width: 800px;
      }
      ul {
        -webkit-column-count: 3;
        -moz-column-count: 3;
        column-count: 3;
      }
      table {
        color: black
        margin-left: auto;
        margin-right: auto;
        width: 90%;
        text-align: center;
      }
      table.center {
  margin-left: auto;
  margin-right: auto;
      }
    </style>

  <style>
  .table {
  color: red;
  padding: 16px;
  font-size: 16px;
  border: 1px solid black;
  cursor: pointer;
  background-repeat: no-repeat;
  width: 9.5em;
  height: 15%;
}
</style>
</html>
