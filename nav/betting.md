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

@keyframes fade {
  from {opacity: .4}
  to {opacity: 3}
}
</style>

<h1>Betting
<span>
<a style="right:175px; position: absolute;">Coins<span><a class="rcorners1" id="coins" style="margin-left:5px">10012309120391230</a></span></a>

</span>
</h1>

<div style="margin: 0 auto; text-align: center">
<div class="row">
<!-- COLUMN 1 -->
  <div class="column" style="background-color:gray;">
    <h2>MAR 03-05</h2>
    <br>
    <h2>MAR 31-02</h2>
    <br>
    <h2>APR 28-30</h2>
    <br>
    <h2>MAY 05-07</h2>
    <br>
    <h2>MAY 19-21</h2>
    <br>
  </div>

  <!-- COLUMN 2 -->
  <div class="column" style="background-color:gray;">
    <h2>MAR 03-05</h2>
    <br>
    <h2>MAR 31-02</h2>
    <br>
    <h2>APR 28-30</h2>
    <br>
    <h2>MAY 05-07</h2>
    <br>
    <h2>MAY 19-21</h2>
    <br>
  </div>

  <!-- COLUMN 3 -->
  <div class="column" style="background-color:gray">
    <h2>MAR 03-05</h2>
    <br>
    <h2>MAR 31-02</h2>
    <br>
    <h2>APR 28-30</h2>
    <br>
    <h2>MAY 05-07</h2>
    <br>
    <h2>MAY 19-21</h2>
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
            <input
                type="bet"
                name="bet"
                id="bet"
<<<<<<< HEAD:nav1/betting.md
                placeholder="Place Bet Here"
                style="width:100%; height:10%; margin-left: 0; left:0; background-color: white;padding: 5px 5px;margin: 0px 0; box-sizing: border-box; color: black;  border-color: red; border-radius: 10px"
            >
        </a>
    <br>
    <a style="background-color: transparent">
        <input value="Submit" type="submit" class="button" style="padding: 10px; margin:0; margin-top: 10px">
    </a>
=======
                placeholder="Place Your Bet Here"
                class="text"
                style="width=50% height=50%"
            />
            <select name="team" id="team">
                <option value="">Select a Team</option>
                <option value="">Mercedes</option>
                <option value="">Alpine</option>
                <option value="">Haas</option>
                <option value="">McLaren</option>
                <option value="">Red Bull</option>
                <option value="">Asten Martin</option>
                <option value="">AlphaTauri</option>
                <option value="">Ferrari</option>
                <option value="">Alfa Romeo</option>
                <option value="">Williams</option>
            </select>
        </p>
        <p>
            <input value="Submit" type="submit" class="button" style="width=50% height=50%"/>
        </p>
    <p id="bruh"><p>
    <h1>Leaderboard<h1>
    <table id = "leaderboard">
        <thead>
        <tr>
            <th>Ranking</th>
            <th>Name</th>
            <th>FCoins <img src="data:image/jpeg;base64,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" alt="FCoin" width=16 height=16></th>
            <th>Largest FCoins</th>
        </tr>
        <tr>
            <th>1</th>
            <th>Mr Mort</th>
            <th>12000</th>
            <th>2000</th>
        </tr>
        <tr>
            <th>2</th>
            <th>Aadit Gupta</th>
            <th>10000</th>
            <th>4000</th>
        </tr>
        <tr>
            <th>3</th>
            <th>Nicholamos Ramanos</th>
            <th>winnerwinnerchickendinner</th>
            <th>2000</th>
        </tr>
        <tr>
            <th>4</th>
            <th>Prish Katil</th>
            <th>5000</th>
            <th>1000</th>
        </tr>
        <tr>
            <th>5</th>
            <th>Naphan Manananagaaananangan</th>
            <th>2000</th>
            <th>600</th>
        </tr>
         <tr>
            <th>6</th>
            <th>Donald Duck Quack</th>
            <th>3500</th>
            <th>700</th>
        </tr>
        </thead>
        <tbody></tbody>
    </table>
>>>>>>> d16350e9e489d65db04cddaca5d6c6f75aeb739d:nav/betting.md
<div>

<script>
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

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
    }
</script>
