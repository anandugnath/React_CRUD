import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { AllRoutes } from './routes/AllRoutes';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
 
function App() {
  return (
    <BrowserRouter>
    <Header/>
    <AllRoutes/>
    </BrowserRouter>
  ); 
}

export default App;
