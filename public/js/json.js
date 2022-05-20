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
