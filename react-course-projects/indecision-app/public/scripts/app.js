"use strict";

console.log("App.js is running");

// JSX - JavaScript XML (Extension of JS language)
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Tim Sullivan"
  ),
  React.createElement(
    "p",
    null,
    "This is some info."
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Item one"
    ),
    React.createElement(
      "li",
      null,
      "Item two"
    )
  )
);

// Create a templateTwo variable which is a JSX expression
// div
//  h1 -> Tim Sullivan
//  p -> Age: 22
//  p -> Location: San Francisco, CA
// Render templateTwo instead of template

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Tim Sullivan"
  ),
  React.createElement(
    "p",
    null,
    "Age: 22"
  ),
  React.createElement(
    "p",
    null,
    "Location: San Francisco, CA"
  )
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
