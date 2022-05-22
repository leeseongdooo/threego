import {React, useState} from "react";
import Header from './Header';
import Bottom from './Bottom';
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
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
                    </div>
                     
                    <div className="MiddleArea">

                        <Link to="/ReviewManagement">
                            <div>
                                <h4>1</h4>
                                <h4>리뷰 관리</h4>
                            </div>
                        </Link>
                        
                        <Link to="/TravelManagement">
                            <div>
                                <h4>1</h4>
                                <h4>여행 관리</h4>
                            </div>
                        </Link>

                        <Link to="/InquireList">
                            <div>
                                <h4>1</h4>
                                <h4>문의 관리</h4>
                            </div>
                        </Link>

                    </div>
                </div>

                <div className="PageMoveBox">
                    <Link to="/ProfileEdit">
                        <div>
                            <span>개인정보 변경</span>
                            <FiChevronRight/>
                        </div>
                    </Link>

                    <Link to="/CustomerService">
                        <div>
                            <span>고객센터</span>
                            <FiChevronRight/>
                        </div>
                    </Link>
                    
                    <Link to="/NoticeList">
                        <div>
                            <span>공지사항</span>
                            <FiChevronRight/>
                        </div>
                    </Link>


                    <Link to="/CustomerQuestion">
                        <div>
                            <span>자주하는 질문</span>
                            <FiChevronRight/>
                        </div>
                    </Link>

                    <Link to="/CustomerQuestion">
                        <div>
                            <span>로그아웃</span>
                            <FiChevronRight/>
                        </div>
                    </Link>
                </div>
                
            </div>

            <Bottom/>
        </div>
    )
}

export default MyPageMain