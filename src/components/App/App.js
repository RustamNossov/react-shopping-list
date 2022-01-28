import React from 'react';
import {Navigate, Routes, Route} from "react-router-dom";

import MainPage from '../pages/MainPage';
import ListPage from '../pages/ListsPage';
import ErrPage from '../pages/ErrPage';

import './App.css';

function App() {
  return (
   
      <div className='app'>
        <Routes>
            
            <Route path='/lists' element={<MainPage/>}/>
            <Route path="/lists/:listname" element={<ListPage/>}/>
            <Route path="/errorpage" element={<ErrPage/>}/>
            <Route path='*' element={<Navigate to="/errorpage" />}/>
        </Routes>
            
      </div>
  );
}

export default App;
