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

<!-- button to delete table -->
<div lik style="margin: 0 auto; text-align: center">
    <button type="submit" onclick="deleteTable(id)">Delete Table</button>
</div>

<script type="text/javascript">
    function formSubmit() {
        let year = document.getElementById("year").value;
        console.log(year);
        // data = {year: year}
        // console.log(data);
        console.log("https://f1-backend.aadit.dev/api/race/races/" + year);

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

        fetch("https://f1-backend.aadit.dev/api/race/races/winner/" + year, {method: "GET", mode: 'cors',cache: 'default', credentials: 'include', headers: {'Content-Type': "application/json"}})
        .then((data) => data.json())
        .then((data) => {
          console.log(data);
          data.MRData.RaceTable.Races.Results.Constructor.forEach((data) => {
            races.innerHTML += `
        <tr>
          <td>${data.constructorId}</td>
        </tr>`;
          });
        });
    }

    function deleteTable() {
      for (i = raceTable.rows.length - 1; i > 0; i--) {
      document.getElementById("raceTable").deleteRow(i); 
      }  
       }

  </script>

  ---------------------------

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
        <th>Winner</th>
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
