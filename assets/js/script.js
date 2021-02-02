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
var workoutToken ="63b5f033aef2364d1ad05528871fe89c53aa18ea";
var workoutContentType = "Content-Type=application/json"
//--------------------------------------------------------------//
// RECIPE DATA
// Example: https://api.edamam.com/search?q=chicken&app_id=90284fbd&app_key=0d395c4ef4882bf9cdc1059aadbc0905&from=0&to=3&calories=591-722&health=alcohol-free
// Todo: Create more variables to hold new appId and apiKey

//Not used now, might need later
var getNutritionData = function(qty ,foodType1){
    var apiUrl = beginNutritionUrl + edamamApiId + "&" + edamamApiKey + "&" + contentType + "&" + ingr + qty + "%20" +foodType1;
    console.log(apiUrl);

    fetch(apiUrl).then(function(response){
        if(response.ok){
            response.json().then(function(data){
                console.log("This works!");
                console.log("This is: " + data.ingredients[0].text);
                console.log(data.ingredients[0].parsed);
            });
        }
    });
;}

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
    

var getExercise = function() {
    var exerciseWorkout = "https://wger.de/api/v2/exercise/?language=2";

    let h= new Headers();
    h.append('Accept','application/json');
    h.append('Authorization','Token 63b5f033aef2364d1ad05528871fe89c53aa18ea');
    

    let req = new Request(exerciseWorkout, {
        method: "GET",
        headers: h

    });
    fetch(req).then(function(response){
        if(response.ok){
            response.json().then(function(data){
                
                
                for(i=0;i < 3; i++){
                    var responseContainerEl = document.querySelector('#workoutset-one');
                    // Create an '<h5>' element
                    var workoutTitle = document.createElement('h5');
                     
                    workoutTitle.setAttribute('p', response.data.results.name);
                    // Append the '<h5>' element to the page
                    responseContainerEl.appendChild(workoutTitle);
                    // console.log(data.results[i].name);
                    // console.log(data.results[i].description);
                }
            });
        }
    });
};

// function displayWorkout(){
//     var goalType = localStorage.getItem('');
//     var repValue = '';
//     var setValue = '';
    
//     if(goalType ='Mass' ){
//         repValue = '6-12';
//         setValue = '3-6';
//     }
//     else if (goalType ='lean'){
//         repValue = '1-5';
//         setValue = '2-6';
//     }
//     else if (goalType ='endurance' {
//         repValue = '12-15';
//         setValue = '2-6';
//     }
//     console.log(repValue);
//     console.log(setValue);

    
// }


getExercise();

