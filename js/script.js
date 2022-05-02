Survey
    .Serializer
    .addProperty("page", "animated:text");

Survey
    .Serializer
    .addProperty("page", "popupdescription:text");

Survey
    .Serializer
    .addProperty("page", "pos:number");

let newAnimation;
let oldAnimation;
// Disable for testing
const animationValues = new Array(9);
let animationValuesHealthy = new Array(9);
const goodFeedbackResponse = ["empty", "Yea! That's the exercise you need every week!", "Yaaa fruits and veggies make your heart healthy!", "Yea nuts are awesome!! One of the best things you can do to reduce risk of cardiac disease", "", "", "Keep 'em grains coming!", "This is great! See how much NOT smoking has helped your score, smoking is a HUGE factor in your heart health"];
const mediumFeedbackResponse = ["empty", "", "", "Nuts are a great foods! They impact your risk of heart health so much, even more than fruit and veggies!", "", "", "", "As you can probably guess, smoking is not too good for your heart, but because you stopped it means your heart is healing!"];
const badFeedbackResponse = ["empty", "", "", "Nuts are some of the best foods you can eat to reduce your risk of cardiac health, and there's so much variety!", "Eehhh that much soda is not good for your heart!", "Uuuhh a lot of red meat! Too much meat is actually bad for your heart...", "", "", "Smoking any nicotine is one of the biggest factors in reducing your risk of cardiac disease! You know that 60% of teenagers your age don't smoke, if your group of friends smokes you could try to use non-nicotine products for example!"];
const animationValuesTitles = ["empty", "Physical activity", "Fruits & Veggies", "Nuts", "Soda", "Meat", "Grains"];

let animationValuesMinusLastValue = []
let animationValuesSort = [];
let animationHealthSort = [];
let cleanSortedValues = [];
let cleanSortedValuesHealthy = []
let valuesDict = {};
let sortedDict = [];
let categories = [];
let scoreData = [];
let healthyData = [];

let index = 0;

// Testing Graphs
// animationValues = [0, 10, 15, 36, 45, 59, 77, 60, 20];
// animationValuesHealthy = [0, 20, 20, 40, 20, 20, 20, 60, 20]; // Overall quantity amounts to 200 without the alcohol portion that needs to be considered separate
// animationValues = [0, 10, 15, 36, 45, 59, 77, 60, 20];
// animationValuesHealthy = [0, 20, 20, 40, 20, 20, 20, 60, 20]; // Overall quantity amounts to 200 without the alcohol portion that needs to be considered separate
rawHealthyValues = [0, 3.5, 2, 2, 0.25, 0.25, 4, 0];
// rawScoreValues = [0,1.5,1,1.5,0.5,0.8,2,0,0];
rawScoreValues = [];
// Static variables
let rawSport = 0;
let rawFruits = 0;
let rawNuts = 0;
let rawSoda = 0;
let rawGrains = 0;
let rawMeat = 0;
let rawSmoke = 0;
let rawAlcohol = 0;

let BMI = 0
let Diet = 0

// Generic variables
let generic_sport = ['img/generic_never.png','img/generic_15to30.png','img/generic_30to60.png','img/generic_1to3hr.png','img/generic_6to10hr.png','img/generic_10ormore.png'];

let generic_lessthan1 = 'img/generic_lessthan1.png';
let generic_1to2 = 'img/generic_1to2.png';
let generic_3to5a = 'img/generic_3to5a.png';
let generic_everyday = 'img/generic_everyday.png';
let generic_3to5b = 'img/generic_3to5b.png';
let generic_bad_1to2 = 'img/generic_bad_1to2.png';
let generic_bad_3to5 = 'img/generic_bad_3to5.png';
let generic_bad_everyday = 'img/generic_bad_everyday.png';
let generic_bad_twiceaday = 'img/generic_bad_twiceaday.png';
let generic_bad_lessthan1 = 'img/generic_bad_lessthan1.png';

// First Pages
let activity_ = ['img/activity_0.png','img/activity_1.png','img/activity_2.png','img/activity_3.png'];
let high_grains_ = ['img/high_grains_0.png','img/high_grains_1.png','img/high_grains_2.png','img/high_grains_3.png'];
let low_grains_ = ['img/low_grains_0.png','img/low_grains_1.png','img/low_grains_2.png','img/low_grains_3.png'];
let fruit_ = ['img/fruit_0.png','img/fruit_1.png','img/fruit_2.png','img/fruit_3.png'];
let veggies_ = ['img/veggies_0.png','img/veggies_1.png','img/veggies_2.png','img/veggies_3.png'];
let nuts_ = ['img/nuts_0.png','img/nuts_1.png','img/nuts_2.png','img/nuts_3.png'];
let processed_ = ['img/processed_0.png','img/processed_1.png','img/processed_2.png','img/processed_3.png'];
let redmeat_ = ['img/redmeat_0.png','img/redmeat_1.png','img/redmeat_2.png','img/redmeat_3.png'];
let soda_ = ['img/soda_0.png','img/soda_1.png','img/soda_2.png','img/soda_3.png'];
let smoke_ = ['img/smoke_never.png','img/smoke_usedto.png','img/smoke_yes.png'];

// Follow-up pages
let grains_high_a = ['img/generic_never.png','img/generic_lessthan1.png','img/generic_1to2.png','img/generic_3to5a.png','img/generic_everyday.png','img/grains_high_twice.png'];
let grains_low_a = ['img/grains_low_never.png','img/generic_lessthan1.png','img/generic_1to2.png','img/generic_3to5b.png','img/generic_everyday.png','img/grains_low_twice.png'];
let fruit_a = ['img/fruit_never.png','img/fruit_lessthan1.png','img/fruit_onceaday.png','img/fruit_twiceaday.png','img/fruit_3timesaday.png'];
let veggies_a = ['img/veggies_never.png','img/veggies_lessthan1.png','img/veggies_onceaday.png','img/veggies_twiceaday.png','img/veggies_threeaday.png'];
let nuts_a = ['img/nuts_never.png','img/nuts_lessthan1.png','img/nuts_onceaweek.png','img/nuts_twiceaweek.png','img/nuts_morethantwice.png'];
let processed_a = ['img/processed_never.png','img/generic_bad_lessthan1.png','img/generic_bad_1to2.png','img/generic_bad_3to5.png','img/generic_bad_everyday.png','img/generic_bad_twiceaday.png'];
let redmeat_a = ['img/redmeat_never.png','img/generic_bad_lessthan1.png','img/generic_bad_1to2.png','img/generic_bad_3to5.png','img/generic_bad_everyday.png','img/generic_bad_twiceaday.png'];
let soda_a = ['img/soda_never.png','img/generic_bad_lessthan1.png','img/soda_1to2.png','img/soda_3to5.png','img/generic_bad_everyday.png','img/generic_bad_twiceaday.png'];


