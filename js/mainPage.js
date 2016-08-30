$(document).ready(function(){
   
   $("#calendarPage").hide();
   $("#manufacturer-table").hide();
   $(".hidden").removeClass("hidden");

    var currentContent = "gandy";
    $("#switch").click(function(){
        
        if(currentContent === "gandy")
        {
          $("#gandy-tables").hide();
          $("#manufacturer-table").show();
          currentContent = "manufacturer";
          $("button#switch").text("Go to Calendar");
        }
        
        else if (currentContent === "manufacturer"){
          $("#manufacturer-table").hide();
          $("#calendarPage").show();
          currentContent = "calendar";
          $("button#switch").text("Go to tables");
        }

        else{
          $("#calendarPage").hide();
          $("#gandy-tables").show();
          currentContent = "gandy";
          $("button#switch").text("Go to Calendar");
        }   
    });
});