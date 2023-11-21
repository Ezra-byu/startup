## startup
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
- Websocket placeholder
## JavaScript deliverable
-  JavaScript support for future login (see login)
- JavaScript support for future database data 
- JavaScript support for future WebSocket
- JavaScript support for your application's interaction logic (choose character)
## Service deliverable
- I Created an HTTP service using Node.js and Express (see index.js)
- Frontend served up using express static middleware(see index.js)
- My frontend calls third party service endpoints(hints.js calls 3 party quote generator)
- My backend provides service endpoints (see choosecharacter.js and index.js. My website consolelogs the character chosen by the user)
- My frontend calls my service endpoints (see hints.js and index.js) My website uses the character chosen to change the image. It console logs this on hints.js
## Database deleverable
- MongoDB Atlas database created (accessed through database.js)
- Provides backend endpoints for manipulating application data(see functions getCharacter, updateCharacterCount, etc in database.js and index.js)
-  My app Stores application data in MongoDB
