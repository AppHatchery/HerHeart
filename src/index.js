import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as Survey from "survey-react";
import noUiSlider from 'nouislider';
import 'bootstrap';


Survey
    .StylesManager
    .applyTheme("modern");

// function rowsWithValue(params) {
//     if (!params && params.length < 2) 
//         return false;
//     var matrixValue = params[0];
//     var value = params[1];
//     var rowCount = 0;
//     for (var key in matrixValue) {
//         if (matrixValue[key] == value) 
//             rowCount++;
//         }
//     return rowCount;
// }
// Survey
//     .FunctionFactory
//     .Instance
//     .register("rowsWithValue", rowsWithValue);

var json = {
    "title": "HerHeart",
    "showProgressBar": "top",
    "triggers": [
        {
            "type": "complete",
            "expression": "{gender} != 'Female'"
        }
    ],
    "pages": [
        {
            "elements": [
                {
                    "type": "html",
                    "name": "Intro",
                    "html": "<h3> Welcome to the HerHeart, a new version of the Healthy Heart Score for teenage girls</h3><br><p>Not smoking, a healthy weight, a nutritious diet, and daily exercise play important roles in the prevention of cardiovascular disease. In fact, an overall healthy lifestyle may prevent more than 75% of deaths due to cardiovascular disease. Take this quiz to evaluate how your current lifestyle habits affect your cardiovascular health, and discover simple steps you can take to incorporate a Heart Healthy lifestyle into everyday living. Knowledge is power. Take the first step towards protecting your heart and your health!</p>"+ 
                    "<br><p><b>Press Next to begin this quiz.</b></p>"
                }
            ]
        },{
            "elements": [
                {
                    "name": "age",
                    "type": "text",
                    "inputType": "number",
                    "title": "Let's start with your age. How old are you?",
                    "placeholder": "15",
                    "isRequired": true
                }
            ]
        },{
            "elements": [
                {
                    "type": "dropdown",
                    "name": "gender",
                    "title": "What is your gender?",
                    "isRequired": true,
                    "colCount": 0,
                    "hasNone": false,
                    "choices": [
                        "Female",
                        "Male",
                        "Transgender female",
                        "Transgender male",
                        "Non-gender binary"
                    ]
                }
            ]
        },{ // This question needs logic for people that accidentally put too much or too little
            "elements": [
                {
                    "name": "weight",
                    "type": "text",
                    "inputType": "number",
                    "placeholder": "130",
                    "title": "How much do you weigh? (in pounds)",
                    "isRequired": true
                }
            ]
        },{
            "elements": [
                {
                    "type": "html",
                    "name": "Height",
                    "html": "<p><b>How tall are you?</b></p>"
                },
                {
                    "name": "height-feet",
                    "type": "text",
                    "inputType": "number",
                    "placeholder": "4",
                    "title": "Feet",
                    "isRequired": true
                },
                {
                    "name": "height-inches",
                    "type": "text",
                    "inputType": "number",
                    "placeholder": "7",
                    "title": "Inches",
                    "isRequired": true
                }
            ]
        },{
            "elements": [
                {
                    "type": "image",
                    "name": "first_page_image",
                    "imageLink": "./img/vigorous.png",
                    "imageWidth": "300px",
                    "imageHeight": "300px"
                },
                {
                    "type": "dropdown",
                    "name": "activity-hard",
                    "title": "During a typical 7-Day period (a week), how much time do you spend on ANY of the following kinds of physical activity where you sweat/breathe hard/your heart beats rapidly?",
                    "isRequired": true,
                    "colCount": 0,
                    "hasNone": false,
                    "choices": [
                        "< 15 mins",
                        "15 - 30 mins",
                        "30 - 60 mins",
                        "1 - 3 hrs",
                        "3 - 6 hrs",
                        "6 - 10 hrs",
                        "10+ hrs"
                    ]
                }
            ]
        },{
            "elements": [
                {
                    "type": "image",
                    "name": "first_page_image",
                    "imageLink": "./img/moderate.png",
                    "imageWidth": "300px",
                    "imageHeight": "300px"
                },
                {
                    "type": "dropdown",
                    "name": "activity-mod",
                    "title": "During a typical 7-Day period (a week), how much time do you spend on ANY of the following kinds of physical activity where you are exerting some effort?",
                    "isRequired": true,
                    "colCount": 0,
                    "hasNone": false,
                    "choices": [
                        "< 15 mins",
                        "15 - 30 mins",
                        "30 - 60 mins",
                        "1 - 3 hrs",
                        "3 - 6 hrs",
                        "6 - 10 hrs",
                        "10+ hrs"
                    ]
                }
            ]
        },{
            "elements": [
                {
                    "type": "image",
                    "name": "second_page_image",
                    "imageLink": "./img/fruits.png",
                    "imageWidth": "300px",
                    "imageHeight": "300px"
                },
                {
                    "type": "dropdown",
                    "name": "fruits",
                    "title": "During a typical 7-Day period (a week), how often do you have fruits?",
                    "isRequired": true,
                    "colCount": 0,
                    "hasNone": false,
                    "choices": [
                        "Less than once a week",
                        "Once or twice a week",
                        "Three to five times a week",
                        "Everyday",
                        "Twice a day",
                        "More than twice a day",
                    ]
                }
            ]
        },{
            "elements": [
                {
                    "type": "image",
                    "name": "fruit_yes",
                    "imageLink": "./img/yesfruit.png",
                    "imageWidth": "300px",
                    "imageHeight": "300px",
                    "visibleIf": "{fruits}='Everyday'",
                },
                {
                    "type": "image",
                    "name": "fruit_no",
                    "imageLink": "./img/nofruit.png",
                    "imageWidth": "300px",
                    "imageHeight": "300px",
                    "visibleIf": "{fruits}='Less than once a week'",
                },
            ]
        },{
            "elements": [
                {
                    "type": "image",
                    "name": "second_page_image",
                    "imageLink": "./img/vegetables.png",
                    "imageWidth": "300px",
                    "imageHeight": "300px"
                },
                {
                    "type": "dropdown",
                    "name": "vegetables",
                    "title": "During a typical 7-Day period (a week), how often do you have vegetables?",
                    "isRequired": true,
                    "colCount": 0,
                    "hasNone": false,
                    "choices": [
                        "Less than once a week",
                        "Once or twice a week",
                        "Three to five times a week",
                        "Everyday",
                        "Twice a day",
                        "More than twice a day",
                    ]
                }
            ]
        },{
            "elements": [
                {
                    "type": "image",
                    "name": "second_page_image",
                    "imageLink": "./img/nuts.png",
                    "imageWidth": "300px",
                    "imageHeight": "300px"
                },
                {
                    "type": "dropdown",
                    "name": "nuts",
                    "title": "During a typical 7-Day period (a week), how often do you eat a handful of nuts?",
                    "isRequired": true,
                    "colCount": 0,
                    "hasNone": false,
                    "choices": [
                        "Never",
                        "Less than once a week",
                        "Once or twice a week",
                        "Three to five times a week",
                        "Everyday",
                        "Twice a day",
                        "More than twice a day",
                    ]
                }
            ]
        },{
            "elements": [
                {
                    "type": "image",
                    "name": "second_page_image",
                    "imageLink": "./img/soda.png",
                    "imageWidth": "300px",
                    "imageHeight": "300px"
                },
                {
                    "type": "dropdown",
                    "name": "sugar",
                    "title": "During a typical 7-Day period (a week), how often do you have 1 can/bottle of soda?",
                    "isRequired": true,
                    "colCount": 0,
                    "hasNone": false,
                    "choices": [
                        "Less than once a week",
                        "Once or twice a week",
                        "Three to five times a week",
                        "Everyday",
                        "Twice a day",
                        "More than twice a day",
                    ]
                }
            ]
        },{
            "elements": [
                {
                    "type": "image",
                    "name": "happy_image",
                    "imageLink": "./img/happyfoods.png",
                    "imageWidth": "300px",
                    "imageHeight": "300px"
                },
                {
                    "type": "dropdown",
                    "name": "happy food",
                    "title": "During a typical 7-Day period (a week), how often do you eat any of these foods?",
                    "isRequired": true,
                    "colCount": 0,
                    "hasNone": false,
                    "choices": [
                        "Less than once a week",
                        "Once or twice a week",
                        "Three to five times a week",
                        "Everyday",
                        "Twice a day",
                        "More than twice a day",
                    ]
                }
            ]
        },{
            "elements": [
                {
                    "type": "image",
                    "name": "meat_image",
                    "imageLink": "./img/meats.png",
                    "imageWidth": "300px",
                    "imageHeight": "300px"
                },
                {
                    "type": "dropdown",
                    "name": "meat",
                    "title": "During a typical 7-Day period (a week), how often do you have red or processed meat?",
                    "isRequired": true,
                    "colCount": 0,
                    "hasNone": false,
                    "choices": [
                        "Never",
                        "Less than once a week",
                        "Once or twice a week",
                        "Three to five times a week",
                        "Everyday",
                        "Twice a day",
                        "More than twice a day",
                    ]
                }
            ]
        },{
            "elements": [
                {
                    "type": "image",
                    "name": "grains_image",
                    "imageLink": "./img/bread.png",
                    "imageWidth": "300px",
                    "imageHeight": "300px"
                },
                {
                    "type": "dropdown",
                    "name": "grains",
                    "title": "During a typical 7-Day period (a week), how often do you have grains?",
                    "isRequired": true,
                    "colCount": 0,
                    "hasNone": false,
                    "choices": [
                        "Never",
                        "Less than once a week",
                        "Once or twice a week",
                        "Three to five times a week",
                        "Everyday",
                        "Twice a day",
                        "More than twice a day",
                    ]
                }
            ]
        },{
            "elements": [
                {
                    "type": "image",
                    "name": "alcohol_image",
                    "imageLink": "./img/alcohol.png",
                    "imageWidth": "300px",
                    "imageHeight": "300px"
                },
                {
                    "type": "dropdown",
                    "name": "alcohol",
                    "title": "If you do, how often do you drink one glass of alcohol? One glass = 4 ounces of wine, 12 ounces of beer",
                    "isRequired": true,
                    "colCount": 0,
                    "hasNone": false,
                    "choices": [
                        "Never",
                        "Less than once a week",
                        "Once or twice a week",
                        "Three to five times a week",
                        "Everyday",
                        "Twice a day",
                        "More than twice a day",
                    ]
                }
            ]
        },{
            "elements": [
                {
                    "type": "image",
                    "name": "smoker_image",
                    "imageLink": "./img/smoke.png",
                    "imageWidth": "300px",
                    "imageHeight": "300px"
                },
                {
                    "type": "dropdown",
                    "name": "smoke",
                    "title": "Do you smoke cigarrettes?",
                    "isRequired": true,
                    "colCount": 0,
                    "hasNone": false,
                    "choices": [
                        "Never smoked",
                        "Used to smoke",
                        "Currently smoke"
                    ]
                }
            ]
        },{
            "elements": [
                {
                    "type": "html",
                    "name": "summary",
                    "html": "<h3> Tis your score yo!</h3>"
                }
            ]
        }
    ]
};

