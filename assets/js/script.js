var userForm = document.querySelector("#user-form");
var feet = document.getElementById("feet");
var inches = document.getElementById("inches");
var workoutType = document.getElementsByName("group1");
var muscleGroup = document.getElementsByName("muscleGroup");
var firstName = document.getElementById("first_name");
var workout1Header = document.querySelector("#workout1-header");
var workout2Header = document.querySelector("#workout2-header");
var workout3Header = document.querySelector("#workout3-header");
var workout1details = document.querySelector("#workout1-details");
var workout2details = document.querySelector("#workout2-details");
var workout3details = document.querySelector("#workout3-details");
var workoutWithName = document.querySelector("#workoutWithName");
var workoutrep1 = document.querySelector("#workout1-reps");
var workoutrep2 = document.querySelector("#workout2-reps");
var workoutrep3 = document.querySelector("#workout3-reps");
var recipeHeader = document.querySelector("#recipe-header");
var ingredientHeader = document.querySelector("#ingredient-header");
var recipeBody = document.querySelector("#recipe-body");
var ingredientBody = document.querySelector("#ingredient-body");
var workoutContainer = document.querySelector("#workout-container");
var nutritionContainer = document.querySelector("#nutrition-container");
var btwnHeroWorkout = document.querySelector("#btwn-hero-workout");
var btwnWorkoutNutrition = document.querySelector("#btwn-workout-nutrition");


var list = [];
var workoutValue = "";
var muscleGroupValue = "";

//WORKOUT STUFF
var beginWorkoutUrl = "https://wger.de/api/v2/workout/"
var workoutToken = "63b5f033aef2364d1ad05528871fe89c53aa18ea";
var workoutContentType = "Content-Type=application/json"
//--------------------------------------------------------------//

// RECIPE DATA
// Example: https://api.edamam.com/search?q=Chia%20Seeds&app_id=90284fbd&app_key=0d395c4ef4882bf9cdc1059aadbc0905
// Todo: Create more variables to hold new appId and apiKey
var beginRecipeUrl = "https://api.edamam.com/search?q=";
var edamamApiId = "app_id=90284fbd";
var edamamApiKey = "app_key=0d395c4ef4882bf9cdc1059aadbc0905";
var contentType = "Content-Type=application/json";
var food = [];




var getRecipeData = function () {

    // ARRAY FOR FOOD TYPES'
    if (workoutValue === "Mass") {
        food = ["Eggs", "Protien%20Shake", "Full-Fat%20Cottage%20Cheese", "Chickpeas",
            "Rotisserie Chicken", "Lentils", "Bison", "Scallops"];
    }
    else if (workoutValue === "Lean") {
        food = ["Eggs", "Salmon", "Chicken%20Breast", "Greek%20Yogurt", "Tuna", "Lean%20Beef",
            "Shrimp", "Soybeans", "Cottage%20Cheese", "Turkey%20Breast", "Tilapia", "Beans"];
    }
    else {
        food = ["Oatmeal", "Cherries", "Kale", "Bananas", "Chia%20Seeds", "Walnuts",
            "Sweet%20Potatoes", "Wild%20Salmon"];
    }

    //        var upperBodyCategory = upperBodyGroup[Math.floor(Math.random() * upperBodyGroup.length)];
    var randomFood = food[Math.floor(Math.random() * food.length)];
    var apiUrl = beginRecipeUrl + randomFood + "&" + edamamApiId + "&" + edamamApiKey;
    var stringBuilder = "";

    fetch(apiUrl).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                var randomRecipe = data.hits[Math.floor(Math.random() * data.hits.length)];
                console.log(randomRecipe);

                recipeHeader.innerHTML = "<b>Recipe:</b>";
                recipeBody.textContent = randomRecipe.recipe.label;

                ingredientHeader.innerHTML = "<b>Ingredients:</b>";


                for (i = 0; i < randomRecipe.recipe.ingredients.length; i++) {
                    console.log(randomRecipe.recipe.ingredients[i].text);
                    if (i === 0) {
                        stringBuilder = randomRecipe.recipe.ingredients[i].text + " (" + Math.round(randomRecipe.recipe.ingredients[i].weight) + "gm)";
                    } else {
                        stringBuilder = stringBuilder + ", " + randomRecipe.recipe.ingredients[i].text + " (" + Math.round(randomRecipe.recipe.ingredients[i].weight) + "gm)";
                    }
                }
                ingredientBody.textContent = stringBuilder;
            });
        }
    });
}

//Not used now, might need later
var fetchData = function (event, qty, food) {
    event.preventDefault();
    console.log("Was activated");

    var food = foodFromUser.value;
    var quantity = "1";
    console.log(food);

    getNutritionData(quantity, food);
}


