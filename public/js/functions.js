function writeUserData(answers, update = false) {
    const updates = {};

    if (!update)
        firebaseEntryKey = database.ref('data').push().key;

    if (update)
        delete answers["areasToImprove"]


    const areasToImprove = {
        'areas-to-improve': toImprove
    }

    const time = {
        'start-time': startTime,
        'start-time-timestamp': startTimeUnixTime,
        'end-time': new Date(),
        'end-time-timestamp': Date.now(),
    }

    updates[firebaseEntryKey] = {
        ...answers,
        ...time,
        ...areasToImprove
    };

    database.ref('data/').update(updates);
}


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
            if (areasToImproveFlag) {
                p.textSize(70);
                p.text("+" + value, 240, 150);
            } else {
                p.textSize(40);
                p.text("+" + value, 160, 100);
                p.text('/', 150 + 30, 105);
                p.text(healthyPoints, 160 + 80, 110);
            }
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

    // Grains
    animationValues[2] = animationValues[1] + parseInt((rawGrains * 20) / 2);

    // Fruits & Veggies
    if (rawFruits >= 3) {
        animationValues[3] = animationValues[2] + 30;
    } else {
        animationValues[3] = animationValues[2] + parseInt((rawFruits / 3) * 30);
    }

    // Nuts
    if (rawNuts >= 2) {
        animationValues[4] = animationValues[3] + 20;
    } else if (rawNuts >= 0.3) {
        animationValues[4] = animationValues[3] + 10 + parseInt((rawNuts - 0.3) * 10);
    } else {
        animationValues[4] = animationValues[3] + parseInt((rawNuts * 10) / 0.5);
    }

    // Meat
    if (rawMeat > 2) {
        animationValues[5] = animationValues[4]
    } else {
        animationValues[5] = animationValues[4] + (20 - parseInt((rawMeat * 20) / 2));
    }

    // Soda
    if (rawSoda == 1) {
        animationValues[6] = animationValues[5] + 3
    } else if (rawSoda < 1) {
        animationValues[6] = animationValues[5] + (30 - parseInt(rawSoda * 30));
    } else {
        animationValues[6] = animationValues[5]
    }

    // Smoke
    animationValues[7] = animationValues[6] + 60 - rawSmoke * 60;

    // Alcohol
    animationValues[8] = animationValues[7] + 20 - parseInt((rawAlcohol * 20) / 2)


    // Extra points
    if (extraPoints.value[0] > 0) {
        extraPointsValue = 0
        getHealthy(extraPoints)
        animationValues[9] = animationValues[8] + extraPointsValue
        animationValuesHealthy[9] = extraPointsValue
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


function calculateGoodBadDiet() {
    let rawScoreValues = [0, rawSport, animationValues[2] - animationValues[1], (animationValues[3] - animationValues[2])/1.5, (animationValues[4] - animationValues[3]), 20 - (animationValues[5] - animationValues[4]), 20 - (animationValues[6] - animationValues[5])/1.5, rawSmoke, rawAlcohol, animationValues[9] - animationValues[8]];
    // graphScoreValues = [rawGrains*const,]
    // Calculates the percentage score
    for (const key in animationValues) {
        // Might need to fit in here all the other values
        if (key > 0 && key < animationValues.length - 1) {
            // const result = ((animationValues[key] - animationValues[key - 1]) / animationValuesHealthy[key]);
            const result = ((animationValues[key] - animationValues[key - 1]) / animationValuesHealthy[key]);
            const toGain = (animationValuesHealthy[key] - (animationValues[key] - animationValues[key - 1]))
            // cleanSortedValuesHealthy.push(animationValuesHealthy[key])
            valuesDict[animationValuesTitles[index + 1]] = {
                "score": result,
                "healthy": animationValuesHealthy[key],
                "rawScore": rawScoreValues[key],
                "rawHealthy": rawHealthyValues[key],
                "pointsToGain": toGain,
            }
            index++
        }
    }
    // console.log(valuesDict);

    // Create items array
    let items = Object.keys(valuesDict).map(function (key) {
        return [key, valuesDict[key]["score"]];
    });

    // Sort the array based on the second element
    // items.sort(function (first, second) {
    //     return second[1] - first[1];
    // });

    // I think this whole section of the code is legacy, we don't use the scoreData or healthyData anywhere else
    // Create a new array with only the first 5 items
    for (let val in items) {
        sortedDict.push(items[val][0]);
        cleanSortedValuesHealthy.push(valuesDict[items[val][0]]["rawHealthy"]);
        cleanSortedValues.push(valuesDict[items[val][0]]["rawScore"]);
    }

    index = 0;
    for (const cleanSortedValuesKey in cleanSortedValues) {
        categories.push(sortedDict[cleanSortedValuesKey]);
        // This one is wrongly place, it's just static
        healthyData.push(cleanSortedValuesHealthy[cleanSortedValuesKey] * 5)
        scoreData.push(cleanSortedValues[cleanSortedValuesKey]/* * cleanSortedValuesHealthy[cleanSortedValuesKey]*/ * 19 / 4) // This constant helps put the score at the end of the graph
        index++
    }
    console.log(scoreData);

    // console.log("Previous to organizing", items)
    // Sort the array based on the second element
    // Get sorted list of elements
    // items.sort(function (first, second) {
    //     return second[1] - first[1];
    // });
    // console.log("After organizing", items)
}


function min2Percentage(val) {
    return Math.ceil(val / 4 * 100)
}

function percentage2Min(val) {
    return val / 25//Math.ceil(val )
}


function toHours(val) {
    if (val < 1) return (val * 60 + ' mins'); else {
        return Math.floor(val) + "hrs " + Math.floor((val % 1) * 60) + "mins"
    }
}

function getHealthy() {
    for (let index = 0; index < extraPoints.value.length; index++) {
        for (const [key, value] of Object.entries(valuesDict)) {
            if (key == "Fruits & Veggies" && extraPoints.value[index] == 15) extraPointsValue += value.pointsToGain
            if (key == "Grains" && extraPoints.value[index] == 12) extraPointsValue += value.pointsToGain
            if (key == "Physical activity" && extraPoints.value[index] == 32) extraPointsValue += value.pointsToGain
            if (key == "Smoking" && extraPoints.value[index] == 30) extraPointsValue += value.pointsToGain
            if (key == "Meat" && extraPoints.value[index] == 10) extraPointsValue += value.pointsToGain
            if (key == "Alcohol" && extraPoints.value[index] == 28) extraPointsValue += value.pointsToGain
            if (key == "Nuts" && extraPoints.value[index] == 25) extraPointsValue += value.pointsToGain
            if (key == "Soda" && extraPoints.value[index] == 34) extraPointsValue += value.pointsToGain
        }
    }
}