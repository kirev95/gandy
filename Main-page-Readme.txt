API used for datepicker:

http://eternicode.github.io/bootstrap-datepicker/?markup=input&format=&weekStart=&startDate=&endDate=&startView=0&minViewMode=0&todayBtn=false&clearBtn=false&language=en&orientation=auto&multidate=&multidateSeparator=&keyboardNavigation=on&forceParse=on#sandbox

----------------------------------------------------------------------------------------------------

API used for movable icons(implemented as lists):

https://github.com/RubaXa/Sortable


NOTE: TO EXTEND LATER, WE CAN USE THIS FUNCTION TO CONNECT LISTS TO TABLE AND CALENDAR:
FUNCTION CAN BE USED TO SEE WHICH USER WAS MOVED 
  
  onUpdate: function (/**Event*/evt){
    var item = evt.item; // a link to an element that was moved
 }

More info in provided in the API.


----------------------------------------------------------------------------------------------------
API used for Calendar:

http://fullcalendar.io/docs/scheduler/

NOTE: Calendar is just a sample now, it doesn't have functions yet.