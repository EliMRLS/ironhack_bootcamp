$(document).ready (function(){

  $('#search-btn').click (function(event){
    event.preventDefault();        
    searchSong();    
  });

});

function searchSong(){

  $.ajax({
    type: "GET",
    url: 'https://api.spotify.com/v1/search?type=track&query=' + $('#search-word').val(),  
    success: handleSong,
    error: handleFailure,
    dataType: "json"
  });

  function handleSong (term){

    console.log("this is working");
    console.log(term.tracks.items[0]);

    $('.title').empty();
    $('.author').empty();

    var firstArtist = term.tracks.items[0];

    if (firstArtist.album.images.length>0){
      var cover = firstArtist.album.images[0].url;
    }else{
      var cover = "https://cdn1.iconfinder.com/data/icons/audio-2/512/musicfile-512.png";
    };

    $('.title').text(term.tracks.items[0].name);
    $('.photo').attr('src', cover);

    var authors = term.tracks.items[0].artists;
  
    if (term.tracks.items[0].artists.length>0){
      $.each(term.tracks.items[0].artists, function(key, value){
        $('.author').append(term.tracks.items[0].artists[key].name + " ");
      });
    }

    $('.js-player').attr('src', term.tracks.items[0].preview_url);    

  };

  function handleFailure (){
    console.log('Error');
  }

};


$('.btn-play').click (function(){
  if ($('.btn-play').hasClass('playing')){
    $('.js-player').trigger('pause');
    $('.btn-play').removeClass('playing');
  }else{
    $('.js-player').trigger('play');
    $('.btn-play').addClass('playing');
  }
});

$('.js-player').on('timeupdate', printTime);

function printTime () {
  var current = $('.js-player').prop('currentTime');
  //console.debug('Current time: ' + current);
  $('.bar').attr('value', current);
}
