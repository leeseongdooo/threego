import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers';
import React,{useState} from 'react';
import {AiOutlineMenu} from "react-icons/ai";
import { useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css'

function Header(props) {
    let y = window.scrollY;

    const [isOpen, setMenu] = useState(false); // 메뉴창이 열린지 안열린지 판단

    const toggleMenu = () => {
        setMenu(isOpen => !isOpen);
    }

    const tempStyle={
        background:"black",
        color: "white"
    }

    // Y축 스크롤값을 확인하기 위해
    let [Scrolly, setScrolly] = useState(0);
 
    const handleFollow = () => {
        setScrolly(window.pageYOffset); // window 스크롤 값을 ScrollY에 저장
    }

    useEffect(() => {
        const watch = () => {
            window.addEventListener('scroll', handleFollow);
        }
        watch(); // addEventListener 함수를 실행
        return () => {
            window.removeEventListener('scroll', handleFollow); // addEventListener 함수를 삭제
        }
    })


    return(
        <>
            <header className="Header" style={isOpen ? tempStyle : (Scrolly > 0) ? tempStyle : null}>
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <h3>Three Go</h3>
                </Link>
                
                <AiOutlineMenu className="menuIcon" onClick={() => toggleMenu()}/>
                <ul className={isOpen ? "show-menu" : "hide-menu"}>
                    <li>아직추가X</li>
                    <li>아직추가X</li>
                    <li>아직추가X</li>
                    <li>아직추가X</li>
                    <li>
                        <div className='loginBox'>
                            <button className='loginButton'>
                                <Link to='/Login'>로그인</Link>
                            </button>

                            <button className='loginButton'>
                                <Link to='/SingIn'>회원가입</Link>
                            </button>
                        </div>
                    </li>
            
                </ul>
               
            </header>
        </>
    )
}

export default Header;