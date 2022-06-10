import React, {useState} from "react";
import { BiNotepad } from "react-icons/bi";
import { BsPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function ReviewListForm({ReviewData}) {
    return (
    <div className="ReviewListForm">
        {/* 리뷰 이미지 */}
        <img src="../img/Daegu.jpg" alt="" className="TravelImage" />

        {/* 여행에 대한 정보(여행지이름, 여행 날짜, 기타 등등) */}
        <div className="TravelInfo">
            <p>{ReviewData.TravelName}</p>
            <p>{ReviewData.ReviewDate}</p>
        </div>

        {/* 상호작용 버튼들 */}
        <div className="ReviewListButtonBox">
            <button style={ReviewData.ReviewWrite==false ? {} : {display: 'none'}}><Link to="/ReviewWrite">리뷰작성</Link></button>
            <button style={ReviewData.ReviewWrite==false ? {display: 'none'} : {}}>수정하기</button>
            <button style={ReviewData.ReviewWrite==false ? {display: 'none'} : {}}>삭제하기</button>
        </div>
    </div>     
    )
}

function ReviewManager() {

    const [ReviewManage, setReviewManage] = useState([
        {
            id: 1,
            TravelName: "여행지 이름1",
            ReviewImage: "/img/Daegu.jpg",
            ReviewDate: '2022.04.28',
            ReviewTitle: '이곳은 제목',
            ReviewContent: '이곳은 제목이곳은 제목이곳은 제목이곳은 제목이곳은 제목이곳은 제목이곳은 제목이dd곳은 제목이곳은 제목이곳은 제목이곳은 제목이곳은 제목',
            ReviewScore: 2,
            ReviewWrite: false
        },
        {
            id: 2,
            TravelName: "여행지 이름12",
            ReviewImage: '',
            ReviewDate: '2022.04.28',
            ReviewTitle: '이곳은 제목',
            ReviewContent: '이곳은 제목이곳은 제목이곳은 제목이곳은 제목이곳은 제목이곳은 제목이곳은 제목이dd곳은 제목이곳은 제목이곳은 제목이곳은 제목이곳은 제목',
            ReviewScore: 3,
            ReviewWrite: false
        },
        {
            id: 3,
            TravelName: "여행지 이름123",
            ReviewImage: '',
            ReviewDate: '2022.04.28',
            ReviewTitle: '이곳은 제목',
            ReviewContent: '이곳은 제목이곳은 제목이곳은 제목이곳은 제목이곳은 제목이곳은 제목이곳은 제목이dd곳은 제목이곳은 제목이곳은 제목이곳은 제목이곳은 제목',
            ReviewScore: 5,
            ReviewWrite: false
        }
    ]);

    return (
        <div className="ReviewManagerBigBox">
            
            <div className="ContentBox">
                <h2 className="TopTitle">리뷰 관리</h2>
                
                <div className="TopContentBox">
                    <div className="WriteAbleReview GoReview" onClick={()=>{console.log("A")}}>
                        <BsPencilFill/>
                        <p>작성 가능한 리뷰</p>
                        <h3>3</h3>
                    </div>

                    <div className="WritenReview GoReview" onClick={()=>{console.log("B")}}>
                        <BiNotepad/>
                        <p>작성한 리뷰</p>
                        <h3>0</h3>
                    </div>
                </div>

                <div className="MiddleContentBox">

                    {/* 작성 가능한 리뷰 */}
                    {ReviewManage.map(List => (
                        <ReviewListForm ReviewData={List}/>
                    ))}
                                     

                </div>

            </div>
            
        </div>
    )
}

export default ReviewManager;