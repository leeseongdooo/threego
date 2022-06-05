import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers';
import React,{useState} from 'react';
import {AiOutlineMenu} from "react-icons/ai";
import { useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.scss'

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

    const fontColor = {
        color: "white",
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
            <header className="Header" style={isOpen ? tempStyle : (Scrolly > 0) ? tempStyle :  {color: props.fontColor}}>
               
                    <h3>
                        <Link to='/'  style={isOpen ? fontColor : (Scrolly > 0) ? fontColor : {color: props.fontColor}} >
                            Three Go
                        </Link>
                    </h3>
               
                
                <AiOutlineMenu className="menuIcon" onClick={() => toggleMenu()} style={isOpen ? fontColor : (Scrolly > 0) ? fontColor :  {color: props.fontColor}}/>
                <ul className={isOpen ? "show-menu" : "hide-menu"}>
                    <li><Link to="/RecommendList" >추천 여행지</Link></li>
                    <li><Link to="/ProductList">주변 가격정보</Link></li>
                    <li><Link to="/ReviewList">여행 리뷰보기</Link></li>
                    <li><Link to="/CustomerService">고객센터</Link></li>
                    <li><Link to="/MyPageMain">마이페이지</Link></li>
                    <li>
                        <div className='loginBox'>
                            <button className='HeaderButton'>
                                <Link to='/Login'>로그인</Link>
                            </button>

                            <button className='HeaderButton'>
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