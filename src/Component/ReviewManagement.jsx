import {React, useEffect, useRef, useState} from "react";
import Header from "./Header";
import Bottom from "./Bottom";
import { FaStar } from 'react-icons/fa';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import '../css/ReviewManagement.scss'
import ReviewManager from "./ReviewManager";

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

            
            {/* 체크박스  */}
            <div className="ReviewFormTopArea">
                <input type="checkbox" onClick={(e)=>{
                        if(List.checkBool == false)
                            setReviewManage(ReviewManage.map(user => user.id == List.id  ? {...user, checkBool: true} : user));
                        else if(List.checkBool == true) 
                            setReviewManage(ReviewManage.map(user => user.id == List.id  ? {...user, checkBool: false} : user))
                        } 
                } />
                <button>삭제</button>
            </div>
            
            {/* 텍스트와 이미지가 있는 div 입니다. */}
            <div className="TextAndImageContentBox">
                
                <div className="MiddleImageArea" style={List.ReviewImage.length > 0 ? {} : {display: 'none'}}>
                    
                    <div className="ImageBox" ref={ReviewImage}>
                        <img src={List.ReviewImage} alt="" />
                    </div>
                
                </div>
                
                <div className="MiddleTopArea">
                        
                    <div className="NameAndScore">
                        <h3>{List.ReviewTitle}</h3>
                        <h4>{List.TravelName}</h4>
                        {ReviewStar.map((idx)=> (<FaStar key={idx}/>))}
                    </div>

                    <div className="MiddleDeleteBtn">
                        {/* <button>수정</button> */}

                        {/* onClick={()=>{setReviewManage(ReviewManage.filter((kk)=>kk.id !== List.id));} */}
                    </div>

                </div>
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

    useEffect(()=>{
        console.log(ReviewManage);
    },[ReviewManage])
  

    return (
        <div className="ReviewManagementBigBox">

            <div className="HeaderParent">
                <Header fontColor=""/>
            </div>
            

            <ReviewManager/>
            
            <Bottom/>
        </div>
    )
}

export default ReviewManagement