# Notes 
This document contains useful tid bits of information. You can use the contents of this file while taking the midterm and final exam.
## Unit One
### Github: Pushing, pulling
Pushing to GitHub
```
➜  git add example.md
➜  git commit -am "update"
➜  git push
```
Pulling from GitHub
```
➜  git fetch
➜  git status
➜  git pull
```
That is all for now. And remember
>Todo lo puedo con Cristo que me fortalezca :shipit:
## Miniquest
### Elevator pitch
>This is a fun multiplayer real time strategy game. Play with your friends and experience a sense of combat driven excitement. Each character plays as one member of an adventuring company, each with special abilities. They must all cooperate and use their different abilities to succeed and vanquish evil from the kingdom.
### Design Mockups
![Stinger log in. First slide of the mockup.](/images/log_in.png)
![Stinger log in. First slide of the mockup.](/images/select_player_class.png)
![Stinger log in. First slide of the mockup.](/images/loading.png)
![Stinger log in. First slide of the mockup.](/images/game_state.png)
### Key features
- Secure Https log in
- Select character to play and have the various stats displayed
- Player choice logged in database
- Websockets see which players are currently requesting to join a game
### Technologies
- HTMl: Use HTML for the structure of the website.
- CSS: create graphics in line with the mockups that I have attached
- Javascript: use are register client side interaction
- Database: store user choices
- Authentication: use and siplay users' usernames.
- Websocket data for player staging (seeing which characters are requesting an open game and putting them together)
## HTML deliverable
CS 260
- I added HTML pages for each component of your application, with links in the page menus.
- I added application textual content via text boxes and content.
- I added placeholders for 3rd party content on the Choose Character page (for character selection function) and the Play page (for playing function, which may remain as a place holder depending on how far I get)
- I added application images, in this case pictures of birds as placeholders
- I kept the Login placeholder, including user name display.
- The database placeholder exists as functions of the character selection buttons
- The websocket placeholder is the Websocket data for player staging (seeing which characters are requesting an open game and putting them together) which would run behind the scenes on the Hints page

## CSS deliverable
- I added a css style for Header, footer, and main content body
- I added a CSS formatted nav bar on each page
- I added a sticky footer and other elements to respond to window resizing
- Elements of my application were updated with formatting
- I added application specific text and images
- Websocket/database placeholders

# Midterm study guide
The following questions are examples of what you may see on the midterm exam:

### In the following code, what does the link element do?
```
The <link> tag defines the relationship between the current document and an external resource.
The <link> tag is most often used to link to external style sheets or to add a favicon to your website.
The <link> element is an empty element, it contains attributes only.
```
### In the following code,  what does a div tag do?
```
As a "pure" container, the <div> element does not inherently represent anything. Instead, it's used to group content so it can be easily styled using the class or id attributes, marking a section of a document as being written in a different language (using the lang attribute), and so on.
<div>
  <p>
    Any kind of content here. Such as &lt;p&gt;, &lt;table&gt;. You name it!
  </p>
</div>
```
### In the following code, what is the difference between the #title and .grid selector?

- The CSS grid layout module excels at dividing a page into major regions or defining the relationship in terms of size, position, and layer, between parts of a control built from HTML primitives.

- Like tables, grid layout enables an author to align elements into columns and rows. However, many more layouts are either possible or easier with CSS grid than they were with tables. For example, a grid container's child elements could position themselves so they actually overlap and layer, similar to CSS positioned elements.

- In CSS, selectors are patterns used to select the element(s) you want to style.

