Survey
    .Serializer
    .addProperty("page", "animated:text");

Survey
    .Serializer
    .addProperty("page", "popupdescription:text");

Survey
    .Serializer
    .addProperty("page", "pos:number");

Survey
    .StylesManager
    .applyTheme("modern");


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
                        "<br><p><b>Tap the arrow to begin this quiz.</b></p>"
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
        }, {
            "popupdescription": "P5",
            "pos": 1,
            "elements": [
                {
                    "type": "html",
                    "name": "test",
                    "html":
                        "<div id='sketch-holder'></div>" +
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
                        {"value": 0, "imageLink": activity_[0]},
                        {"value": 1, "imageLink": activity_[1]},
                        {"value": 2, "imageLink": activity_[2]},
                        {"value": 3, "imageLink": activity_[3]}],

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
                    "name": "activity-high-title",
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
                        {"value": 0, "imageLink": generic_sport[0]},
                        {"value": 1, "imageLink": generic_sport[1]},
                        {"value": 2, "imageLink": generic_sport[2]},
                        {"value": 3, "imageLink": generic_sport[3]}],

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
                        {"value": 0, "imageLink": activity_[0]},
                        {"value": 1, "imageLink": activity_[1]},
                        {"value": 2, "imageLink": activity_[2]},
                        {"value": 3, "imageLink": activity_[3]}],
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
                    "name": "activity-low-next-title",
                    "html": "<div id='sketch-holder'></div>" +
                        "<h3> <center>Interesting selection 🤔... do spend at least 1 hour a week doing intense physical exercise? </center></h3>" +
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
                        {"value": 0, "imageLink": generic_sport[0]},
                        {"value": 1, "imageLink": generic_sport[1]},
                        {"value": 2, "imageLink": generic_sport[2]},
                        {"value": 3, "imageLink": generic_sport[3]}],
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
                        "<h3><center> Let's talk about food! How do you feel about whole grains? </center></h3>" +
                        "<img alt='' style='margin-left:auto; margin-right:auto; display:block; width:100%;' src='img/grains-high.png'>" +
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
                        {"value": 0, "imageLink": high_grains_[0]},
                        {"value": 1, "imageLink": high_grains_[1]},
                        {"value": 2, "imageLink": high_grains_[2]},
                        {"value": 3, "imageLink": high_grains_[3]}],
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
                    "name": "grains-high-title",
                    "html": "<div id='sketch-holder'></div>" +
                        "<h3> <center>Interesting selection 🤔... do you eat whole grains at least 3-5 times a week?</center></h3>" +
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
                        {"value": 0, "imageLink": activity_[0]},
                        {"value": 1, "imageLink": activity_[1]},
                        {"value": 2, "imageLink": activity_[2]},
                        {"value": 3, "imageLink": activity_[3]}],
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
                        "<h3><center> Not great, but we still have another grain category! How do you feel about regular grains? 👀</center></h3>" +
                        "<img alt='' style='margin-left:auto; margin-right:auto; display:block; width:100%;' src='img/moderate.png'>" +
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
                        {"value": 0, "imageLink": low_grains_[0]},
                        {"value": 1, "imageLink": low_grains_[1]},
                        {"value": 2, "imageLink": low_grains_[2]},
                        {"value": 3, "imageLink": low_grains_[3]}],
                }
            ]
        },
        {
            "popupdescription": "P5",
            "pos": 2,
            "elements": [
                {
                    "type": "html",
                    "name": "grains-low-next-title",
                    "html": "<div id='sketch-holder'></div>" +
                        "<h3> <center>Okay, that's fine butttt... do you eat them at least twice a week? </center></h3>" +
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
                        {"value": 0, "imageLink": activity_[0]},
                        {"value": 1, "imageLink": activity_[1]},
                        {"value": 2, "imageLink": activity_[2]},
                        {"value": 3, "imageLink": activity_[3]}],
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
                        "<h3><center> Okay! Let's do some easy questions now. Do you like fruit?</center></h3>" +
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
                        {"value": 0, "imageLink": fruit_[0]},
                        {"value": 1, "imageLink": fruit_[1]},
                        {"value": 2, "imageLink": fruit_[2]},
                        {"value": 3, "imageLink": fruit_[3]}],
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
                    "name": "fruit-title",
                    "html": "<div id='sketch-holder'></div>" +
                        "<h3> <center>Oof.... 😬 Do you at least eat three servings a day??</center></h3>"
                },
                {
                    "type": "imagepicker",
                    "name": "fruit-next",
                    "title": " ",
                    "isRequired": true,
                    "colCount": 2,
                    "hasNone": false,
                    "choices": [
                        {"value": 0, "imageLink": activity_[0]},
                        {"value": 1, "imageLink": activity_[1]},
                        {"value": 2, "imageLink": activity_[2]},
                        {"value": 3, "imageLink": activity_[3]}],

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
                        "<h3><center> Enough about fruits. Do you like veggies?</center></h3>" +
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
                        {"value": 0, "imageLink": veggies_[0]},
                        {"value": 1, "imageLink": veggies_[1]},
                        {"value": 2, "imageLink": veggies_[2]},
                        {"value": 3, "imageLink": veggies_[3]}],
                }
            ]
        },
        {
            "popupdescription": "P5",
            "pos": 3,
            "elements": [
                {
                    "type": "html",
                    "name": "veggies-title",
                    "html": "<div id='sketch-holder'></div>" +
                        "<h3> <center>Okayyy 😬... Well we all know veggies are good for you. Do you at least eat three servings a day??</center></h3>"
                },
                {
                    "type": "imagepicker",
                    "name": "veggies-next",
                    "title": " ",
                    "isRequired": true,
                    "colCount": 2,
                    "hasNone": false,
                    "choices": [
                        {"value": 0, "imageLink": activity_[0]},
                        {"value": 1, "imageLink": activity_[1]},
                        {"value": 2, "imageLink": activity_[2]},
                        {"value": 3, "imageLink": activity_[3]}],
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
                        "<h3><center> Soooo this one may be a little hard... Are you a nut person?</center></h3>" +
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
                        {"value": 0, "imageLink": nuts_[0]},
                        {"value": 1, "imageLink": nuts_[1]},
                        {"value": 2, "imageLink": nuts_[2]},
                        {"value": 3, "imageLink": nuts_[3]}],
                }
            ]
        },
        {
            "popupdescription": "P5",
            "pos": 4,
            "elements": [
                {
                    "type": "html",
                    "name": "nuts-title",
                    "html": "<div id='sketch-holder'></div>" +
                        "<h3> <center>Oof.... 😬 Do you at least eat two servings a week??</center></h3>"
                },
                {
                    "type": "imagepicker",
                    "name": "nuts-next",
                    "title": " ",
                    "isRequired": true,
                    "colCount": 2,
                    "hasNone": false,
                    "choices": [
                        {"value": 0, "imageLink": activity_[0]},
                        {"value": 1, "imageLink": activity_[1]},
                        {"value": 2, "imageLink": activity_[2]},
                        {"value": 3, "imageLink": activity_[3]}],
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
                        "<h3><center> Let's talk about processed meats... do you eat them alot?</center></h3>" +
                        "<img alt='' style='margin-left:auto; margin-right:auto; display:block; width:100%;' src='img/procmeats.png'>" +
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
                        {"value": 0, "imageLink": processed_[0]},
                        {"value": 1, "imageLink": processed_[1]},
                        {"value": 2, "imageLink": processed_[2]},
                        {"value": 3, "imageLink": processed_[3]}],
                }
            ]
        },
        {
            "popupdescription": "P5",
            "pos": 5,
            "elements": [
                {
                    "type": "html",
                    "name": "procmeats-title",
                    "html": "<div id='sketch-holder'></div>" +
                        "<h3> <center>Processed meats aren't great for your heart.... Do you eat one serving or less a week??</center></h3>" +
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
                        {"value": 0, "imageLink": activity_[0]},
                        {"value": 1, "imageLink": activity_[1]},
                        {"value": 2, "imageLink": activity_[2]},
                        {"value": 3, "imageLink": activity_[3]}],
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
                        "<h3><center> Red meats aren't the best for your heart either.... 😬 Do you eat one serving or less a week??</center></h3>" +
                        "<img alt='' style='margin-left:auto; margin-right:auto; display:block; width:100%;' src='img/meats.png'>" +
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
                        {"value": 0, "imageLink": redmeat_[0]},
                        {"value": 1, "imageLink": redmeat_[1]},
                        {"value": 2, "imageLink": redmeat_[2]},
                        {"value": 3, "imageLink": redmeat_[3]}],
                }
            ]
        },
        {
            "popupdescription": "P5",
            "pos": 5,
            "elements": [
                {
                    "type": "html",
                    "name": "redmeat-next-title",
                    "html": "<div id='sketch-holder'></div>" +
                        "<h3> <center>Red meats aren't the best for your heart either.... 😬 Do you eat one serving or less a week??</center></h3>" +
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
                        {"value": 0, "imageLink": activity_[0]},
                        {"value": 1, "imageLink": activity_[1]},
                        {"value": 2, "imageLink": activity_[2]},
                        {"value": 3, "imageLink": activity_[3]}],
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
                        "<h3><center> Do you drink a lot of soda?</center></h3>" +
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
                        {"value": 0, "imageLink": soda_[0]},
                        {"value": 1, "imageLink": soda_[1]},
                        {"value": 2, "imageLink": soda_[2]},
                        {"value": 3, "imageLink": soda_[3]}],
                }
            ]
        },
        {
            "popupdescription": "P5",
            "pos": 6,
            "elements": [
                {
                    "type": "html",
                    "name": "soda-title",
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
                        {"value": 0, "imageLink": activity_[0]},
                        {"value": 1, "imageLink": activity_[1]},
                        {"value": 2, "imageLink": activity_[2]},
                        {"value": 3, "imageLink": activity_[3]}],
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
                        {"value": 0, "imageLink": smoke_[0]},
                        {"value": 0.5, "imageLink": smoke_[1]},
                        {"value": 1, "imageLink": smoke_[2]}]
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
        },
        // Alcohol
        {
            "popupdescription": "P5",
            "pos": 8,
            "visibleIf": "{age}>=21",
            "elements": [
                {
                    "type": "html",
                    "name": "test",
                    "html": "<div id='sketch-holder'>" +
                        "<h3><center> Oh! You are 21+, let me ask you then, do you drink alcohol??</center></h3>" +
                        "</div><img alt='' style='margin-left:auto; margin-right:auto; display:block; width:50%;' src='img/alcohol.png'>" +
                        "<p><center>One glass = 4 ounces of wine, 12 ounces of beer</center></p>"
                },
                {
                    "type": "imagepicker",
                    "name": "alcohol",
                    "title": " ",
                    "isRequired": true,
                    "colCount": 1,
                    "hasNone": false,
                    "choices": [
                        {"value": 0, "imageLink": alcohol_[0]},
                        {"value": 1, "imageLink": alcohol_[1]},
                        {"value": 2, "imageLink": alcohol_[2]},
                        {"value": 3, "imageLink": alcohol_[3]}]
                }
            ]
        }, {
            "popupdescription": "P5",
            "pos": 8,
            "visibleIf": "{age}>=21",
            "elements": [
                {
                    "type": "html",
                    "name": "alcohol-title",
                    "html": "<div id='sketch-holder'></div>" +
                        "<h3> <center>Alcohol isn't super good for you.... 😬 How many glasses do you drink in a week?</center></h3>"
                },
                {
                    "type": "imagepicker",
                    "name": "alcohol-next",
                    "title": " ",
                    "isRequired": true,
                    "colCount": 1,
                    "hasNone": false,
                    "choices": [
                        {"value": 0, "imageLink": activity_[0]},
                        {"value": 1, "imageLink": activity_[1]},
                        {"value": 2, "imageLink": activity_[2]},
                        {"value": 3, "imageLink": activity_[3]}],
                }
            ]
        },
        // Alcohol feedback
        {
            "popupdescription": "P5",
            "animated": "yes",
            "pos": 8,
            "visibleIf": "{age}>=21",
            "elements": [
                {
                    "type": "html",
                    "name": "test",
                    "html": "<div id='sketch-holder'></div><h3 style='text-align:center'>Gotcha! You may know this but one glass of wine a day is actually beneficial to your heart health, just one though 👀</h3>",
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
        },
        { // This question needs logic for people that accidentally put too much or too little
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
        },
        {
            "elements": [
                {
                    "type": "html",
                    "name": "good-foods",
                    "html": "",
                }
            ]
        }, {
            "elements": [
                {
                    "type": "html",
                    "name": "bad-foods",
                    "html": "",
                }
            ]
        }, {
            "elements": [
                {
                    "type": "html",
                    "name": "activities",
                    "html": "",
                }
            ]
        },


        {
            "elements": [
                {
                    "type": "html",
                    "name": "feedbackResponse",
                    "html": "<div id='sketch-holder'></div>" +
                        "<h3><center> Awesome, we love to hear that! </center></h3>" +
                        "<p><center>We've got some suggestions just for you too. Do you wanna see them?</center></p>"
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
                            "imageLink": './svg/no-am-good.svg'
                        },
                    ]
                }
            ]
        },
        // {
        //     "elements": [
        //         {
        //             "type": "html",
        //             "name": "test",
        //             "visibleIf": "{awesomeWeLoveToHearThat} < 1",
        //             "html": "<div id='sketch-holder'></div>" +
        //                 "<h3><center> That's okay, you've got time! </center></h3>" +
        //                 "<p><center>We've got some suggestions just for you too. Do you wanna see them?</center></p>"
        //         },
        //         {
        //             "visibleIf": "{awesomeWeLoveToHearThat} < 1",
        //             "type": "imagepicker",
        //             "name": "thatIsOkayYouGotTime",
        //             "title": " ",
        //             "isRequired": true,
        //             "colCount": 1,
        //             "hasNone": false,
        //             "choices": [
        //                 {
        //                     "value": 0,
        //                     "imageLink": './svg/yes-lets-see.svg'
        //                 },
        //                 {
        //                     "value": 1,
        //                     "imageLink": './svg/no-am-good.svg'
        //                 },
        //             ]
        //         }
        //     ]
        // },
        {
            "elements": [
                {
                    "type": "html",
                    "visibleIf": "{awesomeWeLoveToHearThat} < 1",
                    "html": `
                    <div class="uk-container">
                        <ul uk-accordion>
                            <li>
                                <a class="uk-accordion-title" href="#">
                                    <div uk-grid class="uk-margin-auto-vertical">
                                        <div class="uk-flex-inline uk-width-expand">
                                            Nutrition
                                            <hr class="uk-width-expand" style="margin: auto 0px">
                                        </div>
                                    </div>
                                </a>
                                <div class="uk-accordion-content">
                                    <p>We see you eat a lot of fruits & veggies, and it’s making your heart very happy! Fruits and veggies are great for your heart because ....</p>
                                    <p>We also noticed you love sugary drinks - who doesn’t?! But we recommend cutting back because your heart ...</p>
                                    <div style=\"left: 0; width: 80%; height: 0; position: relative; padding-bottom: 140%; padding-top: 120px;\">\n" +
                    "                   <iframe src=\"https://www.tiktok.com/embed/6937433017707171077\"\n" +
                    "                   style=\"top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: 0;\" allowfullscreen\n" +
                    "                   scrolling=\"no\" allow=\"encrypted-media;\"></iframe>" +
                        "           </div>
                                </div>
                            </li>
                            <li>
                                <a class="uk-accordion-title" href="#">
                                    <div uk-grid>
                                        <div class="uk-flex-inline uk-width-expand">
                                            Exercise
                                            <hr class="uk-width-expand" style="margin: auto 0px">
                                        </div>
                                    </div>
                                </a>
                                <div class="uk-accordion-content">
                                    <div style=\"left: 0; width: 80%; height: 0; position: relative; padding-bottom: 140%; padding-top: 120px;\">\n" +
                        "            <iframe src=\"https://www.tiktok.com/embed/6885517120382323973\"\n" 0
                        "                style=\"top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: 0;\" allowfullscreen\n" +
                        "                scrolling=\"no\" allow=\"encrypted-media;\"></iframe>" +
                        "           </div>
                                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute irure dolor reprehenderit.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    `
                }
            ]
        },
        {
            "elements": [
                {
                    "type": "html",
                    "name": "Intro",
                    "html": "<h3 style='text-align:center'> Remember, we’re here for you!</h3>" +
                        "<p>If you want to look at your suggestions later or spread the love and info, feel free to save your results and share this quiz.</p>" +
                        "<img alt='' style='margin-left:auto; margin-right:auto; display:block; width:70%;' src='svg/Heart.svg'><br>",
                },
            ]
        },


    ]
};

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


