<style>
    * {
  box-sizing: border-box;
}

.rcorners1 {
    border-radius: 25px;
    background: #D3D3D3;
    padding: 10px;
    width: 150px;
    height: 35px;
    position:absolute;
    right:5px;
    font-size: 15px;
    text-align:right;
}

/* Create four equal columns that floats next to each other */
.column {
  float: left;
  width: 25%;
  padding: 10px;
  height: 300px; /* Should be removed. Only for demonstration */
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Slideshow container */
.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
  margin-top: 15px;
}

/* Hide the images by default */
.mySlides {
  display: none;
}

/* Next & previous buttons */
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 15%;
  width: auto;
  margin-top: -22px;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0);
  font-weight: bold;
  font-size: 18px;
  background-color: rgba(236, 236, 236, 1);
  opacity: 20%;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

/* Position the "next button" to the right */
.prev {
  right: 105px;
  border-radius: 3px 0 0 3px;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 0px 3px 3px 0px;
}

.text{
  width: 50%;
  padding: 5px 5px;
  margin: 8px 0;
  box-sizing: border-box;
  color: black;
  background-color: rgba(0, 0, 0, 0);
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}

.active, .dot:hover {
  background-color: #717171;
}

/* Fading animation */
.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}

p{
    background-color: transparent;
}
#search {
    width:90%;
}

.searchicon {
    color:#5CB85C;
}

.items-collection{
    margin:20px 0 0 0;
}
.items-collection label.btn-default.active{
    background-color:#007ba7;
    color:#FFF;
}
.items-collection label.btn-default{
    width:90%;
    border:1px solid #305891;
    margin:5px;
    border-radius: 17px;
    color: #305891;
}
.items-collection label .itemcontent{
    width:100%;
}
.items-collection .btn-group{
    width:90%
}
@keyframes fade {
  from {opacity: .4}
  to {opacity: 3}
}
</style>

<h1>Betting
<span>
<a style="right:175px; position: absolute;">Coins<span><a class="rcorners1" id="coins" style="margin-left:5px"></a></span></a>

</span>
</h1>

