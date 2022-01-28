import React from 'react';
import {Navigate, Routes, Route} from "react-router-dom";

import MainPage from '../pages/MainPage';
import ListPage from '../pages/ListsPage';
import ErrorPage from '../ErrorPage/ErrorPage';

import './App.css';

function App() {
  return (
   
      <div className='app'>
        <Routes>
            
            <Route path='/lists' element={<MainPage/>}/>
            <Route path="/lists/:listname" element={<ListPage/>}/>
            <Route path="/errorpage" element={<ErrorPage/>}/>
            <Route path='*' element={<Navigate to="/errorpage" />}/>
        </Routes>
            
      </div>
  );
}

export default App;
