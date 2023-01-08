<br>
<br>
<h1 style ="text-align: center">Our FRQs</h1>

<div id="title">
{% include nav2.html %}
</div>

<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>FRQ #1</title>
  </head>

  <body>
    <h1 style="text-align: center; font-size: 30px">
      FRQ
      <span style="font-weight: bold">#1</span>
    </h1>
 <div style="margin: 0 auto; text-align: center">
    <input id="year1" type="text" placeholder="Year 1" />
    <input id="year2" type="text" placeholder="Year 2" />
    <button type="submit" onclick="numberOfLeapYears()">Submit</button>
    <p>Number of Leap Years:</p>
    <p id="bruh"></p>
    <table style="margin: 0 auto;" class="teams" border="1">
      <tr>
        <th>Month</th>
        <th>Day</th>
        <th>Year</th>
        <th>Day Of Week</th>
        <th>First Day Of This Year</th>
        <th>Is this Year a Leap Year?</th>
      </tr>
    </table>
</div>

    <script type="text/javascript">
      var myMap = new Map();

      // setting the values
      myMap.set(0, "January");
      myMap.set(1, "February");
      myMap.set(2, "March");
   myMap.set(3, "April");
   myMap.set(4, "May");
   myMap.set(5, "June");
   myMap.set(6, "July");
   myMap.set(7, "August");
   myMap.set(8, "September");
   myMap.set(9, "October");
   myMap.set(10, "November");
   myMap.set(11, "December");
      var dateObj = new Date();
      var month = dateObj.getUTCMonth() + 1; //months from 1-12
      var day = dateObj.getUTCDate();
      var year = dateObj.getUTCFullYear();

      const teams = document.querySelector(".teams");
      // get JSON data from backend //
      fetch(
        `https://f1.aadit.dev/api/calendar/dayOfWeek/${month}/${day}/${year}`
      )
        .then((data) => data.json())
        .then((data) => {
          console.log(data);
          console.log(data.month);
          // taking first JSON block and making a row in standings class table //

          teams.innerHTML += `
        <tr id="stuff">
          <td>${data.month}</td>
            <td>${data.day}</td>
            <td>${data.year}</td>
            <td>${myMap.get(data.dayOfWeek)}</td>
        </tr>`;
        });

      fetch(`https://f1.aadit.dev/api/calendar/firstDayOfYear/${year}`)
        .then((data) => data.json())
        .then((data) => {
          console.log(data);
          console.log(data.month);
          // taking first JSON block and making a row in standings class table //
          var parenttbl = document.getElementById("stuff");
          var newel = document.createElement("td");
          var elementid = document.getElementsByTagName("td").length;
          newel.setAttribute("id", elementid);
          newel.innerHTML += `${myMap.get(data.firstDayOfYear)}`;
          parenttbl.appendChild(newel);
        });

      fetch(`https://f1.aadit.dev/api/calendar/isLeapYear/${year}`)
        .then((data) => data.json())
        .then((data) => {
          console.log(data);
          // taking first JSON block and making a row in standings class table //
          var parenttbl = document.getElementById("stuff");
          var newel = document.createElement("td");
          var elementid = document.getElementsByTagName("td").length;
          newel.setAttribute("id", elementid);
          newel.innerHTML += `${data.isLeapYear}`;
          parenttbl.appendChild(newel);
        });
      function numberOfLeapYears() {
        let year1 = document.getElementById("year1").value;
        let year2 = document.getElementById("year2").value;
        console.log(year1);
        fetch(
          `https://f1.aadit.dev/api/calendar/numberOfLeapYears/${year1}/${year2}`
        )
          .then((data) => data.json())
          .then((data) => {
            console.log(data);
            document.getElementById(
              "bruh"
            ).innerHTML = `${data.numberOfLeapYears}`;
          });
      }
    </script>

    <style>
      @import url("https://rsms.me/inter/inter.css");

      * {
        font-family: "Inter", sans-serif !important;
      }
    </style>
  </body>
</html>
