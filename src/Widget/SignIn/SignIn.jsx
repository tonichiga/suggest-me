import s from "./SignIn.module.scss";
import log from "../../assets/icons/sms.svg" ;
import pass from "../../assets/icons/key-square.svg" ;
import { useState } from "react";

const SignIn = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleLogin = async () => {
      let result = await fetch("https://practice-api-vlasenko-bohdan.onrender.com/user/login", {
        method: 'post',
        body:JSON.stringify({email,password}),
        headers: {
          'Content-Type' : 'application/json'
        }
      });
      result = await result.json();
      console.warn(result);
      if(result.name) {
          localStorage.setItem('user', JSON.stringify(result));
      }
      else {
        alert("Please");
      }

    }
    return ( 
        <form className={s.form_login}>
            <div className={s.span_login}>
            <span>Login</span>
            </div>
            <div className={s.email}>
                <img src={log} alt="login" className={s.svg_mail} />
                <input type="email" name="email" id="email" placeholder="Email" className={s.email_input} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className={s.pass}>
                <img src={pass} alt="password" className={s.svg_pass} />
                <input type="password" name="password" id="pass" placeholder="Password" className={s.pass_input} onChange={e => setPassword(e.target.value)} />
            </div>
            <button className={s.button_login} onClick={handleLogin} >Login</button>
        </form>
     );
}
 
export default SignIn;