- '#' Putting the "#" symbol as the href for something means that it points not to a different URL, but rather to another id or name tag on the same page.
```
<!DOCTYPE html>
<html>
<head>
<style>
.grid-container {
  display: inline-grid;
  grid-template-columns: auto auto auto;
  background-color: #2196F3;
  padding: 10px;
}

.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
}
</style>
</head>
<body>

<h1>display: inline-grid</h1>

<p>Use display: inline-grid; to make an inline grid container:</p>

<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>  
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>  
</div>

</body>
</html>
```
### In the following code, what is the difference between padding and margin?
- Margin: It is the space around an element. Margins are used to move an element up or down on a page as well as left or right. Margin is completely transparent, and it does not have any background color. It clears the area around the element. Each side of the element has a margin size you can change individually. In creating the gap, the margin pushes adjacent elements away.
- Padding: It is the space between the element and the related content inside it. It determines how elements look and sit within a container. It also shows the container background around the element in it. Padding can be affected by background colors as it clears the area around the content. To create the gap, it either grows the element size or shrinks the content inside. By default, the size of the element increases.
### Given this HTML and this CSS how will the images be displayed using flex?
```
<!DOCTYPE html>
<html>
<head>
<style>
.flex-container {
  display: flex;
  align-items: stretch;
  background-color: #f1f1f1;
}

.flex-container>div {
  background-color: DodgerBlue;
  color: white;
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;
}
</style>
</head>
<body>

<h1>The flex Property</h1>

<p>Make the third flex item not growable (0), not shrinkable (0), and with an initial length of 200 pixels:</p>

<div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div style="flex: 0 0 200px">3</div>
  <div>4</div>
</div>

</body>
</html>
```
[image of CSS.](/images/Screenshot 2023-10-30 at 6.37.58 PM.png)
```
<!DOCTYPE html>
<html>
<head>
<style>
.flex-container {
  display: flex;
  align-items: stretch;
  background-color: #f1f1f1;
}

.flex-container > div {
  background-color: DodgerBlue;
  color: white;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;
}
</style>
</head>
<body>

<h1>The flex-grow Property</h1>

<p>Make the third flex item grow eight times faster than the other flex items:</p>

<div class="flex-container">
  <div style="flex-grow: 1">size1</div>
  <div style="flex-grow: 2">size2</div>
  <div style="flex-grow: 8">size8</div>
</div>

</body>
</html>
```
### What does the following padding CSS do?
### What does the following code using arrow syntax function declaration do?
This is a function in arrow syntax that takes no parameters and always returns 3.
```
() => 3;
```
The following two invocations of sort are equivalent.
```
const a = [1, 2, 3, 4];

// standard function syntax
a.sort(function (v1, v2) {
  return v1 - v2;
});

// arrow function syntax
a.sort((v1, v2) => v1 - v2);
```
arrow functions cannot be used for constructors or iterator generators.

### What does the following code using map with an array output?
The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.
```
const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]
```

```
<script>
const persons = [
  {firstname : "Malcom", lastname: "Reynolds"},
  {firstname : "Kaylee", lastname: "Frye"},
  {firstname : "Jayne", lastname: "Cobb"}
];

persons.map(getFullName);

function getFullName(item) {
  return [item.firstname,item.lastname].join(" ");
}
</script>
```

### What does the following code output using getElementByID and addEventListener?
- The getElementById() method returns an element with a specified value.
- The getElementById() method returns null if the element does not exist.
- The getElementById() method is one of the most common methods in the HTML DOM. It is used almost every time you want to read or edit an HTML element.
```
<!DOCTYPE html>
<html>
<body>

<h1>The Document Object</h1>
<h2>The getElementById() Method</h2>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = "Hello World";
</script>

</body>
</html>
```
Syntax:
- element.addEventListener(event, function, useCapture)
The addEventListener() method attaches an event handler to an element.
```
<html>
<body>

<h1>The Element Object</h1>
<h2>The addEventListener() Method</h2>

<p>Execute a function when a user clicks on a button:</p>

<button id="myBtn">Try it</button>

<p id="demo">

<script>
const element = document.getElementById("myBtn");
element.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}
</script>

</body>
</html>
```

### What does the following line of Javascript do using a # selector?
To select an element with a specific id, write a hash character, followed by the id of the HTML element:
```
<!DOCTYPE html>
<html>a<!DOCTYPE html>
<html>
<body>

<p>Click the button to hide the element with id="London".</p>

<button onclick="w3.hide('#London')">Hide London</button>

<div id="London" class="city">
  <h2>London</h2>
  <p>London is the capital city of England.</p>
</div>

</body>
</html>
```

### Which of the following are true? (mark all that are true about the DOM) (how does it actually form a heirarcahl representationf of the page)

The Document Object Model (DOM) is the data representation of the objects that comprise the structure and content of a document on the web
- document.querySelector()
- document.querySelectorAll()
- document.createElement()
-  Element.innerHTML
-  Element.setAttribute()
-  Element.getAttribute()
-  EventTarget.addEventListener()

Document, node, element, nodelist, atrr..
### By default, the HTML span element has a default CSS display property value of: 
1

