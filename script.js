// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  var timeDisplayEl = $('#currentDay');
  var saveBtn = $('.btn');
  var timeNow = dayjs().hour();
  if(timeNow<9){
    $('#hour-9').addClass('future')
  }
  if(timeNow==9){
    $('#hour-9').addClass('present')
  }
  if(timeNow>9){
    $('#hour-9').addClass('past')
  }

  if(timeNow<10){
    $('#hour-10').addClass('future')
  }
  if(timeNow==10){
    $('#hour-10').addClass('present')
  }
  if(timeNow>10){
    $('#hour-10').addClass('past')
  }

  if(timeNow<11){
    $('#hour-11').addClass('future')
  }
  if(timeNow==11){
    $('#hour-11').addClass('present')
  }
  if(timeNow>11){
    $('#hour-11').addClass('past')
  }

  if(timeNow<12){
    $('#hour-12').addClass('future')
  }
  if(timeNow==12){
    $('#hour-12').addClass('present')
  }
  if(timeNow>12){
    $('#hour-12').addClass('past')
  }

  if(timeNow<13){
    $('#hour-1').addClass('future')
  }
  if(timeNow==13){
    $('#hour-1').addClass('present')
  }
  if(timeNow>13){
    $('#hour-1').addClass('past')
  }

  if(timeNow<14){
    $('#hour-2').addClass('future')
  }
  if(timeNow==14){
    $('#hour-2').addClass('present')
  }
  if(timeNow>14){
    $('#hour-2').addClass('past')
  }

  if(timeNow<15){
    $('#hour-3').addClass('future')
  }
  if(timeNow==15){
    $('#hour-3').addClass('present')
  }
  if(timeNow>15){
    $('#hour-3').addClass('past')
  }

  if(timeNow<16){
    $('#hour-4').addClass('future')
  }
  if(timeNow==16){
    $('#hour-4').addClass('present')
  }
  if(timeNow>16){
    $('#hour-4').addClass('past')
  }

  if(timeNow<17){
    $('#hour-5').addClass('future')
  }
  if(timeNow==17){
    $('#hour-5').addClass('present')
  }
  if(timeNow>17){
    $('#hour-5').addClass('past')
  }
  function saveEvent(event){
      var textEvent = $(this).parent().children().eq(1).val();
      var Id = $(this).parent().attr("id");
      localStorage.setItem('hour', JSON.stringify(Id));
      localStorage.setItem('todo', JSON.stringify(textEvent));
     
  }
  function readEventFromStorage() {
    var toDolist = localStorage.getItem('todo');
    var hourToDo = localStorage.getItem('hour');
    if (toDolist) {
      toDolist = JSON.parse(toDolist);
    } else {
      toDolist = [];
    }
    return toDolist;
    if (hourToDo) {
      hourToDo = JSON.parse(hourToDo);
    } else {
      hourToDo = [];
    }
   return hourToDo;
  
  //printEventData();
  }

  
  

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  
  function displayTime(){
    var rightNow = dayjs().format('dddd,MMMM DD');
    timeDisplayEl.text(rightNow);
  }
  displayTime();
  
  saveBtn.on('click',saveEvent);
});

