// Task 1: Object with Array — Correct the Syntax
// You’re given this object:
course = {
  title: "JavaScript 101",
  topics: ["variables", "functions", "destructuring"]
};
// 🔹 Extract the first and third topic into variables firstTopic and thirdTopic, and log them.

// 🧪 Task 2: Arrow Function Return

// getCoords => { return [25.276987, 55.296249]; }
// 🔹 Fix it by writing a valid arrow function called getCoords that returns the array [25.276987, 55.296249], and destructure its result into lat and long.
getCoords = () => {return [25.276987, 55.296249]}
const [lat,long] = getCoords();
console.log(lat, long);
// 🧮 Task 3: Default Values
// You wrote a destructuring where one variable relied on another in the same line — that doesn't work.
const scores = [70];
// Destructure it into firstScore and secondScore, with secondScore defaulting to firstScore + 10. Do this without referencing firstScore in the same line.
const [firstScore] = scores;
const [secondscore = firstScore+10] = scores;
// 📦 Task 4: Array of Objects with Nested Arrays
const users = [
  { name: "Ali", roles: ["read", "write"] },
  { name: "Riya", roles: ["read"] }
];
// Ali's name into user1Namy
const [x,y] = users;
const {name:user1Namy} =x;
// Ali's second role into user1SecondRole
const {roles:[,z]} =x;
// Riya's first role into user2FirstRole
const {roles:[xy]}=y;
// 🚀 Bonus Challenge (Task 5): Deep Combo Destructuring
// Given:
const system = {
  settings: {
    theme: "dark",
    permissions: ["read", "write", "execute"]
  },
  metadata: {
    version: "1.0.0"
  }
};
// 🔹 Destructure to extract:
// theme
const{settings} = system;
const {theme} =settings
// second permission
const {permissions: [,sec,]} = settings
// version
const {metadata} = system;
const {version} = metadata;