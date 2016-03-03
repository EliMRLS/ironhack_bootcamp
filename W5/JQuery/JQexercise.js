
var greetings = ['Willkommen', 'Bienvenue', 'Welcome', 'Velkommen', 'Bienvenido', 'Benvenuti'];

function getRandomGreeting() {
  var random = Math.floor(Math.random()*greetings.length);
  $('#chosen').text(greetings[random]);
};

$(document).on('ready', getRandomGreeting);

$('#refresh').on('click', getRandomGreeting);


function addGreeting() {
  var greeting = $('#input-greet').val();
  greetings.push(greeting);
  $('#greetings-list').html(getList());
};

$('#input-greet').keypress(function(event) {
  if (event.keyCode == 13 || event.which == 13) { 
    event.preventDefault();        
    addGreeting();    
  }
});


function getList() {
  var List = "";
  for(var i = 0; i < greetings.length; i++) {
    List += "<li>" + greetings[i] + "</li>";
  }
  return List
}

$('#greetings-list').html(getList())


$('#greetings-link').on('click', function(event) {
  event.preventDefault();
  if ($('#greetings-link').hasClass('active')) {
    $('#greetings-link').text('Hide all');
  } else {
    $('#greetings-link').text('Show all');
  };

  $('#greetings-list').toggle();
  $('#greetings-link').toggleClass('active');

});

// $('.delete').on('click', function(event) {
//   $(event.currentTarget).parent().remove();
//   n = $(event.currentTarget).id
//   phrases.splice(n,1);
// })


//List += "<li>" + greetings[i] + " <img src='http://findicons.com/files/icons/1671/simplicio/128/notification_error.png' class='delete'></li>";

