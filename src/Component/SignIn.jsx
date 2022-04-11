import React, { useCallback, useEffect, useState } from "react";
import '../css/SignIn.css'

function SignIn() {

    // 아이디, 닉네임, 비밀번호, 비밀번호 확인,
    const [id, setId] = useState('');
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const [pwdChk, setPwdChk] = useState('');
    
    // 오류메세지를 저장하는 부분
    const [idMessage, setIdMessage] = useState('');
    const [nicknameMessage, setNicknameMessage] = useState('');
    const [pwdMessage, setPwdMessage] = useState('');
    const [pwdChkMessage, setPwdChkMessage] = useState('');
    
    // 아이디 닉네임 비밀번호 비밀번호 확인을 참인지 거짓인지 확인
    const [isId, setIsId] = useState(false);
    const [isNickName, setIsNickName] = useState(false);
    const [isPwd, setIsPwd] = useState(false);
    const [isPwdChk, setIsPwdChk] = useState(false);


    // 아이디에 대한 유효성 검사
    const IdCheck = (e) => {setId(e.target.value);}

    useEffect(() => {
        const reg = /^[a-z]+[a-z0-9]{7,19}$/g;
        if(!reg.test(id))
        {
            setIsId(false);
            setIdMessage("최소 8자이상 문자와 숫자를 같이 넣어주세요");  
            if(id.length < 8 && id.length >= 1) {
                setIsId(false);
                setIdMessage("최소 8자이상 문자와 숫자를 같이 넣어주세요");  
            } else if(id.length> 20) {
                setIsId(false);
                setIdMessage("문자가 너무 커요 ㅜㅜ 줄여주세요");
            }
            else if(id.length < 1)
            {
                setIdMessage(null);
            }
        } else { 
            // 조건이 있어야 될듯 첫문자가 참으로 나옴.
            setIdMessage("멋진 아이디네요!");
            setIsId(true);
        }
    })

    // 닉네임 체크
    const NickNameCheck = (e) => {
        setNickname(e.target.value);
       
        if(e.target.value.length < 3 && e.target.value.length >= 1) {
            setIsNickName(false);
            setNicknameMessage("최소 3자이상으로 적어주세요");    
            
        } else if(e.target.value.length > 15) {
            setIsNickName(false);
            setNicknameMessage("문자가 너무 커요 ㅜㅜ 줄여주세요");
        } else if(e.target.value.length == 0)
        {
            setNicknameMessage(null);
        }
        else { 
        // 조건이 있어야 될듯 첫문자가 참으로 나옴.
            setNicknameMessage("멋진 닉네임이네요");
            setIsNickName(true);
        }
    }

    // 비밀번호
    const PasswordCheck = (e) => {setPassword(e.target.value);}
    

    useEffect(() => {
        const reg = /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/;

        if(!reg.test(password))
        {
            setIsPwd(false);
            setPwdMessage("최소 8 자, 하나 이상의 문자, 하나의 숫자 및 하나의 특수 문자");   
            if(password.length< 8 && password.length >= 1) {
                setIsPwd(false);
                console.log(password.length)
                setPwdMessage("최소 8 자, 하나 이상의 문자, 하나의 숫자 및 하나의 특수 문자");    
            } else if(password.length > 15) {   
                setIsPwd(false);
                setPwdMessage("문자가 너무 커요 ㅜㅜ 줄여주세요");
            } else if(password.length == 0)
            {
                setPwdMessage(null);
            }
        }
        else { 
        // 조건이 있어야 될듯 첫문자가 참으로 나옴.
            console.log(password.length)
            setIsPwd(true);
            setPwdMessage("멋진 비밀번호네요!");
        }
    })
    
    
    const PasswordCheckCheck = (e) => setPwdChk(e.target.value);

    useEffect(() => {
        if(pwdChk === password && pwdChk.length >= 1)
        {
            setIsPwdChk(true);
            setPwdChkMessage("일치합니다.");
        }
        else if(pwdChk.length >= 1 && pwdChk !== password)
        {
            setIsPwdChk(false);
            setPwdChkMessage("일치하지않습니다.");
        }

        else if(pwdChk.length == 0) {
            setPwdChkMessage(null);
        }
      })

    return(
        <>
            {/* 전체를 묶어주는 div */}
            <div className="SignInBox ">
            <h1>ThreeGo</h1>
                <div className="shapebox">
                    <h4>아이디</h4>
                    <input type="text" className="idInput" placeholder="아이디" onChange={IdCheck}/>
                    <span className={isId ? "true" : "false"}>{idMessage}</span>
                </div>

                <div className="shapebox">
                    <h4>닉네임</h4>
                    <input type="text" className="nickNameInput" placeholder="닉네임" onChange={NickNameCheck}/>
                    <span className={isNickName ? "true" : "false"}>{nicknameMessage}</span>
                </div>

                <div className="shapebox">
                    <h4>비밀번호</h4>
                    <input type="password" className="pwdInput" placeholder="비밀번호" onChange={PasswordCheck}/>
                    <span className={isPwd ? "true" : "false"}>{pwdMessage}</span>
                </div>

                <div className="shapebox">
                    <h4>비밀번호 재확인</h4>
                    <input type="password" className="pwdChkInput" placeholder="비밀번호 확인" onChange={PasswordCheckCheck}/>
                    <span className={isPwdChk ? "true" : "false"}>{pwdChkMessage}</span>
                </div>

                <button>가입하기</button>
            </div>
        </>
    );
}

export default SignIn;