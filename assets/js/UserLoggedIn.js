$(document).ready(function() {
  $('#myCarousel').carousel({
    interval: 2000
  });
  $('#myCarousel2').carousel({
    interval: 2000
  });
  $('#custom-search-form').on('submit', (e) => {
    let searchText = $('#search').val();
    search(searchText);
    e.preventDefault();
  });
});

/*
 *función que agrega las imagenes de las series a los carruseles
 */
var randomMovieArray = ['Stranger Things', 'Game of Thrones', 'Narcos', 'Black mirror', 'sense8', 'Breaking Bad', 'Walking Dead', 'Silicon Valley', 'Mindhunter', 'Designated Survivor', 'Scream Queens', 'Dexter', 'Glee', 'Big Bang Theory', 'Modern Family', 'True Blood'];

function apiCall() {
  $.getJSON('https://www.omdbapi.com/?apikey=3a181f1c&s=' + encodeURI(randomMovieArray[2])).then(function(response) {
    var image = response.Search[0].Poster;
    if (image !== "N/A") {
      $('.img1').attr('src', image);
    }
  });
  $.getJSON('https://www.omdbapi.com/?apikey=3a181f1c&s=' + encodeURI(randomMovieArray[0])).then(function(response) {
    var image = response.Search[0].Poster;
    if (image !== "N/A") {
      $('.img2').attr('src', image);
    }
  });
  $.getJSON('https://www.omdbapi.com/?apikey=3a181f1c&s=' + encodeURI(randomMovieArray[9])).then(function(response) {
    var image = response.Search[0].Poster;
    if (image !== "N/A") {
      $('.img3').attr('src', image);
    }
  });
  $.getJSON('https://www.omdbapi.com/?apikey=3a181f1c&s=' + encodeURI(randomMovieArray[7])).then(function(response) {
    var image = response.Search[0].Poster;
    if (image !== "N/A") {
      $('.img4').attr('src', image);
    }
  });
  $.getJSON('https://www.omdbapi.com/?apikey=3a181f1c&s=' + encodeURI(randomMovieArray[3])).then(function(response) {
    var image = response.Search[0].Poster;
    if (image !== "N/A") {
      $('.img5').attr('src', image);
    }
  });
  $.getJSON('https://www.omdbapi.com/?apikey=3a181f1c&s=' + encodeURI(randomMovieArray[1])).then(function(response) {
    var image = response.Search[0].Poster;
    if (image !== "N/A") {
      $('.img6').attr('src', image);
    }
  });
  $.getJSON('https://www.omdbapi.com/?apikey=3a181f1c&s=' + encodeURI(randomMovieArray[4])).then(function(response) {
    var image = response.Search[0].Poster;
    if (image !== "N/A") {
      $('.img7').attr('src', image);
    }
  });
  $.getJSON('https://www.omdbapi.com/?apikey=3a181f1c&s=' + encodeURI(randomMovieArray[5])).then(function(response) {
    var image = response.Search[0].Poster;
    if (image !== "N/A") {
      $('.img8').attr('src', image);
    }
  });
  $.getJSON('https://www.omdbapi.com/?apikey=3a181f1c&s=' + encodeURI(randomMovieArray[11])).then(function(response) {
    var image = response.Search[0].Poster;
    if (image !== "N/A") {
      $('.img9').attr('src', image);
    }
  });
  $.getJSON('https://www.omdbapi.com/?apikey=3a181f1c&s=' + encodeURI(randomMovieArray[6])).then(function(response) {
    var image = response.Search[0].Poster;
    if (image !== "N/A") {
      $('.img10').attr('src', image);
    }
  });
  $.getJSON('https://www.omdbapi.com/?apikey=3a181f1c&s=' + encodeURI(randomMovieArray[13])).then(function(response) {
    var image = response.Search[0].Poster;
    if (image !== "N/A") {
      $('.img11').attr('src', image);
    }
  });
  $.getJSON('https://www.omdbapi.com/?apikey=3a181f1c&s=' + encodeURI(randomMovieArray[10])).then(function(response) {
    var image = response.Search[0].Poster;
    if (image !== "N/A") {
      $('.img12').attr('src', image);
    }
  });
  $.getJSON('https://www.omdbapi.com/?apikey=3a181f1c&s=' + encodeURI(randomMovieArray[15])).then(function(response) {
    var image = response.Search[0].Poster;
    if (image !== "N/A") {
      $('.img13').attr('src', image);
    }
  });
  $.getJSON('https://www.omdbapi.com/?apikey=3a181f1c&s=' + encodeURI(randomMovieArray[12])).then(function(response) {
    var image = response.Search[0].Poster;
    if (image !== "N/A") {
      $('.img14').attr('src', image);
    }
  });
  $.getJSON('https://www.omdbapi.com/?apikey=3a181f1c&s=' + encodeURI(randomMovieArray[14])).then(function(response) {
    var image = response.Search[0].Poster;
    if (image !== "N/A") {
      $('.img15').attr('src', image);
    }
  });
  $.getJSON('https://www.omdbapi.com/?apikey=3a181f1c&s=' + encodeURI(randomMovieArray[8])).then(function(response) {
    var image = response.Search[0].Poster;
    if (image !== "N/A") {
      $('.img16').attr('src', image);
    }
  });
}
apiCall();

function search(searchText) {

  $.getJSON('https://www.omdbapi.com/?apikey=3a181f1c&s=' + encodeURI(searchText)).then(function(response) {
    var poster = response.Search[0].Poster;
    var title = response.Search[0].Title;
    var year = response.Search[0].Year;
    if (poster !== "N/A") {

      $('.series').append('<img class="imgSeries" src="' + poster + '" alt="series">' + '<h4>' + title + '</h4>' + '<h5>' + year + '</h5>' + '<p>' + 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' + '</p>');
    }
  });
};