const json = {
    "title": "HerHeart",
    "showProgressBar": "top",
    "goNextPageAutomatic": true,
    "requiredText": "",
    "completedHtml": "<h3 style='text-align:center'> Awesome! Thank you so much for taking the HerHeart Quiz, hope it helped you see the things you are doing great and a couple to improve upon!</h3>" +
        "<img alt='' style='margin-left:auto; margin-right:auto; display:block; width:70%;' src='svg/Heart.svg'><br>",
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
                    "html": "<h2 style='text-align:center'> Tell us what you eat every week and we'll tell you how healthy your heart is</h2>" +
                        "<img alt='' style='margin-left:auto; margin-right:auto; display:block; width:70%;' src='svg/Heart.svg'><br>" +
                        // "<p>Not smoking, a healthy weight, a nutritious diet, and daily exercise play important roles in the prevention of cardiovascular disease. In fact, an overall healthy lifestyle may prevent more than 75% of deaths due to cardiovascular disease. Take this quiz to evaluate how your current lifestyle habits affect your cardiovascular health, and discover simple steps you can take to incorporate a Heart Healthy lifestyle into everyday living. Knowledge is power. Take the first step towards protecting your heart and your health!</p>"+
                        "<br><p><b>Press Next to begin this quiz.</b></p>"
                },
                {
                    "name": "ID",
                    "type": "text",
                    "title": "Please enter your study ID:",
                    "placeHolder": "For example, 8",
                    "isRequired": true,
                    "autoComplete": "name"
                }
            ]
        }, 
        // Testing
        // {
        //     "elements": [
        //         {
        //             "type": "html",
        //             "html": "<div id='chart_good_diet_vertical' style='overflow: hidden !important;'></div>"
        //         }
        //     ]
        // },
        // {
        //     "elements": [
        //         {
        //             "type": "html",
        //             "html": "<div id='chart_bad_diet_vertical' style='overflow: hidden !important;'></div>"
        //         }
        //     ]
        // },
        // End Testing
        // Activity
        {
            "popupdescription": "P5",
            "pos": 1,
            "elements": [
                {
                    "type": "html",
                    "name": "test",
                    "html": "<div id='sketch-holder'></div>" +
                        "<h3><center> Let's start by discussing your physical activity! Do you like doing intense exercise? </center></h3>" +
                        "<img alt='' style='margin-left:auto; margin-right:auto; display:block; width:100%;' src='img/vigorous.png'>" +
                        "<p><center style='font-size:14px;'>Examples: cheerleading, running, softball, soccer, volleyball, tennis, basketball</center></p>"
                },
                {
                    "type": "imagepicker",
                    "name": "activity-high",
                    "title": " ",
                    "isRequired": true,
                    "colCount": 1,
                    "hasNone": false,
                    "choices": [
                    {"value":0,"imageLink":activity_[0]},
                    {"value":1,"imageLink":activity_[1]},
                    {"value":2,"imageLink":activity_[2]},
                    {"value":3,"imageLink":activity_[3]}],
                    
                }
            ]
        },
        {
            "popupdescription": "P5",
            "pos": 1,
            // "visibleIf": "{activity-high}<=1",
            "elements": [
                {
                    "type": "html",
                    "name": "test",
                    "html": "<div id='sketch-holder'></div>" +
                        "<h3> <center>Interesting selection 🤔... do spend at least 1 hour a week doing intense physical exercise? </center></h3>" +
                        "<p><center>Examples: cheerleading, running, softball, soccer, volleyball, tennis, basketball</center></p>"
                },
                {
                    "type": "imagepicker",
                    "name": "activity-high-next",
                    "title": " ",
                    "isRequired": true,
                    "colCount": 1,
                    "hasNone": false,
                    "choices": [
                    {"value":0,"imageLink":generic_sport[0]},
                    {"value":1,"imageLink":generic_sport[1]},
                    {"value":2,"imageLink":generic_sport[2]},
                    {"value":3,"imageLink":generic_sport[3]}],
                    
                }
            ]
        }, 
        
        {
            "popupdescription": "P5",
            "pos": 1,
            // "visibleIf": "{activity-hard-next}<3 || {activity-hard-high}<4",
            "elements": [
                {
                    "type": "html",
                    "name": "activity-low-title",
                    "html": "<div id='sketch-holder'></div>",
                    // "<div id='sketch-holder'></div>" +
                    //     "<h3><center> Okay, so you don't do much intense exercise… Do you like doing low intensity exercise? </center></h3>"+
                    //     "<img alt='' style='margin-left:auto; margin-right:auto; display:block; width:100%;' src='img/moderate.png'>"+
                    //     "<p><center style='font-size:14px;'>Examples: walking, dancing, riding a bike, playing with dog, swimming, marching band</center></p>"
                },
                {
                    "type": "imagepicker",
                    "name": "activity-low",
                    "title": " ",
                    "isRequired": true,
                    "colCount": 1,
                    "hasNone": false,
                    "choices": [
                        {"value":0,"imageLink":activity_[0]},
                        {"value":1,"imageLink":activity_[1]},
                        {"value":2,"imageLink":activity_[2]},
                        {"value":3,"imageLink":activity_[3]}],
                }
            ]
        }, 
        {
            "popupdescription": "P5",
            "pos": 1,
            // "visibleIf": "{activity-low}<=1",
            "elements": [
                {
                    "type": "html",
                    "name": "test",
                    "html": "<div id='sketch-holder'></div>" +
                        "<h3> <center>Interesting selection 🤔... do spend at least 1 hour a week doing intense physical exercise? </center></h3>"+
                        "<p><center>Examples: walking, dancing, riding a bike, playing with dog, swimming, marching band</center></p>"
                },
                {
                    "type": "imagepicker",
                    "name": "activity-low-next",
                    "title": " ",
                    "isRequired": true,
                    "colCount": 1,
                    "hasNone": false,
                    "choices": [
                    {"value":0,"imageLink":generic_sport[0]},
                    {"value":1,"imageLink":generic_sport[1]},
                    {"value":2,"imageLink":generic_sport[2]},
                    {"value":3,"imageLink":generic_sport[3]}],
                }
            ]
        },
        // Activity response 
        {
            "popupdescription": "P5",
            "animated": "yes",
            "pos": 1,
            "elements": [
                {
                    "type": "html",
                    "name": "activity-score",
                    "html": "<div id='sketch-holder'></div><h3 style='text-align:center'>Exercise!</h3>"
                }
            ]
        },
        
        // Grains
        {
            "popupdescription": "P5",
            "pos": 2,
            "elements": [
                {
                    "type": "html",
                    "name": "test",
                    "html": "<div id='sketch-holder'></div>" +
                        "<h3><center> Let's talk about food! How do you feel about whole grains? </center></h3>"+
                        "<img alt='' style='margin-left:auto; margin-right:auto; display:block; width:100%;' src='img/grains-high.png'>"+
                        "<p><center style='font-size:14px;'>Examples: whole grain bread, whole grain pasta, brown rice, popcorn, oats</center></p>"
                },
                {
                    "type": "imagepicker",
                    "name": "grains-high",
                    "title": " ",
                    "isRequired": true,
                    "colCount": 1,
                    "hasNone": false,
                    "choices": [
                    {"value":0,"imageLink":high_grains_[0]},
                    {"value":1,"imageLink":high_grains_[1]},
                    {"value":2,"imageLink":high_grains_[2]},
                    {"value":3,"imageLink":high_grains_[3]}],
                }
            ]
        }, 
        {
            "popupdescription": "P5",
            "pos": 2,
            // "visibleIf": "{grains-high}<=1",
            "elements": [
                {
                    "type": "html",
                    "name": "test",
                    "html": "<div id='sketch-holder'></div>" +
                        "<h3> <center>Interesting selection 🤔... do you eat whole grains at least 3-5 times a week?</center></h3>"+
                        "<p><center>Examples: whole grain bread, whole grain pasta, brown rice, popcorn, oats</center></p>"
                },
                {
                    "type": "imagepicker",
                    "name": "grains-high-next",
                    "title": " ",
                    "isRequired": true,
                    "colCount": 1,
                    "hasNone": false,
                    "choices": [
                    {"value":0,"imageLink":activity_[0]},
                    {"value":1,"imageLink":activity_[1]},
                    {"value":2,"imageLink":activity_[2]},
                    {"value":3,"imageLink":activity_[3]}],
                }
            ]
        }, 

        
        {
            "popupdescription": "P5",
            "pos": 2,
            "elements": [
                {
                    "type": "html",
                    "name": "grains-low-title",
                    "html": "<div id='sketch-holder'></div>" +
                        "<h3><center> Not great, but we still have another grain category! How do you feel about regular grains? 👀</center></h3>"+
                        "<img alt='' style='margin-left:auto; margin-right:auto; display:block; width:100%;' src='img/moderate.png'>"+
                        "<p><center style='font-size:14px;'>Examples: sugary cereals, white bread, pancakes, bagels, crackers</center></p>"
                },
                {
                    "type": "imagepicker",
                    "name": "grains-low",
                    "title": " ",
                    "isRequired": true,
                    "colCount": 1,
                    "hasNone": false,
                    "choices": [
                        {"value":0,"imageLink":low_grains_[0]},
                        {"value":1,"imageLink":low_grains_[1]},
                        {"value":2,"imageLink":low_grains_[2]},
                        {"value":3,"imageLink":low_grains_[3]}],
                }
            ]
        }, 
        {
            "popupdescription": "P5",
            "pos": 2,
            "elements": [
                {
                    "type": "html",
                    "name": "test",
                    "html": "<div id='sketch-holder'></div>" +
                        "<h3> <center>Okay, that's fine butttt... do you eat them at least twice a week? </center></h3>"+
                        "<p><center>Examples: sugary cereals, white bread, pancakes, bagels, crackers</center></p>"
                },
                {
                    "type": "imagepicker",
                    "name": "grains-low-next",
                    "title": " ",
                    "isRequired": true,
                    "colCount": 1,
                    "hasNone": false,
                    "choices": [
                        {"value":0,"imageLink":activity_[0]},
                        {"value":1,"imageLink":activity_[1]},
                        {"value":2,"imageLink":activity_[2]},
                        {"value":3,"imageLink":activity_[3]}],
                }
            ]
        }, 
        // Grains response
        {
            "popupdescription": "P5",
            "animated": "yes",
            "pos": 2,
            "elements": [
                {
                    "type": "html",
                    "name": "grain-score",
                    "html": "<div id='sketch-holder'></div><h3 style='text-align:center'>Keep 'em grains coming!</h3>"
                }
            ]
        },
        
        // Fruits
        {
            "popupdescription": "P5",
            "pos": 3,
            "elements": [
                {
                    "type": "html",
                    "name": "test",
                    "html": "<div id='sketch-holder'></div>" +
                        "<h3><center> Okay! Let's do some easy questions now. Do you like fruit?</center></h3>"+
                        "<img alt='' style='margin-left:auto; margin-right:auto; display:block; width:100%;' src='img/fruit.png'>"
                },
                {
                    "type": "imagepicker",
                    "name": "fruit",
                    "title": " ",
                    "isRequired": true,
                    "colCount": 1,
                    "hasNone": false,
                    "choices": [
                        {"value":0,"imageLink":fruit_[0]},
                        {"value":1,"imageLink":fruit_[1]},
                        {"value":2,"imageLink":fruit_[2]},
                        {"value":3,"imageLink":fruit_[3]}],
                }
            ]
        }, 
        {
            "popupdescription": "P5",
            "pos": 3,
            // "visibleIf": "{fruit}<=1",
            "elements": [
                {
                    "type": "html",
                    "name": "test",
                    "html": "<div id='sketch-holder'></div>" +
                        "<h3> <center>Oof.... 😬 Do you at least eat three servings a day??</center></h3>"
                },
                {
                    "type": "imagepicker",
                    "name": "fruit-next",
                    "title": " ",
                    "isRequired": true,
                    "colCount": 1,
                    "hasNone": false,
                    "choices": [
                        {"value":0,"imageLink":activity_[0]},
                        {"value":1,"imageLink":activity_[1]},
                        {"value":2,"imageLink":activity_[2]},
                        {"value":3,"imageLink":activity_[3]}],
                    
                }
            ]
        }, 
        
        // Veggies
        {
            "popupdescription": "P5",
            "pos": 3,
            "elements": [
                {
                    "type": "html",
                    "name": "test",
                    "html": "<div id='sketch-holder'></div>" +
                        "<h3><center> Enough about fruits. Do you like veggies?</center></h3>"+
                        "<img alt='' style='margin-left:auto; margin-right:auto; display:block; width:100%;' src='img/vegetables.png'>"
                },
                {
                    "type": "imagepicker",
                    "name": "veggies",
                    "title": " ",
                    "isRequired": true,
                    "colCount": 1,
                    "hasNone": false,
                    "choices": [
                        {"value":0,"imageLink":veggies_[0]},
                        {"value":1,"imageLink":veggies_[1]},
                        {"value":2,"imageLink":veggies_[2]},
                        {"value":3,"imageLink":veggies_[3]}],
                }
            ]
        }, 
        {
            "popupdescription": "P5",
            "pos": 3,
            "elements": [
                {
                    "type": "html",
                    "name": "test",
                    "html": "<div id='sketch-holder'></div>" +
                        "<h3> <center>Okayyy 😬... Well we all know veggies are good for you. Do you at least eat three servings a day??</center></h3>"
                },
                {
                    "type": "imagepicker",
                    "name": "veggies-next",
                    "title": " ",
                    "isRequired": true,
                    "colCount": 1,
                    "hasNone": false,
                    "choices": [
                        {"value":0,"imageLink":activity_[0]},
                        {"value":1,"imageLink":activity_[1]},
                        {"value":2,"imageLink":activity_[2]},
                        {"value":3,"imageLink":activity_[3]}],
                }
            ]
        }, 
        // Veggies response
        {
            "popupdescription": "P5",
            "animated": "yes",
            "pos": 3,
            "elements": [
                {
                    "type": "html",
                    "name": "fruit-score",
                    "html": "<div id='sketch-holder'></div><h3 style='text-align:center'>Yaaa fruits and veggies make your heart healthy!</h3>"
                }
            ]
        },

        // Nuts
        {
            "popupdescription": "P5",
            "pos": 4,
            "elements": [
                {
                    "type": "html",
                    "name": "test",
                    "html": "<div id='sketch-holder'></div>" +
                        "<h3><center> Soooo this one may be a little hard... Are you a nut person?</center></h3>"+
                        "<img alt='' style='margin-left:auto; margin-right:auto; display:block; width:100%;' src='img/nuts.png'>"
                },
                {
                    "type": "imagepicker",
                    "name": "nuts",
                    "title": " ",
                    "isRequired": true,
                    "colCount": 1,
                    "hasNone": false,
                    "choices": [
                        {"value":0,"imageLink":nuts_[0]},
                        {"value":1,"imageLink":nuts_[1]},
                        {"value":2,"imageLink":nuts_[2]},
                        {"value":3,"imageLink":nuts_[3]}],
                }
            ]
        }, 
        {
            "popupdescription": "P5",
            "pos": 4,
            "elements": [
                {
                    "type": "html",
                    "name": "test",
                    "html": "<div id='sketch-holder'></div>" +
                        "<h3> <center>Oof.... 😬 Do you at least eat two servings a week??</center></h3>"
                },
                {
                    "type": "imagepicker",
                    "name": "nuts-next",
                    "title": " ",
                    "isRequired": true,
                    "colCount": 1,
                    "hasNone": false,
                    "choices": [
                        {"value":0,"imageLink":activity_[0]},
                        {"value":1,"imageLink":activity_[1]},
                        {"value":2,"imageLink":activity_[2]},
                        {"value":3,"imageLink":activity_[3]}],
                }
            ]
        }, 
        // Nuts response
        {
            "popupdescription": "P5",
            "animated": "yes",
            "pos": 4,
            "elements": [
                {
                    "type": "html",
                    "name": "nut-score",
                    "html": "<div id='sketch-holder'></div><h3 style='text-align:center'>Yea nuts are awesome!!</h3>"
                }
            ]
        },
        
        // Meat (processed first)
        {
            "popupdescription": "P5",
            "pos": 5,
            "elements": [
                {
                    "type": "html",
                    "name": "test",
                    "html": "<div id='sketch-holder'></div>" +
                        "<h3><center> Let's talk about processed meats... do you eat them alot?</center></h3>"+
                        "<img alt='' style='margin-left:auto; margin-right:auto; display:block; width:100%;' src='img/procmeats.png'>"+
                        "<p><center>Examples: hot dogs, bacon, deli meats (pepperoni, sandwich meat, bologna, salami, etc.)</center></p>"
                },
                {
                    "type": "imagepicker",
                    "name": "procmeats",
                    "title": " ",
                    "isRequired": true,
                    "colCount": 1,
                    "hasNone": false,
                    "choices": [
                        {"value":0,"imageLink":processed_[0]},
                        {"value":1,"imageLink":processed_[1]},
                        {"value":2,"imageLink":processed_[2]},
                        {"value":3,"imageLink":processed_[3]}],
                }
            ]
        }, 
        {
            "popupdescription": "P5",
            "pos": 5,
            "elements": [
                {
                    "type": "html",
                    "name": "test",
                    "html": "<div id='sketch-holder'></div>" +
                        "<h3> <center>Processed meats aren't great for your heart.... Do you eat one serving or less a week??</center></h3>"+
                        "<p><center style='font-size:14px;'>Examples: hot dogs, bacon, deli meats (pepperoni, sandwich meat, bologna, salami, etc.)</center></p>"
                },
                {
                    "type": "imagepicker",
                    "name": "procmeats-next",
                    "title": " ",
                    "isRequired": true,
                    "colCount": 1,
                    "hasNone": false,
                    "choices": [
                        {"value":0,"imageLink":activity_[0]},
                        {"value":1,"imageLink":activity_[1]},
                        {"value":2,"imageLink":activity_[2]},
                        {"value":3,"imageLink":activity_[3]}],
                }
            ]
        }, 

        {
            "popupdescription": "P5",
            "pos": 5,
            "elements": [
                {
                    "type": "html",
                    "name": "redmeat-title",
                    "html": "<div id='sketch-holder'></div>" +
                        "<h3><center> Red meats aren't the best for your heart either.... 😬 Do you eat one serving or less a week??</center></h3>"+
                        "<img alt='' style='margin-left:auto; margin-right:auto; display:block; width:100%;' src='img/moderate.png'>"+
                        "<p><center style='font-size:14px;'>Examples: ground beef, steak, lamb, pork, veal</center></p>"
                },
                {
                    "type": "imagepicker",
                    "name": "redmeat",
                    "title": " ",
                    "isRequired": true,
                    "colCount": 1,
                    "hasNone": false,
                    "choices": [
                        {"value":0,"imageLink":redmeat_[0]},
                        {"value":1,"imageLink":redmeat_[1]},
                        {"value":2,"imageLink":redmeat_[2]},
                        {"value":3,"imageLink":redmeat_[3]}],
                }
            ]
        }, 
        {
            "popupdescription": "P5",
            "pos": 5,
            "elements": [
                {
                    "type": "html",
                    "name": "test",
                    "html": "<div id='sketch-holder'></div>" +
                        "<h3> <center>Red meats aren't the best for your heart either.... 😬 Do you eat one serving or less a week??</center></h3>"+
                        "<p><center>Examples: ground beef, steak, lamb, pork, veal</center></p>"
                },
                {
                    "type": "imagepicker",
                    "name": "redmeat-next",
                    "title": " ",
                    "isRequired": true,
                    "colCount": 1,
                    "hasNone": false,
                    "choices": [
                        {"value":0,"imageLink":activity_[0]},
                        {"value":1,"imageLink":activity_[1]},
                        {"value":2,"imageLink":activity_[2]},
                        {"value":3,"imageLink":activity_[3]}],
                }
            ]
        }, 
        
        // Meat response
        {
            "popupdescription": "P5",
            "animated": "yes",
            "pos": 5,
            "elements": [
                {
                    "type": "html",
                    "name": "meat-score",
                    "html": "<div id='sketch-holder'></div><h3 style='text-align:center'>Uuuhh a lot of red meat! Too much meat is actually bad for your heart...</h3>"
                }
            ]
        },

        // Soda
        {
            "popupdescription": "P5",
            "pos": 6,
            "elements": [
                {
                    "type": "html",
                    "name": "test",
                    "html": "<div id='sketch-holder'></div>" +
                        "<h3><center> Do you drink a lot of soda?</center></h3>"+
                        "<img alt='' style='margin-left:auto; margin-right:auto; display:block; width:100%;' src='img/soda.png'>"
                },
                {
                    "type": "imagepicker",
                    "name": "soda",
                    "title": " ",
                    "isRequired": true,
                    "colCount": 1,
                    "hasNone": false,
                    "choices": [
                        {"value":0,"imageLink":soda_[0]},
                        {"value":1,"imageLink":soda_[1]},
                        {"value":2,"imageLink":soda_[2]},
                        {"value":3,"imageLink":soda_[3]}],
                }
            ]
        }, 
        {
            "popupdescription": "P5",
            "pos": 6,
            "elements": [
                {
                    "type": "html",
                    "name": "test",
                    "html": "<div id='sketch-holder'></div>" +
                        "<h3> <center>Sodas aren't the best for your heart either.... 😬 Do you drink two or or less a week??</center></h3>"
                },
                {
                    "type": "imagepicker",
                    "name": "soda-next",
                    "title": " ",
                    "isRequired": true,
                    "colCount": 1,
                    "hasNone": false,
                    "choices": [
                        {"value":0,"imageLink":activity_[0]},
                        {"value":1,"imageLink":activity_[1]},
                        {"value":2,"imageLink":activity_[2]},
                        {"value":3,"imageLink":activity_[3]}],
                }
            ]
        }, 
        // Soda response
        {
            "popupdescription": "P5",
            "animated": "yes",
            "pos": 6,
            "elements": [
                {
                    "type": "html",
                    "name": "soda-score",
                    "html": "<div id='sketch-holder'></div><h3 style='text-align:center'>Eehhh that much soda is not good for your heart!</h3>"
                }
            ]
        },
        // Smoke
        {
            "popupdescription": "P5",
            "pos": 7,
            "elements": [
                {
                    "type": "html",
                    "name": "test",
                    "html": "<div id='sketch-holder'></div>" +
                        "<h3><center> We have one final question for you! Do you smoke?</center></h3>"
                },
                {
                    "type": "imagepicker",
                    "name": "smoke",
                    "title": " ",
                    "isRequired": true,
                    "colCount": 1,
                    "hasNone": false,
                    "choices": [
                        {"value":0,"imageLink":smoke_[0]},
                        {"value":1,"imageLink":smoke_[1]},
                        {"value":2,"imageLink":smoke_[2]}]
                }
            ]
        }, 
        // Smoke response
        {
            "popupdescription": "P5",
            "animated": "yes",
            "pos": 7,
            "elements": [
                {
                    "type": "html",
                    "name": "smoke-score",
                    "html": "<div id='sketch-holder'></div><h3 style='text-align:center'>As you can probably guess, smoking is not too good for your heart, but because you stopped it means your heart is healing!</h3>"
                }
            ]
        },
        
        // User input questions
        {
            "elements": [
                {
                    "name": "age",
                    "type": "text",
                    "inputType": "number",
                    "title": "Alright, now easy ones. How old are you?",
                    "placeholder": "15",
                    "isRequired": true
                }
            ]
        }, {
            "popupdescription": "P5",
            "pos": 8,
            "elements": [
                {
                    "type": "html",
                    "name": "test",
                    "html": "<div id='sketch-holder'>" +
                        "</div><img alt='' style='margin-left:auto; margin-right:auto; display:block; width:50%;' src='img/alcohol.png'>",
                    "visibleIf": "{age}>=21"
                },
                {
                    "type": "radiogroup",
                    "name": "alcohol",
                    "title": "Oh! You are 21+, let me ask you then, how often do you drink one glass of alcohol? One glass = 4 ounces of wine, 12 ounces of beer",
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
        }, {
            "popupdescription": "P5",
            "animated": "yes",
            "pos": 8,
            "elements": [
                {
                    "type": "html",
                    "name": "test",
                    "html": "<div id='sketch-holder'></div><h3 style='text-align:center'>Gotcha! You may know this but one glass of wine a day is actually beneficial to your heart health, just one though 👀</h3>",
                    "visibleIf": "{age}>=21"
                }
            ]
        }, {
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
        }, { // This question needs logic for people that accidentally put too much or too little
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
        }, {
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
        }, {
            "elements": [
                {
                    "type": "html",
                    "name": "pre-summary",
                    "html": "<div><center><h3 style='margin:auto;'>You are done! Tap Next to see your score</h3></center></div>"
                }
            ]
        }, {
            "elements": [
                {
                    "type": "html",
                    "name": "summary",
                    "html": "<div style=' border-radius: 25px; padding: 20px; background-image: linear-gradient(0deg,  rgb(231, 206, 61),rgb(211, 159, 16));width:75%; margin:auto;'><center><p style='margin:auto;'>Your risk is <h3></h3>Compared to a healthy lifestyle</p></center></div>"
                }
            ]
        }, {
            "elements": [
                {
                    "type": "html",
                    "name": "feedback-explanation",
                    "html": "<div><p style='margin:auto;'><h3>So what does this mean? <h3><br>It's not that your heart is bad right now, but that maintaining those habits will increase your chances of having cardiac disease when you are older.<br>" +
                        "But they are just chances, nothing is guaranteed of course! <br>This calculation was done by looking at the diet and exercise of 50,000 older women and their heart health.</p></div>"
                },
                {
                    "type": "boolean",
                    "name": "feedbackbool",
                    "title": "Want feedback?",
                    "label": "With this in mind, would you like to hear feedback on how you are doing?",
                    "isRequired": true,
                    "goNextPageAutomatic": false,
                }
            ]
        },
        {
            "elements": [
                {
                    "type": "html",
                    "name": "good-foods",
                    "html": "",
                    "visibleIf": "{feedbackbool}=='true'",
                }
            ]
        }, {
            "elements": [
                {
                    "type": "html",
                    "name": "bad-foods",
                    "html": "",
                    "visibleIf": "{feedbackbool}=='true'",
                }
            ]
        }, {
            "elements": [
                {
                    "type": "html",
                    "name": "activities",
                    "html": "",
                    "visibleIf": "{feedbackbool}=='true'",
                }
            ]
        },


        {
            "elements": [
                {
                    "type": "html",
                    "html": "<div id='sketch-holder'></div>" +
                        "<h3><center> Awesome, we love to hear that! </center></h3>" +
                        "<p><center>We’ve got some suggestions just for you too. Do you wanna see them?</center></p>"
                },
                {
                    "type": "imagepicker",
                    "name": "awesomeWeLoveToHearThat",
                    "title": " ",
                    "isRequired": true,
                    "colCount": 1,
                    "hasNone": false,
                    "choices": [
                        {
                            "value": 0,
                            "imageLink": './svg/yes-lets-see.svg'
                        },
                        {
                            "value": 1,
                            "imageLink": './svg/maybe-later.svg'
                        },
                        {
                            "value": 2,
                            "imageLink": './svg/no-am-good.svg'
                        },
                    ]
                }
            ]
        },
        {
            "elements": [
                {
                    "type": "html",
                    "name": "test",
                    "visibleIf": "{awesomeWeLoveToHearThat} < 1",
                    "html": "<div id='sketch-holder'></div>" +
                        "<h3><center> That’s okay, you’ve got time! </center></h3>" +
                        "<p><center>We’ve got some suggestions just for you too. Do you wanna see them?</center></p>"
                },
                {
                    "visibleIf": "{awesomeWeLoveToHearThat} < 1",
                    "type": "imagepicker",
                    "name": "thatIsOkayYouGotTime",
                    "title": " ",
                    "isRequired": true,
                    "colCount": 1,
                    "hasNone": false,
                    "choices": [
                        {
                            "value": 0,
                            "imageLink": './svg/yes-lets-see.svg'
                        },
                        {
                            "value": 1,
                            "imageLink": './svg/maybe-later.svg'
                        },
                        {
                            "value": 2,
                            "imageLink": './svg/no-am-good.svg'
                        },
                    ]
                }
            ]
        },


        {
            "elements": [
                {
                    "type": "html",
                    "name": "text_recom",
                    "visibleIf": "{awesomeWeLoveToHearThat} < 1  && {thatIsOkayYouGotTime} < 1 ",
                    "html": "<center><h3 style='color:rgb(26, 179, 148);'>Recommendations</h3></centers>"
                },
                {
                    "type": "html",
                    "name": "recomendations_phy",
                    "visibleIf": "{awesomeWeLoveToHearThat} < 1  && {thatIsOkayYouGotTime} < 1 ",
                    "html": "<div style=\";\">\n" +
                        "    <div style=\"left: 0; width: 100%; height: 0; position: relative; padding-bottom: 177.7778%; padding-top: 120px;\">\n" +
                        "        <iframe src=\"https://www.tiktok.com/embed/6885517120382323973\"\n" +
                        "                style=\"top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: 0;\" allowfullscreen\n" +
                        "                scrolling=\"no\" allow=\"encrypted-media;\"></iframe>\n" +
                        "    </div>\n" +
                        "</div>"
                }, {
                    "type": "html",
                    "name": "recomendations_phy",
                    "visibleIf": "{awesomeWeLoveToHearThat} < 1  && {thatIsOkayYouGotTime} < 1 ",
                    "html": "<div style=\";\">\n" +
                        "    <div style=\"left: 0; width: 100%; height: 0; position: relative; padding-bottom: 177.7778%; padding-top: 120px;\">\n" +
                        "        <iframe src=\"https://www.tiktok.com/embed/6937433017707171077\"\n" +
                        "                style=\"top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: 0;\" allowfullscreen\n" +
                        "                scrolling=\"no\" allow=\"encrypted-media;\"></iframe>\n" +
                        "    </div>\n" +
                        "</div>"
                },
            ]
        },
        {
            "elements": [
                {
                    "type": "html",
                    "name": "Intro",
                    "html": "<h3 style='text-align:center'> Awesome! Thank you so much for taking the HerHeart Quiz, hope it helped you see the things you are doing great and a couple to improve upon!</h3>" +
                        "<img alt='' style='margin-left:auto; margin-right:auto; display:block; width:70%;' src='svg/Heart.svg'><br>",
                },
            ]
        }, 
        // {
        //     "elements": [
        //         {
        //             "type": "html",
        //             "name": "smokinghabits",
        //             "html": "",
        //             "visibleIf": "{smoke}!='Never smoke'",
        //         }
        //     ]
        // },
        
    ]
};

