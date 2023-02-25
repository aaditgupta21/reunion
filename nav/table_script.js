function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
	
 var event=document.getElementById("event_row"+no);
 var date=document.getElementById("date_row"+no);
 var note=document.getElementById("note_row"+no);
	
 var event_data=event.innerHTML;
 var date_data=date.innerHTML;
 var note_data=note.innerHTML;
	
 event.innerHTML="<input type='text' id='event_text"+no+"' value='"+event_data+"'>";
 date.innerHTML="<input type='text' id='date_text"+no+"' value='"+date_data+"'>";
 note.innerHTML="<input type='text' id='note_text"+no+"' value='"+note_data+"'>";
}


function add_row()
{
 var new_event=document.getElementById("new_event").value;
 var new_date=document.getElementById("new_date").value;
 var new_note=document.getElementById("new_note").value;
	
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length);
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='event_row"+table_len+"'>"+new_event+"</td><td id='date_row"+table_len+"'>"+new_date+"</td><td id='note_row"+table_len+"'>"+new_note+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

 let event = new_event;
 let dateOfEvent = new_date;
 let note = new_note;
 data = {event: event, dateOfEvent: dateOfEvent, note: note}
 var options = {
     method: 'POST',
     mode: 'cors',
     cache: 'no-cache',
     credentials: 'include',
     headers: {
         'Content-Type': 'application/json'
     },
     body: JSON.stringify(data)
 };
 fetch(
     `https://f1-backend.aadit.dev/api/calendar/newCalendar`, options
     )
     .then(response => response.text())

 document.getElementById("new_event").value="";
 document.getElementById("new_date").value="";
 document.getElementById("new_note").value="";
}