Survey
    .Serializer
    .addProperty("page", "animated:text");

Survey
    .Serializer
    .addProperty("page", "popupdescription:text");

Survey
    .Serializer
    .addProperty("page", "pos:number");

function showDescription(element) {
    document
        .getElementById("questionDescriptionText")
        .innerHTML = element.popupdescription;
    $("#questionDescriptionPopup").modal();
}

let newAnimation;
let oldAnimation;
const animationValues = new Array(9);
let animationValuesHealthy = new Array(9);
const goodFeedbackResponse = ["empty", "Yea! That's the exercise you need every week!", "Yaaa fruits and veggies make your heart healthy!", "Yea nuts are awesome!!", "", "", "Keep 'em grains coming!", "This is great! See how much NOT smoking has helped your score, smoking is a HUGE factor in your heart health"];
const mediumFeedbackResponse = ["empty", "", "", "", "", "", "", "As you can probably guess, smoking is not too good for your heart, but because you stopped it means your heart is healing!"];
const badFeedbackResponse = ["empty", "", "", "", "Eehhh that much soda is not good for your heart!", "Uuuhh a lot of red meat! Too much meat is actually bad for your heart...", "", "", "Smoking any nicotine is one of the biggest factors in reducing your risk of cardiac disease! You know that 60% of teenagers your age don't smoke, if your group of friends smokes you could try to use non-nicotine products for example!"];

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

