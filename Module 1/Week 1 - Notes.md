# What is JavaScript?
---

JavaScript is a high-level, dynamic programming language primarily known for adding interactivity and other complex features to websites. It is an essential technology for web development, alongside HTML and CSS. However, it has evolved over time and is now used for server-side development, mobile applications, and even desktop applications.

### Why Should I Learn JavaScript?

- **Web Development:** JavaScript is fundamental for building interactive websites.
- **Versatility:** It can be used for both client-side and server-side development.
- **Community and Libraries:** There's a large community and countless libraries and frameworks available.


Here are two new sections to add to your JavaScript notes, covering how to print outputs in JavaScript and how to run JavaScript code using both a browser and Node.js:

---

# How to Print Something in JavaScript

Printing outputs in JavaScript is primarily done using `console.log()`. This function allows you to output messages to the web console, which is an essential tool for debugging and testing code snippets directly in the browser or in a Node.js environment.

## Using `console.log()`

To print information in JavaScript, you use the `console.log()` function. You can pass any type of data to this function, and it will display in the console of your browser or the terminal if you're using Node.js.

### Example

```javascript
console.log("Hello, world!");  // Prints: Hello, world!
console.log(123);              // Prints: 123
console.log(true);             // Prints: true
console.log({name: "Alice", age: 25});  // Prints: { name: 'Alice', age: 25 }
```

This function is incredibly versatile and can be used to debug complex objects, arrays, or any computations in your code.

# How to Run JavaScript

Running JavaScript can be done in various environments, but the most common are within a web browser and using Node.js. Here's how to run JavaScript in both.

## Running JavaScript in a Web Browser

To run JavaScript in a web browser, you need to include it within an HTML document using the `<script>` tag. This can be done in three ways: inline, internal, and external.

### Inline JavaScript

You can write JavaScript directly in an HTML element's event attribute:

```html
<button onclick="console.log('Clicked!')">Click me</button>
```

### Internal JavaScript

You can include JavaScript code inside a `<script>` tag in the HTML document:

```html
<script>
  console.log("This code runs in the browser console.");
</script>
```

### External JavaScript

For cleaner and more maintainable code, JavaScript is often placed in a separate file and linked to the HTML document:

```html
<script src="script.js"></script>
```

Ensure that the script file (`script.js` in this case) is in the correct path relative to the HTML file.

## Running JavaScript with Node.js

Node.js is a runtime environment that allows you to run JavaScript on a server or your local machine.

### Setup

