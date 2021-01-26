## Should be happening daily
Stand up meetings
1. What was accomplished?
2. What are your goals?
3. Are there any obstacles to acheiving your goals?

CorEnergy

Malcom: FREE(5 or 6-12PM)
Abigail: FREE(5 or 6-12PM)
Justin: FREE(5 or 6-12PM)
Alexis: ????


## USER STORIES

AS A: Out of shape person
I WANT: a workout plan
SO THAT I CAN: be dedicated

AS A: Fitness person
I WANT: A meal plan
SO THAT I CAN: so that I can gain muscle

AS A: triathlon
I WANT: a workout routine
SO THAT I CAN: train my endurance

AS A: bodybuilder
I WANT: a meal plan
SO THAT I CAN: gain mass


## ACCEPTANCE CRITERIA


## IDEAS
1. WORKOUT SITE
	a. User Inputs
		1. Amount of time allocated to workout
		2. Targeted muscle groups
		3. Weight (Storage variable - Subject to change)
		4. Height
		5. Goals (Storage variable - Subject to change)
			a. Lean
			b. Mass
			c. Endurance
		6. Meal plan? Maybe to ambitious? (Storage variable - Subject to change)


## Requirements
1. Must use at least two server-side APIs.

	Food: https://github.com/public-apis/public-apis#food--drink
		Extact: https://developer.edamam.com/edamam-docs-nutrition-api

	Fitness: https://github.com/public-apis/public-apis#sports--fitness
		Extact: https://wger.de/en/software/api

	
2. Must use a CSS framework other than Bootstrap.
	a. Possible options: 
		Bulma URL: https://bulma.io/documentation/
		Materialize URL: https://materializecss.com/ (** LIKE THIS ONE MORE **)
	
3. Must use client-side storage for persistent data.
	a. Store weights and goals, update this info freq.

4. Must have a polished, mobile-first UI.
	a. Handled as we go

5. Must meet good quality coding standard (indentation, scoping, naming, etc.)
	a. Get formatter and check before deploying

6. Does NOT use alerts, confirms, or prompts (look into 'modals').
	a.https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal

7. Must be deployed to GitHub pages.
	a. easy

8. Must be interactive (i.e., accept and respond to user input).
	a. easy


## Presentation Requirements | Prezi 10 mins
1. Elevator pitch: 1 min description of the application.
2. Concept: what is your user story? What was your motivation for development?
3. Process: What were the technologies used? How weere tasks and roles broken down and assigned?
4. What challenges did you encounter? What were your successes?
5. Demo: Show your stuff
6. Directions for future development
7. Link to the deployed application and the GitHub Repo

## Grading
Concept
Design
Functionality
Collaboration
Presentation

## Suggestions
Allow cross-origin resource sharing (CORS)
Require simple or no authentication
Return a JSON response
Are well documented
For a list of free APIs: https://github.com/public-apis/public-apis

https://developer.edamam.com/edamam-docs-nutrition-api


curl -d @recipe.json -H "Content-Type: application/json" "https://api.edamam.com/api/nutrition-details?app_id=$b2f0d879&app_key=$
0a1818257115e160cf6b36653e441db7"