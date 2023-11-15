import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; //Import elements of react router
import { DataContextProvider } from './contextAPI/context'; //Import context API
import ReactDOM from 'react-dom/client';
import './index.css';

//Importing pages components
import HomePage from './pages/HomaPage/home_page'; 

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    
    <BrowserRouter>
      <DataContextProvider>

          <Routes>

              <Route path='/' element={<HomePage/>}/>
              <Route path='/pages/dashboard' element={"dashboard"}/>

          </Routes>

      </DataContextProvider>
    </BrowserRouter>

  </React.StrictMode>
);