survey
    .onAfterRenderPage
    .add(function (survey, options) {

        console.log(options.page.name)


        // Send data to firebase on the user's responses
        if (options.page.name == "page43" || options.page.name == "page44") {
            writeUserData(survey.data);
        }


        // P5 End ------------ //
        // Modify pages for Buzzfeed style
        // Okay so this works it seems like
        if (options.page.name == "page3") {
            if (survey.getQuestionByName("activity-high").value > 1) {
                survey.getQuestionByName("activity-high-title").html = "<div id='sketch-holder'></div> <br>" + '<h3><center>Nice! Butttttt do spend at least 1-2 hours a week doing intense physical exercise?</center></h3>';
                survey.getQuestionByName("activity-high-next").choices = [
                    {"value": 0.75, "imageLink": generic_sport[2]},
                    {"value": 2, "imageLink": generic_sport[3]},
                    {"value": 8, "imageLink": generic_sport[4]},
                    {"value": 10, "imageLink": generic_sport[5]}];

            } else {
                survey.getQuestionByName("activity-high-title").html = "<div id='sketch-holder'></div> <br>" + '<h3><center>Interesting selection 🤔... do spend at least 1-2 hours a week doing intense physical exercise?</center></h3>';
                survey.getQuestionByName("activity-high-next").choices = [
                    {"value": 0, "imageLink": generic_sport[0]},
                    {"value": 0.25, "imageLink": generic_sport[1]},
                    {"value": 0.75, "imageLink": generic_sport[2]},
                    {"value": 2, "imageLink": generic_sport[3]}];
            }
        }

        if (options.page.name == "page4") {
            if (survey.getQuestionByName("activity-high-next").value >= 2) {
                survey.getQuestionByName("activity-low-title").html = "<div id='sketch-holder'></div>" +
                    "<h3><center> Nice job on your intense exercise! Do you also like doing low intensity exercise? </center></h3>" +
                    "<img alt='' style='margin-left:auto; margin-right:auto; display:block; width:100%;' src='img/moderate.png'>" +
                    "<p><center style='font-size:14px;'>Examples: walking, dancing, riding a bike, playing with dog, swimming, marching band</center></p>";

            } else {
                survey.getQuestionByName("activity-low-title").html = "<div id='sketch-holder'></div>" +
                    "<h3><center> Okay, so you don't do much intense exercise… Do you like doing low intensity exercise? </center></h3>" +
                    "<img alt='' style='margin-left:auto; margin-right:auto; display:block; width:100%;' src='img/moderate.png'>" +
                    "<p><center style='font-size:14px;'>Examples: walking, dancing, riding a bike, playing with dog, swimming, marching band</center></p>";
            }
        }

        if (options.page.name == "page5") {
            if (survey.getQuestionByName("activity-low").value > 1) {
                survey.getQuestionByName("activity-low-next-title").html = "<div id='sketch-holder'></div> <br>" +
                    '<h3><center>Nice! Butttttt do you spend at least 1-2 hours a week doing low intensity physical exercise?</center></h3>';
                survey.getQuestionByName("activity-low-next").choices = [
                    {"value": 0.75, "imageLink": generic_sport[2]},
                    {"value": 2, "imageLink": generic_sport[3]},
                    {"value": 8, "imageLink": generic_sport[4]},
                    {"value": 10, "imageLink": generic_sport[5]}];

            } else {
                survey.getQuestionByName("activity-low-next-title").html = "<div id='sketch-holder'></div> <br>" +
                    '<h3><center>Interesting selection 🤔... do you spend 1-2 hours a week doing low intensity physical exercise?</center></h3>';
                survey.getQuestionByName("activity-low-next").choices = [
                    {"value": 0, "imageLink": generic_sport[0]},
                    {"value": 0.25, "imageLink": generic_sport[1]},
                    {"value": 0.75, "imageLink": generic_sport[2]},
                    {"value": 2, "imageLink": generic_sport[3]}];
            }
        }

        if (options.page.name == "page8") {
            if (survey.getQuestionByName("grains-high").value > 1) {
                survey.getQuestionByName("grains-high-title").html = "<div id='sketch-holder'></div> <br>" +
                    '<h3><center>Nice! Butttttt do you eat them at least 3-5 times a week?</center></h3>';
                survey.getQuestionByName("grains-high-next").choices = [
                    {"value": 0.3, "imageLink": grains_high_a[2]},
                    {"value": 0.5, "imageLink": grains_high_a[3]},
                    {"value": 1, "imageLink": grains_high_a[4]},
                    {"value": 2, "imageLink": grains_high_a[5]}];
            } else {
                survey.getQuestionByName("grains-high-title").html = "<div id='sketch-holder'></div> <br>" +
                    '<h3><center>Interesting selection 🤔... do you eat whole grains at least 3-5 times a week?</center></h3>';
                survey.getQuestionByName("grains-high-next").choices = [
                    {"value": 0, "imageLink": grains_high_a[0]},
                    {"value": 0.1, "imageLink": grains_high_a[1]},
                    {"value": 0.3, "imageLink": grains_high_a[2]},
                    {"value": 0.5, "imageLink": grains_high_a[3]}];
            }
        }

        if (options.page.name == "page9") {
            if (survey.getQuestionByName("grains-high-next").value >= 3) {
                survey.getQuestionByName("grains-low-title").html = "<div id='sketch-holder'></div>" +
                    "<h3><center> Great! Now...... how do you feel about regular grains? 👀 </center></h3>" +
                    "<img alt='' style='margin-left:auto; margin-right:auto; display:block; width:100%;' src='img/grains-low.png'>" +
                    "<p><center style='font-size:14px;'>Examples: sugary cereals, white bread, pancakes, bagels, crackers</center></p>";

            } else {
                survey.getQuestionByName("grains-low-title").html = "<div id='sketch-holder'></div>" +
                    "<h3><center> Not great, but we still have another grain category! How do you feel about regular grains? 👀</center></h3>" +
                    "<img alt='' style='margin-left:auto; margin-right:auto; display:block; width:100%;' src='img/grains-low.png'>" +
                    "<p><center style='font-size:14px;'>Examples: sugary cereals, white bread, pancakes, bagels, crackers</center></p>";
            }
        }

        if (options.page.name == "page10") {
            if (survey.getQuestionByName("grains-low").value > 1) {
                survey.getQuestionByName("grains-low-next-title").html = "<div id='sketch-holder'></div> <br>" +
                    '<h3><center>The more grains the better! Do you eat them at least twice a week?</center></h3>';
                survey.getQuestionByName("grains-low-next").choices = [
                    {"value": 0.3, "imageLink": grains_low_a[2]},
                    {"value": 0.5, "imageLink": grains_low_a[3]},
                    {"value": 1, "imageLink": grains_low_a[4]},
                    {"value": 2, "imageLink": grains_low_a[5]}];

            } else {
                survey.getQuestionByName("grains-low-next-title").html = "<div id='sketch-holder'></div> <br>" +
                    '<h3><center>Okay, that’s fine butttt... do you eat them at least twice a week?</center></h3>';
                survey.getQuestionByName("grains-low-next").choices = [
                    {"value": 0, "imageLink": grains_low_a[0]},
                    {"value": 0.1, "imageLink": grains_low_a[1]},
                    {"value": 0.3, "imageLink": grains_low_a[2]},
                    {"value": 0.5, "imageLink": grains_low_a[3]}];
            }
        }

        if (options.page.name == "page13") {
            if (survey.getQuestionByName("fruit").value > 1) {
                survey.getQuestionByName("fruit-title").html = "<div id='sketch-holder'></div> <br>" +
                    '<h3><center>Nice, now prove it 👀. Do you eat at least three servings a day??</center></h3>';
                survey.getQuestionByName("fruit-next").choices = [
                    {"value": 0.5, "imageLink": fruit_a[1]},
                    {"value": 1, "imageLink": fruit_a[2]},
                    {"value": 2, "imageLink": fruit_a[3]},
                    {"value": 3, "imageLink": fruit_a[4]}];
            } else {
                survey.getQuestionByName("fruit-title").html = "<div id='sketch-holder'></div> <br>" +
                    '<h3><center>Oof.... 😬 Do you at least eat three servings a day??</center></h3>';
                survey.getQuestionByName("fruit-next").choices = [
                    {"value": 0, "imageLink": fruit_a[0]},
                    {"value": 0.5, "imageLink": fruit_a[1]},
                    {"value": 1, "imageLink": fruit_a[2]},
                    {"value": 2, "imageLink": fruit_a[3]}];
            }
        }

        if (options.page.name == "page15") {
            if (survey.getQuestionByName("veggies").value > 1) {
                survey.getQuestionByName("veggies-title").html = "<div id='sketch-holder'></div> <br>" +
                    '<h3><center>Nice, veggies are super important for good heart health! Do you eat at least three servings a day??</center></h3>';
                survey.getQuestionByName("veggies-next").choices = [
                    {"value": 0.5, "imageLink": veggies_a[1]},
                    {"value": 1, "imageLink": veggies_a[2]},
                    {"value": 2, "imageLink": veggies_a[3]},
                    {"value": 3, "imageLink": veggies_a[4]}];
            } else {
                survey.getQuestionByName("veggies-title").html = "<div id='sketch-holder'></div> <br>" +
                    '<h3><center>Okayyy 😬... Well we all know veggies are good for you. Do you at least eat three servings a day??</center></h3>';
                survey.getQuestionByName("veggies-next").choices = [
                    {"value": 0, "imageLink": veggies_a[0]},
                    {"value": 0.5, "imageLink": veggies_a[1]},
                    {"value": 1, "imageLink": veggies_a[2]},
                    {"value": 2, "imageLink": veggies_a[3]}];
            }
        }

        if (options.page.name == "page18") {
            if (survey.getQuestionByName("nuts").value > 1) {
                survey.getQuestionByName("nuts-title").html = "<div id='sketch-holder'></div> <br>" +
                    '<h3><center>Nice, now prove it 👀. Do you eat at least two servings a week??</center></h3>';
                survey.getQuestionByName("nuts-next").choices = [
                    {"value": 1, "imageLink": nuts_a[1]},
                    {"value": 2, "imageLink": nuts_a[2]},
                    {"value": 3, "imageLink": nuts_a[3]},
                    {"value": 4, "imageLink": nuts_a[4]}];
            } else {
                survey.getQuestionByName("nuts-title").html = "<div id='sketch-holder'></div> <br>" +
                    '<h3><center>Oof.... 😬 Do you at least eat two servings a week??</center></h3>';
                survey.getQuestionByName("nuts-next").choices = [
                    {"value": 0, "imageLink": nuts_a[0]},
                    {"value": 1, "imageLink": nuts_a[1]},
                    {"value": 2, "imageLink": nuts_a[2]},
                    {"value": 3, "imageLink": nuts_a[3]}];
            }
        }

        if (options.page.name == "page21") {
            if (survey.getQuestionByName("procmeats").value > 1) {
                survey.getQuestionByName("procmeats-title").html = "<div id='sketch-holder'></div> <br>" +
                    '<h3><center>Okay! Too much processed meat isn’t good for your heart. Do you eat one serving or less a week??</center></h3>';
                survey.getQuestionByName("procmeats-next").choices = [
                    {"value": 0.3, "imageLink": processed_a[2]},
                    {"value": 0.5, "imageLink": processed_a[3]},
                    {"value": 1, "imageLink": processed_a[4]},
                    {"value": 2, "imageLink": processed_a[5]}];
            } else {
                survey.getQuestionByName("procmeats-title").html = "<div id='sketch-holder'></div> <br>" +
                    '<h3><center>Processed meats aren’t great for your heart.... Do you eat one serving or less a week??</center></h3>';
                survey.getQuestionByName("procmeats-next").choices = [
                    {"value": 0, "imageLink": processed_a[0]},
                    {"value": 0.1, "imageLink": processed_a[1]},
                    {"value": 0.3, "imageLink": processed_a[2]},
                    {"value": 0.5, "imageLink": processed_a[3]}];
            }
        }

        if (options.page.name == "page22") {
            if (survey.getQuestionByName("procmeats-next").value >= 3) {
                survey.getQuestionByName("redmeat-title").html = "<div id='sketch-holder'></div>" +
                    "<h3><center> Hmm, could be better... do you eat red meat regularly? </center></h3>" +
                    "<img alt='' style='margin-left:auto; margin-right:auto; display:block; width:100%;' src='img/meats.png'>" +
                    "<p><center style='font-size:14px;'>Examples: ground beef, steak, lamb, pork, veal</center></p>";

            } else {
                survey.getQuestionByName("redmeat-title").html = "<div id='sketch-holder'></div>" +
                    "<h3><center>That's great! Now what about your red meat intake?</center></h3>" +
                    "<img alt='' style='margin-left:auto; margin-right:auto; display:block; width:100%;' src='img/meats.png'>" +
                    "<p><center style='font-size:14px;'>Examples: ground beef, steak, lamb, pork, veal</center></p>";
            }
        }

        if (options.page.name == "page23") {
            if (survey.getQuestionByName("redmeat").value > 1) {
                survey.getQuestionByName("redmeat-next-title").html = "<div id='sketch-holder'></div> <br>" +
                    '<h3><center>Okay! Too much red meat can reduce your heart health. Do you eat one serving or less a week??</center></h3>';
                survey.getQuestionByName("redmeat-next").choices = [
                    {"value": 0.3, "imageLink": redmeat_a[2]},
                    {"value": 0.5, "imageLink": redmeat_a[3]},
                    {"value": 1, "imageLink": redmeat_a[4]},
                    {"value": 2, "imageLink": redmeat_a[5]}];
            } else {
                survey.getQuestionByName("redmeat-next-title").html = "<div id='sketch-holder'></div> <br>" +
                    '<h3><center>Red meats aren’t the best for your heart either.... 😬 Do you eat one serving or less a week??</center></h3>';
                survey.getQuestionByName("redmeat-next").choices = [
                    {"value": 0, "imageLink": redmeat_a[0]},
                    {"value": 0.1, "imageLink": redmeat_a[1]},
                    {"value": 0.3, "imageLink": redmeat_a[2]},
                    {"value": 0.5, "imageLink": redmeat_a[3]}];
            }
        }

        if (options.page.name == "page26") {

            if (survey.getQuestionByName("soda").value > 1) {
                survey.getQuestionByName("soda-title").html = "<div id='sketch-holder'></div> <br>" +
                    '<h3><center>Okay! Too much soda can reduce your heart health. Do you two or less a week??</center></h3>';
                survey.getQuestionByName("soda-next").choices = [
                    {"value": 0.3, "imageLink": soda_a[2]},
                    {"value": 0.5, "imageLink": soda_a[3]},
                    {"value": 1, "imageLink": soda_a[4]},
                    {"value": 2, "imageLink": soda_a[5]}];
            } else {
                survey.getQuestionByName("soda-title").html = "<div id='sketch-holder'></div> <br>" +
                    '<h3><center>Sodas aren’t the best for your heart either.... 😬 Do you drink two or or less a week??</center></h3>';
                survey.getQuestionByName("soda-next").choices = [
                    {"value": 0, "imageLink": soda_a[0]},
                    {"value": 0.1, "imageLink": soda_a[1]},
                    {"value": 0.3, "imageLink": soda_a[2]},
                    {"value": 0.5, "imageLink": soda_a[3]}];
            }
        }

        if (options.page.name == "page32") {
            if (survey.getQuestionByName("alcohol").value > 1) {
                survey.getQuestionByName("alcohol-title").html = "<div id='sketch-holder'></div> <br>" +
                    '<h3><center>Okay! Actually drinking alcohol can improve your heart health. Do you drink around 2 to 5 glasses a week?</center></h3>';
                survey.getQuestionByName("alcohol-next").choices = [
                    {"value": 0.3, "imageLink": alcohol_a[2]},
                    {"value": 0.5, "imageLink": alcohol_a[3]},
                    {"value": 1, "imageLink": alcohol_a[4]},
                    {"value": 2, "imageLink": alcohol_a[5]}];
            } else {
                survey.getQuestionByName("alcohol-title").html = "<div id='sketch-holder'></div> <br>" +
                    '<h3><center>Alcohol is a bit tricky, a lot isn’t super good for you, but none isn’t either.... 😬 Do you drink about one glass or less a day?</center></h3>';
                survey.getQuestionByName("alcohol-next").choices = [
                    {"value": 0, "imageLink": alcohol_a[0]},
                    {"value": 0.1, "imageLink": alcohol_a[1]},
                    {"value": 0.3, "imageLink": alcohol_a[2]},
                    {"value": 0.5, "imageLink": alcohol_a[3]}];
            }
        }


        if (options.page.name == "page37") {
            console.log("----------------------")
            calculateGoodBadDiet()
        }


        if (options.page.name == "page39") {

            console.log(38294792479247924924204)
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
                                <div class="ball left" style="left:${scoreData[categoriesKey]}%"></div>
                                   `
                if (categoriesKey < 3) {
                    nutritionSummary += `
                                                <div class="red"></div>
                                                <div class="yellow"></div>
                                                <div class="green"></div>
                                                </div>
                                               `
                }

                if (categoriesKey > 2) {
                    nutritionSummary += `
                                                <div class="green-start"></div>
                                                <div class="yellow"></div>
                                                <div class="red-end"></div>
                                                </div>
                                               `
                }

                nutritionSummary +=
                    `</div>
                    </div>
                    <br>
                </div>
                `
            }

            nutritionSummary += `
                <div class="uk-container">
                    <div uk-grid>
                        <div class="uk-width-1-3"></div>
                        <div class="uk-width-expand uk-position-relative">
                            <div uk-grid class="uk-child-width-1-3 height">
                                <div class="border-left-bottom-right uk-padding-remove-left">
                                    <p class="uk-text-meta uk-text-light uk-text-nowrap"> < 3x a week</p>
                                </div>
                                <div class="border-bottom uk-padding-remove-left">
                                    <p class="uk-text-meta uk-text-light uk-text-nowrap"> 3-5x a week</p></div>
                                <div class="border-left-bottom-right uk-padding-remove-left">
                                    <p class="uk-text-meta uk-text-light uk-text-nowrap"> > 5x a week</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                        `

            setTimeout(() => {
                $("#nutritionSummary").html(nutritionSummary)
            }, 200)
        }

        if (options.page.name == "page40") {

            let optionsRadialBar = {
                series: [survey.getQuestionByName("activity-high-next").value * 12.5, survey.getQuestionByName("activity-low-next").value * 12.5],
                colors: ["#FF8534", "#2FD9FD"],
                chart: {
                    height: 260,
                    type: 'radialBar',
                },
                stroke: {
                    lineCap: 'round'
                }, legend: {
                    show: false,
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
                                formatter: function (val) {
                                    return val + ' hrs'
                                }
                            },
                            total: {
                                show: true,
                                label: "Total"
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

        if (options.page.name == "page41") {

            let flag = 0
            setTimeout(() => {

                let slider = document.getElementById('slider');

                noUiSlider.create(slider, {
                    start: 5,
                    pips: {
                        mode: 'positions',
                        values: [50],
                        density: 50,
                        stepped: true
                    },
                    range: {
                        'min': 0,
                        'max': 10
                    }
                });
                feedbackText = slider.noUiSlider.get() > 5 ? "Awesome, we love to hear that!" : "That’s okay, you’ve got time!"
                $(".sv-footer__next-btn").css("display", 'none')
                slider.noUiSlider.on('update', function (values, handle) {
                    flag++
                    if (flag > 1)
                        $(".sv-footer__next-btn").css("display", 'unset')
                    noUiSliderUpdate = values
                });


            }, 300)
        }


        if (options.page.name == "page42") {
            console.log("im in 42");
        }

        if (options.page.name == "page42") {
            console.log("im in page 42");
            console.log(survey.getQuestionByName('activities').value);

            if (noUiSliderUpdate > 5) {
                survey.getQuestionByName('feedbackResponse').html = "<div id='sketch-holder'></div> <br>" +
                    "<h3><center> Awesome, we love to hear that! </center></h3>" +
                    "<p><center>We've got some suggestions just for you too. Do you wanna see them?</center></p>";
            } else {
                survey.getQuestionByName('feedbackResponse').html = "<div id='sketch-holder'></div> <br>" +
                    "<h3><center> That's okay, you've got time! </center></h3>" +
                    "<p><center>We've got some suggestions just for you too. Do you wanna see them?</center></p>";
            }
        }


//Do nothing if a page contains no description to show in a modal popup
        if (!options.page.popupdescription)
            return;


        calculateBarProgress();

        animationValues[0] = 0;
        animationValuesHealthy = [0, 20, 20, 20, 40, 20, 20, 60, 20]; // Overall quantity amounts to 200 without the alcohol portion that needs to be considered separate

// I gotta pass in here these variables
        if (options.page.animated) {
            // Remove the previous animation
            if (oldAnimation != null) {
                oldAnimation.remove();
            }

            let colorDisplay;
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

    });

//     // Modify the quiz real-time to change the answer options based on the user's selection
survey.onValueChanged.add(function (survey, options) {

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
    const fruitQuestion = survey.getQuestionByName("fruit-next").value;
    const vegetableQuestion = survey.getQuestionByName("veggies-next").value;
    const nutQuestion = survey.getQuestionByName("nuts-next").value;
    const grainQuestion = survey.getQuestionByName("grains-high-next").value;
    const grainLowQuestion = survey.getQuestionByName("grains-low-next").value;
    const sugarQuestion = survey.getQuestionByName("soda-next").value;
    const meatQuestion = survey.getQuestionByName("redmeat-next").value;
    const procmeatQuestion = survey.getQuestionByName("procmeats-next").value;
    let fruitVeggieValue = 0;
    let nutValue = 0;
    let grainValue = 0;
    let sugarValue = 0;
    let meatValue = 0;
    let smokeValue = 0;
    let alcoholValue = 0;
    const dietValues = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    rawFruits = fruitQuestion + vegetableQuestion;
    rawNuts = nutQuestion;
    rawSoda = sugarQuestion;
    rawMeat = procmeatQuestion + meatQuestion;
    rawGrains = grainQuestion + grainLowQuestion / 3;
    rawAlcohol = dietValues[8];

    rawSmoke = smokeQuestion;


    // Could probably use an equation to remove this if statement
    if (smokeQuestion == 0.5) {
        smokeValue = 0.15285;
    } else if (smokeQuestion == 1) {
        smokeValue = 0.90138;
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


    if (rawFruits >= 3) {
        fruitVeggieValue = 0.18283;
    }

    if (rawNuts >= 2) {
        nutValue = 0.24444;
    } else if (rawNuts > 0.3) {
        nutValue = 0.14522;
    }

    grainValue = 0.03326 * (grainQuestion * 3 + grainLowQuestion);
    sugarValue = 0.14631 * sugarQuestion;
    meatValue = 0.15624 * meatQuestion + 0.15624 * procmeatQuestion;

    Diet = fruitVeggieValue + nutValue - sugarValue - meatValue + grainValue;

    // Extract activity amount directly from question
    const hardSportQuestion = survey.getQuestionByName("activity-high-next").value;
    const modSportQuestion = survey.getQuestionByName("activity-low-next").value;
    rawSport = modSportQuestion + hardSportQuestion;

    //
    let W = 0;
    let risk = 0;
    if (genderQuestion == "Female") {
        W = 0.10820 * ageQuestion + 0.04676 * BMI + smokeValue - alcoholValue - 0.05113 * (Diet * 10) - 0.02951 * rawSport;
        risk = (1 - Math.pow(0.9660, Math.exp(W - 6.57301))) * 100
    } else {
        W = "We not doing boys yet";
    }
    const healthyPerson = (1 - Math.pow(0.9660, Math.exp((-0.557385 + BMI * 0.04676 + ageQuestion * 0.1082) - 6.57301))) * 100;
    const relativeRisk = risk / healthyPerson;
    let relativeRiskWord = "";
    let summaryImage = "";
    let feedbackImage = "";
    // Add image for risks


    //
    if (relativeRisk <= 1.0) {
        relativeRiskWord = "Looking good!";
        summaryImage = "./img/Results=Good.jpg"; // healthy.gif
        feedbackImage = "./img/feedback-Results=Good.jpg"; // healthy.gif
    } else if (relativeRisk > 1.0 /* was 1.5 before but confusing for usersy6 */ && relativeRisk < 4) {
        relativeRiskWord = "Slightly elevated";
        summaryImage = "./img/Results=Okay.jpg"; // unhealthy.gif
        feedbackImage = "./img/feedback-Results=Okay.jpg"; // unhealthy.gif
    } else {
        relativeRiskWord = "Very High";
        summaryImage = "./img/Results=Bad.jpg"; // vunhealthy.gif
        feedbackImage = "./img/feedback-Results=Bad.jpg"; // vunhealthy.gif
    }

    const summaryQuestion = survey.getQuestionByName("summary");
    summaryQuestion.html = "<div><center> <h4>Your future risk is...</h4>"
        + "<p><img alt=''  class='summary-image' src=" + summaryImage + "?v=2></p><h3>" + relativeRiskWord + "</h3> " +
        "<p>" + summarySubtitle [0] + "</p></center></div>"

    const goodFoodsQuestion = survey.getQuestionByName("good-foods");
    goodFoodsQuestion.html =
        "<h3>Let’s start with nutrition! </h3> <br> " +
        "<div id='nutritionSummary' style='overflow: hidden'></div>";
    /*<p>  (You eat low fiber grains <b>"+grainLowQuestion+"</b>, you need a least one serving every day)</p></div></li>";*/

    const badFoodsQuestion = survey.getQuestionByName("bad-foods");
    badFoodsQuestion.html =
        `
            <h2>Time to get moving!</h2>
            <br>
            <div class="uk-container uk-text-center">
                <p class="uk-margin-remove uk-text-meta">10+ hrs | <15 min</p>
                <div uk-grid class="uk-child-width-1-6">
                    <div class="uk-margin-auto-vertical">
                        <p class="uk-text-nowrap uk-text-meta">6 hrs</p>
                    </div>
                    <div class="uk-width-expand">
                        <div id="timeChart"></div>
                    </div>
                    <div class="uk-margin-auto-vertical">
                        <p class="uk-text-meta uk-text-nowrap">1 hr</p>
                    </div>
                </div>
                <p class="uk-text-nowrap uk-text-meta uk-margin-remove">3 hrs</p>
            </div>
            <br>
             <div class="uk-child-width-1-1 uk-text-center" uk-grid>
                 <div>
                    <p class="uk-flex-inline uk-margin-remove" style="align-items: center">
                        <span class="intense-exercise"></span> intense exercise
                    </p>
                </div>
                <div class="uk-margin-remove">
                    <p class="uk-flex-inline uk-margin-remove" style="align-items: center">
                        <span class="low-intense"></span>low intensity exercise
                    </p>
                </div>
            </div>
        `


    const activitiesQuestion = survey.getQuestionByName("activities");
    activitiesQuestion.html = "<div><center> <h3>Now that you know your habit's impact ...</h3> <br>"
        + "<p><img alt='' class='image'  src=" + feedbackImage + "></p>"
        + " <p>How likely do you think you'll make changes in your lifestyle ?</p> </center> <br>" +
        "<div id='slider' class='uk-container'></div> <br><br> </div>";
});
