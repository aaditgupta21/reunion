<!--
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="https://uicdn.toast.com/calendar/latest/toastui-calendar.min.css" />
    <script src="https://uicdn.toast.com/calendar/latest/toastui-calendar.min.js"></script>
<header class="header">


  </head>

  <body>
    <h1 style="text-align: center; font-size: 30px">
Calendar
    </h1>
<div id="calendar" style="height: 800px"></div>

<script type="text/javascript">
    const Calendar = tui.Calendar;

    // const Calendar = require('@toast-ui/calendar');
// require('@toast-ui/calendar/dist/toastui-calendar.min.css');
const calendar = new Calendar('#calendar', {
  defaultView: 'month',
//   timezone: {
//     zones: [
//         {
//             timezoneName: 'America/Los_Angeles',
//             displayLabel: 'San Diego',
//         }
//     ],
//   },
  template: {
    time(event) {
      const { start, end, title } = event;

      return `<span style="color: red;">${formatTime(start)}~${formatTime(end)} ${title}</span>`;
    },
    allday(event) {
      return `<span style="color: red;">${event.title}</span>`;
    },
  },
  calendars: [
    {
      id: 'cal1',
      name: 'Personal',
      backgroundColor: '#03bd9e',
    },
    {
      id: 'cal2',
      name: 'Work',
      backgroundColor: '#00a9ff',
    },
  ],
});
function formatTime(date) {
  return date.getFullYear() + '/' + 
    (date.getMonth() + 1) + '/' + 
    date.getDate() + ' ' + 
    date.getHours() + ':' + 
    date.getMinutes();
}
calendar.createEvents([
    {
        id: "Bahrain GP",
        calendarId: 'cal1',
        title: "Bahrain GP",
        start:'2023-02-02T09:00:00',
        end: '2023-02-02T10:00:00',
    },
])
</script>
-->
<html>
<head>

  <meta charset="utf-8" />
  <title>F1 Races</title>
  <meta name="description" content="F1 Races and their Information." />
  <style>
    table.center {
      margin-left: auto;
      margin-right: auto;
    }
  </style>
</head>

<body>
<h1 style="text-align: center; font-size: 50px">
2023 Calendar
</h1>
<table class="races" border="1">
  <tr>
    <th>Event</th>
    <th>Date</th>
    <th>Comment</th>
  </tr>
</table>
  <script type="text/javascript">
    const races = document.querySelector(".races");
    fetch("http://ergast.com/api/f1/2023/races.json")
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        data.MRData.RaceTable.Races.forEach((data) => {
          races.innerHTML += `
      <tr>
        <td>${data.raceName}</td>
        <td>${data.date}</td>
        <td></td>
      </tr>`;
        });
      });
  </script>

</body>
</html>