var userSubmittedData = function (event) {
    event.preventDefault();
    // remove ".hide" class from the two page-break divs and the sections for wrokout and nutrition
    workoutContainer.classList.remove("hide");
    nutritionContainer.classList.remove("hide");
    btwnHeroWorkout.classList.remove("hide");
    btwnWorkoutNutrition.classList.remove("hide");
    var userInputFeet = feet.value;
    var userInputInches = inches.value;
    var name = firstName.value;

    // THIS GETS THE WORKOUT TYPE FROM RADIO BUTTONS
    for (i = 0; i < workoutType.length; i++) {
        if (workoutType[i].checked) {
            console.log("Workout Type: ", workoutType[i].value);
            workoutValue = workoutType[i].value;
        }
    }

    // THIS GETS THE MUSCLE GROUP FROM RADIO BUTTONS
    for (i = 0; i < muscleGroup.length; i++) {
        if (muscleGroup[i].checked) {
            console.log("Target muscle group: " + muscleGroup[i].value);
            muscleGroupValue = muscleGroup[i].value;
        }
    }

    console.log("Users name is: " + name);

    if (userInputFeet === "" || userInputInches === "") {
        console.log("bad request");
    } else {
        console.log("User selected: " + userInputFeet + " feet and " + userInputInches + " inches");
    }
    getAllExercise();
    getRecipeData();
}


var getAllExercise = function () {

    for (var i = 0; i < muscleGroup.length; i++) {
        if (muscleGroup[i].checked) {
            var muscleSelectGroup = muscleGroup[i].value;
            console.log('GOT IT ' + muscleSelectGroup);
        }
    }

    if (muscleSelectGroup == 'Upper Body') {
        //console.log("WORKING: Target muscle group: " + muscleSelectGroup);
        var upperBodyGroup = ["10", "8", "12", "11", "13"];
        var upperBodyCategory = upperBodyGroup[Math.floor(Math.random() * upperBodyGroup.length)];
        getExerciseList(upperBodyCategory);

    } else if (muscleSelectGroup == 'Lower Body') {
        var lowerBodyGroup = ["14", "9"];
        var lowerBodyCategory = lowerBodyGroup[Math.floor(Math.random() * lowerBodyGroup.length)];
        getExerciseList(lowerBodyCategory);
    }


}

var getExerciseList = function (muscleCategory1) {
    getExercise(muscleCategory1);
}


var getExercise = function (category) {
    var exerciseWorkout = "https://wger.de/api/v2/exercise/?language=2&category=" + category;
    console.log(exerciseWorkout);

    let h = new Headers();
    h.append('Accept', 'application/json');
    h.append('Authorization', 'Token 63b5f033aef2364d1ad05528871fe89c53aa18ea');


    let req = new Request(exerciseWorkout, {
        method: "GET",
        headers: h
    });

    fetch(req).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                for (i = 0; i < 3; i++) {
                    // var muscleCategory1 = muscleGroup1[Math.floor(Math.random() * muscleGroup1.length)];
                    var randomWorkout = data.results[i];
                    list.push(randomWorkout);
                    console.log(data);
                }
                printExerciseWorkout();
            });
        }
    });
}

var printExerciseWorkout = function () {
    var massRepValue = '6-12';
    var massSetValue = '3-6';
    var leanRepValue = '1-5';
    var leanSetValue = '2-6';
    var eduranceRepValue = '12-15';
    var eduranceSetValue = '2-6';

    if (firstName.value) {
        workoutWithName.textContent = "Hello " + firstName.value + ", below is your customized workout plan!";
    }

    // PRINTS THE WORKOUT HEADER
    workout1Header.innerHTML = "<b>Workout 1: </b>" + list[0].name;
    workout2Header.innerHTML = "<b>Workout 2: </b>" + list[1].name;
    workout3Header.innerHTML = "<b>Workout 3: </b>" + list[2].name;

    // PRINTS THE WORKOUT SET AND REP VALUE 1 Mass 2 Lean 3 Endurance
    if (workoutValue === "Mass") {
        workoutrep1.innerHTML = "<b>Sets: </b>" + massSetValue + ", <b>Reps: </b>" + massRepValue;
        workoutrep2.innerHTML = "<b>Sets: </b>" + massSetValue + ", <b>Reps: </b>" + massRepValue;
        workoutrep3.innerHTML = "<b>Sets: </b>" + massSetValue + ", <b>Reps: </b>" + massRepValue;

    } else if (workoutValue === "Lean") {
        workoutrep1.innerHTML = "<b>Sets: </b>" + leanSetValue + ", <b>Reps: </b>" + leanRepValue;
        workoutrep2.innerHTML = "<b>Sets: </b>" + leanSetValue + ", <b>Reps: </b>" + leanRepValue;
        workoutrep3.innerHTML = "<b>Sets: </b>" + leanSetValue + ", <b>Reps: </b>" + leanRepValue;

    } else {
        workoutrep1.innerHTML = "<b>Sets: </b>" + eduranceSetValue + ", <b>Reps: </b>" + eduranceRepValue;
        workoutrep2.innerHTML = "<b>Sets: </b>" + eduranceSetValue + ", <b>Reps: </b>" + eduranceRepValue;
        workoutrep3.innerHTML = "<b>Sets: </b>" + eduranceSetValue + ", <b>Reps: </b>" + eduranceRepValue;
    }

    //PRINTS THE WORKOUT DESCRIPTION
    workout1details.innerHTML = list[0].description;
    workout2details.innerHTML = list[1].description;
    workout3details.innerHTML = list[2].description;
}


userForm.addEventListener("submit", userSubmittedData);


document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      direction: 'up'
    });
  });