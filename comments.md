# Code Review I

## Workflow
```	- README
		- Name of project/description
		- Instructions for running project locally
		- Link to deployed app
	- Tickets
		- General user stories
			- Break those into specific tasks that take and estimated 15mins - 2hrs
	- Semantic Commit Message
		- Type o' commit (Fix, Feature, Test, Style, etc)
		- Subject of committed code
		- Present-tense description of what commit does
		- EG) (FEATURE) API, Routes for getting individual and all users
```
## Models
```
	- Nice use of Sequelize.DECIMAL 95% of the time
	- add a validator to Image URLS
	- Nice job getting rid of Sequlize.ARRAY
	- Maybe cart/orders can be refactored
	- Add validators for order properties

```

## Routes
```
	- Great job using Eager Loading!
	- Consider using router.params for more eager loading u
	fun
	- Use conventional HTTP Stati? Statuses? Status?
		-  200 Get, 201 for PUT/POST, 204 for DELETE
```

## Tests
```
	- Try TDD at least once
	- Add tests for HTTP stuff
	- Add tests for model validators
```





