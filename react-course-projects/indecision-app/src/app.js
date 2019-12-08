console.log("App.js is running");

// Create app object title/subtitle
// use title/subtitle in the template var
// render template
var app = {
  title: "Tim",
  subtitle: "Is my first name, lul."
};





// JSX - JavaScript XML (Extension of JS language)
var template = (
  <div>
    <h1>{app.title}</h1>
    <h2>{app.subtitle}</h2>
  </div>
);

var user = {
  name: 'Andrew',
  age: 26,
  location: 'Philadelphia'
};

var templateTwo = (
  <div>
    <h1>{user.name + "!"}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
