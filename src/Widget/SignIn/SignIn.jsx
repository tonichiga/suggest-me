import s from "./SignIn.module.scss";
import log from "../../assets/icons/sms.svg" ;
import pass from "../../assets/icons/key-square.svg" ;
import ButtonLogin from "../../Components/UI/ButtonLogin/ButtonLogin";
import { useState } from "react";
import PropTypes from 'prop-types';


async function loginUser(credentials) {
    return fetch('https://practice-api-vlasenko-bohdan.onrender.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

const SignIn = ({ setToken }) => {

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          username,
          password
        });
        setToken(token);
      }

    SignIn.propTypes = {
      setToken: PropTypes.func.isRequired
    };

    return ( 
        <form onSubmit={handleSubmit} className={s.form_login}>
            <div className={s.span_login}>
            <span>Login</span>
            </div>
            <div className={s.email}>
                <img src={log} alt="login" className={s.svg_mail} />
                <input type="email" name="email" id="email" placeholder="Email" className={s.email_input} onChange={e => setUserName(e.target.value)} />
            </div>
            <div className={s.pass}>
                <img src={pass} alt="password" className={s.svg_pass} />
                <input type="password" name="password" id="pass" placeholder="Password" className={s.pass_input} onChange={e => setPassword(e.target.value)} />
            </div>
            <ButtonLogin />
        </form>
     );
}
 
export default SignIn;