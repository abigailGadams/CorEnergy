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

var beginWorkoutUrl = "https://wger.de/api/v2/workout/"
var workoutToken ="63b5f033aef2364d1ad05528871fe89c53aa18ea";
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
          //  console.log("Target muscle group: " + muscleGroup[i].value);
        }
    }

    //console.log("Users name is: " + name);   


    if (userInputFeet === "" || userInputInches === "") {
        //console.log("bad request");
    } else {
        //console.log("User selected: " + userInputFeet + " feet and " + userInputInches + " inches");
    }
}


var getAllExercise = function (event) {
    event.preventDefault();
    for (var i = 0; i < muscleGroup.length; i++) {
        if (muscleGroup[i].checked) {
            var muscleSelectGroup = muscleGroup[i].value;
            console.log('GOT IT ' + muscleSelectGroup);
        }
    }

        
    
    
        if (muscleSelectGroup =='Upper Body') {
            //console.log("WORKING: Target muscle group: " + muscleSelectGroup);
            var muscleGroup1 = ["10","8","12","11","13"];

            var muscleCategory1 = muscleGroup1[Math.floor(Math.random() * muscleGroup1.length)];
            var muscleCategory2 = muscleGroup1[Math.floor(Math.random() * muscleGroup1.length)];
            var muscleCategory3 = muscleGroup1[Math.floor(Math.random() * muscleGroup1.length)];
            console.log(muscleCategory1);
            console.log(typeof muscleCategory1);
            console.log(muscleCategory2);
            console.log(muscleCategory3);

    //         var getExercise1 = function(muscleCategory1) {
    //             event.preventDefault();
    //             var exerciseWorkout = "https://wger.de/api/v2/exercise/?language=2&category="+muscleCategory1;

    //             let h= new Headers();
    //             h.append('Accept','application/json');
    //             h.append('Authorization','Token 63b5f033aef2364d1ad05528871fe89c53aa18ea');
    

    //             let req = new Request(exerciseWorkout, {
    //                 method: "GET",
    //                 headers: h
    // });
    // fetch(req).then(function(response){
    //     if(response.ok){
    //         response.json().then(function(data){
    //             console.log(data);
                
                
    //             for(i=0;i < 1; i++){
    //                 console.log(data.results[i].name);
                    
  
                     
    //                 // console.log(data.results[i].description);
    //             }
    //         });
    //     }
    // });
    //         }
            //getExercise1(); 


            // var getExercise2 = function() {
            //     event.preventDefault();
            // }

            // var getExercise3 = function() {
            //     event.preventDefault();
            // }
            


        } else if (muscleSelectGroup =='Lower Body') {
            //console.log("WORKING: Target muscle group: " + muscleSelectGroup);
        } else {
            console.log("MAC ICE");
        }
    
    

    // for (i = 0; i < muscleGroup.length; i++) {
    //     if (muscleGroup[i].checked == 'Upper Body') {
    //         console.log('MAC ICE '+ muscleGroup[i].value);
    //         var muscleGroup1 = ["10","8","12","11","13"] ;
    //         console.log('UB ' + muscleGroup1);
          
    //        // var workoutType  = muscleGroup[i].value;
          
    //     } else if (muscleGroup[i].checked == 'Lower Body') {
    //         console.log('MAC ICE2 '+ muscleGroup[i].value);
    //         var muscleGroup2 = ["14","9"] ;
    //         console.log('LB ' + muscleGroup2);
    //     }
    //     else {
    //             console.log('MAC ICE3 '+ muscleGroup[i].value);
    //             console.log(muscleGroup[i].value);
    //             var muscleGroup3 = ["14","9","10","8","12","11","13"] ;
    //             console.log('ALL ' + muscleGroup3);
    //         }   
    // }
    // if ( muscleGroup === 'Upper Body') {
    //     console.log(muscleGroup.value);
    //     var muscleGroup1 = ["10","8","12","11","13"] ;
    //     console.log(muscleGroup1);
        
    //     //console.log("");
    // } else if (muscleGroup === 'Lower Body') {
    //     console.log(muscleGroup.value);
    //     var muscleGroup1 = ["14","9"] ;
    //     console.log(muscleGroup1);
    // } else {
    //     console.log(muscleGroup.value);
    //     var muscleGroup1 = ["14","9","10","8","12","11","13"] ;
    //     console.log(muscleGroup1);
    // }   
}



// var getExercise1 = function() {
    
//     event.preventDefault();
    
    
    
//     var exerciseWorkout = "https://wger.de/api/v2/exercise/?language=2&category=";

//     let h= new Headers();
//     h.append('Accept','application/json');
//     h.append('Authorization','Token 63b5f033aef2364d1ad05528871fe89c53aa18ea');
    

//     let req = new Request(exerciseWorkout, {
//         method: "GET",
//         headers: h

//     });
//     fetch(req).then(function(response){
//         if(response.ok){
//             response.json().then(function(data){
//                 console.log(data);
                
                
//                 for(i=0;i < 1; i++){
//                     console.log(data.results[i].name);
                    
//                     //var responseContainerEl = document.querySelector('#workoutset-one');
//                     // Create an '<h5>' element
//                     //var workoutTitle = document.createElement('h5');
                    
//                     //workoutTitle.textContent = response.data.results.name[] 
//                     //workoutTitle.setAttribute('p', response.data.results.name);
//                     // Append the '<h5>' element to the page
//                     //responseContainerEl.appendChild(workoutTitle);
//                      console.log(data.results[i].name);
//                     // console.log(data.results[i].description);
//                 }
//             });
//         }
//     });
// };

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



//userForm.addEventListener("submit", getExercise1);
userForm.addEventListener("submit", userSubmittedData);
userForm.addEventListener("submit", getAllExercise);

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      direction: 'up'
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, options);
  });