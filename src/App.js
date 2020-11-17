import React from 'react';
import Main from './Pages/Main';
import { Provider } from 'react-redux';
import { ConfigureStore } from './Redux/configureStore';
import { AuthContextProvider } from './Hooks/useAuth';

const store = ConfigureStore();

function App() {
  console.log(store.getState());
  return (
    <>
      <AuthContextProvider>
        <Provider store={store}>
          <Main />
        </Provider>
      </AuthContextProvider>
    </>
  );
}

export default App;
