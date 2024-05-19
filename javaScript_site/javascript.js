
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
    }
}