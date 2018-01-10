$(document).ready(function() {
  $('#myCarousel').carousel({
    interval: 2000
  });
  $('#myCarousel2').carousel({
    interval: 2000
  });
});

/*
 *función que agrega las imagenes de las series a los carruseles
 */
var randomMovieArray = ['Stranger Things', 'Game of Thrones', 'Narcos', 'Black mirror', 'sense8', 'Breaking Bad', 'Walking Dead', 'Silicon Valley', 'Mindhunter', 'Designated Survivor', 'Scream Queens', 'Dexter', 'Glee', 'Big Bang Theory', 'Modern Family', 'True Blood'];

function apiCall() {
  $.getJSON('https://www.omdbapi.com/?apikey=3a181f1c&s=' + encodeURI(randomMovieArray[2])).then(function(response) {
    console.log(response.Search[0].Poster);
    var image = response.Search[0].Poster;
    if (image !== "N/A") {
      $('.img1').attr('src', image);
    }
  });
  $.getJSON('https://www.omdbapi.com/?apikey=3a181f1c&s=' + encodeURI(randomMovieArray[0])).then(function(response) {
    console.log(response.Search[0].Poster);
    var image = response.Search[0].Poster;
    if (image !== "N/A") {
      $('.img2').attr('src', image);
    }
  });
  $.getJSON('https://www.omdbapi.com/?apikey=3a181f1c&s=' + encodeURI(randomMovieArray[9])).then(function(response) {
    console.log(response.Search[0].Poster);
    var image = response.Search[0].Poster;
    if (image !== "N/A") {
      $('.img3').attr('src', image);
    }
  });
  $.getJSON('https://www.omdbapi.com/?apikey=3a181f1c&s=' + encodeURI(randomMovieArray[7])).then(function(response) {
    console.log(response.Search[0].Poster);
    var image = response.Search[0].Poster;
    if (image !== "N/A") {
      $('.img4').attr('src', image);
    }
  });
  $.getJSON('https://www.omdbapi.com/?apikey=3a181f1c&s=' + encodeURI(randomMovieArray[3])).then(function(response) {
    console.log(response.Search[0].Poster);
    var image = response.Search[0].Poster;
    if (image !== "N/A") {
      $('.img5').attr('src', image);
    }
  });
  $.getJSON('https://www.omdbapi.com/?apikey=3a181f1c&s=' + encodeURI(randomMovieArray[1])).then(function(response) {
    console.log(response.Search[0].Poster);
    var image = response.Search[0].Poster;
    if (image !== "N/A") {
      $('.img6').attr('src', image);
    }
  });
  $.getJSON('https://www.omdbapi.com/?apikey=3a181f1c&s=' + encodeURI(randomMovieArray[4])).then(function(response) {
    console.log(response.Search[0].Poster);
    var image = response.Search[0].Poster;
    if (image !== "N/A") {
      $('.img7').attr('src', image);
    }
  });
  $.getJSON('https://www.omdbapi.com/?apikey=3a181f1c&s=' + encodeURI(randomMovieArray[5])).then(function(response) {
    console.log(response.Search[0].Poster);
    var image = response.Search[0].Poster;
    if (image !== "N/A") {
      $('.img8').attr('src', image);
    }
  });
  $.getJSON('https://www.omdbapi.com/?apikey=3a181f1c&s=' + encodeURI(randomMovieArray[11])).then(function(response) {
    console.log(response.Search[0].Poster);
    var image = response.Search[0].Poster;
    if (image !== "N/A") {
      $('.img9').attr('src', image);
    }
  });
  $.getJSON('https://www.omdbapi.com/?apikey=3a181f1c&s=' + encodeURI(randomMovieArray[6])).then(function(response) {
    console.log(response.Search[0].Poster);
    var image = response.Search[0].Poster;
    if (image !== "N/A") {
      $('.img10').attr('src', image);
    }
  });
  $.getJSON('https://www.omdbapi.com/?apikey=3a181f1c&s=' + encodeURI(randomMovieArray[13])).then(function(response) {
    console.log(response.Search[0].Poster);
    var image = response.Search[0].Poster;
    if (image !== "N/A") {
      $('.img11').attr('src', image);
    }
  });
  $.getJSON('https://www.omdbapi.com/?apikey=3a181f1c&s=' + encodeURI(randomMovieArray[10])).then(function(response) {
    console.log(response.Search[0].Poster);
    var image = response.Search[0].Poster;
    if (image !== "N/A") {
      $('.img12').attr('src', image);
    }
  });
  $.getJSON('https://www.omdbapi.com/?apikey=3a181f1c&s=' + encodeURI(randomMovieArray[15])).then(function(response) {
    console.log(response.Search[0].Poster);
    var image = response.Search[0].Poster;
    if (image !== "N/A") {
      $('.img13').attr('src', image);
    }
  });
  $.getJSON('https://www.omdbapi.com/?apikey=3a181f1c&s=' + encodeURI(randomMovieArray[12])).then(function(response) {
    console.log(response.Search[0].Poster);
    var image = response.Search[0].Poster;
    if (image !== "N/A") {
      $('.img14').attr('src', image);
    }
  });
  $.getJSON('https://www.omdbapi.com/?apikey=3a181f1c&s=' + encodeURI(randomMovieArray[14])).then(function(response) {
    console.log(response.Search[0].Poster);
    var image = response.Search[0].Poster;
    if (image !== "N/A") {
      $('.img15').attr('src', image);
    }
  });
  $.getJSON('https://www.omdbapi.com/?apikey=3a181f1c&s=' + encodeURI(randomMovieArray[8])).then(function(response) {
    console.log(response.Search[0].Poster);
    var image = response.Search[0].Poster;
    if (image !== "N/A") {
      $('.img16').attr('src', image);
    }
  });
}
apiCall();
