import React from "react";
import Bottom from "./Bottom";
import Header from "./Header";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
// css
import "../css/ReviewList.scss";


function ReviewScore({review})
{
    const rendering = () => {
      const result = [];
      for (let i = 0; i < review.ReviewScore; i++) {
        result.push(<FaStar className="star" key={i}/>);
      }
      return result;
    };
    return <div>{rendering()}</div>;
}

function ReviewForm({review}) {

    return (
        <div className="UserReviewForm">
                    
        {/* 사용자 정보 :) 유저 이미지, 이름, 별점 */}
        <div className="userInfo">  
          <div className="BoxOne">
            <img src={review.ReviewImg} alt="유저 이미지" />
            <div className="NameAndReview">
                <h3 className="userName">{review.UserName}</h3>
                    <ReviewScore review={review}/>
            </div>
          </div>

            <div className="Date">
                {review.ReviewDate}
            </div>
        </div>

        <div className="ReviewTitle">
          <h3>{review.ReviewTitle}</h3>
        </div>

        <div className="BoxTwo">
            <div className="ReviewBtn">
                <button onClick={()=>{console.log("A")}}>{review.GoodPoint} GOOD</button>
                <button onClick={()=>{console.log("A")}}>{review.BadPoint} Bad</button>
            </div>             

            <div className="more">
                <Link to='/ReviewDetail'>
                    <span>더보기</span>
                </Link>
            </div>
        </div>
    </div>
    )
}

function ReviewList() {
    
    const [review, setReview] = useState([ 
        {
            id: 1,
            ReviewImg: '/img/Yeosu.jpg',
            UserName: '리리',
            ReviewDate: '2022.04.28',
            ReviewTitle: '이곳은 제목',
            ReviewScore: 1,
            GoodPoint: 10,
            BadPoint: 3
        },
        {
            id: 2,
            ReviewImg: '/img/Yeosu.jpg',
            UserName: '리리2',
            ReviewDate: '2022.04.29',
            ReviewTitle: '너무 재미있었어요',
            ReviewScore: 5,
            GoodPoint: 50,
            BadPoint: 20
        },
        {
            id: 3,
            ReviewImg: '/img/Yeosu.jpg',
            UserName: '리리2',
            ReviewDate: '2022.04.29',
            ReviewTitle: '너무 재미있었어요',
            ReviewScore: 1,
            GoodPoint: 5,
            BadPoint: 0
        },
        {
            id: 4,
            ReviewImg: '/img/Yeosu.jpg',
            UserName: '리리2',
            ReviewDate: '2022.04.29',
            ReviewTitle: '너무 재미있었어요',
            ReviewScore: 4,
            GoodPoint: 3,
            BadPoint: 0
        },
        {
            id: 5,
            ReviewImg: '/img/Yeosu.jpg',
            UserName: '리리',
            ReviewDate: '2022.04.28',
            ReviewTitle: '너무 재미있었어요',
            ReviewScore: 5,
            GoodPoint: 0,
            BadPoint: 20
        },
        {
            id: 6,
            ReviewImg: '/img/Yeosu.jpg',
            UserName: '리리2',
            ReviewDate: '2022.04.29',
            ReviewTitle: '너무 재미있었어요',
            ReviewScore: 2,
            GoodPoint: 10,
            BadPoint: 30
        },
        {
            id: 7,
            ReviewImg: '/img/Yeosu.jpg',
            UserName: '리리2',
            ReviewDate: '2022.04.29',
            ReviewTitle: '너무 재미있었어요',
            ReviewScore: 5,
            GoodPoint: 40,
            BadPoint: 50
        },
        {
            id: 8,
            ReviewImg: '/img/Yeosu.jpg',
            UserName: '리리2',
            ReviewDate: '2022.04.29',
            ReviewTitle: '너무 재미있었어요',
            ReviewScore: 5,
            GoodPoint: 60,
            BadPoint: 0
        },
        {
            id: 9,
            ReviewImg: '/img/Yeosu.jpg',
            UserName: '리리',
            ReviewDate: '2022.04.28',
            ReviewTitle: '너무 재미있었어요',
            ReviewScore: 5,
            GoodPoint: 0,
            BadPoint: 0
        },
        {
            id: 10,
            ReviewImg: '/img/Yeosu.jpg',
            UserName: '리리2',
            ReviewDate: '2022.04.29',
            ReviewTitle: '너무 재미있었어요',
            ReviewScore: 5,
            GoodPoint: 0,
            BadPoint: 0
        }
    ]);

    let AllReviewScore = 0;

    for(let i=0; i<review.length; i++)
    {
        AllReviewScore += review[i].ReviewScore;
    }

    AllReviewScore = Math.round(AllReviewScore/10);


    // 전체를 합해서 나누기 한 후 반올림한 값
    const TopScore = () => {
        const result = [];
        for (let i = 0; i < AllReviewScore; i++) {
            result.push(<FaStar className="star" key={i}/>);
        }
          return result;
    };

    return(
        <>
            <Header/>
            
            <div className="ReviewTopArea">
                <h1 className="ReviewLocation">대구광역시 </h1>

                <div className="Score">
                    <TopScore/>
                </div>
                {/* 리뷰 작성 버튼 누르면 작성 페이지로 이동합니다. */}
                <Link to='/ReviewWrite'>
                    <button>리뷰 작성</button>
                </Link>
                

            </div>

            <div className="ReviewMiddleArea">
                
                <div className="UmmName">
                     <h2 className="ReviewCount">{review.length}개</h2>
                     
                     <ul>
                         <li>최신순</li>
                         <li>추천순</li>
                     </ul>
                </div>
                {/* 리뷰내용들 */}
               {review.map(a => (
                      <ReviewForm review={a} key={a.id}  />
                ))}


            </div>
            
            <footer className="ReviewBottomArea">
            <BsFillArrowLeftCircleFill className="ArrowBtn"/>
               <ul className="ReviewListNumber">
                   <li>1</li>
                   <li>2</li>
                   <li>3</li>
                   <li>4</li>
                   <li>5</li>
               </ul>
            <BsFillArrowRightCircleFill className="ArrowBtn" />
            </footer>

            <Bottom/>
        </>
    )
}

export default ReviewList;