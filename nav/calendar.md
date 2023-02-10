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
      font-family: sans-sarif;
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
<script>
   // Function to show elements from localStorage
   function showNotes() {
       let notes = localStorage.getItem("notes");
       if (notes == null) notesObj = [];
       else notesObj = JSON.parse(notes);
       let html = "";
       notesObj.forEach(function (element, index) {
           html += `
     <div class="noteCard my-2 mx-2 card">
       <div class="card-body" >
         <h1 class="card-title" >
           Comment ${index + 1}
         </h1>
         <p class="card-text" style="color:black">
           ${element}
         </p>
       <button id="${index}" onclick=
         "deleteNote(this.id)"
         class="btn btn-primary" style="background-color:pink; border-color: pink">
         Delete Comment
       </button>
     </div>
   </div>`;
       });
       let notesElm = document.getElementById("notes");
       if (notesObj.length != 0) notesElm.innerHTML = html;
       else
           notesElm.innerHTML = `Nothing to show!
   Use "Add a Note" section above to add notes.`;
   }
   // Function to delete a note
   function deleteNote(index) {
       let notes = localStorage.getItem("notes");
       if (notes == null) notesObj = [];
       else notesObj = JSON.parse(notes);
       notesObj.splice(index, 1);
       localStorage.setItem("notes",
           JSON.stringify(notesObj));
       showNotes();
   }

</script>

<table class="races" border="1" align='center' cellspacing=2 cellpadding=5 id="data_table" border=1>
  <tr>
    <th>Event</th>
    <th>Date</th>
    <th>Notes</th>
    <th>Edit</th>
  </tr>

<tr>
<td><input type="text" id="new_name"></td>
<td><input type="text" id="new_country"></td>
<td><input type="text" id="new_age"></td>
<td><input type="button" class="add" onclick="add_row();" value="Add Row"></td>
</tr>

<tr id="row1">
<td id="name_row1">Bahrain</td>
<td id="country_row1">2023-03-05</td>
<td id="age_row1">x team has x chance of winning!</td>
<td>
<input type="button" id="edit_button1" value="Edit" class="edit" onclick="edit_row('1')">
<input type="button" id="save_button1" value="Save" class="save" onclick="save_row('1')">
<input type="button" value="Delete" class="delete" onclick="delete_row('1')">
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

</body>
</html>
