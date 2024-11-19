import './App.css';
import { students } from './components/StudentDb'
import {useState} from 'react'

const [stu,setStu] = useState(props.students[0]); 

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
             props.students.map(student => 
                 <tr>
                   <td>{student.firstName}</td>
                   <td>{student.lastName}</td>
                   <td>{student.course}</td>
                   <td>{student.address.country}</td>
                   <td><button id ={student.studentId} onClick={()=>setStu(student)}></button></td>
                 </tr>
               )
            }
              
          </table>
        </div>

        <div className = 'rightDiv'>
          <Profile stu={stu}/>

        </div>
        
      </div>
    </>
  );
}

export default App;
