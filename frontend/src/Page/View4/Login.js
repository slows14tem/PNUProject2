import "./Login.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../API/funcAPI";

function Login() {

  const navigate = useNavigate();
  const [inputId, setInputId] = useState('')
  const [inputPw, setInputPw] = useState('')

  useEffect(() => {
    if (sessionStorage.getItem('accessToken')) {
      navigate("/view1")
    }
  }, [])

  // input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
  const handleInputId = (e) => {
    setInputId(e.target.value)
  }

  const handleInputPw = (e) => {
    setInputPw(e.target.value)
  }

  // login 버튼 클릭 이벤트()
  const onClickLogin = () => {
    const requestBody = {
      "email": inputId,
      "password": inputPw
    };
    (async () => {
      await login(requestBody)
        .then((res) => {
          if (res?.accessToken) {
            sessionStorage.setItem('accessToken', res?.accessToken);
            sessionStorage.setItem('refreshToken', res?.refreshToken);
            alert('login success');
            window.location.replace("/view1")
          } else {
            console.log("login false");
            alert('login false');
          }
        })
    })();
  }

  //회원가입 버튼
  const onClickSignup = () => {
    navigate("/signin")
  }

  return (
    <div className="loginView">
      <div className="loginBox">
        <h1 className="login">Login</h1>
        <div>
          <input className="inputBox" type='text' placeholder="Username" name='input_id' value={inputId} onChange={handleInputId} />
        </div>
        <div>
          <input className="inputBox" type='password' placeholder="Password" name='input_pw' value={inputPw} onChange={handleInputPw} />
        </div>
        <div className="Butttons">
          <button className="loginButton" type='button' onClick={onClickLogin}>Sign In</button>
          <button className="loginButton" type='button' onClick={onClickSignup}>Sign Up</button>
        </div>
      </div>
    </div>
  )
}
export default Login