To run JavaScript using Node.js, you first need to install Node.js from [nodejs.org](https://nodejs.org/).

### Running a Script

Once installed, you can run JavaScript files by typing `node` followed by the file name in your terminal or command prompt:

```bash
node script.js
```

This command executes the JavaScript file named `script.js` in your terminal, allowing you to run scripts outside of the browser.

---

# Understanding and Using Variables in JavaScript

Variables in JavaScript are used to store data values. They are fundamental to working with any kind of data in JavaScript, whether it's a number, a string of text, or more complex data structures.

## What is a Variable?

A variable in JavaScript is like a container for storing data. It can hold values of various data types, like numbers, strings, or Booleans.

## Declaring Variables

To use a variable in JavaScript, you first need to declare it. This is done using the `var`, `let`, or `const` keyword. 

### `var`

- `var` is the traditional way to declare variables. However, it has some limitations in terms of scope (global or function-level).

    ```javascript
    var name;
    ```

### `let`

- `let` is a more modern way to declare variables. It has block-level scope, making it more versatile.

    ```javascript
    let age;
    ```

### `const`

- `const` is similar to `let` but is used for variables whose values should not change (constants).

    ```javascript
    const birthday = "January 1, 2000";
    ```

## Using Variables

Variables are used to store data which can be used and manipulated throughout your JavaScript code.

```javascript
let age;
age = 50;

console.log(age);

// most of the time the variable is declared and defined in one line
let name = "Sam"

// if the variable has been declared already, you don't use let again
name = "Sierra"

let nameAge = name + age;

console.log(nameAge);
```
## Types of Variables

Variables in JavaScript can be of several types. The most common are:

### Strings

- Text or strings of characters.
  
    ```javascript
    let greeting = "Hello, World!";
    ```

### Numbers

- Both integers and floating-point numbers.

    ```javascript
    let score = 10;
    let price = 99.99;
    ```

### Booleans

- Represents logical values: `true` or `false`.

    ```javascript
    let isMember = true;
    ```

### Undefined and Null

- `undefined` means a variable has been declared but not assigned a value.
- `null` is used to represent a deliberate non-value.

    ```javascript
    let result;
    let data = null;
    ```



## Summary

Understanding and using variables is a fundamental aspect of JavaScript programming. By using variables, you can store and manipulate data effectively, laying the foundation for more complex programming tasks. The ability to declare and manage different data types allows for a wide range of functionalities in your web applications.

---



# Basic Control Structures in JavaScript

Control structures in JavaScript, like if-else statements and loops, are used to control the flow of execution in a program. They allow your code to make decisions and repeat actions, which are essential for creating dynamic and interactive web applications.

## If-Else Statements

If-else statements are used to execute certain code based on a condition. They help in decision-making within your code.

### Basic If-Else

- Executes a block of code if a specified condition is true, and another block if the condition is false.

    ```javascript
    let score = 75;

    if (score >= 50) {
        console.log("You passed!");
    } else {
        console.log("Try again.");
    }
    ```

### Else If

- To test multiple conditions, use `else if`.

    ```javascript
    let temperature = 30;

    if (temperature > 30) {
        console.log("It's hot outside!");
    } else if (temperature < 10) {
        console.log("It's cold outside!");
    } else {
        console.log("It's a nice day!");
    }
    ```

## Loops

Loops are used for repeating a block of code as long as a specified condition is true. They are useful for tasks that require repetition.

### For Loop

- Repeats a block of code a specified number of times.

    ```javascript
    for (let i = 0; i < 5; i++) {
        console.log("Number " + i);
    }
    ```

### While Loop

- Executes code as long as the condition is true.

    ```javascript
    let i = 0;
    while (i < 5) {
        console.log("Number " + i);
        i++;
    }
    ```


## Summary

Understanding basic control structures in JavaScript is crucial for creating dynamic web applications. If-else statements allow for conditional execution of code, while loops enable you to repeat actions efficiently. These structures are fundamental building blocks in JavaScript programming, enabling the development of complex and interactive functionalities.

---





# Comparisons and Logical Operators

In JavaScript, comparisons and logical operators are used to evaluate conditions and form the logic necessary for decision-making in your code. They are essential for controlling the behavior of your web applications based on different conditions.

## Comparison Operators

Comparison operators allow you to compare two values in your code. The result of a comparison is a Boolean value (`true` or `false`), which is often used to control the flow of execution with if-else statements.

### Basic Comparison Operators

- Equal (`==`): Checks if the values are equal after converting both variables to a common type.
- Strict Equal (`===`): Checks if the values are equal and of the same type, without conversion.
- Not Equal (`!=`): Checks if the values are not equal after type conversion.
- Strict Not Equal (`!==`): Checks if the values are not equal or not of the same type.

```javascript
let a = 5;
let b = '5';

console.log(a == b);  // true
console.log(a === b); // false


let c = "hello"
let d = "goodbye"

console.log(c != d);  // true
console.log(c !== d); // true

```

- Greater Than (`>`), Less Than (`<`), Greater Than or Equal to (`>=`), and Less Than or Equal to (`<=`).

```javascript
let temperature = 20;

if (temperature > 25) {
    console.log("It's hot outside!");
} else if (temperature < 15) {
    console.log("It's cold outside!");
} else {
    console.log("It's a pleasant day.");
}
```

## Logical Operators

Logical operators are used to combine multiple conditions. They evaluate to `true` or `false` depending on the conditions they are applied to.

### Basic Logical Operators

- AND (`&&`): Returns `true` if both operands are true, otherwise returns `false`.
- OR (`||`): Returns `true` if at least one of the operands is true.
- NOT (`!`): Returns `true` if the operand is false, and `false` if the operand is true.

```javascript
let age = 20;
let hasPermission = true;

if (age >= 18 && hasPermission) {
    console.log("Access granted.");
} else {
    console.log("Access denied.");
}

let outdoorEvent = false;
let goodWeather = false;

if (outdoorEvent && !goodWeather) {
    console.log("Event canceled due to bad weather.");
} else {
    console.log("Event proceeding.");
}
```

## Summary

Understanding comparisons and logical operators is crucial for programming in JavaScript, as they form the backbone of decision-making processes in your scripts. By using these operators effectively, you can control the flow of your programs based on conditions, making your web applications more dynamic and responsive to user interactions.