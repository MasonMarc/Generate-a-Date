var getMeal = function () {
    var ingredient = $('#ingredient').val();
    if (ingredient === "") {
        $('#modal').click()
    }
    localStorage.setItem("ingredient", ingredient);
    var apiUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=' + ingredient
    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    var meals = data.meals;
                    displayMeal(meals);
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
    localStorage.setItem("liquor", liquor);
    var apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + liquor;
    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    var drinks = data.drinks;
                    displayDrink(drinks);
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
    var apiUrl = 'https://www.omdbapi.com/?i=tt01' + rand + '&apikey=5523dad2';
    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                    if(data.Poster !== "N/A" && data.Language==="English"){
                        displayMovie(data);
                    } else {
                        getMovie();
                    }
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
    $('#mealTitle').text(mealName);
    var mealpicurl = meals[randMeal].strMealThumb
    $("#mealPic").attr("src", mealpicurl)
    var mealDesc = meals[randMeal].strInstructions;
    $('#mealDesc').text(mealDesc);
    var mealLink = "https://www.google.com/search?q=" + mealName
    $("#mealLink").attr("href", mealLink)


    var mealID = meals[randMeal].idMeal;
    // Pulled again from meal api to get instructions
    var apiUrl = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + mealID;
    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    var mealDesc = data.meals[0].strInstructions;
                    $('#mealDesc').text(mealDesc);
                });
            } else {
                alert('Error: ' + response.statusText);
            }
        })
        .catch(function (error) {
            alert('Unable to connect');
        });
    // -----------------------------------------
}

var displayDrink = function (drinks) {
    var randDrink = Math.floor(drinks.length * Math.random());
    var drinkName = drinks[randDrink].strDrink;
    $('#drinkTitle').text(drinkName);
    var drinkspicurl = drinks[randDrink].strDrinkThumb
    $("#drinkPic").attr("src", drinkspicurl)
    var drinksLink = "https://www.google.com/search?q=" + drinkName + ' drink';
    $("#drinkLink").attr("href", drinksLink)

    var drinkID = drinks[randDrink].idDrink;
    // Pulled again from drink api to get instructions
    var apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + drinkID;
    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    var drinkDesc = data.drinks[0].strInstructions;
                    $('#drinkDesc').text(drinkDesc);
                    var drinkIng1 = data.drinks[0].strIngredient1;
                    var drinkIng2 = data.drinks[0].strIngredient2;
                    var drinkIng3 = data.drinks[0].strIngredient3;
                    var drinkIng4 = data.drinks[0].strIngredient4;
                    $('#Ing1').text(drinkIng1);
                    $('#Ing2').text(drinkIng2);
                    $('#Ing3').text(drinkIng3);
                    $('#Ing4').text(drinkIng4);
                });
            } else {
                alert('Error: ' + response.statusText);
            }
        })
        .catch(function (error) {
            alert('Unable to connect');
        });
    // -----------------------------------------


};


var displayMovie = function (data) {
    var movieName = data.Title;
    $('#movieTitle').text(movieName);
    var moviePoster = data.Poster;
    $("#moviePic").attr("src", moviePoster)
    var moviePlot = data.Plot;
    $('#moviePlot').text(moviePlot);
    var movieId = data.imdbID;
    var movieLink = "https://www.imdb.com/title/" + movieId;
    $("#movieLink").attr("href", movieLink)
}

$("#modal").css("display", "none");

var getMealRand = function () {
    var ingredient = localStorage.getItem("ingredient");
    var apiUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=' + ingredient
    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    var meals = data.meals;
                    displayMeal(meals);
                });
            } else {
                alert('Error: ' + response.statusText);
            }
        })
        .catch(function (error) {
            alert('Unable to connect');
        });
};

var getDrinkRand = function () {
    var liquor = localStorage.getItem("liquor");
    var apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + liquor;
    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    var drinks = data.drinks;
                    displayDrink(drinks);
                });
            } else {
                alert('Error: ' + response.statusText);
            }
        })
        .catch(function (error) {
            alert('Unable to connect');
        });
};

$('#randomizer').click(function (event) {
    event.preventDefault();
    getMealRand();
    getDrinkRand();
    getMovie();

});


$('#init').click(function (event) {
    event.preventDefault();
    getMeal();
    getDrink();
    getMovie();

});

$('#initHome').click(function (event) {
    event.preventDefault();
    window.location.assign("results.html")

});