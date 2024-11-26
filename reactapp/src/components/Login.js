import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {

    const data = [{username:'2020/ICT/21'},
                  {password:'abc123'}
    ]
    const [studentData,setStudentData] = useState({
        username:"",
        password:""
    })

    const navigate = useNavigate();
    const authenticate = () => {
        navigate('/dash')
    }

    return (
        <div>
            <h1>Login Here</h1>
            <table>
                <tr>
                    <td>Username :<input type="text" name="username" /></td>
                </tr>  
                <tr>  
                    <td>Password :<input type="password" name="password" /></td>
                </tr>
            </table>
                <button onClick={() => authenticate()}>Login</button>
        </div>
    );
}