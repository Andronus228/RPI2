import logo from './logo.svg';
import './App.css';
import MainView from './components/mainView';
import InfoView from './components/infoView';
import  AppBar  from './components/Appbar';
import Tema from './components/Tema'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import React from 'react'; 
import {useTranslation} from 'react-i18next';


function App() {

  const { t ,i18n}=useTranslation();

  const changeLanguage=(language)=>{
    i18n.changeLanguage(language);
  };
 
  return (
    <div className="App">
     <Router>
      <AppBar/>
       
      <Routes>

        <Route exact path = "/info/:id" element = {<InfoView/>}/> 
        <Route exact path = "/" element = {<MainView/>}/>
        <Route exact path = "/tema/:tema" element = {<Tema/>}/>

      </Routes>
      </Router>
      
    </div>
  );
}

export default App;