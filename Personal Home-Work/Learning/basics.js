// to print in javascript
console.log("Hello, I am Manya");
console.log("Today I am learning javascript.");

// Difference between text and number
console.log("3*4"); //it's a text
console.log(3*4); //it's a number

// Declaring and initializing
// We don't need to define datatype here.
a = 5;
console.log(a*2);  //output => 10
b = "manya";
console.log(b+5);  //output => manya5

// Printing in a line
a = "hello"; b = 5; c = true;
console.log(a,b,c); // hello 5 true
console.log(a+b+c); // hello5true

// var, let, const    
// in var and let we can change the value but in const we can not
// we cannot declare the variable again and again in const and let but can do so in var
var a = 5;
console.log(a); // 5
a = 10; //can also write var a = 10;
console.log(a); //10

const b = 5;
console.log(b); // 5
b = 10; // cannot wrie const b = 10; it will throw syntax error
console.log(b); // error

let c = 5;
console.log(c); // 5
c = 10; // cannot write let c = 10; it will throw syntax error
console.log(c); // 10

// Typeof, Datatype
a = 20; b = 20.1; c = "manya"; d = true; e = "p";
console.log(a, typeof(a)); // 20 number
console.log(b, typeof(b)); // 20.1 number
console.log(c, typeof(c)); // manya string
console.log(d, typeof(d)); // true boolean
console.log(e, typeof(e)); // p string