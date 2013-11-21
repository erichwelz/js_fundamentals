// Exercises: Objects
document.write("<h2> Exercises: Objects </h2>")
// EXERCISE: The Recipe Card
document.write("<p> EXERCISE: The Recipe Card")
// Never forget another recipe!

// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:

var myRecipe = {
  title: "Any old Soup",
  serves: 6,
  ingredients: "\nSauted onions and Garlic\nRandom veggies from the pantry\nA sources or a few sources of protein"
                
  // myMethod: function(){
  //   console.log("I'm a method");
  // }
};
document.write("<p> See console.log for a soup recipe </p>")
console.log("Title: " + myRecipe.title);
console.log("Serves: " + myRecipe.serves);
console.log("Ingredients" + myRecipe.ingredients);

// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

// EXERCISE: The Reading List
document.write("<p> EXERCISE: The Reading List </p>")

// Keep track of which books you read and which books you want to read!

// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).

var objectBookList = [
  {title: "Book A", author: "Author A", alreadyRead: true},
  {title: "Book B", author: "Author B", alreadyRead: false},
  {title: "Book C", author: "Author C", alreadyRead: true}
  ];

// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".

var i = 0
for  (i = 0; i < objectBookList.length; i++)
document.write(objectBookList[i].title + " by " + objectBookList[i].author + "<br />")


// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

var i = 0
for  (i = 0; i < objectBookList.length; i++)
  if (objectBookList[i].alreadyRead === true) {
    document.write("You've already read " + objectBookList[i].title + " by " + objectBookList[i].author + ".<br />")   
  } else {
    document.write("You still need to read " + objectBookList[i].title + " by " + objectBookList[i].author + ".<br />");
  }

// EXERCISE: The Movie Database
document.write("<p> EXERCISE: The Movie Database </p>")
// It's like IMDB, but much much smaller!

//Create an object to store the following information about your favorite movie: title (a string), duration (a number), and 
//Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

var favMovie = {
  title: "A Grand old Film",
  duration: 120,
  stars: "Elvis" 
}

document.write(favMovie.title + " lasts for " + favMovie.duration + " minutes. Stars: " + favMovie.stars + " <br />")

var favMovie = {
  title: "A Grand old Film",
  duration: 120,
  stars: ["Elvis, ","Ghandi, ","Jackie Chan, ","Elvira"]
}


var stars = ""
for(i = 0; i <= favMovie.stars.length-1; i++) 
    stars += (favMovie.stars[i])


document.write(favMovie.title + " lasts for " + favMovie.duration + " minutes. Stars: " + stars + ".<br />")



