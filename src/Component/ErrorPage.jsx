import React from "react";
import { Router, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import '../css/ErrorPage.css'
function ErrorPage() {
    const ErrorList = [
        {
            ErrorNumber: 404,
            ErrorText: '페이지를 찾을 수 없습니다.'
        },
        {
            ErrorNumber: 500,
            ErrorText: '내부 사이트 오류'
        },
        {
            ErrorNumber: 400,
            ErrorText: '잘못된 요청'
        },
    ]

    const history = useHistory()

    return (
        <div className="ErrorBox">
            <h1>ThreeGo</h1>
            
            <div className="ErrorImgBox">
                <img src="/img/ErrorImage.jpg" alt="dd" />
            </div>
            

            <h2>{ErrorList[0].ErrorNumber}</h2>
            
            <h3>{ErrorList[0].ErrorText}</h3>

            <Link to='/'><button>메인페이지로</button></Link>
         
            <button onClick={() => {history.goBack()}}>이전페이지로</button>
           
        </div>
    )

}

export default ErrorPage;