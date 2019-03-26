import React from 'react';
import Message from './message';
import MessageList from './message_list';

const App = () => {
  return (
    <div className="app">
      <Message />
      <MessageList />
    </div>
  );
};

export default App;
