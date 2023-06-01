

var today = dayjs();
$('#todaysDate').text(today.format('MMM D, YYYY'));

  
  $(function () {

    function init() {
       var hour9 = localStorage.getItem("hour-9");
       $("#hour-9 .description").val(hour9);
       var hour10 = localStorage.getItem("hour-10");
       $("#hour-10 .description").val(hour10);
       var hour11 = localStorage.getItem("hour-11");
       $("#hour-11 .description").val(hour11);
       var hour12 = localStorage.getItem("hour-12");
       $("#hour-12 .description").val(hour12);
       var hour13 = localStorage.getItem("hour-13");
       $("#hour-13 .description").val(hour13);
       var hour14 = localStorage.getItem("hour-14");
       $("#hour-14 .description").val(hour14);
       var hour15 = localStorage.getItem("hour-15");
       $("#hour-15 .description").val(hour15);
       var hour16 = localStorage.getItem("hour-16");
       $("#hour-16 .description").val(hour16);
       var hour17 = localStorage.getItem("hour-17");
       $("#hour-17 .description").val(hour17);
      }
      
    
    
    function saveEvent(event){
      console.log($(this))
      console.log($(this).siblings('.description'))
      console.log($(this).siblings('.description').val())
      console.log($(this).parent())
      console.log($(this).parent().attr('id'))
      var itemValue = $(this).siblings('.description').val();
      var itemKeyId = $(this).parent().attr('id');
      localStorage.setItem(itemKeyId, itemValue);
    
    }
    
    $(".btn").on("click", saveEvent)
    
    init();
  
  });
  
  