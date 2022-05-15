import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react"

import Routing from "./page/Routing";

import { store, persistor } from "./store/store"

//Fungsi untuk menuju MainPage 
function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate Loading={null} persistor={persistor}>
          <Routing/>
        </PersistGate> 
      </Provider>
    </>
  );
}

export default App;
