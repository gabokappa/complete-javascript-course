/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true").

GOOD LUCK 😀
*/

// var massJohn, massMark, heightJohn, heightMark, bmiJohn, bmiMark, isHigher;
//
// massJohn = 75;
// massMark = 90;
//
// heightJohn = 1.75;
// heightMark = 1.90;
//
// bmiJohn = massJohn /  (heightJohn * heightJohn);
// bmiMark = massMark / (heightMark * heightMark);
//
// isHigher = bmiMark > bmiJohn;
//
// if (bmiMark > bmiJohn) {
//     console.log('Mark\'s BMI is higher than John\'s');
// } else {
//     console.log('John\'s BMI is higher than Mark\'s' );
// }

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points,
while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console.
HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/

// var avgScoreJohn = (89 + 120 + 103) / 3;
// var avgScoreMike = (116 + 94 + 123) / 3;
// var avgScoreMary = (97 + 134 + 105) / 3;
//
// console.log(`Average score for John's team ${avgScoreJohn}`);
// console.log(`Average score for Mike's team ${avgScoreMike}`);
// console.log(`Average score for Mary's team ${avgScoreMary}`);
//
//     if (avgScoreJohn > avgScoreMike && avgScoreJohn > avgScoreMary) {
//         console.log(`John's team wins with an average score of ${avgScoreJohn}`);
//     } else if (avgScoreMike > avgScoreJohn && avgScoreMike > avgScoreMary) {
//         console.log(`Mike's team wins with an average score of ${avgScoreMike}`);
//     } else if (avgScoreMary > avgScoreJohn && avgScoreMary > avgScoreMike) {
//         console.log(`Mary's team wins with an average score of ${avgScoreMary}`);
//     } else {
//             console.log("It's a DRAW!")
//     }
//
//     function calculateAge(birthYear) {
//         return 2019 - birthYear;
//     }
//
//     var ageJohn = calculateAge(1986);
//     var ageMike = calculateAge(1948);
//     var ageJane = calculateAge(1969);
//     console.log(ageJohn, ageMike, ageJane);
//
//     function yearsUntilRetirement(year, firstName) {
//         var age = calculateAge(year);
//         var retirement = 67 - age;
//
//         if (retirement > 0) {
//             console.log(firstName + ' retires in ' + retirement + ' years.');
//         } else {
//             console.log(firstName + ' is already retired.')
//         }
//     }
//
//     yearsUntilRetirement(1986, 'John');
//     yearsUntilRetirement(1948, 'Mike');
//     yearsUntilRetirement(1969, 'Jane');
//
//

// var whatDoYouDo = function(job, firstName) {
//     switch(job) {
//         case 'teacher':
//             return firstName + ' teaches kids how to code';
//             case 'driver':
//                 return firstName + ' drives as cab in Lisbon.';
//         case 'designer':
//             return firstName + ' designs well';
//         default:
//             return firstName + ' does something else';
//     }
// };
//
// console.log(whatDoYouDo('teacher', 'John'));
// console.log(whatDoYouDo('designer', 'Brad'));
//

// var names = ['John', 'Mark', 'Jane'];
// var years = new Array(1990, 1969, 1948);
//
// console.log(names[2]);
// console.log(names.length);
//
// // Mutate array data
// names[1] = 'Ben';
// names[names.length] = 'Mary';
// console.log(names);


/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/
//
// var tips = [];
// var totalPaid = [];
//
// function tipCalculator(bill) {
//     var percentage;
//
//     if (bill >= 200) {
//         percentage = 10 / 100; // could be .1
//     } else if (bill >= 50 && bill < 200 ) {
//         percentage = 15 / 100 // could be .15
//     } else {
//         percentage = 20 / 100 // could be .2
//     }
//
//     var tip = bill * percentage;
//     tips.push(tip);
//     totalPaid.push(bill + tip)
// }
//
// tipCalculator(124);
// tipCalculator(48);
// tipCalculator(268);
//
// console.log(tips);
// console.log(totalPaid);

/*
function tipCalculator(bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill < 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];

var finalValues = [bills[0] + tips[0],
                   bills[1] + tips[1],
                   bills[2] + tips[2]];

console.log(tips, finalValues);
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/

//
// var john = {
//     fullName: 'John Doe',
//     mass: 100,
//     height: 1.75,
//     calcBMI: function() {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi
//     }
// };
//
// var mark = {
//     fullName: 'Mark Doe',
//     mass: 95,
//     height: 1.90,
//     calcBMI: function() {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi
//     }
// };
//
//
// if (john.calcBMI() > mark.calcBMI()) {
//     console.log(`${john.fullName}'s BMI of ${john.bmi} is higher than ${mark.fullName}'s`);
// } else if (john.bmi === mark.bmi) {
//     console.log(`${john.fullName}'s BMI of ${john.bmi} is the same as ${mark.fullName}'s`);
// } else {
//     console.log(`${mark.fullName}'s BMI of ${mark.bmi} is higher than ${john.fullName}'s`);
// }
//



/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/

var john = {
  bills: [124, 48, 268, 180, 42],
  tips: [],
  totalPaid: [],
  calcTip: function() {
      for (var i = 0; i < this.bills.length; i++) {
          var percentage;
          var bill = this.bills[i];

          if (bill < 50) {
             percentage = .2;
         } else if (bill >= 50 && bill < 200) {
              percentage = .15;
          } else {
              percentage = .1;
          }
          this.tips.push(bill * percentage);
          this.totalPaid.push(bill + this.tips[i]);
      }
  }
};

john.calcTip();

var mark = {
    bills: [77, 375, 110, 45],
    tips: [],
    totalPaid: [],
    calcTip: function() {
        for (var i = 0; i < this.bills.length; i++) {
            var percentage;
            var bill = this.bills[i];

            if (bill > 300) {
                percentage = .25;
            } else if (bill >= 100 && bill <= 300) {
                percentage = .1;
            } else {
                percentage = .2;
            }
            this.tips.push(bill * percentage);
            this.totalPaid.push(bill + this.tips[i]);
        }
    }
};

mark.calcTip();
console.log(mark);

function calcAvgTip(tips) {

    var sumTips = 0;

    for (var i = 0; i < tips.length; i++) {
        sumTips += tips[i];
    }

    return sumTips / tips.length;
}

var johnTips = john.tips;
var markTips = mark.tips;

if (calcAvgTip(johnTips) > calcAvgTip(markTips)) {
    console.log(`John is more generous with an avg tip of ${calcAvgTip(johnTips)} vs Mark's ${calcAvgTip(markTips)}`)
} else if (calcAvgTip(johnTips) < calcAvgTip(markTips)) {
    console.log(`Mark is more generous with an avg tip of ${calcAvgTip(markTips)} vs John's ${calcAvgTip(johnTips)}`)
} else {
    console.log('They both tipped on average the same!')
}