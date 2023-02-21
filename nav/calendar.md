<html>
<head>

  <meta charset="utf-8" />
  <title>F1 Races</title>
  <meta event="description" content="F1 Races and their Information." />
  <style>
    table.center {
      margin-left: auto;
      margin-right: auto;
    }
      *{
      font-family: "Inter", sans-serif;
    }
    body{
      font-size: 1rem;
      font-weight: 400;aa
      line-height: 1.5;
      text-align: left;
    }
    .card{
      border-style: round;
      border-radius: 5px;
      border-width: 20px;
      padding-top: 1.25rem;
      padding-right: 1.25rem;
      padding-bottom: 1.25rem;
      padding-left: 1.25rem;
      background-color: #fcf8f7; 
      width:80%;
      margin-left: 8%;
      margin-top: 2%;
      margin-bottom: 2%;
      position: relative;
      column;flex-direction:column;min-width:0;
      display:-ms-flexbox;display:flex;
      }
    .card-title{
      margin-left:5px; 
      margin-top:5px;
    }
    .form-control{
      margin-left:5px; 
      border-style: round;
      border-radius: 5px;
      border-width: 2px; 
      width: 98%;
      length: 100%;
      font-family: sans-serif;
      padding: 0.375rem 0.75rem;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      color: #495057;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid #ced4da;
    }
    .form-group {
      margin-bottom: 1rem;
    }
  </style>
</head>

<script type="text/javascript" src="table_script.js"></script>

<body>
<h1 style="text-align: center; font-size: 50px">
2023 Calendar
</h1>


<table class="races" border="1" align='center' cellspacing=2 cellpadding=5 id="data_table" border=1>
  <tr>
    <th>Event</th>
    <th>Date</th>
    <th>Notes</th>
    <th>Add</th>
  </tr>

<tr>
<td><input type="text" id="new_event"></td>
<td><input type="text" id="new_date"></td>
<td><input type="text" id="new_note"></td>
<td><input type="button" class="add" onclick="add_row();" value="Add Row"></td>
</tr>

</table>
<script type="text/javascript">
    const races = document.querySelector(".races");
    fetch("https://ergast.com/api/f1/2023/races.json")
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        data.MRData.RaceTable.Races.forEach((data) => {
          races.innerHTML += `
      <tr>
        <td>${data.raceName}</td>
        <td>${data.date}</td>
        <td></td>
        <td></td>
      </tr>`;
        });
      });
  </script>

<!-- API Table  -->


<script>
  const itemContainer = document.getElementById("data_table");
    function listEvents() {
    // fetch the API
    fetch("https://f1-backend.aadit.dev/api/calendar/", {method: "GET", mode: 'cors',cache: 'no-cache', credentials: 'include', headers: {'Content-Type': "application/json"}})
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
            itemContainer.appendChild(tr);
            return;
        }
        // valid response will have json data
        response.json()
        .then(data => {
            for (const row of data) {

              const tr = document.createElement("tr");

              const id = document.createElement("td");
              const event = document.createElement("td");
              const dateOfEvent = document.createElement("td");
              const note = document.createElement("td");

              id.innerHTML = row.id;
              event.innerHTML = row.event;
              dateOfEvent.innerHTML = row.dateOfEvent;
              note.innerHTML = row.note;

              tr.appendChild(event);
              tr.appendChild(dateOfEvent);
              tr.appendChild(note);

              itemContainer.appendChild(tr);
            }
        })
    })
  }

  listEvents();
</script>


</body>
</html>
