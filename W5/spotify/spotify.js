$(document).ready (function(){

  $('#search-btn').click (function(event){
    event.preventDefault();        
    showList();    
  });

//FIND ARTIST BY TERM
function showList(){

  $.ajax({
    type: "GET",
    url: 'https://api.spotify.com/v1/search?type=artist&query=' + $('#search-word').val(),
    success: handleArtists,
    error: handleFailure,
    dataType: "json"});

  function handleArtists (term){

    $.each(term.artists.items, function(key, value){
      if (value.images.length>0){
        var photo = value.images[0].url;
      }else{
        var photo = "https://cdn1.iconfinder.com/data/icons/audio-2/512/musicfile-512.png";
      };

      var content = [
      "<li class='name' data-value="+ value.id +">" + value.name + " ("+value.followers.total+" followers)",
      "<br><img src='"+ photo +"' class='photos' data-toggle='modal' data-target='#myModal' ></li>"].join("\n");
      $('.artists-list').append(content);

    });
    $('.photos').click(getAlbums)
  }

  function handleFailure (){
    console.log('Error');
  }

}

//SHOW ALBUMS
var getAlbums = function(event){
    event.preventDefault();    
    var id = $(event.currentTarget).parent().attr("data-value");
    showAlbums(id);    
  };

function showAlbums(id){

  $.ajax({
    type: "GET",
    url: 'https://api.spotify.com/v1/artists/' + id + '/albums',
    success: handleAlbums,
    error: handleFailure,
    dataType: "json"});

  function handleAlbums (albums){
    //console.log(albums);
    $('.modal-body').empty();
    $.each(albums.items, function(key, value){
      var covers = [
      "<li data-value="+ value.id +">" + value.name ,
      "<br><img src='"+ value.images[0].url +"' class='photos'></li>"].join("\n");
      $('.modal-body').append(covers);
    });
    $('.photos').click(getTracks)  
  }

  function handleFailure (){
    console.log('Error');
  }

}

//SHOW TRACKS
var getTracks = function(event){
    event.preventDefault();    
    var id = $(event.currentTarget).parent().attr("data-value");
    showSongs(id);    
  };

function showSongs(id){

  $.ajax({
    type: "GET",
    url: 'https://api.spotify.com/v1/albums/' + id + '/tracks',  
    success: handleTracks,
    error: handleFailure,
    dataType: "json"});

  function handleTracks (tracks){
    //console.log(albums);
    $('.modal-body').empty();
    $.each(tracks.items, function(key, value){
      var songss = [
      "<li class='tracks'>" + value.name,
      "<br><audio controls><source src='" + value.preview_url + "'></source></audio></li>"].join("\n");
      $('.modal-body').append(songss);
      $('#myModalLabel').text("Listen to this album's songs");
      //$('.modal-body').append('<a href="#" class="song-links"><p>' + value.name + '</p></a>');
    }); 
    //$('.song-links').click(listenToTracks)  
  }

  function handleFailure (){
    console.log('Error');
  }

}

// function listenToTracks(){
// alert("MUSIC PLAYING");
// }
});


      






