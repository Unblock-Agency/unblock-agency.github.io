import { Routes, Route } from 'react-router-dom';
import './styles/App.css'
import Home from './pages/Home';
import PilotProgram from './pages/PilotProgram';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pilot" element={<PilotProgram />} />
      </Routes>
    </div>
  );
}

export default App;