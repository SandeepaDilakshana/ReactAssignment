import { Form, useNavigate } from "react-router-dom";

export default function Login() {

    const navigate = useNavigate();
    const authenticate = () => {
        navigate('/dash')
    }
    return (
        <div>
            <h1>Login Here</h1>
            Username :<input type="text" name="username" /><br/>
            Password :<input type="password" name="password"/><br/>
            <button onClick={() => authenticate()}>Login</button>
        </div>
    );
}