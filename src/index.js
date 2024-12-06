import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as Survey from "survey-react";
import noUiSlider from 'nouislider';
import 'bootstrap';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, update } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0oHcnRMNo_92xxYWwLwmKIi9tp89Yz6g",
  authDomain: "herheart-5ca67.firebaseapp.com",
  projectId: "herheart-5ca67",
  storageBucket: "herheart-5ca67.appspot.com",
  messagingSenderId: "435629529947",
  appId: "1:435629529947:web:77da4219b313ff7b5b987e",
  measurementId: "G-6Z1Z3BMDQ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


function writeUserData(answers) {
    const db = getDatabase();
    // Get a key for a new Post.
    const entryKey = push(ref(db)).key;
    const updates = {};
    updates['users/' + entryKey] = answers;
    update(ref(db), updates);
  }



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
    // "triggers": [
    //     {
    //         "type": "complete"
    //         "expression": "{gender} != 'Female'"
    //     }
    // ],
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
                    "type": "radiogroup",
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
                    "type": "radiogroup",
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
                    "type": "radiogroup",
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
                    "type": "radiogroup",
                    "name": "fruits",
                    "title": "During a typical 7-Day period (a week), how often do you have one piece of fruits?",
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
                    "visibleIf": "{fruits}='Twice a day'",
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
                    "type": "radiogroup",
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
                    "type": "radiogroup",
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
                    "type": "radiogroup",
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
                    "type": "radiogroup",
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
                    "type": "radiogroup",
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
                    "imageLink": "./img/grains-high.png",
                    "imageWidth": "300px",
                    "imageHeight": "300px"
                },
                {
                    "type": "radiogroup",
                    "name": "grains-high",
                    "title": "During a typical 7-Day period (a week), how often do you have high fiber grains such as these?",
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
                    "imageLink": "./img/grains-low.png",
                    "imageWidth": "300px",
                    "imageHeight": "300px"
                },
                {
                    "type": "radiogroup",
                    "name": "grains-low",
                    "title": "During a typical 7-Day period (a week), how often do you have low fiber grains such as these?",
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
                    "visibleIf": "{age}>=21",
                    "imageWidth": "300px",
                    "imageHeight": "300px"
                },
                {
                    "type": "radiogroup",
                    "name": "alcohol",
                    "title": "If you do, how often do you drink one glass of alcohol? One glass = 4 ounces of wine, 12 ounces of beer",
                    "visibleIf": "{age}>=21",
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
                    "html": "<div style=' border-radius: 25px; padding: 20px; background-image: linear-gradient(0deg,  rgb(231, 206, 61),rgb(211, 159, 16));width:75%; margin:auto;'><center><p style='margin:auto;'>Your risk is <h3></h3>Compared to a healthy lifestyle</p></center></div>"
                }
                // ,{
                //     "type": "html",
                //     "name": "recommendations",
                //     "html": "<div style='display: flex; justify-content: space-around'><a href=''style='padding:13px 15px 13px 15px; background-color: rgba(47, 136, 236, 0.733); color: white; border-radius: 8px; font-size: medium;'>Read some recomendations</a></div>"
                // }
            ]
        },{
            "elements": [
                {
                    "type": "html",
                    "name": "good-foods",
                    "html": ""
                }
            ]
        },{
            "elements": [
                {
                    "type": "html",
                    "name": "bad-foods",
                    "html": ""
                }
            ]
        },{
            "elements": [
                {
                    "type": "html",
                    "name": "activities",
                    "html": ""
                }
            ]
        },{
            "elements": [
                {
                    "type": "html",
                    "name": "smokinghabits",
                    "html": "",
                    "visibleIf": "{smoke}!='Never smoke'",
                }
            ]
        },
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
    if (alcoholQuestion=="More than twice a day"){alcoholValue=0.01923*30-0.0004*30*30}
    else if (alcoholQuestion=="Twice a day"){alcoholValue=0.01923*20-0.0004*20*20}
    else if (alcoholQuestion=="Everyday"){alcoholValue=0.01923*10-0.0004*10*10}
    else if (alcoholQuestion=="Three to five times a week"){alcoholValue=0.01923*5-0.0004*5*5};
    // 
    var fruitQuestion = survey.getQuestionByName("fruits").value;
    var vegetableQuestion = survey.getQuestionByName("vegetables").value;
    var fruitVeggieValue = 0;
    var fruitVeggieText = "+ 0"; // The value to appear in the prototype tool
    if (fruitQuestion=="More than twice a day" || vegetableQuestion=="More than twice a day"){fruitVeggieValue=0.18283; fruitVeggieText = "+36";}
    else if (fruitQuestion=="Everyday" && vegetableQuestion == "Everyday"){fruitVeggieValue=0.18283; fruitVeggieText = "+36";};
    var nutQuestion = survey.getQuestionByName("nuts").value;
    var nutValue = 0;
    var nutText = "+ 0";
    if (nutQuestion=="Three to five times a week" || nutQuestion=="Everyday" || nutQuestion=="Once or twice a week"){nutValue=0.14522; nutText = "+29";}
    else if (nutQuestion=="More than twice a day" || nutQuestion=="Twice a day"){nutValue=0.24444; nutText = "+49";};
    
    var grainQuestion = survey.getQuestionByName("grains-high").value;
    var grainValue = 0;
    if (grainQuestion=="More than twice a day"){grainValue=0.03326*3*3}
    else if (grainQuestion=="Twice a day"){grainValue=0.03326*3*2}
    else if (grainQuestion=="Everyday"){grainValue=0.03326*3*1}
    else if (grainQuestion=="Three to five times a week"){grainValue=0.03326*3*0.5}
    
    var grainLowQuestion = survey.getQuestionByName("grains-low").value;
    var grainLowValue = 0;
    if (grainLowQuestion=="More than twice a day"){grainLowValue=0.03326*3}
    else if (grainLowQuestion=="Twice a day"){grainLowValue=0.03326*2}
    else if (grainLowQuestion=="Everyday"){grainLowValue=0.03326*1}
    else if (grainLowQuestion=="Three to five times a week"){grainLowValue=0.03326*0.5}
    
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
    var Diet = fruitVeggieValue+nutValue-sugarValue-meatValue+grainValue+grainLowValue;
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
    var risk = 0;
    if (genderQuestion == "Female"){
        W = 0.10820*ageQuestion+0.04676*BMI+smokeValue-alcoholValue-0.05113*(Diet*10)-0.02951*(hardSportValue+modSportValue);
        risk = (1-Math.pow(0.9660,Math.exp(W-6.57301)))*100
    } else {
        W = "We not doing boys yet";
    }

    var healthyPerson = (1-Math.pow(0.9660,Math.exp((-0.557385+BMI*0.04676+ageQuestion*0.1082)-6.57301)))*100;
    var relativeRisk = risk/healthyPerson;
    var summaryQuestion = survey.getQuestionByName("summary");
    var relativeRiskWord = "";
    var dietImagePath = "";
    var activityImagePath = "";
    var summaryColor = "";
    var summaryImage = "";
    // Add image for risks


    //
    if (relativeRisk <= 1.5) {
        relativeRiskWord = "Looking good!";
        summaryColor = "rgb(0, 178, 29),rgb(160, 241, 96))";
        summaryImage = "./img/healthy.gif";
    } else if (relativeRisk > 1.5 && relativeRisk < 4){
        relativeRiskWord = "Slightly elevated";
        summaryColor = "rgb(231, 206, 61),rgb(211, 159, 16))";
        summaryImage = "./img/unhealthy.gif";
    } else {
        relativeRiskWord = "Very High";
        summaryColor = "rgb(178, 32, 0),rgb(241, 96, 96))";
        summaryImage = "./img/vunhealthy.gif";
    }

    // Activity computation
    if (hardSportValue+modSportValue < 1.5){activityImagePath = "./img/bar_red.png";}
    else if (hardSportValue+modSportValue >= 1.5 && hardSportValue+modSportValue < 3.5){activityImagePath = "./img/bar_yellow.png";}
    else {activityImagePath = "./img/bar_green.png";}
    // Diet computation
    if (Diet*10 < 2.0){dietImagePath = "./img/bar_red.png";}
    else if (Diet*10 > 2.0 && Diet*10 < 4.5){dietImagePath = "./img/bar_yellow.png";}
    else {dietImagePath = "./img/bar_green.png";}

    var summaryQuestion = survey.getQuestionByName("summary");
    summaryQuestion.html = "<div><center><p><img src="+summaryImage+"></p></center><br><center><p style='margin:auto;'>Your risk is <h3>"+relativeRiskWord+"</h3><br></p></center></div>"+
    // "<div style=' border-radius: 25px; padding: 20px; background-image: linear-gradient(0deg,  "+summaryColor+";width:75%; margin:auto;'><center><p style='margin:auto;'>Your risk is <h3>"+relativeRiskWord+"</h3><br> Compared to a healthy lifestyle</p></center></div>"+
    // We'll put the images here of the Diet (2.5 points is the average)
    "<br><center><p> This is your diet score: <img src="+dietImagePath+"></p></center>"+
    // We'll put the images here for the Activity (1.5 hrs is the average)
    "<br><center><p> This is your activity score: <img src="+activityImagePath+"></p></center>";

    // Good foods replacement
    // Add logic for what image to show
    var imageSequence = ["./img/circle_above.png","./img/circle_av.png","./img/circle_below.png","./img/circle_mbelow.png","./img/circle_mmbelow.png"];
    var sequenceVariable = 0;
    if ((((fruitVeggieValue+nutValue+grainValue+grainLowValue)*1000)/5).toFixed(0) == 0){sequenceVariable=2}else{sequenceVariable = 1}
    var goodFoodsQuestion = survey.getQuestionByName("good-foods");
    goodFoodsQuestion.html = "<h3>Let's look at your diet :</h3> <ul> <li><div> <p>Fruits & Veggies: <span style='color: green;  font-weight: bold;' class='text-orientation-right-css'> +"+((fruitVeggieValue*1000)/5).toFixed(0)+"</span></p></div></li>"+
    /*<p> (You need a least two servings of fruit or veggies a day to help your heart)</p>*/
    "<li><div><p>Nuts: <span style='color:green;  font-weight: bold;' class='text-orientation-right-css'> + "+((nutValue*1000)/5).toFixed(0)+"</span></p></div></li>"+
    /*<p> (You eat nuts <b>"+nutQuestion+"</b>, you need a least one serving of nuts a day)</p>*/
    "<li><div><p>High fiber grains: <span style='color:green; font-weight: bold;' class='text-orientation-right-css'> + "+((grainValue*1000)/5).toFixed(0)+"</span></p></div></li>"+
    /*<p>  (You eat high fiber grains <b>"+grainQuestion+"</b>, you need a least one serving every couple days)</p></div></li>"+*/
    "<li><div><p>Low fiber grains: <span style='color:green; font-weight: bold;' class='text-orientation-right-css'> + "+((grainLowValue*1000)/5).toFixed(0)+"</span></p></div></li>"+
    "<br><center><p><img src="+imageSequence[sequenceVariable]+"></p></center>";/*<p>  (You eat low fiber grains <b>"+grainLowQuestion+"</b>, you need a least one serving every day)</p></div></li>";*/
  
    // Good foods replacement
    if ((((sugarValue+meatValue)*1000)/5).toFixed(0) != 0){sequenceVariable+=1}
    var badFoodsQuestion = survey.getQuestionByName("bad-foods");
    badFoodsQuestion.html = "<h3>Let's look at your diet :</h3> <ul> <li><div> <p>Sugary drinks: <span style='color: red;  font-weight: bold;' class='text-orientation-right-css'> - "+((sugarValue*1000)/5).toFixed(0)+"</span></p><p>(You drink soda <b>"+sugarQuestion+"</b>, the max should be once or twice a week)</p></div></li>"+
                            "<li><div><p>Meat: <span style='color:red;  font-weight: bold;' class='text-orientation-right-css'> - "+((meatValue*1000)/5).toFixed(0)+"</span></p><p>(You eat meat <b>"+meatQuestion+"</b>, the max should be once or twice a week)</p></div></li>"+
                            "<br><center><p><img src="+imageSequence[sequenceVariable]+"></p></center>";
 
    // Actitives replacement
    if (((modSportValue+hardSportValue)*6).toFixed(0) != 0){sequenceVariable-=1}else{sequenceVariable+=1}
    var activitiesQuestion = survey.getQuestionByName("activities");
    activitiesQuestion.html = "<h3>Let's look at your exercise :</h3> <ul> <li><div> <p>Activities: <span style='color: green;  font-weight: bold;' class='text-orientation-right-css'> + "+((modSportValue+hardSportValue)*6).toFixed(0)+" </span></p></div></li>"+
    "<br><center><p><img src="+imageSequence[sequenceVariable]+"></p></center>";
    /*<p>(You do <b>"+(modSportValue+hardSportValue)+"</b> hours of exercise a week you should be doing a minimum 1.5 hours per week)</p>*/
    
    // Smoking replacement
    if (smokeQuestion == "Used to smoke"){sequenceVariable+=1}else if(smokeQuestion == "Currently smoke"){sequenceVariable+=2}
    var smokingQuestion = survey.getQuestionByName("smokinghabits");
    smokingQuestion.html = "<h3>Let's look at your smoking habits :</h3> <ul> <li><div> <p> You "+smokeQuestion+": <span style='color: red;  font-weight: bold;' class='text-orientation-right-css'> - "+((smokeValue*36)/0.18283).toFixed(0)+"</span></p></div></li>"+
                            "<p> Any smoking significantly affects your heart health, it's -30 if you used to smoke and -177 if you currently do!</p>"+
                            "<br><center><p><img src="+imageSequence[sequenceVariable]+"></p></center>";
});

survey
    .onComplete
    .add(function (sender) {
        document
            .querySelector('#surveyResult')
            .textContent = "You are done!";// <br>Result JSON:\n" + JSON.stringify(sender.data, null, 3);
        writeUserData(sender.data);
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