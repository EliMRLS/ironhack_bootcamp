var $btn = $('.color-changer');

function saveColor(){
  var saved = localStorage.getItem("chosen-color");
  $("body").css("background-color", saved);
}


function changeColor(event){
  var color = $(event.currentTarget).attr('data-color');
  $("body").css("background-color", color);
  localStorage.setItem("chosen-color", color)
}

saveColor();
$btn.on("click", changeColor);


////////OPTION B///////

$( document ).ready(function()
{
  changeColor(localStorage.getItem('user-color'));
})
​
$('.color-changer').click(
                      function(e){
                        e.preventDefault();
                        changeColor($(this).attr("data-color"))
                      });
​
function changeColor(color){
  $('body').css("background-color",color);
  localStorage.setItem('user-color', color);
}