<div>
<div style="margin: 0 auto; text-align: center">
<div class="row">
<!-- COLUMN 1 -->
  <div class="column" style="background-color:gray;">
      <div class="items col-xs-6 col-sm-3 col-md-3 col-lg-3">
        <div class="info-block block-info clearfix">
          <div data-toggle="buttons" class="btn-group bizmoduleselect">
            <label class="btn btn-default">
              <div class="itemcontent">
                  <input type="checkbox" name="var_id[]" autocomplete="off" value="">
                  <span class="fa fa-car fa-2x"></span>
                  <h5>MAR 25-26</h5>
              </div>
            </label>
          </div>
        </div>
      </div>
    <br>
    <div class="items col-xs-6 col-sm-3 col-md-3 col-lg-3">
        <div class="info-block block-info clearfix">
          <div data-toggle="buttons" class="btn-group bizmoduleselect">
            <label class="btn btn-default">
              <div class="itemcontent">
                  <input type="checkbox" name="var_id[]" autocomplete="off" value="">
                  <span class="fa fa-car fa-2x"></span>
                  <h5>MAR 31-02</h5>
              </div>
            </label>
          </div>
        </div>
      </div>
    <br>
    <div class="items col-xs-6 col-sm-3 col-md-3 col-lg-3">
        <div class="info-block block-info clearfix">
          <div data-toggle="buttons" class="btn-group bizmoduleselect">
            <label class="btn btn-default">
              <div class="itemcontent">
                  <input type="checkbox" name="var_id[]" autocomplete="off" value="">
                  <span class="fa fa-car fa-2x"></span>
                  <h5>APR 28-30</h5>
              </div>
            </label>
          </div>
        </div>
      </div>
    <br>
    <div class="items col-xs-6 col-sm-3 col-md-3 col-lg-3">
        <div class="info-block block-info clearfix">
          <div data-toggle="buttons" class="btn-group bizmoduleselect">
            <label class="btn btn-default">
              <div class="itemcontent">
                  <input type="checkbox" name="var_id[]" autocomplete="off" value="">
                  <span class="fa fa-car fa-2x"></span>
                  <h5>MAY 05-07</h5>
              </div>
            </label>
          </div>
        </div>
      </div>
    <br>
    <div class="items col-xs-6 col-sm-3 col-md-3 col-lg-3">
        <div class="info-block block-info clearfix">
          <div data-toggle="buttons" class="btn-group bizmoduleselect">
            <label class="btn btn-default">
              <div class="itemcontent">
                  <input type="checkbox" name="var_id[]" autocomplete="off" value="">
                  <span class="fa fa-car fa-2x"></span>
                  <h5>MAY 19-21</h5>
              </div>
            </label>
          </div>
        </div>
      </div>
    <br>
  </div>

  <!-- COLUMN 2 -->
  <div class="column" style="background-color:gray;">
    <div class="items col-xs-6 col-sm-3 col-md-3 col-lg-3">
        <div class="info-block block-info clearfix">
          <div data-toggle="buttons" class="btn-group bizmoduleselect">
            <label class="btn btn-default">
              <div class="itemcontent">
                  <input type="checkbox" name="var_id[]" autocomplete="off" value="">
                  <span class="fa fa-car fa-2x"></span>
                  <h5>MAR 03-05</h5>
              </div>
            </label>
          </div>
        </div>
      </div>
    <br>
    <div class="items col-xs-6 col-sm-3 col-md-3 col-lg-3">
        <div class="info-block block-info clearfix">
          <div data-toggle="buttons" class="btn-group bizmoduleselect">
            <label class="btn btn-default">
              <div class="itemcontent">
                  <input type="checkbox" name="var_id[]" autocomplete="off" value="">
                  <span class="fa fa-car fa-2x"></span>
                  <h5>MAR 31-02</h5>
              </div>
            </label>
          </div>
        </div>
      </div>
    <br>
    <div class="items col-xs-6 col-sm-3 col-md-3 col-lg-3">
        <div class="info-block block-info clearfix">
          <div data-toggle="buttons" class="btn-group bizmoduleselect">
            <label class="btn btn-default">
              <div class="itemcontent">
                  <input type="checkbox" name="var_id[]" autocomplete="off" value="">
                  <span class="fa fa-car fa-2x"></span>
                  <h5>APR 28-30</h5>
              </div>
            </label>
          </div>
        </div>
      </div>
    <br>
    <div class="items col-xs-6 col-sm-3 col-md-3 col-lg-3">
        <div class="info-block block-info clearfix">
          <div data-toggle="buttons" class="btn-group bizmoduleselect">
            <label class="btn btn-default">
              <div class="itemcontent">
                  <input type="checkbox" name="var_id[]" autocomplete="off" value="">
                  <span class="fa fa-car fa-2x"></span>
                  <h5>MAY 05-07</h5>
              </div>
            </label>
          </div>
        </div>
      </div>
    <br>
    <div class="items col-xs-6 col-sm-3 col-md-3 col-lg-3">
        <div class="info-block block-info clearfix">
          <div data-toggle="buttons" class="btn-group bizmoduleselect">
            <label class="btn btn-default">
              <div class="itemcontent">
                  <input type="checkbox" name="var_id[]" autocomplete="off" value="">
                  <span class="fa fa-car fa-2x"></span>
                  <h5>MAY 19-21</h5>
              </div>
            </label>
          </div>
        </div>
      </div>
    <br>
  </div>

  <!-- COLUMN 3 -->
  <div class="column" style="background-color:gray">
    <div class="items col-xs-6 col-sm-3 col-md-3 col-lg-3">
        <div class="info-block block-info clearfix">
          <div data-toggle="buttons" class="btn-group bizmoduleselect">
            <label class="btn btn-default">
              <div class="itemcontent">
                  <input type="checkbox" name="var_id[]" autocomplete="off" value="">
                  <span class="fa fa-car fa-2x"></span>
                  <h5>MAR 25-26</h5>
              </div>
            </label>
          </div>
        </div>
      </div>
    <br>
    <div class="items col-xs-6 col-sm-3 col-md-3 col-lg-3">
        <div class="info-block block-info clearfix">
          <div data-toggle="buttons" class="btn-group bizmoduleselect">
            <label class="btn btn-default">
              <div class="itemcontent">
                  <input type="checkbox" name="var_id[]" autocomplete="off" value="">
                  <span class="fa fa-car fa-2x"></span>
                  <h5>MAR 31-02</h5>
              </div>
            </label>
          </div>
        </div>
      </div>
    <br>
    <div class="items col-xs-6 col-sm-3 col-md-3 col-lg-3">
        <div class="info-block block-info clearfix">
          <div data-toggle="buttons" class="btn-group bizmoduleselect">
            <label class="btn btn-default">
              <div class="itemcontent">
                  <input type="checkbox" name="var_id[]" autocomplete="off" value="">
                  <span class="fa fa-car fa-2x"></span>
                  <h5>APR 28-30</h5>
              </div>
            </label>
          </div>
        </div>
      </div>
    <br>
    <div class="items col-xs-6 col-sm-3 col-md-3 col-lg-3">
        <div class="info-block block-info clearfix">
          <div data-toggle="buttons" class="btn-group bizmoduleselect">
            <label class="btn btn-default">
              <div class="itemcontent">
                  <input type="checkbox" name="var_id[]" autocomplete="off" value="">
                  <span class="fa fa-car fa-2x"></span>
                  <h5>MAY 05-07</h5>
              </div>
            </label>
          </div>
        </div>
      </div>
    <br>
    <div class="items col-xs-6 col-sm-3 col-md-3 col-lg-3">
        <div class="info-block block-info clearfix">
          <div data-toggle="buttons" class="btn-group bizmoduleselect">
            <label class="btn btn-default">
              <div class="itemcontent">
                  <input type="checkbox" name="var_id[]" autocomplete="off" value="">
                  <span class="fa fa-car fa-2x"></span>
                  <h5>MAY 19-21</h5>
              </div>
            </label>
          </div>
        </div>
      </div>
    <br>
  </div>

  <!-- COLUMN 4 -->
  <div class="column" style="background-color:darkred;">
  <!-- Slideshow -->
