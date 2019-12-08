"use strict";

console.log("App.js is running");

// Create app object title/subtitle
// use title/subtitle in the template var
// render template
var app = {
  title: "Tim",
  subtitle: "Is my first name, lul."
};

// JSX - JavaScript XML (Extension of JS language)
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  React.createElement(
    "h2",
    null,
    app.subtitle
  )
);

var user = {
  name: 'Andrew',
  age: 26,
  location: 'Philadelphia'
};

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name + "!"
  ),
  React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  React.createElement(
    "p",
    null,
    "Location: ",
    user.location
  )
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
