
const titleEx = document.getElementById('titleEx');
const textContainer = document.getElementById('textContainer');
const scriptContainer = document.getElementById('scriptContainer');
titleEx.style.backgroundColor = "red";

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

            const codeExVariable = 'let variable = 8\; <br/>\
                                const variable = 3.14\;<br/>\
                                var variable = "A string"\;<br/><br/><br/>\
                                ';
                            

            textContainer.innerHTML = textVariable;
            scriptContainer.innerHTML = codeExVariable;
            break;
        
        case 'function' : 
            const textFunction = `Function Declaration:<br/><br/>
                <li>A function is defined using the function keyword followed by a name (identifier).</li><br/>
                <li>It can take zero or more parameters (also known as arguments).</li><br/>
                <li>The function body contains the code to be executed when the function is called.</li><br></br>
                Function Call (Invocation):<br/><br/>\
                <li>To execute a function, you “call” it by using its name followed by parentheses.</li><br/>
                <li>Pass any required arguments inside the parentheses.</li>`;

            const codeExFunction = `Javascript function example:<br><br>
                function functionName(argument, argument) {<br>
                ....Code to exicute;<br>
                ....//\Functions can return a value using the return keyword.<br/>
                ....return result;<br/>
                }<br/>
                <a href="functions.html">Example in Action</a>
                `;

            textContainer.innerHTML = textFunction;
            scriptContainer.innerHTML = codeExFunction;
            break;

        case 'anonymous':
            const textAnonymous = `Anonymouse Functions:<br/><br/>
                With anonymous function you can create functions without a name (anonymous functions).
                In JavaScript, we often use them for specific purposes.<br/><br/>
                <li>An anonymous function is created without an identifier (name).</li><br/>
                <li>It’s defined using the function keyword followed by parentheses () and curly braces {}.</li><br/>
                <li>Assign them to variables or use them directly.</li><br/>
                <li>Anonymous functions help encapsulate code and prevent polluting the global scope.</li>
                `;

            const codeExAnonymous = 
                `Anonymous function example:<br><br>
                const myFunction = function() {<br/>
                ....// Code here<br/>
                };`;
        
            textContainer.innerHTML = textAnonymous ;
            scriptContainer.innerHTML = codeExAnonymous;
            break;

        case 'arrowFunction':
            const textArrowFunction = `Arrow Functions:<br/><br/>
                Arrow functions, introduced in ECMAScript 6 (ES6), provide a concise
                syntax for defining functions. They are especially useful for short, one-liner functions.<br/><br/>
                <li>Arrow functions provide a concise syntax for defining functions.</li><br/>
                <li>They don't have their own 'this' context.</li><br/>
                <li>If your function body consists of a single expression (like in the example), you can omit the curly braces {}.</li><br/>
                <li>However, if you want to include multiple statements or need to perform additional logic, use the curly braces.</li>
                `;
        
            const codeExArrowFunction = 
                `Arrow function example:<br><br>
                const square = (num) => num * num;<br><br/>
                const squaredValue = square(3); // squaredValue = 9<br/><br>
                const square = function(num){<br/>
                ....return num * num;<br/>
                }
                `;
        
            textContainer.innerHTML = textArrowFunction;
            scriptContainer.innerHTML = codeExArrowFunction;
            break;

        case 'conditionals':
            const textConditionals = ` Conditionals allow you to control the flow of your program based on specific criteria. 
            They’re essential for making decisions and handling different scenarios in your code!<br/><br/>
            Conditional statements in JavaScript allow you to test a condition and execute a block of code based on the result of that test.<br><br/>
            <li>if - <b>if</b> a condition is met execute this code</li><br/>
            <li>if - <b>else if</b> a condition 1 is not met then execute this code</li><br/>
            <li>if - <b>else</b> if a condition 1 is not met then execute this code</li><br/>
            `;

            const codeExConditionals = `if (condition1) {<br/>
            ....// Block of code to be executed if condition1 is true<br/>
            } else if (condition2) {<br/>
            ....// Block of code to be executed if condition1 is false and condition2 is true<br/>
            } else {<br/>
            ....// Block of code to be executed if both condition1 and condition2 are false<br/>
            }
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