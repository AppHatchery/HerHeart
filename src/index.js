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
        },{
            "elements": [
                {
                    "name": "weight",
                    "type": "text",
                    "inputType": "number",
                    "placeholder": "130",
                    "title": "How much do you weigh?",
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
                    "name": "activity",
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
                    "name": "activity",
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
                    "title": "During a typical 7-Day period (a week), how often do you have nuts?",
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
                    "name": "sugarydrinks",
                    "title": "During a typical 7-Day period (a week), how often do you have sugary drinks?",
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
                    "imageLink": "./img/meat.png",
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
                    "imageLink": "./img/grains.png",
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
                    "imageLink": "./img/smoker.png",
                    "imageWidth": "300px",
                    "imageHeight": "300px"
                },
                {
                    "type": "dropdown",
                    "name": "grains",
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
        }
        // ,{
        //     "elements": [
        //         {
        //             "type": "html",
        //             "name": "End",
        //             "html": "<h3> Moderate Risk of CVD",
        //             "visibleIf": "rowsWithValue({activity}, 'disagree') >= 3"
        //         }, {
        //             "type": "comment",
        //             "name": "approvedComment",
        //             "title": "Thank you for appreciating our product. Could provide us with some comments to make it event better?",
        //             "visibleIf": "rowsWithValue({quality}, 'agree') >= 3"
        //         }
        //     ]
        // }
    ]
};

var survey = new Survey.Model(json);

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