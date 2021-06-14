// import React, { useState } from 'react';
import React from 'react';
import './App.css';
import "./components/codepenproject/cipher.css";


//import Cipher from './components/Cipher';
//import Cipher2 from './components/Cipher2';

// import BealeCipher from './components/BealeCipher';
import MyBookCipher from './components/MyBookCipher';
// import BookCipher from './components/codepenproject/BookCipher';

//import CodeHome from './components/codesandbox/CodeHome';
//import YouTubeTut from './components/YoutubeTut';


function App() {


  return (
    <div className="App">

      {/* <YouTubeTut/> */}
      <MyBookCipher/>
      {/* <BookCipher/> */}
      {/* <CodeHome/> */}
     
      

      {/* <Cipher/> */}
      {/* <Cipher2 /> */}
      {/* <BealeCipher/>  */}
    </div>
  );
}

export default App;
