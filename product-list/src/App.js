import './App.css';
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import { Provider } from 'react-redux'
import {store} from "./store/store";



function App() {
  return (
      <Provider store={store}>
      <div className="App">
    <Header/>
    <MainContent/>
    </div>
      </Provider>
  );
}

export default App;