const json = {
    "title": "HerHeart",
    "showProgressBar": "top",
    "goNextPageAutomatic": true,
    // "triggers": [
    //     {
    //         "type": "complete"
    //         "expression": "{gender} != 'Female'"
    //     }
    // ],
    "pages": [
        {
            "elements": [
                // {
                //     "type": "image",
                //     "name": "logo_image",
                //     "imageLink": "./img/heart-color.png",
                //     "imageWidth": "100px",
                //     "imageHeight": "100px"
                // },
                {
                    "type": "html",
                    "name": "Intro",
                    "html": "<h2 style='text-align:center'> Tell us what you eat every week and we'll tell you how healthy your heart is</h2>" +
                        "<img alt='' style='margin-left:auto; margin-right:auto; display:block; width:70%;' src='svg/Heart.svg'><br>" +
                        // "<p>Not smoking, a healthy weight, a nutritious diet, and daily exercise play important roles in the prevention of cardiovascular disease. In fact, an overall healthy lifestyle may prevent more than 75% of deaths due to cardiovascular disease. Take this quiz to evaluate how your current lifestyle habits affect your cardiovascular health, and discover simple steps you can take to incorporate a Heart Healthy lifestyle into everyday living. Knowledge is power. Take the first step towards protecting your heart and your health!</p>"+
                        "<br><p><b>Press Next to begin this quiz.</b></p>"
                }
            ]
        }, {
            "popupdescription": "P5",
            "pos": 1,
            "elements": [
                {
                    "type": "html",
                    "name": "test",
                    "html": "<div id='sketch-holder'></div>" +
                        "<img alt='' style='margin-left:auto; margin-right:auto; display:block; width:50%;' src='img/vigorous.png'>"
                },
                // {
                //     "type": "image",
                //     "name": "first_page_image",
                //     "imageLink": "./img/vigorous.png",
                //     "imageWidth": "300px",
                //     "imageHeight": "300px"
                // },
                {
                    "type": "radiogroup",
                    "name": "activity-hard",
                    "title": "During a typical week how often do you practice any physical activity where you breathe hard/sweat?",
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
        }, {
            "popupdescription": "P5",
            "pos": 1,
            "elements": [
                {
                    "type": "html",
                    "name": "test",
                    "html": "<div id='sketch-holder'></div>" +
                        "<img alt='' style='margin-left:auto; margin-right:auto; display:block; width:50%;' src='img/moderate.png'>"
                },
                // {
                //     "type": "image",
                //     "name": "first_page_image",
                //     "imageLink": "./img/moderate.png",
                //     "imageWidth": "300px",
                //     "imageHeight": "300px"
                // },
                {
                    "type": "radiogroup",
                    "name": "activity-mod",
                    "title": "During a typical week how often do you practice any physical activity where you exert some effort?",
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
        }, {
            "popupdescription": "P5",
            "animated": "yes",
            "pos": 1,
            "elements": [
                {
                    "type": "html",
                    "name": "activity-score",
                    "html": "<div id='sketch-holder'></div><h3 style='text-align:center'>Yea! That's the exercise you need every week!</h3>"
                }
            ]
        }, {
            "popupdescription": "P5",
            "pos": 2,
            "elements": [
                {
                    "type": "html",
                    "name": "test",
                    "html": "<div id='sketch-holder'></div>" +
                        "<img alt='' style='margin-left:auto; margin-right:auto; display:block; width:50%;' src='img/fruits.png'>"
                },
                // {
                //     "type": "image",
                //     "name": "second_page_image",
                //     "imageLink": "./img/fruits.png",
                //     "imageWidth": "300px",
                //     "imageHeight": "300px"
                // },
                {
                    "type": "radiogroup",
                    "name": "fruits",
                    "title": "During a typical week how often do you have one peice of fruit?",
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
        },
        {
            "popupdescription": "P5",
            "pos": 2,
            "elements": [
                {
                    "type": "html",
                    "name": "test",
                    "html": "<div id='sketch-holder'></div>" +
                        "<img alt='' style='margin-left:auto; margin-right:auto; display:block; width:50%;' src='img/vegetables.png'>"
                },
                {
                    "type": "radiogroup",
                    "name": "vegetables",
                    "title": "During a typical week how often do you have vegetables?",
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
            "pos": 2,
            "elements": [
                {
                    "type": "html",
                    "name": "fruit-score",
                    "html": "<div id='sketch-holder'></div><h3 style='text-align:center'>Yaaa fruits and veggies make your heart healthy!</h3>"
                }
            ]
        }, {
            "popupdescription": "P5",
            "pos": 3,
            "elements": [
                {
                    "type": "html",
                    "name": "test",
                    "html": "<div id='sketch-holder'></div>" +
                        "<img alt='' style='margin-left:auto; margin-right:auto; display:block; width:50%;' src='img/nuts.png'>"
                },
                {
                    "type": "radiogroup",
                    "name": "nuts",
                    "title": "During a typical week how often do you eat a handful of nuts?",
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
            "pos": 3,
            "elements": [
                {
                    "type": "html",
                    "name": "nut-score",
                    "html": "<div id='sketch-holder'></div><h3 style='text-align:center'>Yea nuts are awesome!!</h3>"
                }
            ]
        }, {
            "popupdescription": "P5",
            "pos": 4,
            "elements": [
                {
                    "type": "html",
                    "name": "test",
                    "html": "<div id='sketch-holder'></div>" +
                        "<img alt='' style='margin-left:auto; margin-right:auto; display:block; width:50%;' src='img/soda.png'>"

                },
                {
                    "type": "radiogroup",
                    "name": "sugar",
                    "title": "During a typical week how often do you have 1 can/bottle of soda?",
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
            "pos": 4,
            "elements": [
                {
                    "type": "html",
                    "name": "soda-score",
                    "html": "<div id='sketch-holder'></div><h3 style='text-align:center'>Eehhh that much soda is not good for your heart!</h3>"
                }
            ]
        }, {
            "popupdescription": "P5",
            "pos": 5,
            "elements": [
                {
                    "type": "html",
                    "name": "test",
                    "html": "<div id='sketch-holder'></div>" +
                        "<img alt='' style='margin-left:auto; margin-right:auto; display:block; width:50%;' src='img/meats.png'>"
                },
                {
                    "type": "radiogroup",
                    "name": "meat",
                    "title": "During a typical week how often do you eat RED meat? (Red meat includes beef, pork, lamb, goat)",
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
            "pos": 5,
            "elements": [
                {
                    "type": "html",
                    "name": "test",
                    "html": "<div id='sketch-holder'></div>" +
                        "<img alt='' style='margin-left:auto; margin-right:auto; display:block; width:50%;' src='img/procmeats.png'>"
                },
                {
                    "type": "radiogroup",
                    "name": "meatproc",
                    "title": "And how much processed meat do you eat a week? (Processed meat also include deli meats like chicken)?",
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
            "pos": 5,
            "elements": [
                {
                    "type": "html",
                    "name": "meat-score",
                    "html": "<div id='sketch-holder'></div><h3 style='text-align:center'>Uuuhh a lot of red meat! Too much meat is actually bad for your heart...</h3>"
                }
            ]
        }, {
            "popupdescription": "P5",
            "pos": 6,
            "elements": [
                {
                    "type": "html",
                    "name": "test",
                    "html": "<div id='sketch-holder'></div>" +
                        "<img alt='' style='margin-left:auto; margin-right:auto; display:block; width:50%;' src='img/grains-high.png'>"
                },
                {
                    "type": "radiogroup",
                    "name": "grains-high",
                    "title": "During a typical week how often do you have high fiber grains such as these?",
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
            "pos": 6,
            "elements": [
                {
                    "type": "html",
                    "name": "test",
                    "html": "<div id='sketch-holder'></div><div id='sketch-holder'></div>" +
                        "<img alt='' style='margin-left:auto; margin-right:auto; display:block; width:50%;' src='img/grains-low.png'>"
                },
                {
                    "type": "radiogroup",
                    "name": "grains-low",
                    "title": "Got it, and how about low fiber grains such as these?",
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
            "pos": 6,
            "elements": [
                {
                    "type": "html",
                    "name": "grain-score",
                    "html": "<div id='sketch-holder'></div><h3 style='text-align:center'>Keep 'em grains coming!</h3>"
                }
            ]
        }, {
            "popupdescription": "P5",
            "pos": 7,
            "elements": [
                {
                    "type": "html",
                    "name": "test",
                    "html": "<div id='sketch-holder'></div><div id='sketch-holder'></div>" +
                        "<img alt='' style='margin-left:auto; margin-right:auto; display:block; width:50%;' src='img/smoke.png'>"
                },
                {
                    "type": "radiogroup",
                    "name": "smoke",
                    "title": "Do you smoke cigarrettes or vape any products containing nicotine?",
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
        }, {
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
        }, {
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
                    "name": "good-foods",
                    "html": ""
                }
            ]
        }, {
            "elements": [
                {
                    "type": "html",
                    "name": "bad-foods",
                    "html": ""
                }
            ]
        }, {
            "elements": [
                {
                    "type": "html",
                    "name": "activities",
                    "html": ""
                }
            ]
        }, {
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

Survey
    .StylesManager
    .applyTheme("modern");

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (sender) {
        document
            .querySelector('#surveyResult')
            .textContent = "Result JSON:\n" + JSON.stringify(sender.data, null, 3);
    });


$("#surveyElement").Survey({model: survey});

survey
    .onAfterRenderPage
    .add(function (survey, options) {


        if (options.page.name == "page28") {


            let dietPie = {
                series: [animationValues[2], animationValues[3], animationValues[4], animationValues[5], animationValues[6]],
                chart: {
                    type: 'pie',
                },
                labels: ['Fruits & Veggies', 'Nuts', 'Soda', 'Meat', 'Grains'],
                legend: {
                    show: true,
                    position: 'bottom'
                }
            };

            let dietHorizontal = {
                series: [
                    {
                        name: 'Score',
                        data: [
                            {
                                x: 'Fruits & Veggies',
                                y: animationValues[2],
                                goals: [
                                    {
                                        name: 'Healthy',
                                        value: animationValuesHealthy[2],
                                        strokeHeight: 25,
                                        strokeColor: '#775DD0'
                                    }
                                ]
                            },
                            {
                                x: 'Nuts',
                                y: animationValues[3],
                                goals: [
                                    {
                                        name: 'Healthy',
                                        value: animationValuesHealthy[3],
                                        strokeHeight: 25,
                                        strokeColor: '#775DD0'
                                    }
                                ]
                            },
                            {
                                x: 'Soda',
                                y: animationValues[4],
                                goals: [
                                    {
                                        name: 'Healthy',
                                        value: animationValuesHealthy[4],
                                        strokeHeight: 25,
                                        strokeColor: '#775DD0'
                                    }
                                ]
                            },
                            {
                                x: 'Meat',
                                y: animationValues[5],
                                goals: [
                                    {
                                        name: 'Healthy',
                                        value: animationValuesHealthy[5],
                                        strokeHeight: 25,
                                        strokeColor: '#775DD0'
                                    }
                                ]
                            },
                            {
                                x: 'Soda',
                                y: animationValues[6],
                                goals: [
                                    {
                                        name: 'Healthy',
                                        value: animationValuesHealthy[6],
                                        strokeHeight: 25,
                                        strokeColor: '#775DD0'
                                    }
                                ]
                            },
                        ]
                    }
                ],
                chart: {
                    height: 350,
                    type: 'bar'
                },
                plotOptions: {
                    bar: {
                        columnWidth: '60%',
                        horizontal: true
                    }
                },
                colors: ['#00E396'],
                dataLabels: {
                    enabled: false
                },
                legend: {
                    show: true,
                    showForSingleSeries: true,
                    customLegendItems: ['Score', 'Healthy'],
                    markers: {
                        fillColors: ['#00E396', '#775DD0']
                    }
                }
            };
            let dietVertical2 = {
                series: [
                    {
                        name: 'Score',
                        data: [
                            {
                                x: 'Fruits & Veggies',
                                y: animationValues[2],
                                goals: [
                                    {
                                        name: 'Healthy',
                                        value: animationValuesHealthy[2],
                                        strokeHeight: 5,
                                        strokeColor: '#775DD0'
                                    }
                                ]
                            },
                            {
                                x: 'Nuts',
                                y: animationValues[3],
                                goals: [
                                    {
                                        name: 'Healthy',
                                        value: animationValuesHealthy[3],
                                        strokeHeight: 5,
                                        strokeColor: '#775DD0'
                                    }
                                ]
                            },
                            {
                                x: 'Soda',
                                y: animationValues[4],
                                goals: [
                                    {
                                        name: 'Healthy',
                                        value: animationValuesHealthy[4],
                                        strokeHeight: 5,
                                        strokeColor: '#775DD0'
                                    }
                                ]
                            },
                            {
                                x: 'Meat',
                                y: animationValues[5],
                                goals: [
                                    {
                                        name: 'Healthy',
                                        value: animationValuesHealthy[5],
                                        strokeHeight: 5,
                                        strokeColor: '#775DD0'
                                    }
                                ]
                            },
                            {
                                x: 'Soda',
                                y: animationValues[6],
                                goals: [
                                    {
                                        name: 'Healthy',
                                        value: animationValuesHealthy[6],
                                        strokeHeight: 5,
                                        strokeColor: '#775DD0'
                                    }
                                ]
                            },
                        ]
                    }
                ],
                chart: {
                    height: 350,
                    type: 'bar'
                },
                plotOptions: {
                    bar: {
                        columnWidth: '60%',
                        horizontal: false
                    }
                },
                colors: ['#00E396'],
                dataLabels: {
                    enabled: false
                },
                legend: {
                    show: true,
                    showForSingleSeries: true,
                    customLegendItems: ['Score', 'Healthy'],
                    markers: {
                        fillColors: ['#00E396', '#775DD0']
                    }
                }
            };
            let dietVertical = {
                series: [{
                    name: 'Score',
                    data: [animationValues[2], animationValues[3], animationValues[4], animationValues[5], animationValues[6]]
                }, {
                    name: 'Healthy',
                    data: [animationValuesHealthy[2], animationValuesHealthy[3], animationValuesHealthy[4], animationValuesHealthy[5], animationValuesHealthy[6]]
                }
                ],
                chart: {
                    type: 'bar',
                    height: 350
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '55%',
                        endingShape: 'rounded'
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    show: true,
                    width: 2,
                    colors: ['transparent']
                },
                xaxis: {
                    categories: ['Fruits & Veggies', 'Nuts', 'Soda', 'Meat', 'Grains'],
                },
            };


            setTimeout(() => {
                const chartHorizontal = new ApexCharts(document.querySelector("#chart_diet_horizontal"), dietHorizontal);
                const chartVertical = new ApexCharts(document.querySelector("#chart_diet"), dietVertical);
                const chartVertical2 = new ApexCharts(document.querySelector("#chart_diet_v2"), dietVertical2);
                const chartPie = new ApexCharts(document.querySelector("#chart_diet_pie"), dietPie);
                chartHorizontal.render()
                chartVertical.render()
                chartVertical2.render()
                chartPie.render()
            }, 100)

        }


        // console.log(" ---> " + options.page.name)

        //Do nothing if a page contains no description to show in a modal popup
        if (!options.page.popupdescription)
            return;

        // Add a P5 Element
        function defineSketch(x, y, value, total, colorDisplay, healthyPoints, animate) {
            return function mySketch(p) {
                // P5
                let draft, ready, i, maxvalue, minvalue;
                let start, current;
                let flag;
                let font, fontsize = 20;
                let colorScore;
                // let song;
                p.preload = function preload() {
                    ready = p.loadImage("img/scorebar-full.png");
                    draft = p.loadImage("img/scorebar-empty.png");
                    font = p.loadFont('font/PartyConfettiRegular-eZOn3.ttf');
                }
                p.setup = function setup() {
                    let canvas = p.createCanvas(350, 100);
                    canvas.parent('sketch-holder');
                    p.image(ready, 60, 20);
                    p.image(draft, 60, 20);
                    // song = p.loadSound('assets/goodSound.mp3');
                    minvalue = x;
                    maxvalue = y;
                    i = minvalue - 0.5;
                    // console.log("this is starting point",minvalue);
                    // console.log("this is ending point",maxvalue);
                    // console.log("animating?",animate);
                    flag = 0;
                    p.textFont(font);
                    // p.textSize(fontsize);
                    p.textAlign(p.CENTER, p.CENTER);
                    if (colorDisplay == 'red') {
                        colorScore = p.color(190, 107, 60);
                    } else if (colorDisplay == 'yellow') {
                        colorScore = p.color(188, 164, 34);
                    } else if (colorDisplay == 'green') {
                        colorScore = p.color(60, 190, 175);
                    } else {
                        colorScore = p.color(0, 0, 0);
                    }
                }

                p.draw = function draw() {
                    //     i = i-1;
                    // if (i > maxvalue){
                    // p.copy(ready, 0, 240, 230, minvalue, 0, 240, 230, minvalue);
                    // }
                    if (animate == 1) {
                        p.fillBar();
                        // console.log("fire animate");
                    } else {
                        // console.log("firing?");
                        p.staticBar();
                    }
                    p.textAlign(p.RIGHT);
                    p.drawWords(p.width * 0.1);
                }

                p.fillBar = function fillBar() {
                    if (i < maxvalue) {
                        p.copy(ready, 0, 0, i - 0, 40, 60, 20, i - 0, 40);
                        i = i + 1;
                        // This can be put here as a delay for the whole animation, but it slows down the rendering of the covered object too much
                        // if(flag == 0){
                        // p.wait(500);
                        // flag = 1;
                        // }
                    } else {
                        p.drawScore();
                        // if (song.isPlaying()) {song.stop();}
                        // else {song.play();}
                    }
                }

                p.staticBar = function staticBar() {
                    // i = minvalue+0.5; // Define the minimum value as 0.5 less so that it becomes exactly that value
                    if (flag == 0) {
                        if (i <= minvalue) {
                            p.copy(ready, 0, 0, i - 0, 40, 60, 20, i - 0, 40);
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
                    p.text(total, 40, 30);
                    p.text('Your Score', 99, 10);
                }

                p.drawScore = function drawScore() {
                    p.fill(colorScore);
                    p.textSize(40);
                    p.text("+" + value, 160, 70);
                    p.text('/', 150 + 30, 75);
                    p.text(healthyPoints, 160 + 80, 80);
                }

                // Waiting function
                p.wait = function wait(time) {
                    start = p.millis()
                    do {
                        current = p.millis();
                    }
                    while (current < start + time)
                }
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
                animationValues[3] = animationValues[2] + 20;
            } else {
                animationValues[3] = animationValues[3] = animationValues[2] + parseInt((rawNuts * 20) / 0.5);
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
                animationValues[8] = animationValues[7] + 20 - (parseInt(rawAlcohol * 20) / 3)
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
            } else if (animationValues[options.page.pos] - animationValues[options.page.pos - 1] < animationValuesHealthy[options.page.pos] * 0.4) {
                colorDisplay = 'red';
                displayFeedbackMessage(badFeedbackResponse[options.page.pos]);
            }
            const mySketch = defineSketch(animationValues[options.page.pos - 1] * 1.35, animationValues[options.page.pos] * 1.35, (animationValues[options.page.pos] - animationValues[options.page.pos - 1]) * 5, animationValues[options.page.pos] * 5, colorDisplay, animationValuesHealthy[options.page.pos] * 5, 1);
            newAnimation = new p5(mySketch);
            window.sketchInstance = newAnimation;
            // window.sketchInstance = new p5(newAnimation);
            // console.log("this animates");
        } else {
            if (newAnimation != null) {
                newAnimation.remove();
            }


            const mySketch2 = defineSketch(animationValues[options.page.pos - 1] * 1.35, 0, (animationValues[options.page.pos] - animationValues[options.page.pos - 1]) * 5, animationValues[options.page.pos - 1] * 5, 'none', 0, 0);

            // var mySketch2 = defineSketch(currentPoints,0,0);
            oldAnimation = new p5(mySketch2);
            // var mySketch2 = defineSketch(currentPoints,0,0);
            window.sketchInstance = oldAnimation;

            // window.sketchInstance = new p5(oldAnimation);
        }

        // P5 End ------------ //
    });

survey.onValueChanged.add(function (survey, options) {

    // This alone like this just creates the sketch and adds it to all pages
    // var mySketch = defineSketch(10,50);
    // window.sketchInstance = new p5(mySketch);

    const introQ = survey.getQuestionByName("Intro");
    introQ.html = "<div id='myHeart'></div><h2> Tell us what you eat every week and we'll tell you how healthy your heart is</h2><main></main><br><p>Not smoking, a healthy weight, a nutritious diet, and daily exercise play important roles in the prevention of cardiovascular disease. In fact, an overall healthy lifestyle may prevent more than 75% of deaths due to cardiovascular disease. Take this quiz to evaluate how your current lifestyle habits affect your cardiovascular health, and discover simple steps you can take to incorporate a Heart Healthy lifestyle into everyday living. Knowledge is power. Take the first step towards protecting your heart and your health!</p>" +
        "<br><p><b>Press Next to begin this quiz.</b></p>";

    const ageQuestion = survey.getQuestionByName("age").value;
    const genderQuestion = survey.getQuestionByName("gender").value;
    //
    const weightQuestion = survey.getQuestionByName("weight").value;
    const heightFeetQuestion = survey.getQuestionByName("height-feet").value;
    const heightInchesQuestion = survey.getQuestionByName("height-inches").value;
    BMI = (weightQuestion / (heightFeetQuestion * 12 + heightInchesQuestion) / (heightFeetQuestion * 12 + heightInchesQuestion)) * 703;
    //
    const smokeQuestion = survey.getQuestionByName("smoke").value;
    //
    const alcoholQuestion = survey.getQuestionByName("alcohol").value;
    //
    const fruitQuestion = survey.getQuestionByName("fruits").value;
    const vegetableQuestion = survey.getQuestionByName("vegetables").value;
    const nutQuestion = survey.getQuestionByName("nuts").value;
    const grainQuestion = survey.getQuestionByName("grains-high").value;
    const grainLowQuestion = survey.getQuestionByName("grains-low").value;
    const sugarQuestion = survey.getQuestionByName("sugar").value;
    const meatQuestion = survey.getQuestionByName("meat").value;
    const procmeatQuestion = survey.getQuestionByName("meatproc").value;
    let fruitVeggieValue = 0;
    const fruitValue = 0;
    const veggieValue = 0;
    let nutValue = 0;
    let grainValue = 0;
    let grainLowValue = 0;
    let sugarValue = 0;
    let meatValue = 0;
    const procmeat = 0;
    let smokeValue = 0;
    let alcoholValue = 0;
    const dietArray = [fruitQuestion, vegetableQuestion, nutQuestion, sugarQuestion, meatQuestion, procmeatQuestion, grainQuestion, grainLowQuestion, alcoholQuestion];
    const dietValues = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    // console.log(dietArray);
    for (i = 0; i < dietArray.length; i++) {
        if (dietArray[i] == "More than twice a day") {
            dietValues[i] = 3
        } else if (dietArray[i] == "Twice a day") {
            dietValues[i] = 2
        } else if (dietArray[i] == "Everyday") {
            dietValues[i] = 1
        } else if (dietArray[i] == "Three to five times a week") {
            dietValues[i] = 0.5
        } else if (dietArray[i] == "Once or twice a week") {
            dietValues[i] = 0.3
        } else if (dietArray[i] == "Less than once a week") {
            dietValues[i] = 0.1
        } else if (dietArray[i] == "Never") {
            dietValues[i] = 0
        }
    }
    rawFruits = dietValues[0] + dietValues[1];
    rawNuts = dietValues[2];
    rawSoda = dietValues[3];
    rawMeat = dietValues[4] + dietValues[5];
    rawGrains = dietValues[6] + dietValues[7] / 3;
    rawAlcohol = dietValues[8];

    if (smokeQuestion == "Used to smoke") {
        smokeValue = 0.15285;
        rawSmoke = 0.5;
    } else if (smokeQuestion == "Currently smoke") {
        smokeValue = 0.90138;
        rawSmoke = 1;
    } else {
        rawSmoke = 0;
    }

    if (alcoholQuestion == "More than twice a day") {
        alcoholValue = 0.01923 * 30 - 0.0004 * 30 * 30
    } else if (alcoholQuestion == "Twice a day") {
        alcoholValue = 0.01923 * 20 - 0.0004 * 20 * 20
    } else if (alcoholQuestion == "Everyday") {
        alcoholValue = 0.01923 * 10 - 0.0004 * 10 * 10
    } else if (alcoholQuestion == "Three to five times a week") {
        alcoholValue = 0.01923 * 5 - 0.0004 * 5 * 5
    }


    let fruitVeggieText = "+ 0"; // The value to appear in the prototype tool
    if (fruitQuestion == "More than twice a day" || vegetableQuestion == "More than twice a day") {
        fruitVeggieValue = 0.18283;
        fruitVeggieText = "+36";
    } else if (fruitQuestion == "Everyday" && vegetableQuestion == "Everyday") {
        fruitVeggieValue = 0.18283;
        fruitVeggieText = "+36";
    }


    let nutText = "+ 0";
    if (nutQuestion == "Three to five times a week" || nutQuestion == "Everyday" || nutQuestion == "Once or twice a week") {
        nutValue = 0.14522;
        nutText = "+29";
    } else if (nutQuestion == "More than twice a day" || nutQuestion == "Twice a day") {
        nutValue = 0.24444;
        nutText = "+49";
    }


    if (grainQuestion == "More than twice a day") {
        grainValue = 0.03326 * 3 * 3
    } else if (grainQuestion == "Twice a day") {
        grainValue = 0.03326 * 3 * 2
    } else if (grainQuestion == "Everyday") {
        grainValue = 0.03326 * 3 * 1
    } else if (grainQuestion == "Three to five times a week") {
        grainValue = 0.03326 * 3 * 0.5
    }

    if (grainLowQuestion == "More than twice a day") {
        grainLowValue = 0.03326 * 3
    } else if (grainLowQuestion == "Twice a day") {
        grainLowValue = 0.03326 * 2
    } else if (grainLowQuestion == "Everyday") {
        grainLowValue = 0.03326 * 1
    } else if (grainLowQuestion == "Three to five times a week") {
        grainLowValue = 0.03326 * 0.5
    }

    if (sugarQuestion == "More than twice a day") {
        sugarValue = 0.14631 * 3
    } else if (sugarQuestion == "Twice a day") {
        sugarValue = 0.14631 * 2
    } else if (sugarQuestion == "Everyday") {
        sugarValue = 0.14631 * 1
    } else if (sugarQuestion == "Three to five times a week") {
        sugarValue = 0.14631 * 0.5
    }

    if (meatQuestion == "More than twice a day") {
        meatValue = 0.15624 * 3
    } else if (meatQuestion == "Twice a day") {
        meatValue = 0.15624 * 2
    } else if (meatQuestion == "Everyday") {
        meatValue = 0.15624 * 1
    } else if (meatQuestion == "Three to five times a week") {
        meatValue = 0.15624 * 0.5
    }
    Diet = fruitVeggieValue + nutValue - sugarValue - meatValue + grainValue + grainLowValue;
    //
    const hardSportQuestion = survey.getQuestionByName("activity-hard").value;
    let hardSportValue = 0;
    if (hardSportQuestion == "< 15 mins") {
        hardSportValue = 0.25
    } else if (hardSportQuestion == "15 - 30 mins") {
        hardSportValue = 0.5
    } else if (hardSportQuestion == "30 - 60 mins") {
        hardSportValue = 1
    } else if (hardSportQuestion == "1 - 3 hrs") {
        hardSportValue = 2
    } else if (hardSportQuestion == "3 - 6 hrs") {
        hardSportValue = 4.5
    } else if (hardSportQuestion == "6 - 10 hrs") {
        hardSportValue = 8
    } else if (hardSportQuestion == "10+ hrs") {
        hardSportValue = 10
    }
    const modSportQuestion = survey.getQuestionByName("activity-mod").value;
    let modSportValue = 0;
    if (modSportQuestion == "< 15 mins") {
        modSportValue = 0.25
    } else if (modSportQuestion == "15 - 30 mins") {
        modSportValue = 0.5
    } else if (modSportQuestion == "30 - 60 mins") {
        modSportValue = 1
    } else if (modSportQuestion == "1 - 3 hrs") {
        modSportValue = 2
    } else if (modSportQuestion == "3 - 6 hrs") {
        modSportValue = 4.5
    } else if (modSportQuestion == "6 - 10 hrs") {
        modSportValue = 8
    } else if (modSportQuestion == "10+ hrs") {
        modSportValue = 10
    }
    rawSport = modSportValue + hardSportValue;
    //
    let W = 0;
    let risk = 0;
    if (genderQuestion == "Female") {
        W = 0.10820 * ageQuestion + 0.04676 * BMI + smokeValue - alcoholValue - 0.05113 * (Diet * 10) - 0.02951 * (hardSportValue + modSportValue);
        risk = (1 - Math.pow(0.9660, Math.exp(W - 6.57301))) * 100
    } else {
        W = "We not doing boys yet";
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
        summaryColor = "rgb(0, 178, 29),rgb(160, 241, 96))";
        summaryImage = "./svg/Results=Good.svg"; // healthy.gif
    } else if (relativeRisk > 1.0 /* was 1.5 before but confusing for usersy6 */ && relativeRisk < 4) {
        relativeRiskWord = "Slightly elevated";
        summaryColor = "rgb(231, 206, 61),rgb(211, 159, 16))";
        summaryImage = "./svg/Results=Okay.svg"; // unhealthy.gif
    } else {
        relativeRiskWord = "Very High";
        summaryColor = "rgb(178, 32, 0),rgb(241, 96, 96))";
        summaryImage = "./svg/Results=Bad.svg"; // vunhealthy.gif
    }

    // Activity computation
    if (hardSportValue + modSportValue < 1.5) {
        activityImagePath = "./img/bar_red.png";
    } else if (hardSportValue + modSportValue >= 1.5 && hardSportValue + modSportValue < 3.5) {
        activityImagePath = "./img/bar_yellow.png";
    } else {
        activityImagePath = "./img/bar_green.png";
    }
    // Diet computation
    if (Diet * 10 < 2.0) {
        dietImagePath = "./img/bar_red.png";
    } else if (Diet * 10 > 2.0 && Diet * 10 < 4.5) {
        dietImagePath = "./img/bar_yellow.png";
    } else {
        dietImagePath = "./img/bar_green.png";
    }
    // BMI computation
    if (BMI >= 25 && BMI < 30) {
        bmiImagePath = "./img/bar_yellow.png";
    } else if (BMI >= 18.5 && BMI < 25) {
        bmiImagePath = "./img/bar_green.png";
    } else {
        bmiImagePath = "./img/bar_red.png";
    }
    // Smoke computation
    if (((smokeValue * 36) / 0.18283).toFixed(0) > 30) {
        smokeImagePath = "./img/bar_red.png";
    } else if (((smokeValue * 36) / 0.18283).toFixed(0) > 0 && ((smokeValue * 36) / 0.18283).toFixed(0) <= 30) {
        smokeImagePath = "./img/bar_yellow.png";
    } else {
        smokeImagePath = "./img/bar_green.png";
    }

    var summaryQuestion = survey.getQuestionByName("summary");
    summaryQuestion.html = "<div><center>" + "<p><img alt='' src=" + summaryImage + "></p>" + "</center><br><center><p style='margin:auto;'>Your risk is <h3>" + relativeRiskWord + "</h3><br></p></center></div>" +
        // "<div style=' border-radius: 25px; padding: 20px; background-image: linear-gradient(0deg,  "+summaryColor+";width:75%; margin:auto;'><center><p style='margin:auto;'>Your risk is <h3>"+relativeRiskWord+"</h3><br> Compared to a healthy lifestyle</p></center></div>"+
        // We'll put the images here of the Diet (2.5 points is the average)
        "<center><p> This is your score breakdown:</p></center>" +
        "<br><center><p> BMI <img alt='' src=" + bmiImagePath + "></p></center>" +
        "<br><center><p> Diet <img alt='' src=" + dietImagePath + "></p></center>" +
        // We'll put the images here for the Activity (1.5 hrs is the average)
        "<br><center><p> Activity <img alt='' src=" + activityImagePath + "></p></center>" +
        "<br><center><p> Smoking <img alt='' src=" + smokeImagePath + "></p></center>";

    // Good foods replacement
    // Add logic for what image to show
    // var imageSequence = ["./img/circle_above.png","./img/circle_av.png","./img/circle_below.png","./img/circle_mbelow.png","./img/circle_mmbelow.png"];
    const imageSequence = ["./img/vhealthy-graph.png", "./img/healthy-graph.png", "./img/unhealthy-graph.png", "./img/vunhealthy-graph.png", "./img/vvunhealthy-graph.png"];

    let sequenceVariable = 0;
    if ((((fruitVeggieValue + nutValue + grainValue + grainLowValue) * 1000) / 5).toFixed(0) == 0) {
        sequenceVariable = 2
    } else {
        sequenceVariable = 1
    }
    const goodFoodsQuestion = survey.getQuestionByName("good-foods");
    goodFoodsQuestion.html =
        "<div id='chart_diet_horizontal' style='overflow: hidden !important;'></div>" +
        "<div id='chart_diet_v2' style='overflow: hidden !important;'></div>" +
        "<div id='chart_diet' style='overflow: hidden !important;'></div>" +
        "<div id='chart_diet_pie' style='overflow: hidden !important;'></div>";
    /*<p>  (You eat low fiber grains <b>"+grainLowQuestion+"</b>, you need a least one serving every day)</p></div></li>";*/

    // Good foods replacement
    if ((((sugarValue + meatValue) * 1000) / 5).toFixed(0) != 0) {
        sequenceVariable += 1
    }
    const badFoodsQuestion = survey.getQuestionByName("bad-foods");
    badFoodsQuestion.html = "<h3>Let's look at your diet :</h3> <ul> <li><div> <p>Sugary drinks: <span style='color: red;  font-weight: bold;' class='text-orientation-right-css'> - " + ((sugarValue * 1000) / 5).toFixed(0) + "</span></p><p>(You drink soda <b>" + sugarQuestion + "</b>, the max should be once or twice a week)</p></div></li>" +
        "<li><div><p>Meat: <span style='color:red;  font-weight: bold;' class='text-orientation-right-css'> - " + ((meatValue * 1000) / 5).toFixed(0) + "</span></p><p>(You eat meat <b>" + meatQuestion + "</b>, the max should be once or twice a week)</p></div></li>" +
        "<br><center><p>Watch meat and soda affect your score, did it have a big impact?</p><br><p><img alt='' src=" + imageSequence[sequenceVariable] + "></p></center>";

    // Actitives replacement
    if (((modSportValue + hardSportValue) * 6).toFixed(0) != 0) {
        sequenceVariable -= 1
    } else {
        sequenceVariable += 1
    }
    const activitiesQuestion = survey.getQuestionByName("activities");
    activitiesQuestion.html = "<h3>Let's look at your exercise :</h3> <ul> <li><div> <p>Activities: <span style='color: green;  font-weight: bold;' class='text-orientation-right-css'> + " + ((modSportValue + hardSportValue) * 6).toFixed(0) + " </span></p></div></li>" +
        "<br><center><p>Sports have a big effect don't they? The more exercise the bigger the impact</p><br><p><img alt='' src=" + imageSequence[sequenceVariable] + "></p></center>";
    /*<p>(You do <b>"+(modSportValue+hardSportValue)+"</b> hours of exercise a week you should be doing a minimum 1.5 hours per week)</p>*/

    // Smoking replacement
    if (smokeQuestion == "Used to smoke") {
        sequenceVariable += 1
    } else if (smokeQuestion == "Currently smoke") {
        sequenceVariable += 2
    }
    const smokingQuestion = survey.getQuestionByName("smokinghabits");
    smokingQuestion.html = "<h3>Let's look at your smoking habits :</h3> <ul> <li><div> <p> You " + smokeQuestion + ": <span style='color: red;  font-weight: bold;' class='text-orientation-right-css'> - " + ((smokeValue * 36) / 0.18283).toFixed(0) + "</span></p></div></li>" +
        "<p> Any smoking significantly affects your heart health, it's -30 if you used to smoke and -177 if you currently do!</p>" +
        "<br><center><p>Smoking has a huge impact in your heart score. Hopefully you didn't see it come down!</p><br><p><img alt='' src=" + imageSequence[sequenceVariable] + "></p></center>";
});