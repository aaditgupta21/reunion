## Top Drivers


<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>FRQ #1</title>
  </head>


  <body>
<div class="container">

  <div class="flip-box">
  <div class="flip-box-inner">
    <div class="flip-box-front">
      <img src="https://i.postimg.cc/wjXc0Qtn/lewis-hamilton-mercedes-1.jpg" alt="Paris" style="width:300px;height:200px">
    </div>
    <div class="flip-box-back">
      <h2>Lewis Hamilton</h2>
      <p>Driver for Mercedes Since 2013</p>
      <p>Previousely Drove for McLaren</p>
      <p>103 Grand Prix's Won</p>
      <p>38 years old</p>
      <p>16 years racing in Formula 1</p>
    </div>
  </div>
</div>
<div class="flip-box">
  <div class="flip-box-inner">
    <div class="flip-box-front">
      <img src="https://cdn-8.motorsport.com/images/mgl/24vA3r46/s8/max-verstappen-red-bull-racing-1.jpg" alt="Paris" style="width:300px;height:200px">
    </div>
    <div class="flip-box-back">
      <h2>Max Verstappen</h2>
      <p>Info Add later</p>
    </div>
  </div>
</div>
</div>

<style>
    .container {
    display: grid;
    grid-template-columns: auto auto;
}
      .flip-box {
  background-color: transparent;
  width: 300px;
  height: 200px;
  border: 1px solid #f1f1f1;
  perspective: 1000px;
}

.flip-box-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-box:hover .flip-box-inner {
  transform: rotateY(180deg);
}

.flip-box-front, .flip-box-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-box-front {
  background-color: #bbb;
  color: black;
}

.flip-box-back {
  color: black;
  transform: rotateY(180deg);
}
    </style>
  </body>

</html>