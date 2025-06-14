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