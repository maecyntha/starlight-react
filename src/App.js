import React, { useState, useContext, useEffect } from 'react';
import './App.css';

import Parent from './components/toChild';
import Parent1 from './components/toParent';
import ToSibling from './components/toSibling';

import ContextReducer from './components/useReducer-useContext/Reducer-Context';

import ListOfThings from './components/useState-ListOfThings';
import Counter from './components/useState-Counter';
import LessText from './components/useState-LessText';

import Theme from './components/useContext';

import Effect from './components/useEffect';

// function FriendStatus(props) {
  //   const [isOnline, setIsOnline] = useState(null);

//   useEffect(() => {
//     function handleStatusChange(status) {
//       setIsOnline(status.isOnline);
//     }

//     ChatAPI.subscribeToFriendStatus (props.friend.id, handleStatusChange);

//     return function cleanup() {
  //       ChatAPI.unsubscribeToFriendStatus(props.friend.id, handleStatusChange);
  //     };
//   });

//   if (isOnline === null) {
  //     return 'Loading...';
  //   }
  //   return isOnline ? 'Online' : 'Offline';
  // }


function App() {
  
  return (
    <div className="App">
      <Parent />
      <Parent1 />
      <ToSibling />

      <br /><br />
      <h2>useState (test)</h2><br />
      <LessText 
        text = {`Focused, hard work is the real key to success.
                Keep your eyes on the goal, and just keep taking 
                the next step towards completing it.`}
        maxLength={35}
      />
      <br /><br />
      <Counter 
        initialCount={0}
      />
      <br /><br />
      <ListOfThings />
      <br /><br />

      <h2>useContext</h2><br />
      <Theme />
      <br /><br />

      <h2>useContext + useReducer</h2>
      <ContextReducer />
      <br /><br />

      <h2>useEffect</h2><br />
      <Effect />

      {/* <FriendStatus /> */}
    </div>
  );
}

export default App;
