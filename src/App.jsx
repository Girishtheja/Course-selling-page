import Signup from './components/Signup'
import './App.css'
import Appbar from './components/Appbar'
import Signin from './components/Signin'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddCourse from './components/AddCourse';

function App() {
  return (
    <div
      style={
        {
          width: "100vw",
          height: "100vh",
          background: "#eeeeee"
        }}>

      <Router>
        <Appbar></Appbar>
        <Routes>
          <Route path="/addcourse" element={<AddCourse />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App