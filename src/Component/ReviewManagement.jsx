import {React, useEffect, useRef, useState} from "react";
import Header from "./Header";
import Bottom from "./Bottom";
import { FaStar } from 'react-icons/fa';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import '../css/ReviewManagement.scss'


function ReviewForm ({List, setReviewManage, ReviewManage}) {

    let ReviewStar = [];

    const [ReviewSize, setReviewSize] = useState(0);
    const ReviewImage = useRef();

    useEffect(()=>{
        ReviewImage.current.style.transform = `translateX(-${ReviewSize}px)`;
    }, [ReviewSize])

    const RightSlide = () => {
        const MaxSize = ReviewImage.current.clientWidth * 2
        if(ReviewSize < MaxSize)
        {
            setReviewSize(ReviewSize + ReviewImage.current.clientWidth);
        }        
    }

    const LeftSlide = () => {
        if(ReviewSize > 0)
        {
            setReviewSize(ReviewSize - ReviewImage.current.clientWidth);
        }
    }    



    for(let i=0; i<List.ReviewScore; i++)
    {
        ReviewStar.push(i);
    }


    
    return (
        <div className="ReviewForm">
            <input type="checkbox" onClick={(e)=>{
                    if(List.checkBool == false)
                        setReviewManage(ReviewManage.map(user => user.id == List.id  ? {...user, checkBool: true} : user));
                    else if(List.checkBool == true) 
                        setReviewManage(ReviewManage.map(user => user.id == List.id  ? {...user, checkBool: false} : user))

                    } 
                    

                    } />
            <div className="MiddleTopArea">
                <div className="NameAndScore">
                    <h3>{List.ReviewTitle}</h3>
                    <h4>{List.TravelName}</h4>
                    {ReviewStar.map((idx)=> (<FaStar key={idx}/>))}
                </div>

                <div className="MiddleDeleteBtn">
                    {/* <button>수정</button> */}
                    <button onClick={()=>{setReviewManage(ReviewManage.filter((kk)=>kk.id !== List.id)); console.log(ReviewManage)}} >삭제</button>
                </div>

            </div>

            <div className="MiddleImageArea" style={List.ReviewImage.length > 0 ? {} : {display: 'none'}}>
                
                <div className="ImageBox" ref={ReviewImage}>
                    <img src={List.ReviewImage} alt="" />
                    <img src="/img/DaeguShinsaegae.jpg" alt="" />
                    <img src={List.ReviewImage} alt="" />
                </div>
        
                <div className="SlideBtn">
                    <div className="BtnArea">
                    <AiOutlineArrowLeft onClick={LeftSlide} className="Arrow" />
                    <AiOutlineArrowRight onClick={RightSlide} className="Arrow" />
                    </div>
                </div>
            </div>

            <div className="MiddleMiddleArea">
                <p>{List.ReviewContent}</p>
            </div>
        </div>
    )
}

function ReviewManagement() {

    const [ReviewManage, setReviewManage] = useState([
        {
            id: 1,
            TravelName: "여행지 이름1",
            ReviewImage: "/img/Daegu.jpg",
            ReviewDate: '2022.04.28',
            ReviewTitle: '이곳은 제목',
            ReviewContent: '이곳은 제목이곳은 제목이곳은 제목이곳은 제목이곳은 제목이곳은 제목이곳은 제목이dd곳은 제목이곳은 제목이곳은 제목이곳은 제목이곳은 제목',
            ReviewScore: 2,
            checkBool: false
        },
        {
            id: 2,
            TravelName: "여행지 이름12",
            ReviewImage: '',
            ReviewDate: '2022.04.28',
            ReviewTitle: '이곳은 제목',
            ReviewContent: '이곳은 제목이곳은 제목이곳은 제목이곳은 제목이곳은 제목이곳은 제목이곳은 제목이dd곳은 제목이곳은 제목이곳은 제목이곳은 제목이곳은 제목',
            ReviewScore: 3,
            checkBool: false
        },
        {
            id: 3,
            TravelName: "여행지 이름123",
            ReviewImage: '',
            ReviewDate: '2022.04.28',
            ReviewTitle: '이곳은 제목',
            ReviewContent: '이곳은 제목이곳은 제목이곳은 제목이곳은 제목이곳은 제목이곳은 제목이곳은 제목이dd곳은 제목이곳은 제목이곳은 제목이곳은 제목이곳은 제목',
            ReviewScore: 5,
            checkBool: false
        }
    ])

    useEffect(()=>{
        console.log(ReviewManage);
    },[ReviewManage])
  

    return (
        <div className="ReviewManagementBigBox">
            <Header fontColor="black"/>
                <div className="ReviewManagementContentBox">

                    <div className="TopArea">
                        <h3>리뷰 관리</h3>

                        <div className="SelectAndDeleteBox">
                            
                            <div className="SelectBox">
                                {/* <input type="checkbox" /> */}
                                <h4>총 {ReviewManage.length}개</h4>
                            </div>

                            <h4 className="Delete" onClick={()=>{setReviewManage(ReviewManage.filter((check)=>check.checkBool !== true))}}>선택삭제</h4>

                        </div>
                    </div>

                    <div className="MiddleArea">
                        {
                            ReviewManage.length > 0 ? 
                            ReviewManage.map((List)=>(<ReviewForm ReviewManage={ReviewManage} setReviewManage={setReviewManage} List={List} key={List.id}/>)) : 
                            <h3 className="NoReview">리뷰가 없어요 ㅜ.ㅜ</h3> 
                        }
                      
                    </div>
                </div>
            <Bottom/>
        </div>
    )
}

export default ReviewManagement