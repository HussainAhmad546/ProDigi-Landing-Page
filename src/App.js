import logo from './logo.svg';
import './App.css';
import HomeScreen from './screen/HomeScreen';
import { BrowserRouter,Routes } from 'react-router-dom';


function App() {
  return (
   
    <BrowserRouter>
      <HomeScreen />
      </BrowserRouter>
   
  );
}

export default App;