<div class="slideshow-container" style="background-color: transparent">

  <!-- Full-width images with number and caption text -->
  <div class="mySlides fade">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Mercedes_AMG_Petronas_F1_Logo.svg/2560px-Mercedes_AMG_Petronas_F1_Logo.svg.png" style="width:100%; height: 50px; margin-top: 10px; margin-bottom: 10px">
    <div style="color: black">Mercedes</div>
  </div>

  <div class="mySlides fade">
    <img src="https://upload.wikimedia.org/wikipedia/commons/3/32/Alpine_logo.png" style="width:100%; height: 50px;margin-top: 10px; margin-bottom: 10px">
    <div style="color: black">Alpine</div>
  </div>

  <div class="mySlides fade">
    <img src="https://logos-world.net/wp-content/uploads/2022/07/Uralkali-Haas-F1-Team-Logo-2021.png" style="width:100%; height: 70px">
    <div style="color: black">Haas</div>
  </div>

  <div class="mySlides fade">
    <img src="https://www.formula1.com/content/fom-website/en/teams/McLaren/_jcr_content/logo.img.jpg/1644831223911.jpg" style="width:100%; height: 70px">
    <div style="color: black">McLaren</div>
  </div>

  <div class="mySlides fade">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj_4tW9P_08hcS4STLIuUHDrqur9liVZFb9g&usqp=CAU" style="width:100%; height: 50px;margin-top: 15px; margin-bottom: 5px">
    <div style="color: black">Red Bull</div>
  </div>

  <div class="mySlides fade">
    <img src="https://cdn.motor1.com/images/mgl/3WWeox/s1/aston-martin-new-logo.jpg" style="width:100%; height: 70px">
    <div style="color: black">Asten Martin</div>
  </div>

  <div class="mySlides fade">
    <img src="https://www.formula1points.com//images/constructors/alphatauri.png" style="width:100%; height: 70px">
    <div style="color: black">AlphaTauri</div>
  </div>

  <div class="mySlides fade">
    <img src="https://i.imgur.com/jH6hF66.png" style="width:100%; height: 50px;margin-top: 10px; margin-bottom: 10px">
    <div style="color: black">Ferrari</div>
  </div>

  <div class="mySlides fade">
    <img src="https://www.formula1.com/content/dam/fom-website/manual/teams/Sauber/Alfa_Romeo_Racing_logo.jpg.transform/9col/image.jpg" style="width:100%; height: 70px">
    <div style="color: black">Alfa Romeo</div>
  </div>

  <div class="mySlides fade">
    <img src="https://teamcolorcodes.com/wp-content/uploads/2022/10/Williams-Racing-logo.png" style="width:80%; height: 30px; margin-top: 20px; margin-bottom: 20px; margin-left: 10%; margin-right: 10%">
    <div style="color: black">Williams</div>
  </div>

  <!-- Next and previous buttons -->

