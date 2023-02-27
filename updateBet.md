## Update Bet

<!-- button to create table -->
<div lik style="margin: 0 auto; text-align: center">
    <input type="text" id="betId" name="betId" placeholder="Enter Bet Id"
    style="width: 50%;
  padding: 5px 5px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid #CD2A2A;
  border-radius: 40px;
  color: black;">
  <input type="text" id="team" name="team" placeholder="Enter Team Name"
    style="width: 50%;
  padding: 5px 5px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid #CD2A2A;
  border-radius: 40px;
  color: black;">
  <input type="text" id="f1coin" name="f1coin" placeholder="Enter F1Coins"
    style="width: 50%;
  padding: 5px 5px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid #CD2A2A;
  border-radius: 40px;
  color: black;">
    <button type="Save Notes" onclick="formSubmit()">Submit</button>
    <br>
</div>

<script type="text/javascript">
    // let url = "http://localhost:8085";
    let url = "https://f1-backend.aadit.dev"

    function formSubmit() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const betId = document.getElementById("betId").value;
        const team = document.getElementById("team").value;
        const f1coins = document.getElementById("f1coin").value;

        data = {betId: betId, team: team, f1coins: f1coins}

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          redirect: 'manual',
          body: JSON.stringify(data)
        };

         fetch(
          url + `/api/user/updateBet`, requestOptions
        )
          .then(response => response.text())
        .then(result => {
          console.log(result);
          if (result == 'Successfully changed bet') {
            window.location.href = "https://aaditgupta21.github.io/reunion/nav/betting";
          } else {
            alert("Error inputting coins, try again later.");
          }
        })
        .catch(error => console.log('error', error));
    }
</script>
<html>