Survey
    .StylesManager
    .applyTheme("modern");

window.survey = new Survey.Model(json);
survey.showQuestionNumbers = "off";
survey.showPageNumbers = "off";

survey.pageNextText = ""

survey
    .onComplete
    .add(function (sender) {
        document
            .querySelector('#surveyResult')
            .textContent = "Result JSON:\n" + JSON.stringify(sender.data, null, 3);
    });


$("#surveyElement").Survey({model: survey});

function emptyArray() {
    valuesDict = {}
    sortedDict = []
    cleanSortedValuesHealthy = []
    cleanSortedValues = []
    categories = []
    healthyData = []
    scoreData = []
}

function calculateGoodBadDiet() {
    rawScoreValues = [0, rawSport, rawFruits, rawNuts, rawSoda, rawMeat, rawGrains, rawSmoke, rawAlcohol];
    // Calculates the percentage score
    for (const key in animationValues) {
        if (key > 1 && key < animationValues.length - 2) {
            // const result = ((animationValues[key] - animationValues[key - 1]) / animationValuesHealthy[key]);
            const result = ((animationValues[key] - animationValues[key - 1]) / animationValuesHealthy[key]);
            // cleanSortedValuesHealthy.push(animationValuesHealthy[key])
            valuesDict[animationValuesTitles[index + 2]] = {
                "score": result,
                "healthy": animationValuesHealthy[key],
                "rawScore": rawScoreValues[key],
                "rawHealthy": rawHealthyValues[key]
            }
            index++
        }
    }
    // console.log(valuesDict);

    // Create items array
    var items = Object.keys(valuesDict).map(function (key) {
        return [key, valuesDict[key]["score"]];
    });

    // Sort the array based on the second element
    items.sort(function (first, second) {
        return second[1] - first[1];
    });

    // Create a new array with only the first 5 items
    for (val in items) {
        sortedDict.push(items[val][0]);
        cleanSortedValuesHealthy.push(valuesDict[items[val][0]]["rawHealthy"]);
        cleanSortedValues.push(valuesDict[items[val][0]]["rawScore"]);
    }

    index = 0;
    for (const cleanSortedValuesKey in cleanSortedValues) {
        categories.push(sortedDict[cleanSortedValuesKey]);
        // This one is wrongly place, it's just static
        healthyData.push(cleanSortedValuesHealthy[cleanSortedValuesKey] * 5)
        scoreData.push(cleanSortedValues[cleanSortedValuesKey]/* * cleanSortedValuesHealthy[cleanSortedValuesKey]*/ * 5)
        index++
    }

    // scoreData = [1,1.5,0.5,0.8,2];
    // healthyData = [2,2,0,0.25,4];
}

