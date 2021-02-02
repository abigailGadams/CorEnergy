var userForm = document.querySelector("#user-form");
var feet = document.getElementById("feet");
var inches = document.getElementById("inches");
var workoutType = document.getElementsByName("group1");
var muscleGroup = document.getElementsByName("muscleGroup");
var firstName = document.getElementById("first_name");

// NUTRITION DATA
// API # 1: Edamam
// API Doc for https://developer.edamam.com/edamam-docs-nutrition-api
// Example: https://api.edamam.com/api/nutrition-data?app_id=b2f0d879&app_key=0a1818257115e160cf6b36653e441db7&Content-Type=application/json&ingr=chicken
var beginNutritionUrl = "https://api.edamam.com/api/nutrition-data?";
var edamamApiId = "app_id=b2f0d879";
var edamamApiKey = "app_key=0a1818257115e160cf6b36653e441db7";
var contentType = "Content-Type=application/json";
var ingr = "ingr=";

//--------------------------------------------------------------//
// RECIPE DATA
// Example: https://api.edamam.com/search?q=chicken&app_id=90284fbd&app_key=0d395c4ef4882bf9cdc1059aadbc0905&from=0&to=3&calories=591-722&health=alcohol-free
// Todo: Create more variables to hold new appId and apiKey

//Not used now, might need later
var getNutritionData = function (qty, foodType1) {
    var apiUrl = beginNutritionUrl + edamamApiId + "&" + edamamApiKey + "&" + contentType + "&" + ingr + qty + "%20" + foodType1;
    console.log(apiUrl);

    fetch(apiUrl).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                console.log("This works!");
                console.log("This is: " + data.ingredients[0].text);
                console.log(data.ingredients[0].parsed);
            });
        }
    });
    ;
}

//Not used now, might need later
var fetchData = function (event, qty, food) {
    debugger
    event.preventDefault();
    console.log("Was activated");

    var food = foodFromUser.value;
    var quantity = "1";
    console.log(food);

    getNutritionData(quantity, food);
}


var userSubmittedData = function (event) {
    event.preventDefault();
    var userInputFeet = feet.value;
    var userInputInches = inches.value;
    var name = firstName.value;


    // THIS GETS THE WORKOUT TYPE FROM RADIO BUTTONS
    for (i = 0; i < workoutType.length; i++) {
        if (workoutType[i].checked) {
            console.log("Workout Type: ", workoutType[i].value);
        }
    }

    // THIS GETS THE MUSCLE GROUP FROM RADIO BUTTONS
    for (i = 0; i < muscleGroup.length; i++) {
        if (muscleGroup[i].checked) {
            console.log("Target muscle group: " + muscleGroup[i].value);
        }
    }

    console.log("Users name is: " + name);   


    if (userInputFeet === "" || userInputInches === "") {
        console.log("bad request");
    } else {
        console.log("User selected: " + userInputFeet + " feet and " + userInputInches + " inches");
    }
}


userForm.addEventListener("submit", userSubmittedData);


document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      direction: 'up'
    });
  });






