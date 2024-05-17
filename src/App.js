
import './App.scss';
import Tracker from './pages/Tracker.js';
import Main from './pages/Main.js';
import Plan from './pages/Plan.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Workout from './pages/Workout.js';

function App() {



  return (
    <div>

      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Main />}/> 
          <Route path="/tracker" element={<Tracker />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/workout" element={<Workout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
