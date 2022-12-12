

var getMeal = function () {
var apiUrl = 'www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'
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

getMeal();