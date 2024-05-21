
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
                            
            titleEx.innerHTML = "Variable"
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
            titleEx.innerHTML = "Functions"
            textContainer.innerHTML = textFunction;
            scriptContainer.innerHTML = codeExFunction;
            break;

        case 'closure':
            const textClosure  = `Closure:<br/><br/>
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
            titleEx.innerHTML = "Closure"
            textContainer.innerHTML = textClosure;
            scriptContainer.innerHTML = codeExClosure;
            break;

        case 'objects':
            const textObjects = 
            `What is an Object?<br/><br/>
            An object is a composite data type that represents a collection of related data and functionality.
            It allows you to group properties (key-value pairs) and methods (functions) together.<br/><br/>
            <li>You can access object properties using dot notation or square brackets:</li>
            <li>You can add or modify properties dynamically:</li><br/><br/>
            this Keyword:<br/><br/>
            <li>Inside an object method, this refers to the object itself.</li>
            <li>It allows you to access object properties and methods from within the method.</li><br/><br/>
            <a href="objects.html">Javascript Object Ex.</a>`;

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
        
            titleEx.innerHTML = "Objects"   
            textContainer.innerHTML = textObjects ;
            scriptContainer.innerHTML = codeExObjects;
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

            titleEx.innerHTML = "Conditionals"
            textContainer.innerHTML = textConditionals;
            scriptContainer.innerHTML = codeExConditionals;
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

            titleEx.innerHTML = "Callback"
            textContainer.innerHTML = textCallback;
            scriptContainer.innerHTML = codeExCallback;
            break;


        
        case 'array': 
            const textArray = `An array is a data structure that holds a collection of values (elements) 
            in a specific order. In JavaScript, arrays can contain any type of data, including strings, 
            numbers, objects, and even other arrays.<br/><br/>
            <li>Indexing: Each element in an array is assigned an index (position) starting from 0.</li><br/>
            <code>array.forEach(callback);</code><br/>
            Callback Parameters:
            <ul>
            <li>accumulator: The accumulated value.</li>
            <li>element: The current element being processed.</li>
            <li>index: The index of the current element.</li>
            <li>array: The original array being reduced.</li><br/><br/>
            <a href="array.html">Array Examples</a>
            `;

            const codeExArray = `
<pre>
let numbers = [1, 2, 3, 4, 5];

        numbers.forEach(square);
        numbers.forEach(display);

        function double(element, index, array){
          array[index] = element * 2;
        }

        function square(element, index, array){
            array[index] = Math.pow(element, 2);
        }

        function display(element){
            console.log(element)

        }
</pre>`;

            titleEx.innerHTML = "Array"
            textContainer.innerHTML = textArray;
            scriptContainer.innerHTML = codeExArray;
            break;

        case 'destructuring': 
            const textDestructuring = `Destructuring<br/><br/>
            <p>Destructuring in JavaScript is a powerful feature that allows you to unpack values from 
            arrays or objects into distinct variables.</p>

<pre>
const colors = ['red', 'green', 'blue', 'black', 'white'];

//asigning elements of an arry to a list of values
    const [firstColor, secondColor, thirdColor, ...extraColors] = colors;
    colors.forEach((element) => console.log(element));
</pre>

            <li>Object destructuring allows you to extract values from an object’s 
                properties and assign them to variables.</li><br/>
<pre>
const person = { name: 'Alice', age: 30 };
const { name, age } = person;
console.log(name); // 'Alice'
console.log(age); // 30
</pre>
            <li>You can provide default values for variables in case the property or array element doesn’t exist.</li>
            `;

            const codeExDestructuring = `
            <h3>More about destructuring</h3>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment" target="blank">Destructuring</a>
<pre>
// swapping values of vareables
    let a = 1;
    let b = 2;

    [a, b] = [b, a];

    //console.log(a, b);

    // swapping elements in an array
    const colors = ['red', 'green', 'blue', 'black', 'white'];

    [colors[0], colors[4]] = [colors[4], colors[0]];

    //console.log(colors);
</pre>
            `;

            titleEx.innerHTML = "Destructuring"
            textContainer.innerHTML = textDestructuring;
            scriptContainer.innerHTML = codeExDestructuring;
            break;

        case 'class': 
            const textClass = `Class<br/><br/>
            <p>In JavaScript, classes provide a way to create reusable templates for creating objects. 
            They encapsulate data along with methods that operate on that data. Let’s explore the key 
            aspects of classes in JavaScript:</p>
            <li>You can define a class using either a class declaration or a class expression.</li><br/>
            <h3>class declaration</h3>
