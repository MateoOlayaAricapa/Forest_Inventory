import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; //Import elements of react router
import { DataContextProvider } from './contextAPI/context'; //Import context API
import ReactDOM from 'react-dom/client';
import './index.css';

//Redux
import { store } from './StoreRedux/store';
import { Provider } from 'react-redux';

//Importing pages components
import HomePage from './pages/HomaPage/home_page';
import DashboardPages from './pages/Dashboard/dashboard_pages'; 

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <DataContextProvider>

            <Routes>

                <Route path='/' element={<HomePage/>}/>
                <Route path='/pages/dashboard' element={<DashboardPages/>}/>

            </Routes>

        </DataContextProvider>
      </BrowserRouter>
    </Provider>

  </React.StrictMode>
);


