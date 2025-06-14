// Data Types are simply definitions for different types of data known to a programming language.

// Javascript has differnt JavaScript has several data types, which can be grouped into three main categories:

// 1. Primitive Types

//  - Number: Represents both integer and floating-point numbers.
                             let x = 1;
                             let y = 2;
                             console.log(x + y);// Output: 3


//  - String: Represents a sequence of characters, enclosed in single or double quotes.
              let message = "Hello, Sunshine!";
                console.log(message); // Hello, Sunshine!


//  - Boolean: Represents a logical entity and can have two values: true or false.
                         let on = true;
                         let off = false;
                        console.log(on)
                        console.log(off)


//  - Undefined: A variable that has been declared but not assigned a value.
                         let first_name;
                         console.log(first_name); // undefined


//  - Null: Represents the intentional absence of any object value.
                          let example = null;
                            console.log(example)


//  - Symbol: A unique and immutable primitive value, often used as object property keys.
                    const a = Symbol("unique");
                    const b = Symbol("unique");
                    console.log(a === b); // false
     


//  - BigInt: Represents integers with arbitrary precision, useful for very large numbers.
                let price= 1234567890123456789012345678901234567890n; //bigint
                console.log(price);
        

// Primitive types are immutable and compared by value.



// Type Checking in JavaScript/
// The `typeof` operator returns a string indicating the type of the operand.

let str = "Hello";
console.log(typeof str); // "string"

let num = 42;
console.log(typeof num); // "number"

let flag = true;
console.log(typeof flag); // "boolean"

let bigIntVal = 1234567890123456789n;
console.log(typeof bigIntVal); // "bigint"

let sym = Symbol("id");
console.log(typeof sym); // "symbol"

let notDefined;
console.log(typeof notDefined); // "undefined"


// Type Conversion
//  - Implicit Conversion: JavaScript automatically converts types when necessary, such as when using the `+` operator with a string and a number.
//  - Explicit Conversion: You can manually convert types using functions like `String()`, `Number()`, and `Boolean()`.

// 1. String to Number
let strNum = "123";
let num = Number(strNum); // Converts to number 123
console.log(typeof num, num); // "number", 123

// 2. Number to String
let numVal = 456;
let str = String(numVal); // Converts to string "456"
console.log(typeof str, str); // "string", "456"

// 3. Boolean to String
let boolVal = true;
let boolStr = String(boolVal); // "true"
console.log(typeof boolStr, boolStr); // "string", "true"

// 4. String to Boolean
let strBool = "true";
let boolFromStr = Boolean(strBool); // true (non-empty strings are truthy)
console.log(typeof boolFromStr, boolFromStr); // "boolean", true

// 5. Implicit Conversion
let result = "10" + 5; // "105" (number 5 is converted to string)
console.log(result); // "105"

let diff = "10" - 5; // 5 (string "10" is converted to number)
console.log(diff); // 5

