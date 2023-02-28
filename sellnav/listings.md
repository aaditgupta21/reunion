<div id="title" style="margin-top: -50px">
{% include sellnav.html %}
</div>

<table id = "items">
    <thead>
      <tr>
        <th>Id</th>
        <th>Part Type</th>
        <th>Description</th>
        <th>Initial Cost</th>
        <th>Starting Cost</th>
        <th>Weight</th>
        <th>End Date</th>
        <th>Image Url</th>
        <th>Function</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>
  <!-- pass in url here, make a js variable, pls do this nathan 
            make buy -->

<script>
  const itemContainer = document.getElementById("items");
//   const options = {
//       method: 'GET', // *GET, POST, PUT, DELETE, etc.
//       mode: 'no-cors', // no-cors, *cors, same-origin
//       cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
//       credentials: 'omit', // include, *same-origin, omit
//       headers: {
//       'Content-Type': 'application/json'
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//       },
//   };
  
    function listItems() {
    // fetch the API
    fetch("https://f1-backend.aadit.dev/api/item/", {method: "GET", mode: 'cors',cache: 'no-cache', credentials: 'include', headers: {'Content-Type': "application/json"}})
      // response is a RESTful "promise" on any successful fetch
      .then(response => {
        // check for response errors
        if (response.status !== 200) {
            const errorMsg = 'Database response error: ' + response.status;
            console.log(errorMsg);
            const tr = document.createElement("tr");
            const td = document.createElement("td");
            const button = document.createElement("button");
            td.innerHTML = errorMsg;
            tr.appendChild(td);
            tr.appendChild(button);
            itemContainer.appendChild(tr);
            return;
        }
        // valid response will have json data
        response.json()
        .then(data => {
            for (const row of data) {

              const tr = document.createElement("tr");

              const id = document.createElement("td");
              const partType = document.createElement("td");
              const description = document.createElement("td");
              const initialCost = document.createElement("td");
              const currentCost = document.createElement("td");
              const weight = document.createElement("td");
              const endDate = document.createElement("td");
              const imageUrl = document.createElement("td");
              const button = document.createElement("button");
              button.setAttribute('onclick', 'formSubmit()')

              id.innerHTML = row.id;
              partType.innerHTML = row.partType;
              description.innerHTML = row.description;
              initialCost.innerHTML = row.initialCost;
              currentCost.innerHTML = row.currentCost;
              weight.innerHTML = row.weight;
              endDate.innerHTML = row.endDate;
              imageUrl.innerHTML = row.imageUrl;
              button.innerHTML = "Delete";

              tr.appendChild(id);
              tr.appendChild(partType);
              tr.appendChild(description);
              tr.appendChild(initialCost);
              tr.appendChild(currentCost);
              tr.appendChild(weight);
              tr.appendChild(endDate);
              tr.appendChild(imageUrl);
              tr.appendChild(button);

              itemContainer.appendChild(tr);
            }
        })
    })
  }

  function formSubmit() {
        let partType = document.getElementById("partType").value;
        let description = document.getElementById("description").value;
        let initialCost = document.getElementById("initialCost").value;
        let currentCost = initialCost;
        let endDate = document.getElementById("endDate").value;
        let weight = document.getElementById("weight").value;
        let imageUrl = document.getElementById("imageUrl").value;


        fetch(
          `https://f1-backend.aadit.dev/api/item/newItem?partType=${partType}&description=${description}&currentCost=${currentCost}&initialCost=${initialCost}&endDate=${endDate}&imageUrl=${imageUrl}&weight=${weight}`,{method: "DELETE", mode: 'cors',cache: 'no-cache', credentials: 'include', headers: {'Content-Type': "application/json"}}
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

  listItems();
</script>
