import React, {useCallback, useState} from "react";
import { useEffect } from "react";
import { BiNotepad } from "react-icons/bi";
import { BsPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function ReviewListForm({ReviewData, RealData, setRealData, setWritenObject}) {
    
    function RemoveReview(e) {
        setRealData(RealData.filter(List => List.id !== ReviewData.id));
        console.log(RealData)
    }
    
    useEffect(()=> {
        setWritenObject(RealData.filter(List => List.ReviewWrite !== false));
    },[RealData]);

    
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
            <button style={ReviewData.ReviewWrite==false ? {display: 'none'} : {}} onClick={()=>{console.log("A")}}>수정하기</button>
            <button style={ReviewData.ReviewWrite==false ? {display: 'none'} : {}} onClick={RemoveReview}>삭제하기</button>
        </div>
    </div>     
    )
}

function ReviewManager() {

    // 원본Review Object
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
            ReviewWrite: true
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
        },
        {
            id: 4,
            TravelName: "여행지 이름123",
            ReviewImage: '',
            ReviewDate: '2022.04.28',
            ReviewTitle: '이곳은 제목',
            ReviewContent: '이곳은 제목이곳은 제목이곳은 제목이곳은 제목이곳은 제목이곳은 제목이곳은 제목이dd곳은 제목이곳은 제목이곳은 제목이곳은 제목이곳은 제목',
            ReviewScore: 5,
            ReviewWrite: true
        },
        {
            id: 5,
            TravelName: "여행지 이름123",
            ReviewImage: '',
            ReviewDate: '2022.04.28',
            ReviewTitle: '이곳은 제목',
            ReviewContent: '이곳은 제목이곳은 제목이곳은 제목이곳은 제목이곳은 제목이곳은 제목이곳은 제목이dd곳은 제목이곳은 제목이곳은 제목이곳은 제목이곳은 제목',
            ReviewScore: 5,
            ReviewWrite: true
        }
    ]);

    // 필터링 기능 
    const [WriteAbleObject, setWriteAbleObject] = useState(ReviewManage.filter(List =>  List.ReviewWrite === false));
    const [WritenObject, setWritenObject] = useState(ReviewManage.filter(List =>  List.ReviewWrite !== false));
    
    // 카테고리 체크 여부 
    const [WriteAbleClickBool,setWriteAbleClickBool] = useState(true);
    const [WritenClickBool,setWritenClickBool] = useState(false);

    const [WriteAbleReview, setWriteAbleReivew] = useState(ReviewManage);

    // 필터링
    function WriteAble() {
       setWriteAbleReivew(ReviewManage.filter(List => List.ReviewWrite === false));
       setWriteAbleClickBool(true); 
       setWritenClickBool(false);
    }

    //필터링
    function WritenReview() {
        setWriteAbleReivew(ReviewManage.filter(List => List.ReviewWrite !== false));
        setWriteAbleClickBool(false);
        setWritenClickBool(true);
    }

    

    useEffect(()=>{
           setWriteAbleReivew(ReviewManage);

           if(WriteAbleClickBool == true)
           {
            WriteAble();
           } else {
            WritenReview();
           }
    }, [ReviewManage]);

    return (
        <div className="ReviewManagerBigBox">
            
            <div className="ContentBox">
                <h2 className="TopTitle">리뷰 관리</h2>
                
                <div className="TopContentBox">
                    <div className="WriteAbleReview GoReview" onClick={WriteAble}>
                        <BsPencilFill/>
                        <p>작성 가능한 리뷰</p>
                        <h3>{WriteAbleObject.length}</h3>
                    </div>

                    <div className="WritenReview GoReview" onClick={WritenReview}>
                        <BiNotepad/>
                        <p>작성한 리뷰</p>
                        <h3>{WritenObject.length}</h3>
                 </div>
                </div>

                <div className="MiddleContentBox">

                    {/* 작성 가능한 리뷰 */}
                    {WriteAbleReview.map(List => (
                        <ReviewListForm ReviewData={List} RealData={ReviewManage} setRealData={setReviewManage} setWritenObject={setWritenObject}/>
                    ))}
    
                    {WriteAbleReview.length == 0 ? <h3 className="NothingText">아무것도 없어요 ㅠㅠ</h3> : "" }    

                </div>

            </div>
            
        </div>
    )
}

export default ReviewManager;