survey
    .onAfterRenderPage
    .add(function (survey, options) {

        if (options.page.name == "page28") {
            emptyArray()
            calculateGoodBadDiet()
        }

        if (options.page.name == "page31") {

            console.log(scoreData)

            let nutritionSummary = '';


            for (const categoriesKey in categories) {
                nutritionSummary += `
                            <div class="uk-container">
                                <div uk-grid>
                                    <div class="uk-width-1-3 uk-margin-auto-vertical">
                                        <p class="uk-text-meta">${categories[categoriesKey]}</p>
                                    </div>
                                    <div class="uk-width-expand uk-position-relative">
                                        <div uk-grid class="uk-child-width-1-3 height">
                                            <div class="ball left" style="left:${scoreData[categoriesKey] * 5}%"></div>
                                            <div class="red"></div>
                                            <div class="yellow"></div>
                                            <div class="green"></div>
                                        </div>
                                    </div>
                                </div>
                                <br>
                            </div>
                `
            }

            setTimeout(() => {
                $("#nutritionSummary").empty()
                $("#nutritionSummary").html(nutritionSummary)
            }, 100)

        }


        if (options.page.name == "page32") {

            let optionsRadialBar = {
                series: [44, 55],
                chart: {
                    height: 350,
                    type: 'radialBar',
                },
                stroke: {
                    lineCap: 'round'
                }, legend: {
                    show: true,
                    position: 'bottom',
                },
                plotOptions: {
                    radialBar: {
                        dataLabels: {
                            name: {
                                fontSize: '22px',
                            },
                            value: {
                                fontSize: '16px',
                            },
                            total: {
                                show: true,
                                label: 'Total',
                            }
                        }
                    }
                },
                labels: ['intense exercise', 'low intensity exercise'],
            };

            setTimeout(() => {
                var chart = new ApexCharts(document.querySelector("#timeChart"), optionsRadialBar);
                chart.render();
            }, 100)

        }


        console.log(options.page.name)

        if (options.page.name == "page33") {

            $(".sv-footer__next-btn").css("display", 'unset')

            setTimeout(() => {

                let slider = document.getElementById('slider');

                noUiSlider.create(slider, {
                    start: [1],
                    range: {
                        'min': 0,
                        'max': 3
                    }
                });


                console.log(slider.noUiSlider.get() + " ----- slider.noUiSlider.get();")

            }, 300)
        }

        if (options.page.name == "page34" || options.page.name == "page35")
            $(".sv-footer__next-btn").css("display", 'none')


//Do nothing if a page contains no description to show in a modal popup
        if (!options.page.popupdescription)
            return;

// Add a P5 Element
        function defineSketch(x, y, value, total, colorDisplay, healthyPoints, animate) {
            return function mySketch(p) {
                // P5
                let draft, ready, i, maxvalue, minvalue, j, jfac, w;
                var start, current;
                var flag;
                let font, fontsize = 20;
                let colorScore, colorParticles;
                // let song;
                let system;
                p.preload = function preload() {
                    ready = p.loadImage("img/scorebar-full.png");
                    draft = p.loadImage("img/scorebar-empty.png");
                    font = p.loadFont('font/PartyConfettiRegular-eZOn3.ttf');
                }
                p.setup = function setup() {
                    let canvas;
                    if (animate == 1) {
                        canvas = p.createCanvas(350, 300);
                    } else {
                        canvas = p.createCanvas(350, 100);
                    }
                    // let canvas = p.createCanvas(350, 100);
                    canvas.parent('sketch-holder');
                    p.image(ready, 60, 20);
                    p.image(draft, 60, 20);
                    // song = p.loadSound('assets/goodSound.mp3');
                    minvalue = x;
                    maxvalue = y;
                    i = minvalue - 0.5;
                    j = parseInt(maxvalue / 1.35 * 5 - minvalue / 1.35 * 5);
                    jfac = Math.round(j / (maxvalue - minvalue));
                    w = 0;
                    // console.log("What is max",maxvalue);
                    // console.log("what is min",minvalue);
                    // console.log("whatis jfac",jfac);
                    // console.log("what is j",j);
                    flag = 0;
                    p.textFont(font);
                    p.textAlign(p.CENTER, p.CENTER);
                    if (colorDisplay == 'red') {
                        colorScore = p.color(190, 107, 60);
                        colorParticles = [190, 107, 60];
                    } else if (colorDisplay == 'yellow') {
                        colorScore = p.color(188, 164, 34);
                        colorParticles = [168, 164, 34];
                    } else if (colorDisplay == 'green') {
                        colorScore = p.color(60, 190, 175);
                        colorParticles = [60, 190, 175];
                    } else {
                        colorScore = p.color(0, 0, 0);
                    }
                    system = new ParticleSystem(p.createVector(p.width / 2, 100));
                }

                p.draw = function draw() {
                    if (animate == 1) {
                        p.fillBar();
                    } else {
                        p.staticBar();
                    }
                    p.textAlign(p.RIGHT);
                    p.drawWords(p.width * 0.1);
                }

                p.fillBar = function fillBar() {
                    if (i < maxvalue) {
                        p.background(255);
                        p.image(draft, 60, 20);
                        p.copy(ready, 0, 0, i, 40, 60, 20, i, 40);
                        i = i + 1;
                        j = j - jfac;
                        // p.text(i, 40, 30);
                        // This can be put here as a delay for the whole animation, but it slows down the rendering of the covered object too much
                        // if(flag == 0){
                        // p.wait(500);
                        // flag = 1;
                        // }
                        // p.background(51);
                        system.addParticle();
                        system.run();
                    } else {
                        p.drawScore();
                        j = 0;
                        // if (song.isPlaying()) {song.stop();}
                        // else {song.play();}
                    }
                }

                p.staticBar = function staticBar() {
                    // i = minvalue+0.5; // Define the minimum value as 0.5 less so that it becomes exactly that value
                    if (flag == 0) {
                        if (i <= minvalue) {
                            p.copy(ready, 0, 0, i, 40, 60, 20, i, 40);
                        } else {
                            flag = 1;
                            // p.drawScore();
                        }
                        i = i + 0.5;
                    }
                }

                p.drawWords = function drawWords(x) {
                    // The text() function needs three parameters:
                    // the text to draw, the horizontal position,
                    // and the vertical position
                    // p.fill(0);
                    p.fill(0);
                    p.textSize(20);
                    if (animate == 1) {
                        p.text(total - j, 40, 30);
                    } else {
                        p.text(total, 40, 30);
                    }
                    p.text('Your Score', 99, 10);
                }

                p.drawScore = function drawScore() {
                    // Only running one time, next time not displaying
                    p.background(255);
                    p.image(draft, 60, 20);
                    system.addParticle();
                    system.run();
                    p.copy(ready, 0, 0, i, 40, 60, 20, i, 40);

                    p.fill(colorScore);
                    p.textSize(40);
                    p.text("+" + value, 160, 100);
                    p.text('/', 150 + 30, 105);
                    p.text(healthyPoints, 160 + 80, 110);
                }

                // Waiting function
                p.wait = function wait(time) {
                    start = p.millis()
                    do {
                        current = p.millis();
                    }
                    while (current < start + time)
                }

                // A simple Particle class

                let Particle = function (position) {
                    this.acceleration = p.createVector(0, 0.05);
                    this.velocity = p.createVector(p.random(-5, 5), p.random(-5, 5));
                    this.position = position.copy();
                    this.lifespan = 155;
                };

                Particle.prototype.run = function () {
                    this.update();
                    this.display();
                };

                // Method to update position
                Particle.prototype.update = function () {
                    this.velocity.add(this.acceleration);
                    this.position.add(this.velocity);
                    this.lifespan -= 2;
                };

                // Method to display
                Particle.prototype.display = function () {
                    p.stroke(200, this.lifespan);
                    p.strokeWeight(2);
                    p.fill(colorParticles[0], colorParticles[1], colorParticles[2], this.lifespan * 2);
                    p.ellipse(this.position.x, this.position.y, 12, 12);
                };

                // Is the particle still useful?
                Particle.prototype.isDead = function () {
                    // console.log("Does this fire?");
                    return this.lifespan < 0;
                };

                let ParticleSystem = function (position) {
                    this.origin = position.copy();
                    this.particles = [];
                };

                ParticleSystem.prototype.addParticle = function () {
                    if (i < maxvalue) {
                        this.particles.push(new Particle(this.origin));
                        // w++;
                    }
                };

                ParticleSystem.prototype.run = function () {
                    for (let i = this.particles.length - 1; i >= 0; i--) {
                        let par = this.particles[i];
                        par.run();
                        if (par.isDead()) {
                            this.particles.splice(i, 1);
                        }
                    }
                };
            }
        }

        function calculateBarProgress() {
            // Sports
            if (rawSport >= 3.5) {
                animationValues[1] = 20;
            } else {
                animationValues[1] = parseInt((rawSport * 20) / 3.5);
            }

            // Fruits & Veggies
            if (rawFruits >= 2) {
                animationValues[2] = animationValues[1] + 20;
            } else {
                animationValues[2] = animationValues[1] + parseInt(rawFruits * 10);
            }

            // Nuts
            if (rawNuts >= 2) {
                animationValues[3] = animationValues[2] + 40;
            } else if (rawNuts >= 0.3) {
                animationValues[3] = animationValues[2] + 20 + parseInt((rawNuts - 0.3) * 20);
            } else {
                animationValues[3] = animationValues[2] + parseInt((rawNuts * 20) / 0.5);
            }

            // Soda
            if (rawSoda > 1) {
                animationValues[4] = animationValues[3]
            } else {
                animationValues[4] = animationValues[3] + (20 - parseInt(rawSoda * 20));
            }
            // Meat
            if (rawMeat > 2) {
                animationValues[5] = animationValues[4]
            } else {
                animationValues[5] = animationValues[4] + (20 - parseInt((rawMeat * 20) / 2));
            }
            // Grains
            animationValues[6] = animationValues[5] + parseInt((rawGrains * 20) / 4);

            // Smoke
            animationValues[7] = animationValues[6] + 60 - rawSmoke * 60;

            // Alcohol
            if (rawAlcohol == 1) {
                animationValues[8] = animationValues[7] + 20
            } else if (rawAlcohol > 1) {
                animationValues[8] = animationValues[7] + 20 - parseInt((rawAlcohol * 20) / 3)
            } else {
                animationValues[8] = animationValues[7] + parseInt(rawAlcohol * 20)
            }
        }

// Set up messages for each option : three states, good, medium, bad
        function displayFeedbackMessage(feedbackChosen) {
            survey.getQuestionByName("activity-score").html = "<div id='sketch-holder'></div><h3 style='text-align:center'>" + feedbackChosen + "</h3>";
            survey.getQuestionByName("fruit-score").html = "<div id='sketch-holder'></div><h3 style='text-align:center'>" + feedbackChosen + "</h3>";
            survey.getQuestionByName("nut-score").html = "<div id='sketch-holder'></div><h3 style='text-align:center'>" + feedbackChosen + "</h3>";
            survey.getQuestionByName("soda-score").html = "<div id='sketch-holder'></div><h3 style='text-align:center'>" + feedbackChosen + "</h3>";
            survey.getQuestionByName("meat-score").html = "<div id='sketch-holder'></div><h3 style='text-align:center'>" + feedbackChosen + "</h3>";
            survey.getQuestionByName("grain-score").html = "<div id='sketch-holder'></div><h3 style='text-align:center'>" + feedbackChosen + "</h3>";
            survey.getQuestionByName("smoke-score").html = "<div id='sketch-holder'></div><h3 style='text-align:center'>" + feedbackChosen + "</h3>";
        }

        calculateBarProgress();

        animationValues[0] = 0;
        animationValuesHealthy = [0, 20, 20, 40, 20, 20, 20, 60, 20]; // Overall quantity amounts to 200 without the alcohol portion that needs to be considered separate

// I gotta pass in here these variables
        if (options.page.animated) {
            // Remove the previous animation
            if (oldAnimation != null) {
                oldAnimation.remove();
            }

            var colorDisplay;
            if (animationValues[options.page.pos] - animationValues[options.page.pos - 1] > animationValuesHealthy[options.page.pos] * 0.8) {
                colorDisplay = 'green';
                displayFeedbackMessage(goodFeedbackResponse[options.page.pos]);
            } else if (animationValues[options.page.pos] - animationValues[options.page.pos - 1] >= animationValuesHealthy[options.page.pos] * 0.3) {
                colorDisplay = 'yellow';
                displayFeedbackMessage(mediumFeedbackResponse[options.page.pos]);
            } else if (animationValues[options.page.pos] - animationValues[options.page.pos - 1] < animationValuesHealthy[options.page.pos] * 0.3) {
                colorDisplay = 'red';
                displayFeedbackMessage(badFeedbackResponse[options.page.pos]);
            }
            var mySketch = defineSketch(animationValues[options.page.pos - 1] * 1.35, animationValues[options.page.pos] * 1.35, (animationValues[options.page.pos] - animationValues[options.page.pos - 1]) * 5, animationValues[options.page.pos] * 5, colorDisplay, animationValuesHealthy[options.page.pos] * 5, 1);
            newAnimation = new p5(mySketch);
            window.sketchInstance = newAnimation;
            // window.sketchInstance = new p5(newAnimation);
            // console.log("this animates");
        } else {
            if (newAnimation != null) {
                newAnimation.remove();
            }


            var mySketch2 = defineSketch(animationValues[options.page.pos - 1] * 1.35, 0, (animationValues[options.page.pos] - animationValues[options.page.pos - 1]) * 5, animationValues[options.page.pos - 1] * 5, 'none', 0, 0);

            // var mySketch2 = defineSketch(currentPoints,0,0);
            oldAnimation = new p5(mySketch2);
            // var mySketch2 = defineSketch(currentPoints,0,0);
            window.sketchInstance = oldAnimation;

            // window.sketchInstance = new p5(oldAnimation);
        }

        // P5 End ------------ //
        // Modify pages for Buzzfeed style
        // Okay so this works it seems like
        console.log("page number is",options.page.name);
    if (options.page.name == "page3") {
        if (survey.getQuestionByName("activity-high").value > 1){
            survey.getQuestionByName("activity-high-next").choices = [
                {"value":2,"imageLink":generic_sport[2]},
                {"value":3,"imageLink":generic_sport[3]},
                {"value":4,"imageLink":generic_sport[4]},
                {"value":5,"imageLink":generic_sport[5]}];

        } else {
            survey.getQuestionByName("activity-high-next").choices = [
                {"value":0,"imageLink":generic_sport[0]},
                {"value":1,"imageLink":generic_sport[1]},
                {"value":2,"imageLink":generic_sport[2]},
                {"value":3,"imageLink":generic_sport[3]}];
        }
    }

    if (options.page.name == "page4") {
        if (survey.getQuestionByName("activity-high-next").value >= 3){
            survey.getQuestionByName("activity-low-title").html = "<div id='sketch-holder'></div>" +
                            "<h3><center> Nice job on your intense exercise! Do you also like doing low intensity exercise? </center></h3>"+
                            "<img alt='' style='margin-left:auto; margin-right:auto; display:block; width:100%;' src='img/moderate.png'>"+
                            "<p><center style='font-size:14px;'>Examples: walking, dancing, riding a bike, playing with dog, swimming, marching band</center></p>";

        } else {
            survey.getQuestionByName("activity-low-title").html = "<div id='sketch-holder'></div>" +
            "<h3><center> Okay, so you don't do much intense exercise… Do you like doing low intensity exercise? </center></h3>"+
            "<img alt='' style='margin-left:auto; margin-right:auto; display:block; width:100%;' src='img/moderate.png'>"+
            "<p><center style='font-size:14px;'>Examples: walking, dancing, riding a bike, playing with dog, swimming, marching band</center></p>";
        }
    }

    if (options.page.name == "page5") {
        if (survey.getQuestionByName("activity-low").value > 1){
            survey.getQuestionByName("activity-low-next").choices = [
                {"value":2,"imageLink":generic_sport[2]},
                {"value":3,"imageLink":generic_sport[3]},
                {"value":4,"imageLink":generic_sport[4]},
                {"value":5,"imageLink":generic_sport[5]}];

        } else {
            survey.getQuestionByName("activity-low-next").choices = [
                {"value":0,"imageLink":generic_sport[0]},
                {"value":1,"imageLink":generic_sport[1]},
                {"value":2,"imageLink":generic_sport[2]},
                {"value":3,"imageLink":generic_sport[3]}];
        }
    }

    if (options.page.name == "page8") {
        if (survey.getQuestionByName("grains-high").value > 1){
            survey.getQuestionByName("grains-high-next").choices = [
                {"value":2,"imageLink":grains_high_a[2]},
                {"value":3,"imageLink":grains_high_a[3]},
                {"value":4,"imageLink":grains_high_a[4]},
                {"value":5,"imageLink":grains_high_a[5]}];
        } else {
            survey.getQuestionByName("grains-high-next").choices = [
                {"value":0,"imageLink":grains_high_a[0]},
                {"value":1,"imageLink":grains_high_a[1]},
                {"value":2,"imageLink":grains_high_a[2]},
                {"value":3,"imageLink":grains_high_a[3]}];
        }
    }

    if (options.page.name == "page9") {
        if (survey.getQuestionByName("grains-high-next").value >= 3){
            survey.getQuestionByName("grains-low-title").html = "<div id='sketch-holder'></div>" +
            "<h3><center> Great! Now...... how do you feel about regular grains? 👀 </center></h3>"+
            "<img alt='' style='margin-left:auto; margin-right:auto; display:block; width:100%;' src='img/grains-low.png'>"+
            "<p><center style='font-size:14px;'>Examples: sugary cereals, white bread, pancakes, bagels, crackers</center></p>";

        } else {
            survey.getQuestionByName("grains-low-title").html = "<div id='sketch-holder'></div>" +
            "<h3><center> Not great, but we still have another grain category! How do you feel about regular grains? 👀</center></h3>"+
            "<img alt='' style='margin-left:auto; margin-right:auto; display:block; width:100%;' src='img/grains-low.png'>"+
            "<p><center style='font-size:14px;'>Examples: sugary cereals, white bread, pancakes, bagels, crackers</center></p>";
        }
    }

    if (options.page.name == "page10") {
        if (survey.getQuestionByName("grains-low").value > 1){
            survey.getQuestionByName("grains-low-next").choices = [
                {"value":2,"imageLink":grains_low_a[2]},
                {"value":3,"imageLink":grains_low_a[3]},
                {"value":4,"imageLink":grains_low_a[4]},
                {"value":5,"imageLink":grains_low_a[5]}];

        } else {
            survey.getQuestionByName("grains-low-next").choices = [
                {"value":0,"imageLink":grains_low_a[0]},
                {"value":1,"imageLink":grains_low_a[1]},
                {"value":2,"imageLink":grains_low_a[2]},
                {"value":3,"imageLink":grains_low_a[3]}];
        }
    }

    if (options.page.name == "page13") {
        if (survey.getQuestionByName("fruit").value > 1){
            survey.getQuestionByName("fruit-next").choices = [
                {"value":1,"imageLink":fruit_a[1]},
                {"value":2,"imageLink":fruit_a[2]},
                {"value":3,"imageLink":fruit_a[3]},
                {"value":4,"imageLink":fruit_a[4]}];
        } else {
            survey.getQuestionByName("fruit-next").choices = [
                {"value":0,"imageLink":fruit_a[0]},
                {"value":1,"imageLink":fruit_a[1]},
                {"value":2,"imageLink":fruit_a[2]},
                {"value":3,"imageLink":fruit_a[3]}];
        }
    }

    if (options.page.name == "page15") {
        if (survey.getQuestionByName("veggies").value > 1){
            survey.getQuestionByName("veggies-next").choices = [
                {"value":1,"imageLink":veggies_a[1]},
                {"value":2,"imageLink":veggies_a[2]},
                {"value":3,"imageLink":veggies_a[3]},
                {"value":4,"imageLink":veggies_a[4]}];
        } else {
            survey.getQuestionByName("veggies-next").choices = [
                {"value":0,"imageLink":veggies_a[0]},
                {"value":1,"imageLink":veggies_a[1]},
                {"value":2,"imageLink":veggies_a[2]},
                {"value":3,"imageLink":veggies_a[3]}];
        }
    }

    if (options.page.name == "page18") {
        if (survey.getQuestionByName("nuts").value > 1){
            survey.getQuestionByName("nuts-next").choices = [
                {"value":1,"imageLink":nuts_a[1]},
                {"value":2,"imageLink":nuts_a[2]},
                {"value":3,"imageLink":nuts_a[3]},
                {"value":4,"imageLink":nuts_a[4]}];
        } else {
            survey.getQuestionByName("nuts-next").choices = [
                {"value":0,"imageLink":nuts_a[0]},
                {"value":1,"imageLink":nuts_a[1]},
                {"value":2,"imageLink":nuts_a[2]},
                {"value":3,"imageLink":nuts_a[3]}];
        }
    }

    if (options.page.name == "page21") {
        if (survey.getQuestionByName("procmeats").value > 1){
            survey.getQuestionByName("procmeats-next").choices = [
                {"value":2,"imageLink":processed_a[2]},
                {"value":3,"imageLink":processed_a[3]},
                {"value":4,"imageLink":processed_a[4]},
                {"value":5,"imageLink":processed_a[5]}];
        } else {
            survey.getQuestionByName("procmeats-next").choices = [
                {"value":0,"imageLink":processed_a[0]},
                {"value":1,"imageLink":processed_a[1]},
                {"value":2,"imageLink":processed_a[2]},
                {"value":3,"imageLink":processed_a[3]}];
        }
    }
    const healthyPerson = (1 - Math.pow(0.9660, Math.exp((-0.557385 + BMI * 0.04676 + ageQuestion * 0.1082) - 6.57301))) * 100;
    const relativeRisk = risk / healthyPerson;
    var summaryQuestion = survey.getQuestionByName("summary");
    let relativeRiskWord = "";
    let dietImagePath = "";
    let activityImagePath = "";
    let bmiImagePath = "";
    let smokeImagePath = "";
    let summaryColor = "";
    let summaryImage = "";
    // Add image for risks


    //
    if (relativeRisk <= 1.0) {
        relativeRiskWord = "Looking good!";
        summaryImage = "./img/Results=Good.jpg"; // healthy.gif
    } else if (relativeRisk > 1.0 /* was 1.5 before but confusing for usersy6 */ && relativeRisk < 4) {
        relativeRiskWord = "Slightly elevated";
        summaryImage = "./img/Results=Okay.jpg"; // unhealthy.gif
    } else {
        relativeRiskWord = "Very High";
        summaryImage = "./img/Results=Bad.jpg"; // vunhealthy.gif
    }

    if (options.page.name == "page22") {
        if (survey.getQuestionByName("procmeats-next").value >= 3){
            survey.getQuestionByName("redmeat-title").html = "<div id='sketch-holder'></div>" +
            "<h3><center> Hmm, could be better... do you eat red meat regularly? </center></h3>"+
            "<img alt='' style='margin-left:auto; margin-right:auto; display:block; width:100%;' src='img/meats.png'>"+
            "<p><center style='font-size:14px;'>Examples: ground beef, steak, lamb, pork, veal</center></p>";

        } else {
            survey.getQuestionByName("redmeat-title").html = "<div id='sketch-holder'></div>" +
            "<h3><center>That's great! Now what about your red meat intake?</center></h3>"+
            "<img alt='' style='margin-left:auto; margin-right:auto; display:block; width:100%;' src='img/meats.png'>"+
            "<p><center style='font-size:14px;'>Examples: ground beef, steak, lamb, pork, veal</center></p>";
        }
    }

    if (options.page.name == "page23") {
        if (survey.getQuestionByName("redmeat").value > 1){
            survey.getQuestionByName("redmeat-next").choices = [
                {"value":2,"imageLink":redmeat_a[2]},
                {"value":3,"imageLink":redmeat_a[3]},
                {"value":4,"imageLink":redmeat_a[4]},
                {"value":5,"imageLink":redmeat_a[5]}];
        } else {
            survey.getQuestionByName("redmeat-next").choices = [
                {"value":0,"imageLink":redmeat_a[0]},
                {"value":1,"imageLink":redmeat_a[1]},
                {"value":2,"imageLink":redmeat_a[2]},
                {"value":3,"imageLink":redmeat_a[3]}];
        }
    }
    var summaryQuestion = survey.getQuestionByName("summary");
    summaryQuestion.html = "<div><center>" + "<p><img alt='' class='image' src=" + summaryImage + "></p>" + "</center><br><center><p style='margin:auto;'>Your risk is <h3>" + relativeRiskWord + "</h3><br></p></center></div>"

    const goodFoodsQuestion = survey.getQuestionByName("good-foods");
    goodFoodsQuestion.html =
        "<h2>You're doing pretty good... </h2> <br> " +
        "<div id='nutritionSummary'></div>";
    /*<p>  (You eat low fiber grains <b>"+grainLowQuestion+"</b>, you need a least one serving every day)</p></div></li>";*/

    if (options.page.name == "page26") {
        if (survey.getQuestionByName("soda").value > 1){
            survey.getQuestionByName("soda-next").choices = [
                {"value":2,"imageLink":soda_a[2]},
                {"value":3,"imageLink":soda_a[3]},
                {"value":4,"imageLink":soda_a[4]},
                {"value":5,"imageLink":soda_a[5]}];
        } else {
            survey.getQuestionByName("soda-next").choices = [
                {"value":0,"imageLink":soda_a[0]},
                {"value":1,"imageLink":soda_a[1]},
                {"value":2,"imageLink":soda_a[2]},
                {"value":3,"imageLink":soda_a[3]}];
        }
    }
    const badFoodsQuestion = survey.getQuestionByName("bad-foods");
    badFoodsQuestion.html =
        "<h2>Time to get moving!</h2>" +
        "<div id='timeChart' style='overflow: hidden !important;'></div>" +
        "<h4>This is text space to provide the user with a simple explanation of the image above.</h4>";


    // Actitives replacement
    if (((modSportValue + hardSportValue) * 6).toFixed(0) != 0) {
        sequenceVariable -= 1
    } else {
        sequenceVariable += 1
    }
    const activitiesQuestion = survey.getQuestionByName("activities");
    activitiesQuestion.html = "<div><center> <h3>Now that you know your habit's impact ...</h3> <br>"
        + "<p><img alt='' class='image'  src=" + summaryImage + "></p>"
        + " <p>How likely do you think you'll make chnages in your lifestyle ?</p> </center> <br>" +
        "<div id='slider' class='uk-container'></div> <br><br> </div>";


    // Smoking replacement
    if (smokeQuestion == "Used to smoke") {
        sequenceVariable += 1
    } else if (smokeQuestion == "Currently smoke") {
        sequenceVariable += 2
    }
    // const smokingQuestion = survey.getQuestionByName("smokinghabits");
    // smokingQuestion.html = "<h3>Let's look at your smoking habits :</h3> <ul> <li><div> <p> You " + smokeQuestion + ": <span style='color: red;  font-weight: bold;' class='text-orientation-right-css'> - " + ((smokeValue * 36) / 0.18283).toFixed(0) + "</span></p></div></li>" +
    //     "<p> Any smoking significantly affects your heart health, it's -30 if you used to smoke and -177 if you currently do!</p>" +
    //     "<br><center><p>Smoking has a huge impact in your heart score. Hopefully you didn't see it come down!</p><br><p><img alt='' src=" + imageSequence[sequenceVariable] + "></p></center>";
});

