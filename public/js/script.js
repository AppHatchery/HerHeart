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


survey.onAfterRenderQuestion.add(function (sender, options) {
    // console.log(options.question.name)


    // if (options.question.name === "improveScore") {
    //     extraPointsValue = 0
    //     getHealthy(extraPoints)
    // }

    if (options.question.name === "complete") {
        $(".sv-footer__complete-btn").css("display", 'none')
    } else if (options.question.name === "improveScores") {
        setTimeout(function (e) {
            for (let index = 0; index < extraPoints.value.length; index++) {
                if (extraPoints.value[index] == 15) {
                    $(".fruits").css("display", "unset");
                } else if (extraPoints.value[index] == 10) {
                    $(".meats").css("display", "unset");
                } else if (extraPoints.value[index] == 12) {
                    $(".grains").css("display", "unset");
                } else if (extraPoints.value[index] == 25) {
                    $(".nuts").css("display", "unset");
                } else if (extraPoints.value[index] == 28) {
                    $(".alcohol").css("display", "unset");
                } else if (extraPoints.value[index] == 30) {
                    $(".smoking").css("display", "unset");
                } else if (extraPoints.value[index] == 32) {
                    $(".physical").css("display", "unset");
                }
            }
        }, 100)
    } else if (options.question.name === "pre-summary") {
        calculateGoodBadDiet()
    } else if (options.question.name === "good-foods") {
        let nutritionSummary = '<div class="uk-container">';
        let gradient = "";
        let headingOne = "<h3><b>Let's start with foods that reduce your risk!</b></h3><p>These are foods that reduce your heart risk, the more you eat them the healthier your heart will be. Anything more than a couple of servings per day will be great!</p>"
        let headingTwo = "<br><br><h3><b>And these are foods that increase it.. </b></h3>" +
            "<p>The foods below increase your heart risk, you want to limit your consumption to about once a week." +
            " If meat is an essential part of your diet you’ll want to look to substitute it with more white meats like chicken.</p>"

        for (const categoriesKey in categories) {
            gradient = (categoriesKey > 2) ? "red-yellow-green" : "green-yellow-red"
            if (categoriesKey < 5) {

                if (categoriesKey == 0) nutritionSummary += headingOne
                else if (categoriesKey == 3) nutritionSummary += headingTwo

                nutritionSummary += `
                        <div uk-grid>
                            <div class="uk-width-1-3 uk-margin-auto-vertical">
                                <p class="uk-text-meta">${categories[categoriesKey]}</p>
                            </div>
                            <div class="uk-width-expand uk-position-relative uk-padding-remove-left">
                                <div class="${gradient} height">
                                    <input class="uk-range" type="range" value="${scoreData[categoriesKey]}">
                                </div>
                            </div>
                        </div>
                        `
            }
        }

        nutritionSummary += `</div> `

        setTimeout(() => {
            $("#nutritionSummary").html(nutritionSummary)
        }, 200)
    } else if (options.question.name === "bad-foods") {
        let optionsRadialBar = {
            series: [
                min2Percentage(survey.getQuestionByName("activity-high-next").value * 12.5),
                min2Percentage(survey.getQuestionByName("activity-low-next").value * 12.5)
            ],
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
                            show: true,
                            formatter: function (val) {
                                return toHours(percentage2Min(val))
                            }
                        },
                        total: {
                            show: true,
                            label: 'Total',
                            fontSize: '14px',
                            formatter: function (w) {
                                return toHours(percentage2Min(w.globals.seriesTotals[0] + w.globals.seriesTotals[1]))
                            }
                        }
                    }
                }
            },
            labels: ['intense', 'low intensity'],
        };

        setTimeout(() => {
            const chart = new ApexCharts(document.querySelector("#timeChart"), optionsRadialBar);
            chart.render();
        }, 100)
    } else if (options.question.name == "activities") {

        let flag = 0
        setTimeout(() => {

            let slider = document.getElementById('slider');

            noUiSlider.create(slider, {
                start: 5.5,
                pips: {
                    mode: 'positions',
                    values: [0, 100],
                    density: 50,
                    stepped: true
                },
                range: {
                    'min': 1,
                    'max': 10
                }
            });
            feedbackText = slider.noUiSlider.get() > 5.5 ? "Awesome, we love to hear that!" : "That’s okay, you’ve got time!"
            $(".sv-footer__next-btn").css("display", 'none')
            slider.noUiSlider.on('update', function (values, handle) {
                flag++
                if (flag > 1)
                    $(".sv-footer__next-btn").css("display", 'unset')
                noUiSliderUpdate = values
            });


        }, 300)
    }

});

