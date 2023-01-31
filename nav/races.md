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

<html>
  <head>
    <meta charset="utf-8" />
    <title>F1 Races</title>
    <meta name="description" content="F1 Races and their Information." />
  </head>
  <body>
    <h1 style="text-align: center; font-size: 50px">
      F1 Races
    </h1>


    <table class="races" border="1">
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

      fetch("https://f1-backend.aadit.dev/api/races")
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
        margin-right: none;
        margin-left: none;
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
        margin: 0 auto;
        width: 90%;
        text-align: center;
      }
    </style>
  </body>

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

