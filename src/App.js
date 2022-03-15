import './App.css';
import Face from './components/Face';
import UserDetails from './components/UserDetails';
import Camera from './components/Camera';
import Welcome from './components/Welcome';
import {BrowserRouter , Routes, Route } from "react-router-dom";


function App() {
  return (
  
    <BrowserRouter>
        <Routes>
          <Route exact="true" path="/" element={<Face />} />
          <Route exact="true" path="UserDetails" element={<UserDetails />} />
          <Route exact="true" path="Camera" element={<Camera />} />
          <Route exact="true" path="Welcome" element={<Welcome/>} />
        </Routes>
    </BrowserRouter>
   
  );
}

export default App;