survey
    .onAfterRenderPage
    .add(function (survey, options) {

        // Send data to firebase on the user's responses
        if (options.page.name == "page43" || options.page.name == "page44") {
            writeUserData(survey.data);
        }

        // console.log(options.page.name);
        // P5 End ------------ //
        // Modify pages for Buzzfeed style
        // Okay so this works it seems like
        if (options.page.name == "page3") {
            if (survey.getQuestionByName("activity-high").value > 1) {
                survey.getQuestionByName("activity-high-title").html = "<div id='sketch-holder'></div> <br>" + '<h3><center>Nice! Anddd how much intense physical exercise do you do a week?</center></h3>';
                survey.getQuestionByName("activity-high-next").choices = [
                    {"value": 0.75, "imageLink": generic_sport[2]},
                    {"value": 2, "imageLink": generic_sport[3]},
                    {"value": 8, "imageLink": generic_sport[4]},
                    {"value": 10, "imageLink": generic_sport[5]}];

            } else {
                survey.getQuestionByName("activity-high-title").html = "<div id='sketch-holder'></div> <br>" + '<h3><center>Interesting selection 🤔... how much intense physical exercise do you do a week?</center></h3>';
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
                    "<h3><center> Okay, do you like doing low intensity exercise? </center></h3>" +
                    "<img alt='' style='margin-left:auto; margin-right:auto; display:block; width:100%;' src='img/moderate.png'>" +
                    "<p><center style='font-size:14px;'>Examples: walking, dancing, riding a bike, playing with dog, swimming, marching band</center></p>";
            }
        }

        if (options.page.name == "page5") {
            if (survey.getQuestionByName("activity-low").value > 1) {
                survey.getQuestionByName("activity-low-next-title").html = "<div id='sketch-holder'></div> <br>" +
                    '<h3><center>Nice! And tell me how much intense physical exercise do you do a week?</center></h3>';
                survey.getQuestionByName("activity-low-next").choices = [
                    {"value": 0.75, "imageLink": generic_sport[2]},
                    {"value": 2, "imageLink": generic_sport[3]},
                    {"value": 8, "imageLink": generic_sport[4]},
                    {"value": 10, "imageLink": generic_sport[5]}];

            } else {
                survey.getQuestionByName("activity-low-next-title").html = "<div id='sketch-holder'></div> <br>" +
                    '<h3><center>Okay so how much intense physical exercise do you do a week?</center></h3>';
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
                    '<h3><center>Nice! Anddddd how many servings do you eat a week?</center></h3>' +
                    "<img alt='' style='margin-left:auto; margin-right:auto; display:block; width:100%;' src='img/grains-next-image.png'></img>";
                survey.getQuestionByName("grains-high-next").choices = [
                    {"value": 0.3, "imageLink": grains_high_a[2]},
                    {"value": 0.5, "imageLink": grains_high_a[3]},
                    {"value": 1, "imageLink": grains_high_a[4]},
                    {"value": 2, "imageLink": grains_high_a[5]}];
            } else {
                survey.getQuestionByName("grains-high-title").html = "<div id='sketch-holder'></div> <br>" +
                    '<h3><center>Okay! How many servings do you eat a week?</center></h3>' +
                    "<img alt='' style='margin-left:auto; margin-right:auto; display:block; width:100%;' src='img/grains-next-image.png'></img>";
                survey.getQuestionByName("grains-high-next").choices = [
                    {"value": 0, "imageLink": grains_high_a[0]},
                    {"value": 0.1, "imageLink": grains_high_a[1]},
                    {"value": 0.3, "imageLink": grains_high_a[2]},
                    {"value": 0.5, "imageLink": grains_high_a[3]}];
            }
        }

        if (options.page.name == "page13") {
            if (survey.getQuestionByName("fruit").value > 1) {
                survey.getQuestionByName("fruit-title").html = "<div id='sketch-holder'></div> <br>" +
                    '<h3><center>Nice, now prove it 👀. How many servings do you eat a day??</center></h3>';
                survey.getQuestionByName("fruit-next").choices = [
                    {"value": 0.5, "imageLink": fruit_a[1]},
                    {"value": 1, "imageLink": fruit_a[2]},
                    {"value": 2, "imageLink": fruit_a[3]},
                    {"value": 3, "imageLink": fruit_a[4]}];
            } else {
                survey.getQuestionByName("fruit-title").html = "<div id='sketch-holder'></div> <br>" +
                    '<h3><center>Alright, how many servings do you eat per day??</center></h3>';
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
                    '<h3><center>Nice, veggies are super important for good heart health! How many servings you eat a day??</center></h3>' +
                    "<img alt='' style='margin-left:auto; margin-right:auto; display:block; width:100%;' src='img/veggies_next_image.png'></img>";
                survey.getQuestionByName("veggies-next").choices = [
                    {"value": 0.5, "imageLink": veggies_a[1]},
                    {"value": 1, "imageLink": veggies_a[2]},
                    {"value": 2, "imageLink": veggies_a[3]},
                    {"value": 3, "imageLink": veggies_a[4]}];
            } else {
                survey.getQuestionByName("veggies-title").html = "<div id='sketch-holder'></div> <br>" +
                    '<h3><center>Okayyy 😬... Well we all know veggies are good for you. How many servings you eat a day??</center></h3>' +
                    "<img alt='' style='margin-left:auto; margin-right:auto; display:block; width:100%;' src='img/veggies_next_image.png'></img>";
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
                    '<h3><center>Nice, now prove it 👀. How many servings do you eat a week????</center></h3>' +
                    "<img alt='' style='margin-left:auto; margin-right:auto; display:block; width:100%;' src='img/nuts_next_image.png'></img>";
                survey.getQuestionByName("nuts-next").choices = [
                    {"value": 1, "imageLink": nuts_a[2]},
                    {"value": 2, "imageLink": nuts_a[3]},
                    {"value": 3, "imageLink": nuts_a[4]},
                    {"value": 4, "imageLink": nuts_a[5]}];
            } else {
                survey.getQuestionByName("nuts-title").html = "<div id='sketch-holder'></div> <br>" +
                    '<h3><center>Okayy 😬... How many servings do you eat a week????</center></h3>' +
                    "<img alt='' style='margin-left:auto; margin-right:auto; display:block; width:100%;' src='img/nuts_next_image.png'></img>";
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
                    '<h3><center>Okay! How much of it do you eat per week??</center></h3>';
                survey.getQuestionByName("procmeats-next").choices = [
                    {"value": 0.3, "imageLink": processed_a[2]},
                    {"value": 0.5, "imageLink": processed_a[3]},
                    {"value": 1, "imageLink": processed_a[4]},
                    {"value": 2, "imageLink": processed_a[5]}];
            } else {
                survey.getQuestionByName("procmeats-title").html = "<div id='sketch-holder'></div> <br>" +
                    '<h3><center>Very nice! And how much of it do you eat per week??</center></h3>';
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
                    "<h3><center> Okay nice! And how do you feel about red meat? </center></h3>" +
                    "<img alt='' style='margin-left:auto; margin-right:auto; display:block; width:100%;' src='img/meats.png'>" +
                    "<p><center style='font-size:14px;'>Examples: ground beef, steak, lamb, pork, veal</center></p>";

            } else {
                survey.getQuestionByName("redmeat-title").html = "<div id='sketch-holder'></div>" +
                    "<h3><center>That's great! Now how do you feel about red meat intake?</center></h3>" +
                    "<img alt='' style='margin-left:auto; margin-right:auto; display:block; width:100%;' src='img/meats.png'>" +
                    "<p><center style='font-size:14px;'>Examples: ground beef, steak, lamb, pork, veal</center></p>";
            }
        }

        if (options.page.name == "page23") {
            if (survey.getQuestionByName("redmeat").value > 1) {
                survey.getQuestionByName("redmeat-next-title").html = "<div id='sketch-holder'></div> <br>" +
                    '<h3><center>Aaaannd how much of it do you eat per week??</center></h3>';
                survey.getQuestionByName("redmeat-next").choices = [
                    {"value": 0.3, "imageLink": redmeat_a[2]},
                    {"value": 0.5, "imageLink": redmeat_a[3]},
                    {"value": 1, "imageLink": redmeat_a[4]},
                    {"value": 2, "imageLink": redmeat_a[5]}];
            } else {
                survey.getQuestionByName("redmeat-next-title").html = "<div id='sketch-holder'></div> <br>" +
                    "<h3><center>All good! Anddd how much of it do you eat per week??</center></h3>";
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
                    '<h3><center>Okay, there are a lot of beverages! How much do you drink a week?</center></h3>';
                survey.getQuestionByName("soda-next").choices = [
                    {"value": 0.3, "imageLink": soda_a[2]},
                    {"value": 0.5, "imageLink": soda_a[3]},
                    {"value": 1, "imageLink": soda_a[4]},
                    {"value": 2, "imageLink": soda_a[5]}];
            } else {
                survey.getQuestionByName("soda-title").html = "<div id='sketch-holder'></div> <br>" +
                    "<h3><center>That's fine aaannd how many do you drink a week??</center></h3>";
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
                    '<h3><center>Okay! Actually drinking alcohol can improve your heart health. How many glasses do you drink a week?</center></h3>';
                survey.getQuestionByName("alcohol-next").choices = [
                    {"value": 0.3, "imageLink": alcohol_a[2]},
                    {"value": 0.5, "imageLink": alcohol_a[3]},
                    {"value": 1, "imageLink": alcohol_a[4]},
                    {"value": 2, "imageLink": alcohol_a[5]}];
            } else {
                survey.getQuestionByName("alcohol-title").html = "<div id='sketch-holder'></div> <br>" +
                    '<h3><center>Alcohol is a bit tricky, a lot isn’t super good for you, but none isn’t either.... 😬 How many glasses do you drink a week?</center></h3>';
                survey.getQuestionByName("alcohol-next").choices = [
                    {"value": 0, "imageLink": alcohol_a[0]},
                    {"value": 0.1, "imageLink": alcohol_a[1]},
                    {"value": 0.3, "imageLink": alcohol_a[2]},
                    {"value": 0.5, "imageLink": alcohol_a[3]}];
            }
        }


        if (options.page.name == "page40") {
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
        animationValuesHealthy = [0, 20, 20, 20, 40, 20, 20, 60, 20, 30]; // Overall quantity amounts to 200 without the alcohol portion that needs to be considered separate

        console.log(options.page.pos)


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
        }
        else {
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
    rawAlcohol = dietValues[8];

    rawSmoke = smokeQuestion;
    extraPoints = survey.getQuestionByName("areasToImprove")


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
        "<div id='nutritionSummary' style='overflow: hidden'></div>";
    /*<p>  (You eat low fiber grains <b>"+grainLowQuestion+"</b>, you need a least one serving every day)</p></div></li>";*/

    const badFoodsQuestion = survey.getQuestionByName("bad-foods");
    badFoodsQuestion.html =
        `
            <h2>Time to get moving!</h2>
            <br>
            <div class="uk-container uk-text-center">
                <p class="uk-margin-remove uk-text-meta">+ 4 hrs  |  0 min</p>
                <div uk-grid class="uk-child-width-1-6">
                    <div class="uk-margin-auto-vertical">
                        <p class="uk-text-nowrap uk-text-meta">3 hrs</p>
                    </div>
                    <div class="uk-width-expand">
                        <div id="timeChart"></div>
                    </div>
                    <div class="uk-margin-auto-vertical">
                        <p class="uk-text-meta uk-text-nowrap">1 hrs</p>
                    </div>
                </div>
                <p class="uk-text-nowrap uk-text-meta uk-margin-remove">2 hrs</p>
            </div>
            <br>
             <div class="uk-child-width-1-1 uk-text-center" uk-grid>
                 <div>
                    <h4 class="uk-flex-inline uk-margin-remove" style="align-items: center">
                        <span class="intense-exercise"></span> Intense exercise
                    </h4>
                </div>
                <div class="uk-margin-remove">
                    <h4 class="uk-flex-inline uk-margin-remove" style="align-items: center">
                        <span class="low-intense"></span>Low intensity exercise
                    </h4>
                </div>
            </div>
        `


    const activitiesQuestion = survey.getQuestionByName("activities");
    activitiesQuestion.html = "<div><center> <h3>Now, this is your score today, and you can change it by trying out different habits. Next month your score could be totally different!</h3> <br>"
        + "<p><img alt='' class='image'  src=" + feedbackImage + "></p>"
        + " <p>How likely do you think you'll make changes in your lifestyle ? Move the slider!</p> </center> <br>" +
        "<div id='slider' class='uk-container'></div> <br><br> </div>";

    const userChoicesFeedback = survey.getQuestionByName("areasToImprove").value;
});


const shareDialog = document.querySelector('.share-dialog');
const closeButton = document.querySelector('.close-button');


function shareQuiz() {
    if (navigator.share) {
        navigator.share({
            title: 'Share Quiz',
            url: window.location.href
        }).then(() => {
        })
            .catch(console.error);
    } else {
        shareDialog.classList.add('is-open');
    }
}


closeButton.addEventListener('click', event => {
    shareDialog.classList.remove('is-open');
});
