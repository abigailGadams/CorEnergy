var userForm = document.querySelector("#user-form");
var feet = document.getElementById("feet");
var inches = document.getElementById("inches");
var workoutType = document.getElementsByName("group1");
var muscleGroup = document.getElementsByName("muscleGroup");
var firstName = document.getElementById("first_name");
var workout1Header =  document.querySelector("#workout1-header");
var workout2Header =  document.querySelector("#workout2-header");
var workout3Header =  document.querySelector("#workout3-header");
var workout1details = document.querySelector("#workout1-details");
var workout2details = document.querySelector("#workout2-details");
var workout3details = document.querySelector("#workout3-details");
var workoutWithName = document.querySelector("#workoutWithName");
var list = [];

// NUTRITION DATA
// API # 1: Edamam
// API Doc for https://developer.edamam.com/edamam-docs-nutrition-api
// Example: https://api.edamam.com/api/nutrition-data?app_id=b2f0d879&app_key=0a1818257115e160cf6b36653e441db7&Content-Type=application/json&ingr=chicken
var beginNutritionUrl = "https://api.edamam.com/api/nutrition-data?";
var edamamApiId = "app_id=b2f0d879";
var edamamApiKey = "app_key=0a1818257115e160cf6b36653e441db7";
var contentType = "Content-Type=application/json";
var ingr = "ingr=";

var beginWorkoutUrl = "https://wger.de/api/v2/workout/"
var workoutToken = "63b5f033aef2364d1ad05528871fe89c53aa18ea";
var workoutContentType = "Content-Type=application/json"
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
            //  console.log("Target muscle group: " + muscleGroup[i].value);
        }
    }

    //console.log("Users name is: " + name);   

    if (userInputFeet === "" || userInputInches === "") {
        //console.log("bad request");
    } else {
        //console.log("User selected: " + userInputFeet + " feet and " + userInputInches + " inches");
    }

    getAllExercise();
}


var getAllExercise = function () {
    var massRepValue = '6-12';
    var massSetValue = '3-6';
    var leanRepValue = '1-5';
    var leanSetValue = '2-6';
    var eduranceRepValue = '12-15';
    var eduranceSetValue = '2-6';


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
        var lowerBodyGroup = ["14","9"] ;
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
                for(i = 0; i < 3; i++){
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

    if(firstName.value){
        workoutWithName.textContent = "Hello " + firstName.value + ", below is your customized workout plan!";
    }

    workout1Header.textContent = "Workout 1: " + list[0].name;
    workout2Header.textContent = "Workout 2: " + list[1].name;
    workout3Header.textContent = "Workout 3: " + list[2].name;

    workout1details.innerHTML = list[0].description;
    workout2details.innerHTML = list[1].description;
    workout3details.innerHTML = list[2].description;
}


userForm.addEventListener("submit", userSubmittedData);