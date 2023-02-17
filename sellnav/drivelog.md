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
          <h1 class="card-title">Add a log</h1>
          <div class="form-group">
            <input
              type="text"
              id="raceName"
              name="raceName"
              placeholder="Race Name"
              style="background-color: white"
            />
            <input
              type="text"
              id="date"
              name="date"
              placeholder="Date"
              style="background-color: white"
            />
            <input
              type="text"
              id="time"
              name="time"
              placeholder="Time (min)"
              style="background-color: white"
            />
            <input
              type="text"
              id="miles"
              name="miles"
              placeholder="Miles"
              style="background-color: white"
            />
            <input
              type="text"
              id="teamName"
              name="teamName"
              placeholder="Team Name"
              style="background-color: white"
            />
          </div>
          <button type="submit" onclick="formSubmit()">Submit</button>
          <button
            onclick="showNotes()"
            class="btn btn-primary"
            id="addBtn"
            style="
              background-color: pink;
              border-color: pink;
              margin-left: 5px;
              margin-top: 5px;
            "
          >
            Add Comment
          </button>
        </div>
      </div>
      <hr />
      <h1>Logs</h1>
      <hr />
      <div id="logs-container" class="container-fluid" style="color: red">
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
                alert("DriveLog created successfully");
                } else {
                alert("Error occurred during submission, reload and try again.");
                }
            })
            .catch(error => console.log('error', error));
            }
            const months = [
              "January", "February", "March", "April",
              "May", "June", "July", "August",
              "September", "October", "November", "December"
            ];
            const logsContainer = document.getElementById("logs-container");
            fetch("https://f1-backend.aadit.dev/api/team/drivelogs")
              .then(response => response.json())
              .then(data => {
                // Loop through each item in the array and create a div with the log information
                data.forEach((log, index) => {
                  const logDate = new Date(log.date);
                  const formattedDate = `${months[logDate.getMonth()]} ${logDate.getDate()}, ${logDate.getFullYear()}`;
                  const div = document.createElement("div");
                  div.classList.add("noteCard", "my-2", "mx-2", "card");
                  div.innerHTML = `
                    <div class="card-body">
                      <h1 class="card-title">${formattedDate}</h1>
                      <p class="card-text" style="color: black">ID: ${log.id}</p>
                      <p class="card-text" style="color: black">Miles: ${log.miles} miles</p>
                      <p class="card-text" style="color: black">Time (min): ${log.time} minutes</p>
                      <p class="card-text" style="color: black">Race Name: ${log.raceName}</p>
                      <a target="_blank" href="https://f1-backend.aadit.dev/api/team/drivelog/delete/${log.id}"></a><button
                        id="${index}"
                        class="btn btn-primary"
                        style="background-color: pink; border-color: pink"
                      >
                        Delete Log
                      </button></a>
                    </div>
                  `;
                  logsContainer.appendChild(div);
                });
              })
              .catch(error => console.error(error));
            </script>

  </body>
</html>
