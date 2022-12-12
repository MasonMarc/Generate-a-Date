var getMeal = function () {
    var ingredient = $('#ingredient').val();
var apiUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=' + ingredient
    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    var meals = data.meals;
                    displayMeal(meals);
                    console.log(meals);
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
    var rand1 = Math.floor(10000 + Math.random() * 10000);
    var rand = rand1.toString();
var apiUrl = 'http://www.omdbapi.com/?i=tt00' + rand + '&apikey=5523dad2';
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
var displayMeal = function (meals) {
        var randMeal = Math.floor(meals.length * Math.random());
        var mealName = meals[randMeal].strMeal;
        console.log(mealName);
        console.log(randMeal);
        $('#meal-title').text(mealName);
        //$('.meal-title').meals(results[i].strMeal);
     }
$('#init').click(function (event) { 
    event.preventDefault();
    getMeal();
    getDrink();
    getMovie();
    
});