// Exercises: for loops
document.write("<h1>" + "Exercises: For loops" + "</h1>")
// EXERCISE: The even/odd reporter

// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").
document.write("<p>" + "While loop" + "</p>")

  var i = 0;
  document.write("Starting Loop!" + "<br />")
while ( i <= 10 ) {
  document.write("Current Count: " + i + "<br />");
  i++;
 } 
document.write("Loop stopped!");

document.write("<p>" + "Exercise: The even/odd reporter" + "</p>")
  
  var count;
  for(count = 0; count <= 20; count++) {
    if (count % 2 == 0) {
  document.write(count + " is even <br />")
  } else {
  document.write(count + " is odd <br />")
    }
  }

//   var i = 0;
//   document.write("Starting Loop!" + "<br />")
// while ( i <= 20 ) {
//   document.write("Current Count: " + i + "<br />");
//   i++;
//  } 
// document.write("Loop stopped!");
// EXERCISE: Multiplication Tables
document.write("<p> EXERCISE: Multiplication Table * 9 </p>")

  var i = 0;
  for(i = 0; i <= 10; i++) 
    document.write(i + " * 9 is " + (9*i) + "<br />")
  

// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).
document.write("<p> EXERCISE: Bonus Multiplication Table </p>")

// var output = 0;
// for (i = 1; i <= 10; i++) {
// for (j = 0; j <= 10; j++) {
// output += (i + " * " + j + " is " + i * j + "<br />")
// }
// }
// document.write (output);

// var output = 0;
// var i = 0;
// var j = 0;
for (i = 1; i <= 10; i++) {
for (j = 0; j <= 10; j++) {
document.write (i + " * " + j + " is " + i*j + "<br />");
}
}

// EXERCISE: The Grade Assigner
document.write("<p> EXERCISE: The Grade Assigner </p>")


// Check the results of assignGrade function from the conditionals exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.
function assignGrade(num){
  if (num >= 85) {
    document.write( num + " is an A! <br />");
  } else if (num >= 70) {
    document.write( num + " is a B. <br />");
  } else if (num >= 60) {
    document.write( num + " is a C. <br />");
  } else if (num >= 50) {
    document.write( num + " is a D. <br />");
  } else {
    document.write( num + " is an F. <br />");
  }
}

// assignGrade(95)
// assignGrade(70)
// assignGrade(60)
// assignGrade(51)
// assignGrade(40)

for (i = 60; i <= 100; i++) {
  assignGrade(i)
}
