import './App.css';
import BgAnimation from "./components/BgAnimation";
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="relative h-screen overflow-hidden">
     <BgAnimation/>
     <Navbar/>
    </div>
  );
}

export default App;
