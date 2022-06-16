let newAnimation;
let oldAnimation;
// Disable for testing
const animationValues = new Array(10); // add +1 for extra points
let animationValuesHealthy = new Array(10); // add +1 for extra points
const goodFeedbackResponse = ["empty", "Yea! That's the exercise you need every week!", "Keep 'em grains coming!","Yaaa fruits and veggies make your heart healthy!", "Yea nuts are awesome!! One of the best things you can do to reduce risk of cardiac disease", "", "", "This is great! See how much NOT smoking has helped your score, smoking is a HUGE factor in your heart health"];
const mediumFeedbackResponse = ["empty", "", "", "","Nuts are a great foods! They impact your risk of heart health so much!", "", "", "As you can probably guess, smoking is not too good for your heart, and because you stopped it means your heart is healing!"];
const badFeedbackResponse = ["empty", "", "", "","Nuts are some of the best foods you can eat to reduce your risk of cardiac health, and there's so much variety!", "Meat is tasty, and a lot of it is actually bad for your heart...", "Sweetened beverages are fine in moderation, but too many of them are not good for your heart!","", "Smoking any nicotine is one of the biggest factors in reducing your risk of cardiac disease! You know that 60% of teenagers your age don't smoke, if your group of friends smokes you could try to use non-nicotine products for example!"];
const animationValuesTitles = ["empty", "Physical activity", "Grains", "Fruits & Veggies", "Nuts", "Meat", "Soda","Smoking","Alcohol"];

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
rawHealthyValues = [0, 3.5, 2.6, 3, 2, 0.2, 0.2, 0,3];
// rawScoreValues = [0,1.5,1,1.5,0.5,0.8,2,0,0];
rawScoreValues = [];
graphScoreValues = [];

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
let extraPoints = 0
let extraPointsValue = 0;

// Generic variables
let generic_sport = ['img/generic_none.png', 'img/generic_15to30.png', 'img/generic_30to60.png', 'img/generic_1to3hr.png', 'img/generic_6to10hr.png', 'img/generic_10ormore.png'];

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
let activity_ = ['img/activity_0.png', 'img/activity_1.png', 'img/activity_2.png', 'img/activity_3.png'];
let high_grains_ = ['img/high_grains_0.png', 'img/high_grains_1.png', 'img/high_grains_2.png', 'img/high_grains_3.png'];
let low_grains_ = ['img/low_grains_0.png', 'img/low_grains_1.png', 'img/low_grains_2.png', 'img/low_grains_3.png'];
let fruit_ = ['img/fruit_0.png', 'img/fruit_1.png', 'img/fruit_2.png', 'img/fruit_3.png'];
let veggies_ = ['img/veggies_0.png', 'img/veggies_1.png', 'img/veggies_2.png', 'img/veggies_3.png'];
let nuts_ = ['img/nuts_0.png', 'img/nuts_1.png', 'img/nuts_2.png', 'img/nuts_3.png'];
let processed_ = ['img/processed_0.png', 'img/processed_1.png', 'img/processed_2.png', 'img/processed_3.png'];
let redmeat_ = ['img/redmeat_0.png', 'img/redmeat_1.png', 'img/redmeat_2.png', 'img/redmeat_3.png'];
let soda_ = ['img/soda_0.png', 'img/soda_1.png', 'img/soda_2.png', 'img/soda_3.png'];
let smoke_ = ['img/smoke_never.png', 'img/smoke_usedto.png', 'img/smoke_yes.png'];
let alcohol_ = ['img/alcohol_0.png', 'img/alcohol_1.png', 'img/alcohol_2.png', 'img/alcohol_3.png'];

// Follow-up pages
// Current version (accuracy)
let grains_high_a = ['img/generic_never.png', 'img/generic_lessthan1.png', 'img/generic_1to2.png', 'img/generic_3to5.png', 'img/generic_everyday.png', 'img/generic_twiceaday.png'];
let fruit_a = ['img/fruit_never.png', 'img/fruit_lessthan1.png', 'img/fruit_onceaday.png', 'img/fruit_twiceaday.png', 'img/fruit_3timesaday.png'];
let veggies_a = ['img/generic_never.png', 'img/veggies_lessthan1.png', 'img/veggies_onceaday.png', 'img/veggies_twiceaday.png', 'img/veggies_threeaday.png'];
let nuts_a = ['img/generic_never.png', 'img/generic_lessthan1.png', 'img/generic_1to2.png', 'img/generic_3to5.png', 'img/generic_everyday.png', 'img/generic_twiceaday.png'];
let processed_a = ['img/generic_never.png', 'img/generic_lessthan1.png', 'img/generic_1to2.png', 'img/generic_3to5.png', 'img/generic_everyday.png', 'img/generic_twiceaday.png'];
let redmeat_a = ['img/generic_never.png', 'img/generic_lessthan1.png', 'img/generic_1to2.png', 'img/generic_3to5.png', 'img/generic_everyday.png', 'img/generic_twiceaday.png'];
let soda_a = ['img/generic_never.png', 'img/generic_lessthan1.png', 'img/generic_1to2.png', 'img/generic_3to5.png', 'img/generic_everyday.png', 'img/generic_twiceaday.png'];
let alcohol_a = ['img/generic_never.png', 'img/generic_lessthan1.png', 'img/generic_1to2.png', 'img/generic_3to5.png', 'img/generic_everyday.png', 'img/generic_twiceaday.png'];