### How would you use CSS to change all the div elements to have a background color of red?

- "<div style="height:100px;" style="background-color:red;">text</div>" 
- <div style="height:100px;background:red;">text</div>

### How would you display an image with a hyperlink in HTML?

<img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="W3Schools.com">

<img src="img_chania.jpg" alt="Flowers in Chania">

### In the CSS box model, what is the ordering of the box layers starting at the inside and working out?
- content, padding, border, margin 
```
div {
  width: 300px;
  border: 15px solid green;
  padding: 50px;
  margin: 20px;
}
```

### Given the following HTML, what CSS would you use to set the text "troubl" to green and leave the "double" text  unaffected? (use an ID, understand P-tag)
```
<!DOCTYPE html>
<html>
<body>

<h1>A p tag color example </h1>

<p style="color:cornflowerblue">Soulja bou tellum.</p>

</body>
</html>

```
```
<!DOCTYPE html>
<html>
<head>
<style>
#mytag {
  background-color: cornflowerblue;
}
</style>
</head>
<body>

<h1>Demo of the #id selector</h1>

<div class="intro">
  <p id="mytag">only this is blue.</p>
  <p id="hometown">not that color.</p>
</div>

<p>not colrored /ghihglighted eirthwet .</p>

</body>
</html>
```

### What will the following code output when executed using a for loop and console.log? (Understand console)
```
<button onclick="let i=1;i++;console.log(i)">press me</button>
<!-- OUTPUT: 2 -->
```

### How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?
```
  <script> 
        // Provide a function to modify the  
       // "gfg" element's font color. 
        function changeColor() { 
            var gfg = document.getElementById("gfg"); 
            var selectColor =  
                document.getElementById("selectColor"); 
            
            // From the drop-down menu, obtain  
           // the value of the chosen color. 
            var selectedColor = 
                selectColor.options[selectColor.selectedIndex].value; 
            
            // Set the font color of the "gfg"  
           // element to the selected color 
            gfg.style.color = selectedColor; 
        } 
    </script> 
```
### What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading? (understand what are the tags for all this, H1, P-tag)
- <p> HTML element for a paragraph
- <ol> tag for ordered list
- <ul> tag defines an unordered (bulleted) list. Use the <ul> tag together with the <li> tag to create unordered lists
- <H2>Second level heading
- <h1> is the HTML element for the first-level heading of a document
- <h3> tag defines the third level heading
### How do you declare the document type to be html?
<! DOCTYPE html>` is required in the first line of your HTML documen

### What is valid javascript syntax for if, else, for, while, switch statements?
if:
```
<script>
if (new Date().getHours() < 18) {
  document.getElementById("demo").innerHTML = "Good day!";
}
</script>
```

else:
```
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript if .. else</h2>

<p>A time-based greeting:</p>

<p id="demo"></p>

<script>
const hour = new Date().getHours(); 
let greeting;

if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

document.getElementById("demo").innerHTML = greeting;
</script>

</body>
</html>
```

while:
```
<p id="demo"></p>

<script>
const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text = "";
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}

document.getElementById("demo").innerHTML = text;
</script>

//out put: BMW
Volvo
Saab
Ford
Fiat
Audi
```

switch:

- The switch expression is evaluated once.
- The value of the expression is compared with the values of each case.
- If there is a match, the associated block of code is executed.
- If there is no match, the default code block is executed.

```
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
```

### What is the correct syntax for creating a javascript object?

classic single:
```
<body>

<h2>JavaScript Variables</h2>

<p id="wordssss"></p>

<script>
// Create and display a variable:
let person = "John Doe";
document.getElementById("wordssss").innerHTML = person;
</script>