<a class="prev" onclick="plusSlides(-1)">&#10094;</a>
<a class="next" onclick="plusSlides(1)">&#10095;</a>
<br>
<br>

<h4 style="background-color: transparent; color: white">Make A Bet</h4>
<a style="width:100%; height:10%; background-color: transparent; margin-left:0; color:white">
<input type="number"
                name="bet"
                id="bet"
                placeholder="Place Bet Here"
                style="width:100%; height:10%; margin-left: 0; left:0; background-color: white;padding: 5px 5px;margin: 0px 0; box-sizing: border-box; color: black;  border-color: red; border-radius: 10px"
            >
</a>
<br>
<a style="background-color: transparent">
<input value="Submit" type="submit" class="button" onclick="formSubmit()" style="padding: 10px; margin:0; margin-top: 10px">
</a>

</div>
</div>
</div>
<a id="updcoin"></a>

<div>
  <small><input type="text" name="raceName" id="raceName" placeholder="race name"></small>
  <small><input type="text" name="raceSeason" id="raceSeason" placeholder="race season"></small>
</div>

<br>

<div>
  <table id = "bets">
    <thead>
      <tr>
        <th>id</th>
        <th>teamName</th>
        <th>raceName</th>
        <th>raceDate</th>
        <th>fCoinBet</th>
        <th>betActive</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>
</div>

<br>

<div>

</div>

