import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { MyPlay } from './myplay/myplay';
import { Scores } from './scores/scores';
import { ChooseCharacter } from './choosecharacter/choosecharacter';
import { About } from './about/about';
import { AuthState } from './login/authState';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import './main.css';

function App() {
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);

  return (
    <BrowserRouter>
      <div className='body bg-dark text-light'>
        <header>
          <ul>
            <li><a className="active" href="#">MiniQuest<sup>&reg;</sup></a></li>
            <li><a href="login">Log In</a></li>
            <li><a href="choosecharacter">Choose Character</a></li>
            <li><a href="hints">Hints</a></li>
            <li><a href="myplay">Play</a></li>
          </ul>
        </header>

        <Routes>
          <Route
            path='/'
            element={
              <Login
                userName={userName}
                authState={authState}
                onAuthChange={(userName, authState) => {
                  setAuthState(authState);
                  setUserName(userName);
                }}
              />
            }
            exact
          />
          <Route path='/' element={<Login />} />
          <Route path='/choosecharacter' element={<ChooseCharacter />} />
          <Route path='/myplay' element={<MyPlay />} />
          <Route path='/scores' element={<Scores />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

        <footer>
          <div className="footer">
            <p>Author Name(s)</p>
            <a href="https://github.com/Ezra-byu/startup.git">GitHub</a>
          </div>
        </footer>

      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}

export default App;


// import React from 'react';
// import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
// import { Login } from './login/login';
// import { Play } from './play/play';
// import { ChooseCharacter } from './choosecharacter/choosecharacter';
// // import { Hints } from './hints/hints';
// import { AuthState } from './login/authState';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './main.css';
// import './app.css';


// function App() {
//   const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
//   const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
//   const [authState, setAuthState] = React.useState(currentAuthState);

//   return (
//     <BrowserRouter>
//       <div className='body bg-dark text-light'>
        // <header>
        //   <ul>
        //     <li><a className="active" href="#">MiniQuest<sup>&reg;</sup></a></li>
        //     <li><a href="index.html">Log In</a></li>
        //     <li><a href="choosecharacter.html">Choose Character</a></li>
        //     <li><a href="hints.html">Hints</a></li>
        //     <li><a href="play.html">Play</a></li>
        //   </ul>
        // </header>



//         <Routes>
//           <Route
//             path='/'
//             element={
//               <Login
//                 userName={userName}
//                 authState={authState}
//                 onAuthChange={(userName, authState) => {
//                   setAuthState(authState);
//                   setUserName(userName);
//                 }}
//               />
//             }
//             exact
//           />
//           {/* <Route
//             path='/'
//             element={ <Login /> }
//             exact/> */}
//           <Route path='/play' element={<Login />} />
//           <Route path='/choosecharacter' element={<ChooseCharacter />} />
//           <Route path='/hints' element={<Hints />} />
//           <Route path='/about' element={<Play />} />
//           <Route path='*' element={<NotFound />} />
//         </Routes>

        // <footer>
        //   <div className="footer">
        //     <p>Author Name(s)</p>
        //     <a href="https://github.com/Ezra-byu/startup.git">GitHub</a>
        //   </div>
        // </footer>

//       </div>
//     </BrowserRouter>
//   );
// }

// function NotFound() {
//   return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
// }

// export default App;
