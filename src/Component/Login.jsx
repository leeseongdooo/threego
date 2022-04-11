import React from "react";
import Header from "./Header";
import { useState } from "react";
import '../css/Login.css';
import {IoMdArrowBack} from "react-icons/io";
import { Link } from "react-router-dom";

function Login() {
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const idSize = (e)=> {
        setUsername(e.target.value.length);
     }

     const pwdSize = (e)=> {
        setPassword(e.target.value.length);
     }

    return(
      <div className="LoginBox">

            <div className="LoginShape">
                <div className="Text">
                    {/* <Link to='/'>
                        <IoMdArrowBack className="BackIcon"/>
                    </Link> */}
                    <h1>Threego</h1>
                </div>

                <input type="text" placeholder="ID" onChange={idSize}/>
                <input type="password" placeholder="pwd" onChange={pwdSize}/>
                {(username > 0 && password > 0) ? null : <span> 빈칸을 채워주세요!! </span>}
                <button onClick={() => {document.location.href = "/"}}><Link to='/' className="LoginLink">로그인</Link></button>
               
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