import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import PublicLayout from './layout/PublicLayout';
import PrivateLayout from './layout/PrivateLayout';
import HomePage from './pages/HomePage';
import QuestionsPage from './pages/QuestionsPage';



function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout/>}>
            <Route path="" element={<HomePage/>}/>         
        </Route>
        <Route path="/home" element={<PrivateLayout/>}>
          <Route path="questionpage" element={<QuestionsPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
