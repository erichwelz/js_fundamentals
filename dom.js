

// Exercises: The DOM

// EXERCISE: The Logo Hijack

// No homepage is safe from the logo bandit!

// Open up www.google.com in Chrome or Firefox, and open up the console.
// Find the Google logo and store it in a variable.
// Modify the source of the logo IMG so that it's a Yahoo logo instead.
// Find the Google search button and store it in a variable.
// Modify the text of the button so that it says "Yahooo!" instead.

// MY ANSWER

// logo = document.getElementById("hplogo")

// logo.style.backgroundImage = "url(http://l.yimg.com/rz/d/yahoo_frontpage_en-CA_s_f_p_101x50_frontpage.png)"


// EXERCISE: About Me

// Cuz every webpage needs an "About" section.

// Start with this HTML and save it as "aboutme.html":
// <!DOCTYPE html>
// <html>
//  <head>
//   <meta charset="utf-8"/>
//   <title>About Me</title>
// </head>
// <body>
//   <h1>About Me</h1>
  
//   <ul>
//     <li>Nickname: <span id="nickname"></span>
//     <li>Favorites:  <span id="favorites"></span>
//     <li>Hometown: <span id="hometown"></span>
//    </ul>
  
//  </body>
// </html>
  
// Add a script tag to the bottom.


// Change the body style so it has a font-family of "Arial, sans-serif".


var bodyfont = document.body;
bodyfont.style.fontFamily = "Arial, sans-serif";


// Replace each of the spans (nickname, favorites, hometown) with your own information.
var nick = document.getElementById('nickname');
nick.textContent = "Here's some content"
var favorites = document.getElementById('favorites')
favorites.textContent = "Bicyles, music, cooking, simplicity."
var hometown = document.getElementById('hometown')
hometown.textContent = "Edmonton, Alberta, Canada"

// Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
// var list = document.getElementsByTagName('li')
// for (var i = 0; i <list.length; i++){
//   list[i].style.color = 'red'
// }

var list = document.getElementsByTagName('li')
for (var i = 0; i <list.length; i++){
  list[i].style.color = 'red'
}

// Create a new img element and set its src attribute to a picture of you. Append that element to the page.
var img = document.createElement("img");
img.src = "http://www.google.com/intl/en_com/images/logo_plain.png";

var src = document.body.appendChild(img);
src.appendChild(img);




