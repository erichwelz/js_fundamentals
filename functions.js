// Exercises: Functions
document.write("<h1>" + "Exercises: Functions" + "</h1>")

// EXERCISE: The Fortune Teller
document.write("<p>" + "EXERCISE: The Fortune Teller" + "</p>")
// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

function tellFortune(job, partner, location, kidNumber) {
  document.write("<p>" +  "You will be a " + job + " in " + location + ", and married to " + partner +  " with "+  kidNumber + " kids." + "</p>");
} 

tellFortune("scientist","Zelda","Alpha Centauri",5)
tellFortune("drummer", "no one", "New Zealand", 3)
tellFortune("efficiency consulant", "somebody wonderful", "Vancouver", 2)

// EXERCISE: The Age Calculator
document.write("<p>" + "EXERCISE: The Age Calculator" + "</p>")
// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.
function calculateAge2Param(birthYear,currentYear) 
{
  var ageMax = currentYear - birthYear
  document.write("<p>" + "Hmm, you must be either " + (ageMax-1) + " or " + ageMax + "." + "</p>" )
}

calculateAge2Param(1984,2013)
calculateAge2Param(1984,2013)
calculateAge2Param(1984,2013)

document.write("<p>" + "EXERCISE: The Age Calculator, current year pre-defined" + "</p>")


var currentYear = new Date().getFullYear();

function calculateAge(birthYear) 
{
  var ageMax = currentYear - birthYear
  document.write("<p>" + "Hmm, you must be either " + (ageMax-1) + " or " + ageMax + "." + "</p>" )
}

calculateAge(1984)
calculateAge(1953)
calculateAge(1928)


// EXERCISE: The Lifetime Supply Calculator
document.write("<p>" + "EXERCISE: The Lifetime Supply Calculator" + "</p>")
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

function calculateSupply(age, amtPerDay) {
  quantityCandyRequired = (age - 29) * amtPerDay * 365
  document.write("<p>" + "You will need " + quantityCandyRequired + " candies at the rate of " + amtPerDay + " per day to last you until the ripe old age of " + age + "." + "</p>")

}
calculateSupply(90,10)
calculateSupply(95,4)
calculateSupply(99,2)

document.write("<p>" + "EXERCISE: The Lifetime Supply Calculator with rounded floating points" + "</p>")

function calculateSupply(age, amtPerDay) {
  var amtPerDay = Math.round(amtPerDay)
  quantityCandyRequired = (age - 29) * amtPerDay * 365
  document.write("<p>" + "You will need " + quantityCandyRequired + " candies at the rate of " + amtPerDay + " per day to last you until the ripe old age of " + age + "." + "</p>")

}
calculateSupply(90,9.9)
calculateSupply(93,1.51)
calculateSupply(99,1.49)

// EXERCISE: The Geometrizer
document.write("<p>" + "EXERCISE: The Geometrizer" + "</p>")
// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumfrence:
function calcCircumference (radius) {
  document.write("The circumference of a circle with a radius of " + radius + " is " + (radius * 2) + "." + "</p>")  
}
calcCircumference(5)

// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:

function calcArea (radius) {
  document.write("The area of a circle with a radius of " + radius + " is " + (2 * Math.PI * radius) + "." + "</p>")  
}
calcArea(5)

function calcVolume (radius) {
  document.write("The volume of a sphere with a radius of " + radius + " is " + (4/3 * Math.PI * Math.pow(radius, 3)) + "." + "</p>")  
}
calcVolume(5)

// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".

// EXERCISE: The Temperature Converter
document.write("<p>" + "EXERCISE: The Temperature Converter" + "</p>")

// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:

 function celsiusToFahrenheit(celsius) {
  var fahrenheit = (celsius * 9/5) + 32
  document.write("<p>" + celsius + "°C is " + fahrenheit + "°F." + "</p>")
 }
celsiusToFahrenheit(30)

// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

function fahrenheitToCelsius(fahrenheit) {
  var celsius = (fahrenheit - 32) * 5/9
  document.write("<p>" + fahrenheit + "°F is " + celsius + "°C." + "</p>")
}

fahrenheitToCelsius(212)
