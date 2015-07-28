$(document).ready(function() {

    $('#calendar').fullCalendar({
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      defaultDate: '2015-07-01',
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      events: [
        {
          title: 'Sampling',
          start: '2015-07-01',
          end: '2015-07-08',
        },

        {
          title: 'Sample approval',
          start: '2015-07-09',
          end: '2015-07-10'
        },

        {
          title: 'Receive packages, hangers etc..',
          start: '2015-07-10',
          end: '2015-07-11'
        },
        {
          title: 'Packaging',
          start: '2015-07-13',
          end: '2015-07-18'
        },

        {
          title: 'Final product shipping',
          start: '2015-07-19',
          end: '2015-07-25'
        },

        {
          title: 'Ready for selling',
          start: '2015-07-30'
        }
      ]
    });
  });
