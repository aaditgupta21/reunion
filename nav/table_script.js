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


 var url = "localhost:8085/api/calendar/newCalendar";
 const options = {
    method: 'POST',
    mode: 'cors',
    cache: 'default',
    credentials: 'include',
    headers: {
        'Content-Type': 'application/json',
    },
 };
data = {event: event_data, note: note_data, dateOfEvent: date_data}
var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    redirect: 'manual',
    body: JSON.stringify(data)
  };
  fetch(url,requestOptions)
    .then(response => response.text())

 }