<script>
    let bruh = localStorage.getItem("ID");
    // let url = "http://localhost:8085";
    let url = "https://f1-backend.aadit.dev"

    if(bruh == undefined){
      window.location.href = "https://aaditgupta21.github.io/reunion/login";
    }
    
    let slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }
    
    fetch(url + "/api/user/coins/" + bruh, {method: "GET", mode: 'cors',cache: 'default', credentials: 'include', headers: {'Content-Type': "application/json"}})
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        document.getElementById("coins").innerHTML = data;
      })

    function showSlides(n) {
        let i;
        mercedes = false; // 1
        alpine = false; // 2
        haas = false; // 3
        mclaren = false; // 4
        redbull = false; // 5
        astenmartin = false; // 6
        alphatauri = false; // 7
        ferrari = false; // 8
        alfaromeo = false; // 9
        williams = false; // 10
        let slides = document.getElementsByClassName("mySlides");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex-1].style.display = "block";
    }

    let team = "";

    function slideToTeam() {
      switch(slideIndex) {
        case 1:
          team = "Mercedes";
          break;
        case 2:
          team = "Alpine";
          break;
        case 3:
          team = "Haas F1";
          break;
        case 4:
          team = "McLaren";
          break;
        case 5:
          team = "Redbull Racing";
          break;
        case 6:
          team = "Aston Martin";
          break;
        case 7:
          team = "AlphaTauri";
          break;
        case 8:
          team = "Ferrari";
          break;
        case 9:
          team = "Alfa Romeo";
          break;
        case 10:
          team = "Williams";
          break;
        default:
          console.log("bruh idk howd it ever get to this :skull:");
          break;
      }
    }

    let f1coins = "";
    let raceName = "";
    let raceSeason = "";

    function setBetFields() {
      f1coins = document.getElementById("bet").value;
      console.log(f1coins);
      raceName = document.getElementById("raceName").value;
      raceSeason = document.getElementById("raceSeason").value;
    }

    function formSubmit() {
        setBetFields();
        slideToTeam();

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        data = {race: raceName, raceSeason: raceSeason, team: team, user: bruh, f1coins: f1coins}

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          mode: 'cors',
          cache: 'default', 
          credentials: 'include',
          redirect: 'manual',
          body: JSON.stringify(data)
        };

         fetch(
          url + `/api/user/makeBet`, requestOptions
        )
          .then(response => response.text())
        .then(result => {
          console.log(result);
          if (result == 'Bet for ' + team + ' of ' + f1coins + ' f1Coins.') {
            window.location.href = "https://aaditgupta21.github.io/reunion/nav/betting";
          } else {
            alert("Error inputting coins, try again later.");
          }
        })
        .catch(error => console.log('error', error));
    }

    function listBets() {
    // prepare HTML user container for new output
    const betContainer = document.getElementById("bets");

    var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'manual',
        };

         fetch(
          url + `/api/user/getBets/${bruh}`, requestOptions
        )
        .then(response => response.text())
        .then(result => {
          console.log(result);
              for (const row of JSON.parse(result)) {

                const tr = document.createElement("tr");

                const id = document.createElement("td");
                const teamName = document.createElement("td");
                const raceName = document.createElement("td");
                const raceDate = document.createElement("td");
                const f1Coins = document.createElement("td");
                const betActive = document.createElement("td");
                const updateAction = document.createElement("td");
                const deleteAction = document.createElement("td");

                id.innerHTML = row.id;
                teamName.innerHTML = row.teamName;
                raceName.innerHTML = row.raceName;
                raceDate.innerHTML = row.raceDate;
                f1Coins.innerHTML = row.f1Coins;
                betActive.innerHTML = row.betActive;

                const updateURL = 'https://aaditgupta21.github.io/reunion/updateBet';
                // const updateURL = 'http://localhost:4000/updateBet';

                updateAction.innerHTML = `<a href="${updateURL}">update</a>`

                deleteAction.innerHTML = `<a onclick="deleteClick(event, ${row.id})" href="">delete</a>`

                tr.appendChild(id);
                tr.appendChild(teamName);
                tr.appendChild(raceName);
                tr.appendChild(raceDate)
                tr.appendChild(f1Coins);
                tr.appendChild(betActive);
                tr.appendChild(updateAction);
                tr.appendChild(deleteAction);

                betContainer.appendChild(tr);
              }
          })
        .catch(error => {
          console.log('error', error)
          const tr = document.createElement("tr");
          const td = document.createElement("td");
          td.innerHTML = error.toString();
          tr.appendChild(td);
          betContainer.appendChild(tr);
        });
  }

  function deleteClick(event, betId){
    event.preventDefault();
    var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const data = {betId}

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          redirect: 'manual',
          mode: 'cors',
          cache: 'default', 
          credentials: 'include',
          body: JSON.stringify(data)
        };

         fetch(
          url + `/api/user/deleteBet`, requestOptions
        )
        .then(response => response.text())
        .then(result => {
          console.log(result);
          if (result == 'successfully deleted bet') {
            window.location.href = "https://aaditgupta21.github.io/reunion/nav/betting";
          } else {
            alert("Error deleting bet, try again later.");
          }
        })
        .catch(error => console.log('error', error));
  }

  listBets();
</script>
