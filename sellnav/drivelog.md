<html lang="en">
<head>
<style>
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

<body>
<div class="container my-3">
    <h1>Drive Log</h1>
    <div class="card">
        <div class="card-body">
            <h1 class="card-title">
                Add a log
            </h1>
            <div class="form-group">
                <input type="text" id="raceName" name="raceName" placeholder="Race Name" style="background-color: white">
                <input type="text" id="date" name="date" placeholder="Date" style="background-color: white">
                <input type="text" id="time" name="time" placeholder="Time" style="background-color: white">
                <input type="text" id="miles" name="miles" placeholder="Miles" style="background-color: white">
                <input type="text" id="teamName" name="teamName" placeholder="Team Name" style="background-color: white">
            </div>
            <button type="submit" onclick="formSubmit()">Submit</button>
            <button onclick="showNotes()" class="btn btn-primary"
                    id="addBtn" style=
                            "background-color:pink; border-color: pink; margin-left:5px; margin-top:5px">
                Add Comment
            </button>
        </div>
    </div>
    <hr>
    <h1>Logs</h1>
    <hr>

<div id="notes" class=
            "container-fluid" style="color: red">
            <div class="noteCard my-2 mx-2 card">
                        <div class="card-body" >
                            <h1 class="card-title" >
                                Log ${index + 1}
                            </h1>
                            <p class="card-text" style="color:black">
                                ${element}
                            </p>
                        <button id="${index}" onclick=
                            "deleteNote(this.id)"
                            class="btn btn-primary" style="background-color:pink; border-color: pink">
                            Delete Log
                        </button>
                    </div>
                </div>
    </div>
</div>
<script type="text/javascript">
    function formSubmit() {
        let raceName = document.getElementById("raceName").value;
        let date = document.getElementById("date").value;
        let time = document.getElementById("time").value;
        let miles = document.getElementById("miles").value;
        let teamName = document.getElementById("teamName").value;
        data = {raceName: raceName, date: date, time: time, miles: miles, teamName: teamName}
        var requestOptions = {
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
            `https://f1-backend.aadit.dev/api/team/setDriverLog`,requestOptions
            )
            .then(response => response.text())
  .then(result => {
            console.log(result);
            if (result == `DriveLog created successfully`) {
            document.getElementById(addBtn) += `
            `;
            } else {
            alert("Error occurred during submission, reload and try again.");
            }
        })
        .catch(error => console.log('error', error));
        }
</script>

<!-- <script type="text/javascript">
    function formSubmit(){
        let raceName = document.getElementById("raceName").value;
        let date = document.getElementById("date").value;
        let time = document.getElementById("time").value;
        let miles = document.getElementById("miles").value;
        var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            data = {raceName: raceName, date: date, time: time, miles: miles}
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            redirect: 'manual',
            body: JSON.stringify(data)
        };
        fetch(
            `https://f1-backend.aadit.dev/api/driveLog/newDriveLog`,requestOptions
            )
            .then(response => response.text())
        .then(result => {
            console.log(result);
            if (result == `${date} listed successfully`) {
            window.location.href = "https://aaditgupta21.github.io/reunion/login";
            document.getElementById(addBtn) += `
            <div class="noteCard my-2 mx-2 card">
                        <div class="card-body" >
                            <h1 class="card-title" >
                                Log ${index + 1}
                            </h1>
                            <p class="card-text" style="color:black">
                                ${element}
                            </p>
                        <button id="${index}" onclick=
                            "deleteNote(this.id)"
                            class="btn btn-primary" style="background-color:pink; border-color: pink">
                            Delete Log
                        </button>
                    </div>
                </div>`;
            } else {
            alert("Error occurred during submission, reload and try again.");
            }
        })
        .catch(error => console.log('error', error));
        }
        // If user adds a note, add it to the localStorage
        let addBtn = document.getElementById("addBtn");
        addBtn.addEventListener("click", function (e) {
            let addTxt = document.getElementById("addTxt");
            let notes = document.getElementById("notes").value;
            if (notes == null) notesObj = [];
            else notesObj = JSON.parse(notes);
            notesObj.push(addTxt.value);
            document.getElementById("notes", JSON.stringify(notesObj)).value;
            addTxt.value = "";
            showNotes();
        });
    // Function to show elements from localStorage
    function showNotes() {
        let notes = document.getElementById("notes").value;
        if (notes == null) {notesObj = []};
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
</script> -->
</html>