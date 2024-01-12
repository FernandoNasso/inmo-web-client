import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./views/home/Home";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    
    </Routes>
  )
}

export default App
