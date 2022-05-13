import React, { useState } from "react";
import Header from "./Header";
import Bottom from "./Bottom";
import { Link } from "react-router-dom";
import '../css/InquireList.scss'

function InquireListForm({Inquire}) {
    return (
        <>
            <div className="InquireListForm">
                
                <div className="TextContentArea">
                    <p>{Inquire.Title}</p>
                    <p>{Inquire.WriteDays}</p>
                </div>

                <h4 style={Inquire.Process==false ? {color: 'royalblue'} : {}}>{Inquire.Process==true ? '처리완료' : '처리중'}</h4>
            </div>
            <hr/>
        </>
    )       
}

function NoInquire() {
    return (
        <div className="NoInquire">
            <h3>작성한 내용이 없습니다</h3>
        </div>
    )
}

function InquireList() {

    const [Inquire, setInquire] = useState([
        {
            id: 1,
            Title: '제목입니다',
            WriteDays: '2022-05-13',
            Content: '얼씨구',
            Process: false
        },
        {
            id: 2,
            Title: '제목입니다',
            WriteDays: '2022-05-13',
            Content: '얼씨구',
            Process: false
        },
        {
            id: 3,
            Title: '제목입니다',
            WriteDays: '2022-05-13',
            Content: '얼씨구',
            Process: false
        },
    ])


    return (
        <div className="InquireListBigBox">
          <Header fontColor="black"/>
            
            <div className="InquireListContentBox">
                <h2>문의내역</h2>
                
                <div className="InquireListContentHeader">
                    <p>제목 / 작성일자</p>
                    <p>답변상태</p>
                </div>
                <hr />


                {Inquire.length > 0 ? Inquire.map(inq => (<InquireListForm Inquire={inq} key={inq.id}/>)) : <NoInquire/>}
                
                
                <div className="InquireListBtnBox">

                    <Link to='/InquireWrite'>
                        <button>문의하기</button>
                    </Link>
                 
                </div>
            </div>
          <Bottom></Bottom>
        </div>
    )
}

export default InquireList