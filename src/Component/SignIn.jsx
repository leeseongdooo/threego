import React from "react";
import '../css/SignIn.css'
import { Link } from "react-router-dom";
function Shape({SignInForm}) {
    return (
        <div className="inputbox">
            <h4>{SignInForm.text}</h4>
            {/* id가 2~3이라면 password타입 그렇지 않다면 text타입 */}
            {(SignInForm.id == 2 || SignInForm.id == 3) ? <input type="password" className={SignInForm.classname} placeholder={SignInForm.guideText}/> : 
            <input type="text" className={SignInForm.classname} placeholder={SignInForm.guideText} />}
            <div>
                <span>{SignInForm.correctText}</span>
            </div>
        </div>
    );
}

function SignIn() {
    
    const SignInForm = [
        {
            id: 1,
            guideText: '아이디를 입력해주세요',
            text: '아이디',
            classname: 'idInput',
            correctText: '멋진 아이디입니다.',
            wrongText: '영문 소문자, 숫자와 특수기호만 사용가능합니다.'
        },
        {
            id: 2,
            guideText: '비밀번호를 입력해주세요',
            text: '비밀번호',
            classname: 'pwdInput',
            correctText: '보통',
            wrongText: '8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요'
        },
        {
            id: 3,
            guideText: '비밀번호를 입력해주세요',
            text: '비밀번호 재확인',
            classname: 'pwdCheckInput',
            correctText: '비밀번호가 일치합니다.',
            wrongText: '비밀번호를가 일치하지 않습니다.'
        },
        {
            id: 4,
            guideText: '닉네임을 입력해주세요',
            text: '닉네임',
            classname: 'nicknameInput',
            correctText: '멋진 닉네임입니다.',
            wrongText: '영문 소문자, 숫자와 특수기호만 사용가능합니다.'
        }
    ]


    return(
        <div className="SignInBox">
            <h1>Threego</h1>
            {SignInForm.map(shape =>( 
                <Shape SignInForm={shape} key={shape.id}/>
            ))}
            <button onClick={console.log("A")}><Link to='/' className="Link">가입하기</Link></button>
        </div>
    );
}

export default SignIn;