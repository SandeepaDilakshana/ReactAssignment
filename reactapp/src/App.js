//import logo from './logo.svg';
import './App.css';
import students from './components/StudentDb.js';

function App() {
  return (
    <>
      <h1><center>Students Information Portal</center></h1>
      <hr/>
        <p>Font Size: <button>S</button>
                     <button>M</button>
                     <button>L</button>
        </p>
      <hr/>
      <div className = 'outerDiv'>
        <div className = 'leftDiv'>
          <table border = '1'>
            <tr>
              <th>First name</th>
              <th>Last name</th>
              <th>Course</th>
              <th>Country</th>
              <th>Profile</th>
            </tr>
            {
             students.map((e,index) => {
               return(
                 <tr>
                   <td>{e.firstName}</td>
                   <td>{e.lastName}</td>
                   <td>{e.course}</td>
                   <td>{e.country}</td>
                   <td><button></button></td>
                 </tr>
               )
              })
            }
              
          </table>
        </div>

        <div className = 'rightDiv'>

          <div className = 'profile'>

          </div>

        </div>
        
      </div>
    </>
  );
}

export default App;