// Previous version (engagement)
// let grains_high_a = ['img/generic_never.png', 'img/generic_lessthan1.png', 'img/generic_1to2.png', 'img/generic_3to5a.png', 'img/generic_everyday.png', 'img/grains_high_twice.png'];
// let grains_low_a = ['img/generic_never.png', 'img/generic_lessthan1.png', 'img/generic_1to2.png', 'img/generic_3to5a.png', 'img/generic_everyday.png', 'img/grains_high_twice.png'];
// let fruit_a = ['img/fruit_never.png', 'img/fruit_lessthan1.png', 'img/fruit_onceaday.png', 'img/fruit_twiceaday.png', 'img/fruit_3timesaday.png'];
// let veggies_a = ['img/generic_never.png', 'img/veggies_lessthan1.png', 'img/veggies_onceaday.png', 'img/veggies_twiceaday.png', 'img/veggies_threeaday.png'];
// let nuts_a = ['img/generic_never.png', 'img/nuts_lessthan1.png', 'img/nuts_1to2.png', 'img/nuts_3to5.png', 'img/nuts_everyday.png', 'img/nuts_twiceaday.png'];
// let processed_a = ['img/processed_never.png', 'img/generic_bad_lessthan1.png', 'img/generic_bad_1to2.png', 'img/generic_bad_3to5.png', 'img/generic_bad_everyday.png', 'img/generic_bad_twiceaday.png'];
// let redmeat_a = ['img/redmeat_never.png', 'img/generic_bad_lessthan1.png', 'img/generic_bad_1to2.png', 'img/generic_bad_3to5.png', 'img/generic_bad_everyday.png', 'img/generic_bad_twiceaday.png'];
// let soda_a = ['img/soda_never.png', 'img/generic_bad_lessthan1.png', 'img/soda_1to2.png', 'img/soda_3to5.png', 'img/generic_bad_everyday.png', 'img/generic_bad_twiceaday.png'];
// let alcohol_a = ['img/alcohol_never.png', 'img/alcohol_lessthan1.png', 'img/alcohol_1to2.png', 'img/alcohol_3to5.png', 'img/generic_bad_everyday.png', 'img/generic_bad_twiceaday.png'];

// let alcohol_a = ['img/.png','img/.png','img/.png','img/.png','img/.png','img/.png'];
let summarySubtitle = ["Don’t worry! This means that down the road, when you're in your 40s, your heart will be a little more at risk for heart disease.<br><br>" +
"The good news is you’re still young and have plenty of time to lower your risk and we’ve got some tips to help you do that!"]
let feedbackText = "Awesome, we love to hear that!"
let noUiSliderUpdate = 0
let feedbackContent = {
"Physical Activity":{"title":"What steps can I take to maintain or improve my score for physical activity?","content":"Try to get at least 150 minutes of moderate to intense activity each week. You can achieve this by spending less time sitting and doing things you enjoy like going for walks, dancing, jumping rope, biking, or even gardening. Focus on movement!<br>You can also try buddying up! Exercise with a partner can be more fun and motivating."},
"Fruits & Veggies":{"title":"What steps can I take to maintain or improve my score for fruits and vegetables?","content":"All fruits and veggies are great to include in your daily meals—that includes canned, fresh and frozen varieties!<br>Try filling at least half your plate with fruits and veggies for every meal to make it to the recommended 4.5 cups of each per day.<br>Also try placing your fruits on the counter or the front of the fridge to remind yourself to eat them."},
"Red & Processed meats":{"title":"What steps can I take to maintain or improve my score for red meat?","content":"Red and processed meats are higher in cholesterol and saturated fat than chicken, fish or beans.  Higher cholesterol and saturated fat can raise your blood cholesterol and increase your risk for heart disease. When choosing protein, opt for low-fat options like lean meats such as chicken, turkey, fish.<br>You can also try choosing main dishes that combine meat and vegetables like a stir-fry that emphasizes veggies!"},
"Cereal fiber & whole grains":{"title":"What steps can I take to maintain or improve my score for whole grains?","content":"Whole grains are a great source for fiber and fiber can help improve blood cholesterol levels! It can also help you feel full! Some common whole grain foods are whole-wheat bread, unsalted popped popcorn, whole-wheat tortilla, and quinoa. Try substituting rice for quinoa or white bread for wheat-bread!<br>Also, try choosing foods that list whole grains as the first ingredient. Look for labels like “100% whole wheat” or “whole oats."},
"Nuts & Seeds":{"title":"What steps can I take to maintain or improve my score for nuts and seeds?","content":"You can use a handful of nuts or a tablespoon or two of a nut spread as a substitute for saturated fats, such as those found in meats, eggs and dairy products.<br>Choose unsalted, dry roasted, or lightly salted nuts.<br>If you have a nut allergy, seeds are a great alternative and actually have similar health benefits!"},
"Soda & sweetened beverages":{"title":"What steps can I take to maintain or improve my score for soda/sweetened beverages?","content":"Did you know sugar-sweetened beverages like soda and energy drinks are the number one source of added sugars? The best thing you can drink is water. Try spicing it up by drinking sparkling or add fruits and herbs to add flavor! You can also drink coffee and tea without added sugar!"},
"Alcohol":{"title":"What steps can I take to maintain or improve my score for alcohol?","content":"Drinking too much alcohol can increase the risk of heart attack and stroke. If you are over 21 and you choose to drink, make sure to drink alcoholic beverages only in moderation. Alcohol is not necessary to decrease your risk for heart disease."},
"Smoking":{"title":"What steps can I take to maintain or improve my score for smoking?","content":"Quitting smoking, vaping, or using any form of tobacco/nicotine is one of the best ways to improve your health! If you would like support to quit smoking or vaping call 1-800-QUIT-NOW. Here you’ll be connected to trained professionals who can help you quit."},
}