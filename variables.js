// Exercises: Variables

// EXERCISE: The Fortune Teller
document.write("<p>" + "EXERCISE: The Fortune Teller" + "</p>")
// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."


function tellFortune(jobTitle, location, partner, numChildren) {
  var future = "You will be an " + jobTitle + " in " + location + " married to " + partner + " with " + numChildren + " kids."
  return future;
};

document.write(tellFortune("Alchemist", "Anchorage,Alaska", "Alpha, Beta and Gamma", 3));

// EXERCISE: The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.

var currentYear = 2013;
var birthYear = 1984;
//console.log(currentYear)

var maxAge = currentYear - birthYear

//document.write("<p>" + max_age + "or" + max_age + "</p>")

document.write("<p>" + "EXERCISE: The Age Calculator" + "</p>")

document.write("<p>" + "They are either " + (maxAge-1) + " or " + maxAge + "." + "</p>")


// EXERCISE: The Lifetime Supply Calculator
document.write("<p>" + "EXERCISE: The Lifetime Supply Calculator" + "</p>")
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

var myAge = 29;
var maxAge = 89;
var numCandiesPerDay = 10;

var quantityCandyRequired = (maxAge - myAge) * numCandiesPerDay * 365

document.write("<p>" + "You will need " + quantityCandyRequired + " candies at the rate of " + numCandiesPerDay + " per day to last you until the ripe old age of " + maxAge + "." + "</p>")


// EXERCISE: The Geometrizer
document.write("<p>" + "EXERCISE: The Geometrizer" + "</p>")
// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
var radius = 8
// Calculate the circumference based on the radius, and output "The circumference is NN".
document.write("The circumference of a circle with a radius of " + radius + " is " + (radius * 2) + "." + "</p>")
// Calculate the area based on the radius, and output "The area is NN".
document.write("The area of a circle with a radius of " + radius + " is " + (2 * Math.PI * radius ) + "." + "</p>")

// EXERCISE: The Temperature Converter
document.write("<p>" + "EXERCISE: The Temperature Converter" + "</p>")

// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
var celciusTemp = 20
// Convert it to fahrenheit and output "NN°C is NN°F".
var fahrenheitTemp = (celciusTemp  * 9/5) + 32
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."
document.write("<p>" + celciusTemp + "°F is " + fahrenheitTemp + "°C." + "</p>")

