import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FrontUi from './Components/FrontUi';
import ExcersiseList from './Components/ExcersiseList';
 // Assuming you have an ExerciseDetail component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrontUi />} />
        <Route path='/exercises/:id' element={<ExcersiseList/>}/>

      </Routes>
    </Router>
  );
}

export default App;
