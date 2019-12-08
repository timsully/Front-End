console.log("App.js is running");

// JSX - JavaScript XML (Extension of JS language)
var template = (
  <div>
    <h1>Tim Sullivan</h1>
    <p>This is some info.</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

// Create a templateTwo variable which is a JSX expression
// div
//  h1 -> Tim Sullivan
//  p -> Age: 22
//  p -> Location: San Francisco, CA
// Render templateTwo instead of template

var templateTwo = (
  <div>
    <h1>Tim Sullivan</h1>
    <p>Age: 22</p>
    <p>Location: San Francisco, CA</p>
  </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
