
import './App.scss';
import Tracker from './pages/Tracker.js';
import Main from './pages/Main.js';
import Plan from './pages/Plan.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {



  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}/> 
          <Route path="/tracker" element={<Tracker />} />
          <Route path="/plan" element={<Plan />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
