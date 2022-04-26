import React, {useEffect} from "react";
import Header from "./Header";
import { useState } from "react";
import '../css/Login.css';
import {IoMdArrowBack} from "react-icons/io";
import { Link } from "react-router-dom";

function Login() {

    const [username,setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [validate, setValidate] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const usernameOnchange = (e)=> {
        setUsername(e.target.value);
     }

     const pwdOnchange = (e)=> {
        setPassword(e.target.value);
     }

     const loginAccess = (e) => {
        if(username.length === 0){
            setValidate(true);
            setErrorMessage("아이디를 입력 해 주세요.");
            return;
        }

         if(password.length === 0){
             setValidate(true);
             setErrorMessage("비밀번호를 입력 해 주세요.");
             return;
         }

         fetch("http://localhost:3527/login",{
             method: "POST",
             headers: {
                 "Content-Type": "application/json",
             },
             body: JSON.stringify({
                 "username": username,
                 "password": password,
             }),
         }).then((response) =>{
             console.log("로그인 서버 접속 성공");
             if(response.ok){
                document.location.href = "/";
             }else {
                 setValidate(true);
                 setErrorMessage("로그인 서버 접속 실패");
             }
         }).catch((error) => {
             setValidate(true);
             setErrorMessage("로그인 서버 접속 실패");
         });
     }


    return(
      <div className="LoginBox">

            <div className="LoginShape">
                <div className="Text">
                    {/* <Link to='/'>
                        <IoMdArrowBack className="BackIcon"/>
                    </Link> */}
                    <h1>ThreeGo</h1>
                </div>

                <input type="text" placeholder="ID" onChange={usernameOnchange}/>
                <input type="password" placeholder="pwd" onChange={pwdOnchange}/>
                {validate ? <span> {errorMessage} </span> : null}
                <button  onClick={loginAccess} >로그인</button>
               
                <ul className="subText">
                    <li><Link to='/SingIn' className="SignInLink">회원가입</Link></li>
                    <li>아이디 찾기</li>
                    <li>비밀번호 찾기</li>
                </ul>
            </div>
       

      </div>
    );
}

export default Login;