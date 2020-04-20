import React from 'react';

import Header from '../components/Header';
import Main from '../components/Main';
import FeedbackList from '../containers/FeedbackList'
import '../style/App.css';

function App() {
  return (
    <div className="App">
      <div className='wrapper'>
        <div className='container'>
          <Header />
          <Main />
          <FeedbackList/>
        </div>
      </div>
    </div>
  );
}

export default App;