//     // Modify the quiz real-time to change the answer options based on the user's selection
survey.onValueChanged.add(function (survey, options) {
    
});

//     // This alone like this just creates the sketch and adds it to all pages
//     // var mySketch = defineSketch(10,50);
//     // window.sketchInstance = new p5(mySketch);

//     // const introQ = survey.getQuestionByName("Intro");
//     // introQ.html = "<div id='myHeart'></div><h2> Tell us what you eat every week and we'll tell you how healthy your heart is</h2><main></main><br><p>Not smoking, a healthy weight, a nutritious diet, and daily exercise play important roles in the prevention of cardiovascular disease. In fact, an overall healthy lifestyle may prevent more than 75% of deaths due to cardiovascular disease. Take this quiz to evaluate how your current lifestyle habits affect your cardiovascular health, and discover simple steps you can take to incorporate a Heart Healthy lifestyle into everyday living. Knowledge is power. Take the first step towards protecting your heart and your health!</p>" +
//         "<br><p><b>Press Next to begin this quiz.</b></p>";

//     const ageQuestion = survey.getQuestionByName("age").value;
//     const genderQuestion = survey.getQuestionByName("gender").value;
//     //
//     const weightQuestion = survey.getQuestionByName("weight").value;
//     const heightFeetQuestion = survey.getQuestionByName("height-feet").value;
//     const heightInchesQuestion = survey.getQuestionByName("height-inches").value;
//     BMI = (weightQuestion / (heightFeetQuestion * 12 + heightInchesQuestion) / (heightFeetQuestion * 12 + heightInchesQuestion)) * 703;
//     //
//     const smokeQuestion = survey.getQuestionByName("smoke").value;
//     //
//     const alcoholQuestion = survey.getQuestionByName("alcohol").value;
//     //
//     const fruitQuestion = survey.getQuestionByName("fruits").value;
//     const vegetableQuestion = survey.getQuestionByName("vegetables").value;
//     const nutQuestion = survey.getQuestionByName("nuts").value;
//     const grainQuestion = survey.getQuestionByName("grains-high").value;
//     const grainLowQuestion = survey.getQuestionByName("grains-low").value;
//     const sugarQuestion = survey.getQuestionByName("sugar").value;
//     const meatQuestion = survey.getQuestionByName("meat").value;
//     const procmeatQuestion = survey.getQuestionByName("meatproc").value;
//     let fruitVeggieValue = 0;
//     const fruitValue = 0;
//     const veggieValue = 0;
//     let nutValue = 0;
//     let grainValue = 0;
//     let grainLowValue = 0;
//     let sugarValue = 0;
//     let meatValue = 0;
//     const procmeat = 0;
//     let smokeValue = 0;
//     let alcoholValue = 0;
//     const dietArray = [fruitQuestion, vegetableQuestion, nutQuestion, sugarQuestion, meatQuestion, procmeatQuestion, grainQuestion, grainLowQuestion, alcoholQuestion];
//     const dietValues = [0, 0, 0, 0, 0, 0, 0, 0, 0];
//     // console.log(dietArray);
//     for (i = 0; i < dietArray.length; i++) {
//         if (dietArray[i] == "More than twice a day") {
//             dietValues[i] = 3
//         } else if (dietArray[i] == "Twice a day") {
//             dietValues[i] = 2
//         } else if (dietArray[i] == "Everyday") {
//             dietValues[i] = 1
//         } else if (dietArray[i] == "Three to five times a week") {
//             dietValues[i] = 0.5
//         } else if (dietArray[i] == "Once or twice a week") {
//             dietValues[i] = 0.3
//         } else if (dietArray[i] == "Less than once a week") {
//             dietValues[i] = 0.1
//         } else if (dietArray[i] == "Never") {
//             dietValues[i] = 0
//         }
//     }
//     rawFruits = dietValues[0] + dietValues[1];
//     rawNuts = dietValues[2];
//     rawSoda = dietValues[3];
//     rawMeat = dietValues[4] + dietValues[5];
//     rawGrains = dietValues[6] + dietValues[7] / 3;
//     rawAlcohol = dietValues[8];

