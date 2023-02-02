<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="https://uicdn.toast.com/calendar/latest/toastui-calendar.min.css" />
    <script src="https://uicdn.toast.com/calendar/latest/toastui-calendar.min.js"></script>

    <title>Calendar</title>
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
  timezone: {
    zones: [
        {
            timezoneName: 'America/Los_Angeles',
            displayLabel: 'San Diego',
        }
    ],
  },
  template: {
    time(event) {
      const { start, end, title } = event;

      return `<span style="color: white;">${formatTime(start)}~${formatTime(end)} ${title}</span>`;
    },
    allday(event) {
      return `<span style="color: gray;">${event.title}</span>`;
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

calendar.createEvents([
    {
        id: "idk",
        calendarId: 'cal2',
        title: "Weekly Meeting",
        start:'2023-02-02T09:00:00',
        end: '2023-02-02T10:00:00',
    },
])
    </script>
