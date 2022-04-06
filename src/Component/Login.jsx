import React from "react";
import Header from "./Header";
import { useState } from "react";
import '../css/Login.css';
import {IoMdArrowBack} from "react-icons/io";
import { Link } from "react-router-dom";
function Login() {
    const [menuCheck, setMenuCheck] = useState(false);
    return(
      <>

        <form>
            <div className="LoginBox">
                <div className="Text">
                    <Link to='/'>
                        <IoMdArrowBack className="BackIcon"/>
                    </Link>
                    <h1>Login</h1>
                </div>

                <input type="text" placeholder="ID" />
                <input type="password" placeholder="pwd"/>
                <input type="submit" value="로그인" />

                <ul className="subText">
                    <li>회원가입</li>
                    <li>아이디 찾기</li>
                    <li>비밀번호 찾기</li>
                </ul>
            </div>
        </form>


      </>
    );
}

export default Login;