// Exercises: if/else statements
document.write("<h1>" + "Exercises: if/else statements" + "</h1>")
// EXERCISE: What number's bigger?
document.write("<p>" + "EXERCISE: Which number is bigger?" + "</p>")

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

function greaterNum(numA,numB) {
  if (numA < numB) {
    var lrgNum = numB;
  } else {
    var lrgNum = numA;
  }
  document.write("<p>" + "The greater number of " + numA + " and " + numB + " is " + lrgNum + "." + "</p>");
}

greaterNum(5,3)
greaterNum(10,11)
greaterNum(11,10)

// EXERCISE: The World Translator
document.write("<p>" + "EXERCISE: The World Translator" + "</p>")
// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

function helloWorld(lang){
  if (lang == "de") {
    document.write("<p> Hallo Welt </p>");
  } else if (lang == "fr") {
    document.write("<p> Bonjour tout le monde </p>");
  } else if (lang == "es") { 
    document.write("<p> hola mundo </p>");
  } else {
    document.write("<p> Hello World </p>");
    }
  }

helloWorld("de")
helloWorld("fr")
helloWorld("es")
helloWorld()

// EXERCISE: The Grade Assigner
document.write("<p>" + "EXERCISE: The Grade Assigner" + "</p>")
// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.
function assignGrade(num){
  if (num >= 85) {
    document.write("<p>" + num + " is an A! </p>");
  } else if (num >= 70) {
    document.write("<p>" + num + " is a B. </p>");
  } else if (num >= 60) {
    document.write("<p>" + num + " is a C. </p>");
  } else if (num >= 50) {
    document.write("<p>" + num + " is a D. </p>");
  } else {
    document.write("<p>" + num + " is an F. </p>");
  }
}

assignGrade(95)
assignGrade(70)
assignGrade(60)
assignGrade(51)
assignGrade(40)

// EXERCISE: The Pluralizer
document.write("<p>" + "EXERCISE: The Pluralizer" + "</p>")
// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

function pluralize(num, noun) {
  if (num == 1) {
  var caseNoun = noun;
  } else {
 var caseNoun = noun + "s"
  } 
  document.write("<p>" + num + " " + caseNoun);
}

pluralize(3, "cat")
pluralize(1, "cat")
pluralize(0, "cat")