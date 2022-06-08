import React, { useState } from "react";
import Header from "./Header";
import Bottom from "./Bottom";
import { Link } from "react-router-dom";
import {useHistory} from "react-router";
import '../css/InquireList.scss'

function InquireListForm({Inquire, Detail}) {

    return (
        <>
            <div className="InquireListForm"  onClick={()=>{Detail.push({pathname: "/InquireDetail", state: {Inquire: Inquire}})}}>
               
                <div className="TextContentArea">
                    <p className="WriteNumber">{Inquire.id}</p>
                    <p className="Title">{Inquire.Title}</p>
                    <p className="WriteDay">{Inquire.WriteDays}</p>
                    <p className="Process" style={Inquire.Process==false ? {color: 'royalblue'} : {}}>{Inquire.Process==true ? '처리완료' : '처리중'}</p>
                </div>

            
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
    const Detail = useHistory();
    const [Inquire, setInquire] = useState([
        {
            id: 1,
            Title: '제목입니다',
            WriteDays: '2022-05-13',
            Content: '얼씨구1',
            Process: true
        },
        {
            id: 2,
            Title: '제목입니다',
            WriteDays: '2022-05-13',
            Content: '얼씨구2',
            Process: false
        },
        {
            id: 3,
            Title: '제목입니다',
            WriteDays: '2022-05-13',
            Content: '얼씨구3',
            Process: false
        },
    ])


    return (
        <div className="InquireListBigBox">
            <div className="HeaderParent">
                    <Header fontColor="" />
            </div>

            
            <div className="InquireListContentMotherBox">
                <div className="InquireListContentBox">
                    <h1>문의내역</h1>
                    
                    <div className="InquireListContentHeader">
                        <p className="ListNumber">순번</p>
                        <p className="Title">제목</p>
                        <p className="WriteDay">작성일자</p>
                        <p className="AnswerProcess">답변상태</p>
                    </div>
                    <hr />


                    {Inquire.length > 0 ? Inquire.map(inq => (<InquireListForm Inquire={inq} key={inq.id} Detail={Detail}/>)) : <NoInquire/>}
                    
                    
                    <div className="InquireListBtnBox">

                        <Link to='/InquireWrite'>
                            <button>문의하기</button>
                        </Link>
                    
                    </div>
                </div>
            </div>

          <Bottom></Bottom>
        </div>
    )
}

export default InquireList