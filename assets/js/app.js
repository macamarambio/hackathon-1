$(document).ready(function() {
    $('#myCarousel').carousel({
        interval: 4000
    });
    $('.btn-sign,.modal-signup,.modal-signin').click(function() {
        window.location.href = "UserLoggedIn.html";
    });
    $('.tips, .que-es').click(function() {
        window.location.href = "super2.html";
    });
    $('#myModal').on('shown.bs.modal', function() {
        $('#myInput').focus()
    });
    $('#custom-search-form').on('submit', (e) => {
      let searchText = $('#search').val();
      search(searchText);
      e.preventDefault();
    });
});

var randomMovieArray = ['Stranger Things', 'Game of Thrones', 'Narcos', 'Black mirror', 'sense8', 'Breaking Bad', 'Walking Dead', 'Silicon Valley', 'Mindhunter', 'Designated Survivor', 'Scream Queens', 'Dexter', 'Glee', 'Big Bang Theory', 'Modern Family', 'True Blood'];

function apiCall() {
    $.getJSON('https://www.omdbapi.com/?apikey=bd7a01a9&s='+ encodeURI(randomMovieArray[2])).then(function(response) {
        var image = response.Poster;
        if (image !== "N/A") {
            $('.img1').attr('src', image);
        }
    });
    $.getJSON('https://www.omdbapi.com/?apikey=bd7a01a9&s=' + encodeURI(randomMovieArray[0])).then(function(response) {
        var image = response.Search[0].Poster;
        if (image !== "N/A") {
            $('.img2').attr('src', image);
        }
    });
    $.getJSON('https://www.omdbapi.com/?apikey=bd7a01a9&s=' + encodeURI(randomMovieArray[9])).then(function(response) {
        var image = response.Search[0].Poster;
        if (image !== "N/A") {
            $('.img3').attr('src', image);
        }
    });
    $.getJSON('https://www.omdbapi.com/?apikey=bd7a01a9&s=' + encodeURI(randomMovieArray[7])).then(function(response) {
        var image = response.Search[0].Poster;
        if (image !== "N/A") {
            $('.img4').attr('src', image);
        }
    });
    $.getJSON('https://www.omdbapi.com/?apikey=bd7a01a9&s=' + encodeURI(randomMovieArray[3])).then(function(response) {
        var image = response.Search[0].Poster;
        if (image !== "N/A") {
            $('.img5').attr('src', image);
        }
    });
    $.getJSON('https://www.omdbapi.com/?apikey=bd7a01a9&s=' + encodeURI(randomMovieArray[1])).then(function(response) {
        var image = response.Search[0].Poster;
        if (image !== "N/A") {
            $('.img6').attr('src', image);
        }
    });
    $.getJSON('https://www.omdbapi.com/?apikey=bd7a01a9&s=' + encodeURI(randomMovieArray[4])).then(function(response) {
        var image = response.Search[0].Poster;
        if (image !== "N/A") {
            $('.img7').attr('src', image);
        }
    });
    $.getJSON('https://www.omdbapi.com/?apikey=bd7a01a9&s=' + encodeURI(randomMovieArray[5])).then(function(response) {
        var image = response.Search[0].Poster;
        if (image !== "N/A") {
            $('.img8').attr('src', image);
        }
    });
    $.getJSON('https://www.omdbapi.com/?apikey=bd7a01a9&s=' + encodeURI(randomMovieArray[11])).then(function(response) {
        var image = response.Search[0].Poster;
        if (image !== "N/A") {
            $('.img9').attr('src', image);
        }
    });
    $.getJSON('https://www.omdbapi.com/?apikey=bd7a01a9&s=' + encodeURI(randomMovieArray[6])).then(function(response) {
        var image = response.Search[0].Poster;
        if (image !== "N/A") {
            $('.img10').attr('src', image);
        }
    });
    $.getJSON('https://www.omdbapi.com/?apikey=bd7a01a9&s=' + encodeURI(randomMovieArray[13])).then(function(response) {
        var image = response.Search[0].Poster;
        if (image !== "N/A") {
            $('.img11').attr('src', image);
        }
    });
    $.getJSON('https://www.omdbapi.com/?apikey=bd7a01a9&s=' + encodeURI(randomMovieArray[10])).then(function(response) {
        var image = response.Search[0].Poster;
        if (image !== "N/A") {
            $('.img12').attr('src', image);
        }
    });
    $.getJSON('https://www.omdbapi.com/?apikey=bd7a01a9&s=' + encodeURI(randomMovieArray[15])).then(function(response) {
        var image = response.Search[0].Poster;
        if (image !== "N/A") {
            $('.img13').attr('src', image);
        }
    });
    $.getJSON('https://www.omdbapi.com/?apikey=bd7a01a9&s=' + encodeURI(randomMovieArray[12])).then(function(response) {
        var image = response.Search[0].Poster;
        if (image !== "N/A") {
            $('.img14').attr('src', image);
        }
    });
     $.getJSON('https://www.omdbapi.com/?apikey=bd7a01a9&s=' + encodeURI(randomMovieArray[14])).then(function(response) {
        var image = response.Search[0].Poster;
        if (image !== "N/A") {
            $('.img15').attr('src', image);
        }
    });
<<<<<<< Updated upstream
    $.getJSON('https://www.omdbapi.com/?apikey=bd7a01a9&s=' + encodeURI(randomMovieArray[8])).then(function(response) {
        var image = response.Search[0].Poster;
        if (image !== "N/A") {
            $('.img16').attr('src', image);
        }
    });
}
apiCall();

function search(searchText) {

  $.getJSON(`https://www.omdbapi.com/?apikey=bd7a01a9&s=${encodeURI(searchText)}&plot=full`).then(function(response) {
    var ID = response.Search[0].imdbID;
    $.getJSON(`https://www.omdbapi.com/?i=${ID}&apikey=bd7a01a9&s=&plot=full`).then(function(response) {
      var response = response;
      var poster = response.Poster;
      var title = response.Title;
      var year = response.Year;
      var plot = response.Plot;
      if (poster !== "N/A") {
        $('.buscador').append('<img class="imgSeries delete" src="' + poster + '" alt="series">' + '<h4 class="delete">' + title + '</h4>' + '<h5 class="delete">' + year + '</h5>' + '<p class="delete">' + plot + '</p>');
        $('#remove').append('<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>');
      }
    })
  })
};
$('#search').click(function() {
  $('.delete').remove();
  $('.glyphicon-remove').remove();
});
