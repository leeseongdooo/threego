import React from "react";
import Header from "./Header";
import Bottom from "./Bottom";
import '../css/NoticeDetail.scss'
import {useLocation} from "react-router";
function NoticeDetail() {



    const location = useLocation();

    const IsNotice = location.state.Notice;

    const IsNoticeTitle = IsNotice.title;
    const IsNoticeWriteDay = IsNotice.writedays;
    const IsNoticeContent = IsNotice.conten
    return (
        <div className="NoticeDetailBigBox">
             <div className="HeaderParent">
                    <Header fontColor="" />
            </div>


            <div className="NoticeDetailContentParentBox">
                <div className="NoticeDetailContentBox">
                    <h1>공지사항</h1>
                    <hr />
                    
                    <div className="NoticeDetailContent">
                        
                        <div className="NoticeDetailTextContent">
                            <header>
                                <p className="TitleText">{IsNoticeTitle} </p>
                            </header>
                            
                            <p className="ContentText">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna 
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                Duis aute irure dolor in reprehenderit in voluptate velit esse 
                                cillum dolore eu fugiat nulla pariatur. 
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                            </p>

                            <img src="/img/Daegu.jpg" alt="이미지 파일" className="NoticeImage"/>
                        </div>     
                        
                    
                    </div>
                </div>
             </div>

             <Bottom/>
        </div>
    );
}

export default NoticeDetail