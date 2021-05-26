## Gender stereotypes, student anxiety, and gamification


This repository contains the code for the experiment described in the article, "[Does gender stereotype threat in gamified educational environments cause anxiety? An experimental study](https://www.sciencedirect.com/science/article/abs/pii/S0360131517301914)."

### How to cite
* Albuquerque, J., Bittencourt, I. I., Coelho, J. A., & Silva, A. P. (2017). Does gender stereotype threat in gamified educational environments cause anxiety? An experimental study. Computers & Education, 115, 161-170.
* Bibtex:
```
@article{albuquerque2017does,
	title = "Does gender stereotype threat in gamified educational environments cause anxiety? An experimental study",
	journal = "Computers & Education",
	volume = "115",
	pages = "161 - 170",
	year = "2017",
	issn = "0360-1315",
	doi = "https://doi.org/10.1016/j.compedu.2017.08.005",
	url = "http://www.sciencedirect.com/science/article/pii/S0360131517301914",
	author = "Josmario Albuquerque and Ig I. Bittencourt and Jorge A.P.M. Coelho and Alan P. Silva",
	keywords = "Gender studies, Anxiety, Stereotype threat, Gamification in education",
}
```

## Overview
This project comprises an experimental environment to study the impact of gender stereotype threat on student anxiety. In summary, the application has the following workflow:
1. Consent form
2. Pre-test (anxiety assessment)
3. Gamified activity. There are three different design flavours for this activity: male-stereotyped, female-stereotyped, and neutral. Upon finishing the pre-test, one of the three flavours is randomly selected for the current participant. Please note the activity content does not change across versions (only UI elements like colours and images).
4. Post-test (anxiety assessment, same as the pre-test).


## Getting started

In order to setup this project for a real use in your research, you will need to follow two basic steps: (1) adapt the project for your research needs; and (2) actual run the project. If you just want to see how it looks like, you can go straight to step 2 and run the project locally.  

### Step 1: Adapting the project for your needs

* In general, most textual content can be changed by editing the '*.html' files located in:
	* `webapp/views/`
* For server configurations, refer to:
	* `.env`
	* The server listens to `localhost` at port `8080` by default
* To change the endpoint URL to where the responses are submitted, refer to:
	* `config.json`


### Step 3: Running the project
A simple way to run this project is:

1. Make sure [Node.js](https://nodejs.org/) is installed
2. Go to the project directory
2. Install the dependencies:
```
npm install
```
3. Run the project:
```
npm start
```

[Click here](https://drive.google.com/file/d/1YnbAe3Cyg9QkmeYZGYLtSXDwopX4VXaH/view?usp=sharing) to see a tutorial.

## Guide

### Changing the questions
Pre-test and post-test questions can be changed at "config.json". The questions can be either plain strings or JSON objects with two properties: "string" (which is the question itself) and "invert" (a boolean).
```json
"questions": [
	"How much do you hate apples?",
	{
		"string": "How much do you love candy?",
		"invert": true
	}
]
```

### Changing themes
Themes can be changed in the "themes" field of "config.json". See AngularJS's [$mdThemingProvider](https://material.angularjs.org/1.1.4/api/service/$mdThemingProvider).

You can create custom palettes by modifying the "customPalettes" field. It has the same properties as AngularJS's ["definePalette"](https://material.angularjs.org/latest/Theming/03_configuring_a_theme#defining-custom-palettes). You can also [extend existing palettes](https://material.angularjs.org/latest/Theming/03_configuring_a_theme#extending-existing-palettes) by adding a field called "extends".

### Frameworks
This project was made using the following frameworks:

* AngularJS
	* [Documentation](https://material.angularjs.org/latest/)
* Express.js
	* [Documentation](https://expressjs.com/en/4x/api.html)