//     if (smokeQuestion == "Used to smoke") {
//         smokeValue = 0.15285;
//         rawSmoke = 0.5;
//     } else if (smokeQuestion == "Currently smoke") {
//         smokeValue = 0.90138;
//         rawSmoke = 1;
//     } else {
//         rawSmoke = 0;
//     }

//     if (alcoholQuestion == "More than twice a day") {
//         alcoholValue = 0.01923 * 30 - 0.0004 * 30 * 30
//     } else if (alcoholQuestion == "Twice a day") {
//         alcoholValue = 0.01923 * 20 - 0.0004 * 20 * 20
//     } else if (alcoholQuestion == "Everyday") {
//         alcoholValue = 0.01923 * 10 - 0.0004 * 10 * 10
//     } else if (alcoholQuestion == "Three to five times a week") {
//         alcoholValue = 0.01923 * 5 - 0.0004 * 5 * 5
//     }


//     let fruitVeggieText = "+ 0"; // The value to appear in the prototype tool
//     if (fruitQuestion == "More than twice a day" || vegetableQuestion == "More than twice a day") {
//         fruitVeggieValue = 0.18283;
//         fruitVeggieText = "+36";
//     } else if (fruitQuestion == "Everyday" && vegetableQuestion == "Everyday") {
//         fruitVeggieValue = 0.18283;
//         fruitVeggieText = "+36";
//     }


