import {React, useState} from "react";
import Header from './Header';
import Bottom from './Bottom';
import { Link } from "react-router-dom";
import '../css/MyPageMain.scss'

function MyPageMain() {
    return (
        <div className="MyPageMainBigBox">
            <Header fontColor="black"/>

            <div className="MyPageMainContentBox">
                
                <div className="UserInfo">
                    <div className="TopArea">
                        <img src="/img/userImage.png" alt=""  />
                        <h3>NICKNAME님</h3>
                        <button className="EditProfile">프로필 변경</button>
                    </div>
                     
                    <div className="MiddleArea">
                        <div>리뷰 관리</div>
                        <div>여행 관리</div>
                        <div>
                            <Link to="/InquireList">1:1 문의</Link>
                        </div>  
                    </div>
                </div>

                <div className="MyPageCategory">
                    
                    <div className="CategoryParentBox">
                        <h3>리뷰 관리</h3>
                        
                        <ul className="CategoryChildBox">
                            <li>내 정보 변경</li>
                            <li>비밀번호 변경</li>
                            <li>내 정보 변경</li>
                            <li>비밀번호 변경</li>
                            <li>내 정보 변경</li>
                            <li>비밀번호 변경</li>
                        </ul>

                    </div>

                    <div className="CategoryParentBox">
                        <h3>여행 관리</h3>
                        <ul className="CategoryChildBox">
                            <li>내 정보 변경</li>
                            <li>비밀번호 변경</li>
                            <li>내 정보 변경</li>
                            <li>비밀번호 변경</li>
                            <li>내 정보 변경</li>
                            <li>비밀번호 변경</li>
                        </ul>
                    </div>

                    <div className="CategoryParentBox">
                        <h3>개인정보</h3>
                        <ul className="CategoryChildBox">
                            <li>내 정보 변경</li>
                            <li>비밀번호 변경</li>
                        </ul>
                    </div>

                    <div className="CategoryParentBox">
                        <h3>고객센터</h3>
                        
                        <ul className="CategoryChildBox">
                            <Link to="/InquireList">내 문의 보기</Link>
                            <Link to="/NoticeList">공지사항</Link>
                            <Link to="/CustomerQuestion">FAQ</Link>
                        </ul>

                    </div>    
                </div>

            </div>

            <Bottom/>
        </div>
    )
}

export default MyPageMain