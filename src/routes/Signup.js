import React from "react";
import { Link } from 'react-router-dom';
import logoImg from "../lyk.jpeg";
import { Card, Logo, Form, Input, Button } from '../components/AuthForm';

function Signup() {

    const [isError, setIsError] = useState(false);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    function postSignUp() {
      var postData = {
        name: userName,
        email: email,
        password: password
      };

      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      axios.post("http://localhost:5000/api/user/signup", postData, config)
      .then(result => {
        if (result.status === 200) {
          console.log("successful signed up")
          return <Redirect to="/login" />
        } else {
          console.log("unsuccessful")
          setIsError(true);
        }
      }).catch(e => {
        console.log("error")
        setIsError(true);
      });
    }

    // if (isLoggedIn) {
    //     return <Redirect to="/" />;
    //   }

    return (
        <Card>
            <Logo src={logoImg} />
            <Form>
                <Input
                type="username"
                value={username}
                onChange={e => {
                    setUserName(e.target.value);
                }}
                placeholder="name"
                />
                <Input
                type="email"
                value={email}
                onChange={e => {
                    setEmail(e.target.value);
                }}
                placeholder="email"
                />
                <Input
                type="password"
                value={password}
                onChange={e => {
                    setPassword(e.target.value);
                }}
                placeholder="password"
                />
                <Button onClick={postSignUp}>Sign Up</Button>
            </Form>
            { isError &&<Error>The registration was unsuccessful!</Error> }
        </Card>
    );
}

export default Signup;