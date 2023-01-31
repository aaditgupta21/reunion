<style>
  .dropbtn {
  color: white;
  padding: 16px;
  font-size: 16px;
  border: 1px solid black;
  cursor: pointer;
  background-repeat: no-repeat;
  width: 9.5em;
  height: 15%;
}
.dropdown {
  display: inline-block;
}
.dropdown-content {
  display: inline-block;
  opacity: 0%;
  background-color: #00000000;
  width: 9.5em;
  z-index: 1;
  margin-top: 20px;
}
.dropdown-content a {
  color: black;
  font-family: helvetica;
  padding: 5px 5px;
  text-decoration: none;
  display: block;
}
hr.solid {
  border-left: none;
  border-right: none;
  border-top: 1px solid #000000;
  border-bottom: none;
  width:9.5em;
}
.show {
  opacity: 100%;
  
}
</style>
<div class="dropdown">
  <tr>
    <button id="UKdrop" class="dropbtn" style="background: url(https://i.postimg.cc/JhQnzRPY/ukflag.png); background-size: 100% 100%; background-repeat: no-repeat;"></button>
    <button id="GERMANYdrop" class="dropbtn" style="background: url(https://i.postimg.cc/65DTHj8c/germanyflag.png); background-size: 100% 100%; background-repeat: no-repeat;"></button>
    <button id="BRAZILdrop" class="dropbtn" style="background: url(https://i.postimg.cc/rwCZhHh2/brazilflag.png); background-size: 100% 100%; background-repeat: no-repeat;"></button>
    <button id="FRANCEdrop" class="dropbtn" style="background: url(https://i.postimg.cc/jjMgT708/franceflag.webp); background-size: 100% 100%; background-repeat: no-repeat;"></button>
  </tr>
  <tr>
    <td>
      <!-- UK -->
      <div id="UKDropdown" class="dropdown-content">
        <hr class="solid">
        <a href="#">Country: UK</a>
        <hr class="solid">
        <a href="#">Wins: 308</a>
        <hr class="solid">
      </div>
    </td>
    <td>
      <!-- GERMANY -->
      <div id="GERMANYDropdown" class="dropdown-content" style="margin-left:25px">
        <hr class="solid">
        <a href="#">Country: Germany</a>
        <hr class="solid">
        <a href="#">Wins: 179</a>
        <hr class="solid">
      </div>
    </td>
    <td>
      <!-- BRAZIL -->
      <div id="BRAZILDropdown" class="dropdown-content" style="margin-left:25px">
        <hr class="solid">
        <a href="#">Country: Brazil</a>
        <hr class="solid">
        <a href="#">Wins: 101</a>
        <hr class="solid">
      </div>
    </td>
    <td>
      <!-- FRANCE -->
      <div id="FRANCEDropdown" class="dropdown-content" style="margin-left:20px">
        <hr class="solid">
        <a href="#">Country: France</a>
        <hr class="solid">
        <a href="#">Wins: 81</a>
        <hr class="solid">
      </div>
      </td>
  </tr>
</div>
<script>
// UK
document.getElementById("UKdrop").addEventListener("click", function(e) {
  document.getElementById("UKDropdown").classList.toggle("show");
});
// Germany
document.getElementById("GERMANYdrop").addEventListener("click", function(e) {
  document.getElementById("GERMANYDropdown").classList.toggle("show");
});
// Brazil
document.getElementById("BRAZILdrop").addEventListener("click", function(e) {
  document.getElementById("BRAZILDropdown").classList.toggle("show");
});
// France
document.getElementById("FRANCEdrop").addEventListener("click", function(e) {
  document.getElementById("FRANCEDropdown").classList.toggle("show");
});
// Close the dropdown if the user clicks outside of it
window.addEventListener("click", function(event) {
  if (!event.target.matches('.dropbtn')) {
    document.querySelectorAll(".dropdown-content.show")
      .forEach(openDropdown => openDropdown.classList.remove('show'))
  }
});
</script>