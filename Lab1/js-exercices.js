// ------------------- var vs let vs const -----------------------

let hello = "say Hi";
let times = 4;

if (times > 3) {
  let hello = "say Hello instead";
  console.log(hello);
}
console.log(hello);

// ------------------------------------------

const greeting = "say Hi";
greeting = "say Hello instead";

// ------------------------------------------

const greeting2 = {
  message: "say Hi",
  times: 4,
};

greeting.message = "say Hello instead";
console.log(greeting);

// ----------------- = vs == vs === -------------------------

console.log(0 == 0);
console.log(0 == "0");
console.log(0 === 0);
console.log(0 == "0");

// ------------------ exercises ------------------------

if ([]) {
  console.log("something");
}

// ------------------------------------------

if ({}) {
  console.log("something");
}

// ------------------------------------------

if (0) {
  console.log("something");
}

// ------------------------------------------

if ("") {
  console.log("something");
}

// ----------------- = vs == vs === -------------------------

console.log("11"+1)
console.log("11"-1)