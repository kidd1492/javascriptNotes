
const titleEx = document.getElementById('titleEx');
const textContainer = document.getElementById('textContainer');
const scriptContainer = document.getElementById('scriptContainer');


function getExamples(example){
    switch(example){
        case 'variable':
            const textVariable = "<b>let, const, and var in JavaScript:</b><br/><br/>\
                                <b>let:</b>\
                                let is used to declare a mutable (changeable) variable.\
                                Variables declared with let can be reassigned new values.\
                                They have block scope, which means they are only accessible\
                                within the block<br/><br/>\
                                \
                                <b>const:</b>\
                                const is used to declare a constant (immutable) variable.\
                                Variables declared with const cannot be reassigned after their initial value.\
                                They also have block scope.\
                                Use const when you know the value won’t change throughout your code.\
                                \
                                <ul><li>Use let for variables that may change.</li>\
                                <li>Use const for constants that won’t change.</li>\
                                <li>Avoid using var due to its unpredictable behavior.</li></ul>";

            const codeExVariable = 
'<pre>\
let variable = 8\;<br/>\
const variable = 3.14\;<br/>\
var variable = "A string"\;<br/>\
</pre>';
                            

            textContainer.innerHTML = textVariable;
            scriptContainer.innerHTML = codeExVariable;
            break;
        
        case 'function' : 
            const textFunction = `Function Declaration:<br/><br/>
            <p>Definition: A function is a named block of code that can be called \
            (or invoked) to perform a specific action. It encapsulates a series of\ 
            statements and can take input (called parameters) and produce output (called a return value).</p><br/>
                <li>A function is an object</li>
                <li>A function is defined using the function keyword followed by a name (identifier).</li>
                <li>It can take zero or more parameters (also known as arguments).</li>
                <li>The function body contains the code to be executed when the function is called.</li><br>
                Function Call (Invocation):<br/><br/>\
                <li>To execute a function, you “call” it by using its name followed by parentheses.</li>
                <li>Pass any required arguments inside the parentheses.</li><br/><br/>
                Functions in Javascript: <br/><br/><a href="functions.html">Types of Funtions in Javascript</a>`;

            const codeExFunction = `Javascript function example:<br><br>
<pre>
function functionName(argument, argument) {
    Code to exicute;
    //\Functions can return a value using the return keyword.
    return result;
}</pre><br/>
                
                `;

            textContainer.innerHTML = textFunction;
            scriptContainer.innerHTML = codeExFunction;
            break;

        case 'objects':
            const textObjects = `What is an Object?<br/><br/>
            An object is a composite data type that represents a collection of related data and functionality.
            It allows you to group properties (key-value pairs) and methods (functions) together.<br/><br/>
                <li>You can access object properties using dot notation or square brackets:</li>
                <li>You can add or modify properties dynamically:</li><br/><br/>
                this Keyword:<br/><br/>
                <li>Inside an object method, this refers to the object itself.</li>
                <li>It allows you to access object properties and methods from within the method.</li><br/><br/>
                <a href="objects.html">Javascript Object Ex.</a>
                `;

            const codeExObjects = 
                `Object Literal Syntax:<br><br>
<pre>
const person = {
    name: "Alice",
    age: 30,
    greet: function() {
      console.log(\`Hello, I'm \${this.name}!\`);
    }
  };  
</pre>
                `;
        
            textContainer.innerHTML = textObjects ;
            scriptContainer.innerHTML = codeExObjects;
            break;

        case 'closure':
            const textClosure  = `closure:<br/><br/>
            A closure in JavaScript is a powerful concept that combines a function with 
            references to its surrounding state (known as the lexical environment).<br/><br/>

            <p>Definition: A closure is formed when an inner function (a function defined inside another function) 
            retains access to the variables and parameters of its outer function even after the outer function has finished executing.<br/><br/>
            Access to Outer Scope: Closures allow you to access variables from the parent scope within an inner function. 
            This is particularly useful for creating private variables and maintaining state.</p><br/><br/>

            Maintaining State:<br/>
            Closures help maintain state between events in event-driven JavaScript.
            For example, if you want to count the number of times a button is clicked on a webpage, closures are an excellent choice. You can create a counter variable within a closure, and each time the button is clicked, the counter is updated.
            This ensures that the counter remains private and isn’t affected by other scripts on the page.<br><br>
            Private Variables:<br>
            Closures allow you to create private variables by enclosing them within the closure scope.
            These variables are not accessible from outside the closure, providing encapsulation and preventing unintended modifications.
            For instance, you can use closures to create modules with private data and expose only specific functions or properties.<br><br>
            Callbacks and Asynchronous Code:<br>
            Closures are essential for handling callbacks and asynchronous operations.
            When dealing with asynchronous tasks (e.g., fetching data from a server), you can use closures to capture the necessary context and manage state.
            For example, when using setTimeout or making AJAX requests, closures ensure that the correct data is available when the callback executes.<br><br>
            Currying:<br>
            Currying is a functional programming technique where a function returns another function with some of its arguments pre-filled.
            Closures enable currying by capturing the initial arguments and allowing subsequent partial function calls.
            Curried functions are useful for creating reusable and composable code.<br><br>
            Memoization:<br>
            Memoization involves caching the results of expensive function calls to improve performance.
            Closures can store previously computed results and return them directly if the same input is encountered again.
            This optimization is commonly used in recursive algorithms or expensive computations.<br><br>
            Emulating Private Variables or Encapsulation:<br>
            JavaScript lacks true private variables, but closures allow you to emulate them.
            By enclosing data within a closure, you create a private scope accessible only to specific functions.
            This pattern is useful for creating clean APIs and preventing accidental modifications.<br><br>
            There is a lot to this make a script to use each of these<br/><br/>
            Further Reading:<br/>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures" target="_blank">JavaScript/Closures</a>

                `;
        
            const codeExClosure = 
                `Closure example:<br><br>
<pre>
function createCounter(num) {
    let plus = num;
    let count = 0; // This variable is private to the 'createCounter' function

    return function increment() {
        count += plus; // Access the 'count' variable from the outer scope
        console.log(\`Current count: \${count}\`);
    };
}

// Create two counters
const counter1 = createCounter(2);
const counter2 = createCounter(4);

counter1(); // Outputs: "Current count: 1"
counter1(); // Outputs: "Current count: 2"

counter2(); // Outputs: "Current count: 1"
counter2(); // Outputs: "Current count: 2"

</pre>
`;
        
            textContainer.innerHTML = textClosure ;
            scriptContainer.innerHTML = codeExClosure;
            break;

        case 'conditionals':
            const textConditionals = ` Conditionals allow you to control the flow of your program based on specific criteria. 
            They’re essential for making decisions and handling different scenarios in your code!<br/><br/>
            Conditional statements in JavaScript allow you to test a condition and execute a block of code based on the result of that test.<br><br/>
            <br/><br/>
<pre>
if (condition1) {<br/>
....// Block of code to be executed if condition1 is true<br/>
} else if (condition2) {<br/>
....// Block of code to be executed if condition1 is false and condition2 is true<br/>
} else {<br/>
....// Block of code to be executed if both condition1 and condition2 are false<br/>
}</pre>
            `;

            const codeExConditionals = 
`<pre>
const num = 10;
if (num < 10) {
    console.log("number is less than 10");
} 
else if (num > 10) {
    console.log("number is greater than 10");
} 
else {
    console.log("number is 10");
}</pre>

            `;

            textContainer.innerHTML = textConditionals;
            scriptContainer.innerHTML = codeExConditionals;
            break;

        case 'array': 
            const textArray = `An array is a data structure that holds a collection of values (elements) 
            in a specific order. In JavaScript, arrays can contain any type of data, including strings, 
            numbers, objects, and even other arrays.<br/><br/>
            <li>Indexing: Each element in an array is assigned an index (position) starting from 0.</li><br/>
            <li>JavaScript syntax requires properties beginning with a digit to be accessed using bracket notation</li>
            `;

            const codeExArray = `An array is a data structure that holds a collection of values (elements) 
            in a specific order. In JavaScript, arrays can contain any type of data, including strings, 
            numbers, objects, and even other arrays.<br/><br/>
            `;

            textContainer.innerHTML = textArray;
            scriptContainer.innerHTML = codeExArray;
            break;

        case 'callback': 
            const textCallback = `In JavaScript, a callback function is a function that is passed as an argument 
            to another function and is executed after some operation has been completed. Callbacks allow us to write 
            asynchronous code, where we can continue to execute other code while waiting for a particular event to occur.<br/><br/>

            Here are the key points about callbacks:<br/>
            
            Definition:<br/>
            A callback is a function passed as an argument to another function.
            It is executed when the receiving function completes its task.
            Asynchronous Execution:
            Callbacks are essential for handling asynchronous operations, such as fetching data from a server, reading files, or handling user interactions.
            Instead of blocking the execution, callbacks allow other code to run while waiting for the asynchronous task to finish.<br/><br/>
            Let’s explore a simple real-world example of callbacks to demonstrate their benefits. Imagine you’re building a weather application that fetches weather data from an external API. Callbacks are commonly used in scenarios like this, where you need to handle asynchronous operations.

            Here’s how you can implement a basic weather app using callbacks:

            Fetching Weather Data (Simulated):
            Suppose you have an API endpoint that provides weather information for a specific location.
            Simulate fetching weather data using a function that accepts a callback.
            Displaying Weather Information:
            Create a function that displays the weather information on your webpage.
            This function will be called once the weather data is retrieved.<br/><br/>
            This also cover Asynchronous:<br/><br/>
            <a href="asynchronous.html"> Asynchronous Ex :</a>

            `;

            const codeExCallback = `
<pre>
function function1(callback){
    setTimeout(() => {console.log('Task 1');
                      callback()}, 3000);
}


function function2(){
    console.log('task 2');
    console.log('task 3');
    console.log('task 4');
}


function1(function2);
</pre>
            `;

            textContainer.innerHTML = textCallback;
            scriptContainer.innerHTML = codeExCallback;
            break;

        case 'asynchronous': 
            const textasynchronous = `Asynchronous<br/><br/>
            <li></li><br/>
            <li></li>
            `;

            const codeExasynchronous = `
<pre>
function function1(callback){
    setTimeout(() => {console.log('Task 1');
                      callback()}, 3000);
}


function function2(){
    console.log('task 2');
    console.log('task 3');
    console.log('task 4');
}


function1(function2);</pre>
            <br/><br/>
            `;

            textContainer.innerHTML = textasynchronous;
            scriptContainer.innerHTML = codeExasynchronous;
            break;
    }
}