</body>
```

using an object literal:
```
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
```

using keyword new:
```
const person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
```

nested:
```
myObj = {
  name:"John",
  age:30,
  cars: {
    car1:"Ford",
    car2:"BMW",
    car3:"Fiat"
  }
}
```
### Is is possible to add new properties to javascript objects? (changing the classes of a javacript object at run time)

Properties are the values associated with a JavaScript object.
A JavaScript object is a collection of unordered properties.
Properties can usually be changed, added, and deleted, but some are read only.

### If you want to include JavaScript on an HTML page, which tag do you use? (script tag)
### Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?
### Which of the following correctly describes JSON? (JavaScript Object Notation)
JavaScript Object Notation
bad example:
```
const JazzMusic = [
  { title: "Take Five", artist: "Dave Brubeck", stars: 4.8 },
  { title: "So What", artist: "Miles Davis", stars: 3.8 },
  { title: "Take The A Train", artist: "Duke Ellington", stars: 4.2 },
  { title: "Round Midnight", artist: "Thelonious Monk", stars: 3.1 },
  { title: "My Favorite Things", artist: "John Coltrane", stars: 3.0 }
];
```

good example:
```
{
"employees":[
    {"firstName":"John", "lastName":"Doe"},
    {"firstName":"Anna", "lastName":"Smith"},
    {"firstName":"Peter", "lastName":"Jones"}
]
}
```

- Data is in name/value pairs
- Data is separated by commas
- Curly braces hold objects
- Square brackets hold arrays


### What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do? (play around with commandline)

- chmod: (CHange MODe) command is used to change permissions for a file or directory on a Unix machine.
- pwd: writes to standard output the full path name of your current directory (from the root directory)
- ls list files
- vim: There are two modes in vim. One is the command mode and another is the insert mode. In the command mode, user can move around the file, delete text, etc.
- nano: a simple yet powerful command line-based text editor, very popular among beginner Linux users for its simple-to-use interface. 
- mkdir create or make new directories. mkdir [options...] [directories ...]
- mv: mv [source_file_name(s)] [Destination_file_name]
- rm command to remove files you no longer need
- man:  provides reference information on topics, such as commands
- ssh: jayesaasdfasfh@10.143.90.2
- ps :display a list of your processes that are currently running and obtain additional information about those processes.
- wget: lets you download files and interact with REST APIs
- sudo: allows you to run programs with the security privileges of another user

### Which of the following console command creates a remote shell session?
Enter-PSSession Server01
- rsh allows you to execute a command on a remote machine without actually logging onto that machine
### Which of the following is true when the -la parameter is specified for the ls console command?

To show all entries for files, including those that begin with a dot (.), use the ls -a command.
List one entry per line, using the -l flag.

### Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is - a subdomain, which is a root domain?

www(subdomain).blog(subdomain).yourname(SLD).com(TLD)
root domain name and tld (yourname.com)

### Is a web certificate is necessary to use HTTPS. (understand how a connection with secure shell works. Broweser <-> Server https diagram)
To use HTTPS with your domain name, you need a SSL or TLS certificate installed on your website
### Can a DNS A record can point to an IP address or another A record.
yes??
### Port 443, 80, 22 is reserved for which protocol?
tcp
Control Protocol (TCP) is a communications standard that enables application programs and computing devices to exchange messages over a network 6
### What will the following code using Promises output when executed?
```
function pickupPizza() {
  const order = createOrder();

  // Promise
  placeOrder(order)
    .then((order) => makePizza(order))
    .then((order) => serveOrder(order))
    .catch((order) => {
      orderFailure(order);
    });
}

function createOrder() {
  // Make the order and associate it with a new HTML element
  const id = Math.floor(Math.random() * 10000);
  const orderElement = document.createElement("li");
  const order = { element: orderElement, id: id };

  // Insert the order into the HTML list
  orderElement.innerHTML = `<span>[${order.id}] &#128523; <i>Waiting</i> ...</span>`;
  const orders = document.getElementById("orders");
  orders.appendChild(orderElement);

  return order;
}

function placeOrder(order) {
  return new Promise((resolve, reject) => {
    doWork(order, 1000, 3000, resolve, reject, `cashier too busy`);
  });
}

function makePizza(order) {
  return new Promise((resolve, reject) => {
    doWork(order, 1000, 3000, resolve, reject, "cook burned pizza");
  });
}

function doWork(order, min, max, resolve, reject, errMsg) {
  let workTime = Math.random() * (max - min) + min;
  setTimeout(() => {
    workTime = Math.round(workTime);
    if (workTime < max * 0.85) {
      resolve(order);
    } else {
      order.error = errMsg;
      reject(order);
    }
  }, workTime);
}

function serveOrder(order) {
  order.element.innerHTML = `<span>[${order.id}] &#127829; <b>Served</b>!</span>`;
}

function orderFailure(order) {
  order.element.innerHTML = `<span> [${order.id}] &#128544; <b class='failure'>Failure</b>! ${order.error}</span>`;
}
```