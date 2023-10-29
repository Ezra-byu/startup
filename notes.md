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

## Midterm study guide
The following questions are examples of what you may see on the midterm exam:

- In the following code, what does the link element do?
- In the following code,  what does a div tag do?
- In the following code, what is the difference between the #title and .grid selector?
- In the following code, what is the difference between padding and margin?
- Given this HTML and this CSS how will the images be displayed using flex?
- What does the following padding CSS do?
- What does the following code using arrow syntax function declaration do?
- What does the following code using map with an array output?
- What does the following code output using getElementByID and addEventListener?
- What does the following line of Javascript do using a # selector?
- Which of the following are true? (mark all that are true about the DOM) (how does it actually form a heirarcahl representationf of the page)
- By default, the HTML span element has a default CSS display property value of: 
- How would you use CSS to change all the div elements to have a background color of red?
- How would you display an image with a hyperlink in HTML?
- In the CSS box model, what is the ordering of the box layers starting at the inside and working out?
- Given the following HTML, what CSS would you use to set the text "troubl" to green and leave the "double" text  unaffected? (use an ID, understand P-tag)
- What will the following code output when executed using a for loop and console.log? (Understand console)
- How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?
- What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading? (understand what are the tags for all this, H1, P-tag)
- How do you declare the document type to be html?
- What is valid javascript syntax for if, else, for, while, switch statements?
- What is the correct syntax for creating a javascript object?
- Is is possible to add new properties to javascript objects? (changing the classes of a javacript object at run time)
- If you want to include JavaScript on an HTML page, which tag do you use? (script tag)
- Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?
- Which of the following correctly describes JSON?
- What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do? (play around with commandline)
- Which of the following console command creates a remote shell session?
- Which of the following is true when the -la parameter is specified for the ls console command?
- Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is - a subdomain, which is a root domain?
- Is a web certificate is necessary to use HTTPS. (understand how a connection with secure shell works. Broweser <-> Server https diagram)
- Can a DNS A record can point to an IP address or another A record.
- Port 443, 80, 22 is reserved for which protocol?
- What will the following code using Promises output when executed?