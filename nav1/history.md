<style>
  .dropbtn {
  color: white;
  padding: 16px;
  font-size: 16px;
  border: 1px solid black;
  cursor: pointer;
  background: url(https://boys-cry.com/wp-content/uploads/2022/04/bc_logo_black.png);
  background-repeat: no-repeat;
  width: 100%;
}
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #00000000;
  min-width: 200px;
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
}
.show {
  display: block;
}
</style>
<div class="dropdown">
  <button id="drop" class="dropbtn">Dropdown</button>
  <button id="drop" class="dropbtn"></button>
  <div id="myDropdown" class="dropdown-content">
    <hr class="solid">
    <a href="#">WE</a>
    <hr class="solid">
    <a href="#">CLIENTS</a>
    <hr class="solid">
    <a href="mailto:info@boys-cry.com">GET IN TOUCH</a>
    <hr class="solid">
  </div>
</div>
<script>
  /* When the user clicks on the button, 
    toggle between hiding and showing the dropdown content */
document.getElementById("drop").addEventListener("click", function(e) {
  document.getElementById("myDropdown").classList.toggle("show");
});
// Close the dropdown if the user clicks outside of it
window.addEventListener("click", function(event) {
  if (!event.target.matches('.dropbtn')) {
    document.querySelectorAll(".dropdown-content.show")
      .forEach(openDropdown => openDropdown.classList.remove('show'))
  }
});
</script>