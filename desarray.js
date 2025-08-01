// Q1 – Basic Destructuring
//Array: ["apple", "banana", "cherry"]
// Which variable gets the value "banana" if you destructure all three elements?
const fruits = ["apple", "banana", "cherry"]
const [,a,] = fruits;
console.log(a);
// 🔹 Q2 – Skipping Items
// Array: [10, 20, 30, 40]
// How do you extract just the third item using destructuring?
const nums = [10, 20, 30, 40];
const [, ,c] = nums;
console.log(c);
// 🔹 Q3 – Default Values
// Array: [5]
// How do you destructure this array into two variables, where the second one defaults to 100 if not present?
const x = [5];
const [first, y=first+5] = x;
console.log(`first number = ${first} second number = ${y}`);

// 🔹 Q4 – Swapping Values
// Variables: let x = "JavaScript" and let y = "Python"
// How do you swap their values using array destructuring?
let j = "JavaScript";
let p = "Python";
[j,p] = [p,j];
console.log(`j is now ${j},and p is now ${p}`);

// 🔹 Q5 – Nested Destructuring
// Array: ["User123", ["Admin", "Editor"]]
// How do you extract "Admin" and "Editor" using nested array destructuring?
const users = ["User123", ["Admin", "Editor"]];
const[name,[ad,ed]] = users
console.log(ad,ed);

// 🔹 Q6 – Function Return
// Function: function getCoords() { return [25.276987, 55.296249]; }
// How do you destructure the return values into latitude and longitude?
getCoords = () => { return [25.276987, 55.296249]; }
const [lat,long] = getCoords();
console.log(lat,long);


// 🔹 Q7 – Object with Array
// Object:
const session = {
  user: "Misky",
  roles: ["read", "write", "delete"]
};
const {roles: [re,,de]} =session;
// How do you destructure only the first and third role values from roles?