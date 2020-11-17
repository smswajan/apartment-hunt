import React from 'react';
import Main from './Pages/Main';
import { Provider } from 'react-redux';
import { ConfigureStore } from './Redux/configureStore';

const store = ConfigureStore();

function App() {
  return (
    <>
      <Provider store={store}>
        <Main />
      </Provider>
    </>
  );
}

export default App;
