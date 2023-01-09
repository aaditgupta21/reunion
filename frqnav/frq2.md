<br>
<br>
<h1 style ="text-align: center">Our FRQs</h1>

<div id="title">
{% include nav2.html %}
</div>

<h1 style="text-align: center; font-size: 30px">
      FRQ
      <span style="font-weight: bold">#2: Step Tracker</span>
    </h1>

<table>
  <thead>
  <tr>
    <th>id</th>
    <th>name</th>
    <th>email</th>
    <th>phone number</th>
    <th>events</th>
    <th>graduating year</th>
  </tr>
  </thead>
  <tbody id = "result">

  </tbody>
</table>

<script>
    // prepare HTML result container for new output
    const resultContainer = document.getElementById("result");

    // prepare fetch options
    const url = "https://f1.aadit.dev/api/person/";

    const options = {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'omit', // include, *same-origin, omit
        headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    };

    const putOptions = {
        method: 'PUT', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'omit', // include, *same-origin, omit
        headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    };
</script>