var survey = new Survey.Model(json);

survey.onValueChanged.add(function(survey, options){
    var ageQuestion = survey.getQuestionByName("age").value;
    var genderQuestion = survey.getQuestionByName("gender").value;
    //
    var weightQuestion = survey.getQuestionByName("weight").value;
    var heightFeetQuestion = survey.getQuestionByName("height-feet").value;
    var heightInchesQuestion = survey.getQuestionByName("height-inches").value;
    var BMI = (weightQuestion/(heightFeetQuestion*12+heightInchesQuestion)/(heightFeetQuestion*12+heightInchesQuestion))*703;
    //
    var smokeQuestion = survey.getQuestionByName("smoke").value; 
    var smokeValue = 0;
    if (smokeQuestion == "Used to smoke"){smokeValue = 0.15285}
    else if(smokeQuestion=="Currently smoke"){smokeValue=0.90138};
    //
    var alcoholQuestion = survey.getQuestionByName("alcohol").value;
    var alcoholValue = 0;
    if (alcoholQuestion=="More than twice a day"){alcoholValue=0.01923*3-0.0004*3*3}
    else if (alcoholQuestion=="Twice a day"){alcoholValue=0.01923*2-0.0004*2*2}
    else if (alcoholQuestion=="Everyday"){alcoholValue=0.01923*1-0.0004}
    else if (alcoholQuestion=="Three to five times a week"){alcoholValue=0.01923*0.5-0.0004*0.5*0.5};
    // 
    var fruitQuestion = survey.getQuestionByName("fruits").value;
    var vegetableQuestion = survey.getQuestionByName("vegetables").value;
    var fruitVeggieValue = 0;
    if (fruitQuestion=="More than twice a day" || vegetableQuestion=="More than twice a day"){fruitVeggieValue=0.18283};
    var nutQuestion = survey.getQuestionByName("nuts").value;
    var nutValue = 0;

    var grainQuestion = survey.getQuestionByName("grains").value;
    var grainValue = 0;
    if (grainQuestion=="More than twice a day"){grainValue=0.03326*3}
    else if (grainQuestion=="Twice a day"){grainValue=0.03326*2}
    else if (grainQuestion=="Everyday"){grainValue=0.03326*1}
    else if (grainQuestion=="Three to five times a week"){grainValue=0.03326*0.5}

    if (nutQuestion=="Three to five times a week" || nutQuestion=="Everyday" || nutQuestion=="Once or twice a week"){nutValue=0.14522}
    else if (nutQuestion=="More than twice a day" || nutQuestion=="Twice a day"){nutValue=0.24444};
    
    var sugarQuestion = survey.getQuestionByName("sugar").value;
    var sugarValue = 0;
    if (sugarQuestion=="More than twice a day"){sugarValue=0.14631*3}
    else if (sugarQuestion=="Twice a day"){sugarValue=0.14631*2}
    else if (sugarQuestion=="Everyday"){sugarValue=0.14631*1}
    else if (sugarQuestion=="Three to five times a week"){sugarValue=0.14631*0.5}
    
    var meatQuestion = survey.getQuestionByName("meat").value;
    var meatValue = 0;
    if (meatQuestion=="More than twice a day"){meatValue=0.15624*3}
    else if (meatQuestion=="Twice a day"){meatValue=0.15624*2}
    else if (meatQuestion=="Everyday"){meatValue=0.15624*1}
    else if (meatQuestion=="Three to five times a week"){meatValue=0.15624*0.5}
    var Diet = fruitVeggieValue+nutValue-sugarValue-meatValue+grainValue;
    //
    var hardSportQuestion = survey.getQuestionByName("activity-hard").value;
    var hardSportValue = 0;
    if(hardSportQuestion=="< 15 mins"){hardSportValue=0.25}
    else if(hardSportQuestion=="15 - 30 mins"){hardSportValue=0.5}
    else if(hardSportQuestion=="30 - 60 mins"){hardSportValue=1}
    else if(hardSportQuestion=="1 - 3 hrs"){hardSportValue=2}
    else if(hardSportQuestion=="3 - 6 hrs"){hardSportValue=4.5}
    else if(hardSportQuestion=="6 - 10 hrs"){hardSportValue=8}
    else if(hardSportQuestion=="10+ hrs"){hardSportValue=10}
    var modSportQuestion = survey.getQuestionByName("activity-mod").value;
    var modSportValue = 0;
    if(modSportQuestion=="< 15 mins"){modSportValue=0.25}
    else if(modSportQuestion=="15 - 30 mins"){modSportValue=0.5}
    else if(modSportQuestion=="30 - 60 mins"){modSportValue=1}
    else if(modSportQuestion=="1 - 3 hrs"){modSportValue=2}
    else if(modSportQuestion=="3 - 6 hrs"){modSportValue=4.5}
    else if(modSportQuestion=="6 - 10 hrs"){modSportValue=8}
    else if(modSportQuestion=="10+ hrs"){modSportValue=10}
    //
    var W = 0;
    console.log("This is the BMI",BMI);
    if (genderQuestion == "Female"){
        W = 0.102820*ageQuestion+0.04676*BMI+smokeValue-alcoholValue-0.05113*(Diet*10)-0.02951*(hardSportValue+modSportValue);
    } else {
        W = "We not doing boys yet";
    }
    var summaryQuestion = survey.getQuestionByName("summary");
    summaryQuestion.html = "<h3>This is your cardiac risk: "+W+"</h3>";

    // var knownChoices = options.question.choices;
    // var choices = [];
    // for(var i = 0; i < knownChoices.length; i ++) {
    //   var item = knownChoices[i];
    //   //the item is not selected
    //   if(options.value.indexOf(item.value) < 0) {
    //     choices.push(item);
    //   }
    // }
    // var learnQuestion = survey.getQuestionByName("learn");
    // learnQuestion.choices = choices;
    // learnQuestion.visible = choices.length > 0;
  });

survey
    .onComplete
    .add(function (sender) {
        document
            .querySelector('#surveyResult')
            .textContent = "Result JSON:\n" + JSON.stringify(sender.data, null, 3);
    });

ReactDOM.render(<Survey.Survey model={survey}/>, document.getElementById("surveyElement"));





// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();