import React from 'react';
import Main from './Pages/Main';
import { Provider } from 'react-redux';
import { ConfigureStore } from './Redux/configureStore';

const store = ConfigureStore();

function App() {
  console.log(store.getState());
  return (
    <>
      <Provider store={store}>
        <Main />
      </Provider>
    </>
  );
}

export default App;
