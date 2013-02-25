
http://web.njit.edu/~sdr3/DesignPatterns/


What are design patterns?

Design patterns have been understood as building blocks of code that can be
replicated in different languages and settings to serve the same ultimate purpose.
Design patterns have been proven to be tried and true techniques that solve a 
common problem, thus the reason for their initial creation. Design patterns are flexible 
in the sense that you can follow the pattern exactly to build an object exactly the pattern
describes, or you can alter the pattern to suit your individual usage depending on the
context of what you are trying to accomplish in the program you are writing. A common 
metaphor for the purpose and usage of design patterns in computer programming is the expression:
“Don’t reinvent the wheel; reuse its design.” By implementing the usage of design patterns, 
programmers are actively thinking of how to write less code, and to write the code they are 
writing more efficiently. This eliminates some of the needs of refactoring in order to clean 
up code redundancies later on post-development.


Creational Design Patterns

The use of Creational patterns enable the programmer to:

    -Deal with object creation in an organized and efficient manner
    -Reduce complexity and code when dealing with object creation/manipulation


Why I used the Factory with the Decorator pattern:

In this example, the factory method is used to create a car object, which in this case is a 
Tesla Model S. The decorator is used efficiently to add features to the car which then add 
to the overall cost which is an initial attritbute of the Model S car. One would assume that 
many internet customization modules for expensive items such as cars like these would utilize 
decorator patterns as methods for which to add features and increment cost accordingly.

Associated Files: creational.js


Structural Patterns

The uses of Structural patterns permit the following:

    -Clear understanding of the relationship between objects in a system
    -Isolating the changes of a system in one area without affecting the system as a whole


Why I used the Facade with the Proxy Pattern:

Here, I have implemented the facade by hiding the inner workings of the structure of the javaScript 
file thorugh the use of the "inventory" function assigned to a variable. This is treated as a private 
variable and its mehods are not directly accessible from the outside. In the purchaser.js file, the 
"purchaser" makes a purchase decision based on inventory levels described in the inventory.js file. 
While trying to execute a command execute function, it seemed to be off by the value of one (1) though 
I am unsure why. As a workaround for this problem I implemented a proxy instead, which for all intents 
and purposes serves the same function as the command pattern in this instance. 

Associated files: inventory.js, purchaser.js, purchMgr.js


Behavioral Design Patterns

Behavioral patterns allow the programmer to:

    -Correctly represent the flow of information between components within a system


Why I used the Creation with the Observer Pattern:

Osmani's observer pattern as displayed on his site demonstrates how the observer pattern maintains a 
list and notifies it of any changes to its state. In the case where I created a people script and a 
chatterbox script, the subjects norify observers about something interesting happening, in this case, 
just a simple, "Hello World", "Bye World" message.

Associated files: observer.js, subject.js, people.js, chatters.js

