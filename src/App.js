import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import GettingStarted from './component/GettingStarted';
import SecondSection from './component/SecondSection';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<GettingStarted/>}/>
        <Route path="/second-section" element={<SecondSection/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;