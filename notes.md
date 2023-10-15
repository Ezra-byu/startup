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