//     let nutText = "+ 0";
//     if (nutQuestion == "Three to five times a week" || nutQuestion == "Everyday" || nutQuestion == "Once or twice a week") {
//         nutValue = 0.14522;
//         nutText = "+29";
//     } else if (nutQuestion == "More than twice a day" || nutQuestion == "Twice a day") {
//         nutValue = 0.24444;
//         nutText = "+49";
//     }


//     if (grainQuestion == "More than twice a day") {
//         grainValue = 0.03326 * 3 * 3
//     } else if (grainQuestion == "Twice a day") {
//         grainValue = 0.03326 * 3 * 2
//     } else if (grainQuestion == "Everyday") {
//         grainValue = 0.03326 * 3 * 1
//     } else if (grainQuestion == "Three to five times a week") {
//         grainValue = 0.03326 * 3 * 0.5
//     }

//     if (grainLowQuestion == "More than twice a day") {
//         grainLowValue = 0.03326 * 3
//     } else if (grainLowQuestion == "Twice a day") {
//         grainLowValue = 0.03326 * 2
//     } else if (grainLowQuestion == "Everyday") {
//         grainLowValue = 0.03326 * 1
//     } else if (grainLowQuestion == "Three to five times a week") {
//         grainLowValue = 0.03326 * 0.5
//     }

