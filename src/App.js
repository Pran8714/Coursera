
import './App.css';
import Navbar from './component/navbar/Navbar';
import AllCourse from './component/allCourses/AllCourse';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './component/dashboard/Dashboard';
import CourseDetails from './component/courseDetails/CourseDetails';
function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<AllCourse/>}/>
      <Route exact path="/dashboard" element={<Dashboard/>}/>
      <Route exact path="/courseDetails/:id" element={<CourseDetails/>}/>
      
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
