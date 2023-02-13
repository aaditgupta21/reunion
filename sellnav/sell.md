<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sell a Part</title>
  </head>

  <body>
  
<div id="title" style="margin-top: -50px">
{% include sellnav.html %}
</div>
    <h1 style="text-align: center; font-size: 30px">
    Sell a Part
    </h1>
 <div style="margin: 0 auto; text-align: center">
    <input type="text" id="partType" name="partType" placeholder="Part Type">
    <input type="text" id="description" name="description" placeholder="Description">
    <input type="text" id="initialCost" name="initialCost" placeholder="Starting Cost">
    <input type="text" id="weight" name="weight" placeholder="Weight of Item">
    <input type="date" id="endDate" name="endDate" placeholder="MM-dd-yyyy" style="width: 50%;
  padding: 5px 5px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid #CD2A2A;
  border-radius: 40px;
  color: gray;">
    <input type="url" id="imageUrl" name="imageUrl" placeholder="Image URL" style="width: 50%;
  padding: 5px 5px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid #CD2A2A;
  border-radius: 40px;
  color: gray;">
    <button type="submit" onclick="formSubmit()">Submit</button>
    <br>
</div>

<script type="text/javascript">
    function formSubmit() {
        let partType = document.getElementById("partType").value;
        let description = document.getElementById("description").value;
        let initialCost = document.getElementById("initialCost").value;
        let currentCost = initialCost;
        let endDate = document.getElementById("endDate").value;
        let weight = document.getElementById("weight").value;
        let imageUrl = document.getElementById("imageUrl").value;


        fetch(
          `https://f1-backend.aadit.dev/api/item/newItem?partType=${partType}&description=${description}&currentCost=${currentCost}&initialCost=${initialCost}&endDate=${endDate}&imageUrl=${imageUrl}&weight=${weight}`,{method: "POST", mode: 'cors',cache: 'no-cache', credentials: 'include', headers: {'Content-Type': "application/json"}}
        )
          .then(response => response.text())
  .then(result => {
    console.log(result);
    if (result == `${partType} listed successfully!`) {
      alert("Part Listed Successfully!");
      window.location.href = "https://aaditgupta21.github.io/reunion/sellnav/listings";
    } else {
      alert("Error");
    }
  })
  .catch(error => console.log('error', error));

    }
</script>