//     if (sugarQuestion == "More than twice a day") {
//         sugarValue = 0.14631 * 3
//     } else if (sugarQuestion == "Twice a day") {
//         sugarValue = 0.14631 * 2
//     } else if (sugarQuestion == "Everyday") {
//         sugarValue = 0.14631 * 1
//     } else if (sugarQuestion == "Three to five times a week") {
//         sugarValue = 0.14631 * 0.5
//     }

//     if (meatQuestion == "More than twice a day") {
//         meatValue = 0.15624 * 3
//     } else if (meatQuestion == "Twice a day") {
//         meatValue = 0.15624 * 2
//     } else if (meatQuestion == "Everyday") {
//         meatValue = 0.15624 * 1
//     } else if (meatQuestion == "Three to five times a week") {
//         meatValue = 0.15624 * 0.5
//     }
//     Diet = fruitVeggieValue + nutValue - sugarValue - meatValue + grainValue + grainLowValue;
//     //
//     const hardSportQuestion = survey.getQuestionByName("activity-hard").value;
//     let hardSportValue = 0;
//     if (hardSportQuestion == "< 15 mins") {
//         hardSportValue = 0.25
//     } else if (hardSportQuestion == "15 - 30 mins") {
//         hardSportValue = 0.5
//     } else if (hardSportQuestion == "30 - 60 mins") {
//         hardSportValue = 1
//     } else if (hardSportQuestion == "1 - 3 hrs") {
//         hardSportValue = 2
//     } else if (hardSportQuestion == "3 - 6 hrs") {
//         hardSportValue = 4.5
//     } else if (hardSportQuestion == "6 - 10 hrs") {
//         hardSportValue = 8
//     } else if (hardSportQuestion == "10+ hrs") {
//         hardSportValue = 10
//     }
//     const modSportQuestion = survey.getQuestionByName("activity-mod").value;
//     let modSportValue = 0;
//     if (modSportQuestion == "< 15 mins") {
//         modSportValue = 0.25
//     } else if (modSportQuestion == "15 - 30 mins") {
//         modSportValue = 0.5
//     } else if (modSportQuestion == "30 - 60 mins") {
//         modSportValue = 1
//     } else if (modSportQuestion == "1 - 3 hrs") {
//         modSportValue = 2
//     } else if (modSportQuestion == "3 - 6 hrs") {
//         modSportValue = 4.5
//     } else if (modSportQuestion == "6 - 10 hrs") {
//         modSportValue = 8
//     } else if (modSportQuestion == "10+ hrs") {
//         modSportValue = 10
//     }
//     rawSport = modSportValue + hardSportValue;
//     //
//     let W = 0;
//     let risk = 0;
//     if (genderQuestion == "Female") {
//         W = 0.10820 * ageQuestion + 0.04676 * BMI + smokeValue - alcoholValue - 0.05113 * (Diet * 10) - 0.02951 * (hardSportValue + modSportValue);
//         risk = (1 - Math.pow(0.9660, Math.exp(W - 6.57301))) * 100
//     } else {
//         W = "We not doing boys yet";
//     }

//     const healthyPerson = (1 - Math.pow(0.9660, Math.exp((-0.557385 + BMI * 0.04676 + ageQuestion * 0.1082) - 6.57301))) * 100;
//     const relativeRisk = risk / healthyPerson;
//     var summaryQuestion = survey.getQuestionByName("summary");
//     let relativeRiskWord = "";
//     let dietImagePath = "";
//     let activityImagePath = "";
//     let bmiImagePath = "";
//     let smokeImagePath = "";
//     let summaryColor = "";
//     let summaryImage = "";
//     // Add image for risks


//     //
//     if (relativeRisk <= 1.0) {
//         relativeRiskWord = "Looking good!";
//         summaryColor = "rgb(0, 178, 29),rgb(160, 241, 96))";
//         summaryImage = "./svg/Results=Good.svg"; // healthy.gif
//     } else if (relativeRisk > 1.0 /* was 1.5 before but confusing for usersy6 */ && relativeRisk < 4) {
//         relativeRiskWord = "Slightly elevated";
//         summaryColor = "rgb(231, 206, 61),rgb(211, 159, 16))";
//         summaryImage = "./svg/Results=Okay.png"; // unhealthy.gif
//     } else {
//         relativeRiskWord = "Very High";
//         summaryColor = "rgb(178, 32, 0),rgb(241, 96, 96))";
//         summaryImage = "./svg/Results=Bad.png"; // vunhealthy.gif
//     }

//     // Activity computation
//     if (hardSportValue + modSportValue < 1.5) {
//         activityImagePath = "./img/bar_red.png";
//     } else if (hardSportValue + modSportValue >= 1.5 && hardSportValue + modSportValue < 3.5) {
//         activityImagePath = "./img/bar_yellow.png";
//     } else {
//         activityImagePath = "./img/bar_green.png";
//     }
//     // Diet computation
//     if (Diet * 10 < 2.0) {
//         dietImagePath = "./img/bar_red.png";
//     } else if (Diet * 10 > 2.0 && Diet * 10 < 4.5) {
//         dietImagePath = "./img/bar_yellow.png";
//     } else {
//         dietImagePath = "./img/bar_green.png";
//     }
//     // BMI computation
//     if (BMI >= 25 && BMI < 30) {
//         bmiImagePath = "./img/bar_yellow.png";
//     } else if (BMI >= 18.5 && BMI < 25) {
//         bmiImagePath = "./img/bar_green.png";
//     } else {
//         bmiImagePath = "./img/bar_red.png";
//     }
//     // Smoke computation
//     if (((smokeValue * 36) / 0.18283).toFixed(0) > 30) {
//         smokeImagePath = "./img/bar_red.png";
//     } else if (((smokeValue * 36) / 0.18283).toFixed(0) > 0 && ((smokeValue * 36) / 0.18283).toFixed(0) <= 30) {
//         smokeImagePath = "./img/bar_yellow.png";
//     } else {
//         smokeImagePath = "./img/bar_green.png";
//     }

//     var summaryQuestion = survey.getQuestionByName("summary");
//     summaryQuestion.html = "<div><center>" + "<p><img alt='' src=" + summaryImage + "></p>" + "</center><br><center><p style='margin:auto;'>Your risk is <h3>" + relativeRiskWord + "</h3><br></p></center></div>"


//     // Good foods replacement
//     // Add logic for what image to show
//     // var imageSequence = ["./img/circle_above.png","./img/circle_av.png","./img/circle_below.png","./img/circle_mbelow.png","./img/circle_mmbelow.png"];
//     const imageSequence = ["./img/vhealthy-graph.png", "./img/healthy-graph.png", "./img/unhealthy-graph.png", "./img/vunhealthy-graph.png", "./img/vvunhealthy-graph.png"];

//     let sequenceVariable = 0;
//     if ((((fruitVeggieValue + nutValue + grainValue + grainLowValue) * 1000) / 5).toFixed(0) == 0) {
//         sequenceVariable = 2
//     } else {
//         sequenceVariable = 1
//     }
//     const goodFoodsQuestion = survey.getQuestionByName("good-foods");
//     goodFoodsQuestion.html =
//         "<h2>You’re doing pretty good... </h2> <br> " +
//         "<div id='chart_good_diet_vertical' style='overflow: hidden !important;'></div>"
//     /*<p>  (You eat low fiber grains <b>"+grainLowQuestion+"</b>, you need a least one serving every day)</p></div></li>";*/

//     // Good foods replacement
//     if ((((sugarValue + meatValue) * 1000) / 5).toFixed(0) != 0) {
//         sequenceVariable += 1
//     }
//     const badFoodsQuestion = survey.getQuestionByName("bad-foods");
//     badFoodsQuestion.html =
//         "<h2>... but you can do better</h2> <br> " +
//         "<div id='chart_bad_diet_vertical' style='overflow: hidden !important;'></div>"


//     // Actitives replacement
//     if (((modSportValue + hardSportValue) * 6).toFixed(0) != 0) {
//         sequenceVariable -= 1
//     } else {
//         sequenceVariable += 1
//     }
//     const activitiesQuestion = survey.getQuestionByName("activities");
//     activitiesQuestion.html = "<h3>Let's look at your exercise :</h3>" +
//         "<div id='chart_exercise_vertical' style='overflow: hidden !important;'></div>"


//     // Smoking replacement
//     if (smokeQuestion == "Used to smoke") {
//         sequenceVariable += 1
//     } else if (smokeQuestion == "Currently smoke") {
//         sequenceVariable += 2
//     }
//     // const smokingQuestion = survey.getQuestionByName("smokinghabits");
//     // smokingQuestion.html = "<h3>Let's look at your smoking habits :</h3> <ul> <li><div> <p> You " + smokeQuestion + ": <span style='color: red;  font-weight: bold;' class='text-orientation-right-css'> - " + ((smokeValue * 36) / 0.18283).toFixed(0) + "</span></p></div></li>" +
//     //     "<p> Any smoking significantly affects your heart health, it's -30 if you used to smoke and -177 if you currently do!</p>" +
//     //     "<br><center><p>Smoking has a huge impact in your heart score. Hopefully you didn't see it come down!</p><br><p><img alt='' src=" + imageSequence[sequenceVariable] + "></p></center>";
// });
