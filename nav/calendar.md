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

<script type="text/javascript">
function add_row()
{
 var new_event=document.getElementById("new_event").value;
 var new_date=document.getElementById("new_date").value;
 var new_note=document.getElementById("new_note").value;
	
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='event_row"+table_len+"'>"+new_event+"</td><td id='date_row"+table_len+"'>"+new_date+"</td><td id='note_row"+table_len+"'>"+new_note+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

 document.getElementById("new_event").value="";
 document.getElementById("new_date").value="";
 document.getElementById("new_note").value="";
 }
</script>

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

<tr id="row1">
<td id="event_row1">Bahrain</td>
<td id="date_row1">2023-03-05</td>
<td id="note_row1">x team is winning!!!</td>
<td>
</td>
</tr>
</table>
<script type="text/javascript">
    const races = document.querySelector(".races");
    fetch("http://ergast.com/api/f1/2023/races.json")
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
  <table id = "items">
    <thead>
      <tr>
        <th>ID</th>
        <th>Event</th>
        <th>Date</th>
        <th>Note</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>

<script>
  const itemContainer = document.getElementById("items");
    function listItems() {
    // fetch the API
    fetch("http://localhost:8085/api/calendar/", {method: "GET", mode: 'cors',cache: 'no-cache', credentials: 'include', headers: {'Content-Type': "application/json"}})
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

              tr.appendChild(id);
              tr.appendChild(event);
              tr.appendChild(dateOfEvent);
              tr.appendChild(note);

              itemContainer.appendChild(tr);
            }
        })
    })
  }

  listItems();
</script>


</body>
</html>
