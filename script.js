


var getMeal = function () {
    var ingredient = $('#ingredient').val();
    // var category = 'Seafood';
var apiUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=' + ingredient
    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                });
            } else {
                alert('Error: ' + response.statusText);
            }
        })
        .catch(function (error) {
            alert('Unable to connect');
        });
};
var getDrink = function () {
    var liquor = $('#liquor option:selected').val();
var apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + liquor;
    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                });
            } else {
                alert('Error: ' + response.statusText);
            }
        })
        .catch(function (error) {
            alert('Unable to connect');
        });
};
var getMovie = function () {
    var rand1 = Math.floor(1000000 + Math.random() * 1000000);
    var rand = rand1.toString();
var apiUrl = 'http://www.omdbapi.com/?i=tt' + rand + '&apikey=5523dad2';
    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                });
            } else {
                alert('Error: ' + response.statusText);
            }
        })
        .catch(function (error) {
            alert('Unable to connect');
        });
};

$('#init').click(function (event) { 
    event.preventDefault();
    getMeal();
    getDrink();
    getMovie();
    
});