<pre>
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log(\`Hello, I'm \${this.name}! I need a friend\`);
    }
}

const alice = new Person("Alice", 30);
const john = new Person("John", 35);
console.log(alice.name);
console.log(alice.greet());
</pre>

            <li>a constructor is a special function used to create 
            and initialize objects. Constructors serve as blueprints for creating multiple 
            objects with similar properties and methods.</li><br/>
            Class Declaration: Used for named classes with a fixed name. Supports inheritance and strict rules.<br/><br/>
            Class Expression: from what I see it's asigning a class to a variable?? Yes it seems to be! Used for 
            anonymous classes or when redefining classes. More flexible and allows anonymous instances.
            In practice, classes are often defined using class declarations, but class expressions offer additional 
            flexibility when needed.
            `;

            const codeExClass = `
            
                        
            Ok I created these people already but it was an object what's the difference?
            <br/>Let’s compare creating an object using a constructor function (as above) with creating a class.<br/><br/>
            Both approaches serve similar purposes, but they have some key differences:<br/><br/>
            <ul>
            <li>Classes support inheritance through the extends keyword.</li>
            <li>Use classes when possible, especially for more complex scenarios.</li>
            <li>Looks like key difference is Inheritance</li>
            </ul><br/><br>
            <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript" target="blank">More about classes in javaScript</a>
            `;

            titleEx.innerHTML = "Class"
            textContainer.innerHTML = textClass;
            scriptContainer.innerHTML = codeExClass;
            break;

        case 'inheritance': 
            const textInheritance = `Inheritance<br/><br/>
            <h3>How Inheritance Works in This Example</h3>

            <h3>Base Class (Parent Class): Animal</h3> 
            <p>The Animal class serves as the base class or parent class. It defines two properties:</p> 
            <ul> <li><strong>alive</strong>: A boolean property set to true.</li> <li>Two methods: <ul> <li><code>eat()</code>: Prints a message indicating that the animal is eating.</li> <li><code>sleep()</code>: Prints a message indicating that the animal is sleeping.</li> </ul> </li> </ul>

            <h3>Derived Classes (Child Classes): Rabbit, Fish, and Hawk</h3> 
            <p>These classes inherit from the Animal class, which means they automatically have access to its properties and methods.</p> 
            <p>Each derived class introduces its own properties (name) and methods (run(), swim(), and fly()).</p>

            <h3>Specifics of Each Derived Class:</h3> 
            <ul> <li><strong>Rabbit</strong>: <ul> <li>Inherits from Animal.</li> <li>Has an additional property <code>name</code> set to “rabbit”.</li> <li>Introduces a method <code>run()</code> that prints a message indicating that the rabbit is running.</li> </ul> </li> <li><strong>Fish</strong>: <ul> <li>Inherits from Animal.</li> <li>Has an additional property <code>name</code> set to “fish”.</li> <li>Introduces a method <code>swim()</code> that prints a message indicating that the fish is swimming.</li> </ul> </li> <li><strong>Hawk</strong>: <ul> <li>Inherits from Animal.</li> <li>Has an additional property <code>name</code> set to “hawk”.</li> <li>Introduces a method <code>fly()</code> that prints a message indicating that the hawk is flying.</li> </ul> </li> </ul>

            <h3>Creating Instances:</h3> 
            <p>We create instances of each derived class:</p> 
            <ul> <li><strong>rabbit</strong>: An instance of Rabbit.</li> <li><strong>fish</strong>: An instance of Fish.</li> <li><strong>hawk</strong>: An instance of Hawk.</li> </ul>

            <h3>Method Calls:</h3> 
            <p>We call methods on the instances:</p> 
            <ul> <li><code>rabbit.alive</code>: Accesses the <code>alive</code> property inherited from Animal. Since <code>alive</code> is true, it prints true.</li> <li><code>rabbit.eat()</code>: Calls the <code>eat()</code> method inherited from Animal, printing a message about the rabbit eating.</li> <li><code>rabbit.run()</code>: Calls the <code>run()</code> method specific to the Rabbit class, printing a message about the rabbit running.</li> </ul>

            <p>In summary, inheritance allows child classes (Rabbit, Fish, and Hawk) to inherit properties and methods from the parent class (Animal). Each child class can also introduce its own unique properties and methods. The instances of these classes can then access and use the inherited and specific properties/methods. 😊🐇🐠🦅</p>
                        `;

            const codeExInheritance = `
<pre>
inheritance allows a child class to inherit properties and 
   methods from an existing parent class*/
   
    class Animal{
        alive = true;

        eat(){
            console.log(\`This \${this.name} is eating\`);
        }

        sleep(){
            console.log(\`This \${this.name} is sleeping\`);
        }
    }

    class Rabbit extends Animal{
        name = "rabbit";
        run(){console.log(\`This \${this.name} is running\`);}
    }

    class Fish extends Animal{
        name = "fish";
        swim(){console.log(\`This \${this.name} is swimming\`);}       
    }

    class Hawk extends Animal{
        name = "hawk";
        fly(){console.log(\`This \${this.name} is flyinging\`);}
    }

    const rabbit = new Rabbit();
    const fish = new Fish();
    const hawk = new Hawk();

    console.log(rabbit.alive);
    rabbit.eat();
    rabbit.run();

</pre>
            `;

            titleEx.innerHTML = "Inheritance"
            textContainer.innerHTML = textInheritance;
            scriptContainer.innerHTML = codeExInheritance;
            break;

        
    }
}

        