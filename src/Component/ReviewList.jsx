import React from "react";
import Bottom from "./Bottom";
import Header from "./Header";
// css
import "../css/ReviewList.scss";


function ReviewList() {
    
    return(
        <>
            <Header/>
            
            <div className="ReviewTopArea">
                <h1 className="ReviewLocation">대구 이월드 </h1>
            </div>

            <div className="ReviewMiddleArea">
                
                <div className="UmmName">
                     <h2 className="ReviewCount"> 리뷰 1358 </h2>
                     
                     <ul>
                         <li>최신순</li>
                         <li>추천순</li>
                     </ul>
                </div>

                <div className="UserReviewForm">
                    
                    {/* 사용자 정보 :) 유저 이미지, 이름, 별점 */}
                    <div className="userInfo">
                        <img src="" alt="유저 이미지" />
                        
                        <div className="NameAndReview">
                            <h3 className="userName">빵상깨랑깨랑</h3>
                            <p className="ReviewPoint">★★★★★</p>
                        </div>
                    </div>

                    <div className="ReviewContent">
                      너무 재미있었어요 너무 재미있었어요 너무 재미있었어요 너무 재미있었어요
                      너무 재미있었어요 너무 재미있었어요 너무 재미있었어요 너무 재미있었어요 
   
                    </div>

                    <div className="ReviewBtn">
                        <button>GOOD</button>
                        <button>Bad</button>
                        
                    </div>

                </div>

            </div>


        </>
    )
}

export default ReviewList;