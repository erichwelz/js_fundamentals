// Exercises: Arrays
document.write("<h2> Exercise: Your Top Choices </h2>")
// EXERCISE: Your top choices

// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.

var myFavoriteThings = ['Candy', 'Energy', 'Bicycles', 'Sleep'];


for(i = 0; i <= myFavoriteThings.length-1; i++) 
    document.write("My #" + (i+1) + " choice is " + myFavoriteThings[i] + ".<br />")

// document.write(myFavoriteThings[0] + "<br />")
// document.write(myFavoriteThings[1] + "<br />")
// document.write(myFavoriteThings[2] + "<br />")
// document.write(myFavoriteThings[3] + "<br />")

