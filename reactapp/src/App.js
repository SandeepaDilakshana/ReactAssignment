import './App.css';
import { students } from './data/StudentsDb';
import StudentTable from './components/studentTable';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path = '/home' element = {<Home/>}/>
          <Route path = '/about' element = {<AboutUs/>}/>
          <Route path = '/contact' element = {<ContactUs/>}/>
        </Routes>
      </Router>
      <h1>Student Information Portal</h1>
      <hr />
      <table>
        <tbody>
          <tr>
            <td>
              {/* <StudentTable students={students} /> */}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;