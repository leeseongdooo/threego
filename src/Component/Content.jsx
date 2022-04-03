import React from "react";
import Bottom from "./Bottom";
import Header from "./Header";

function Content() {
    return (
        // 이미지 있는 부분까지
        <>
        <div className="Content">
            <Header></Header>
            {/* 이미지 안쪽에 텍스트와 버튼 */}
            <div className="explanation">
                <h2>안녕하세요</h2>
                <h2>텍스트를 입력해주세요</h2>
                {/* 버튼 div */}
                <div className="btnbox">
                    <button>코스보기</button>
                    <button>리뷰보기</button>
                </div>
            </div>
        </div>
        
        {/* 추천 여행지 div */}
        <div className="recommend">
           
            <div className="travelList">
                <div className="textarea">
                    <h3>추천 여행지</h3>
                </div>
                      {/* map으로 수정 */}
                <div className="imgarea">
                    <img src="./img/exampleImg.jpg" alt="이미지 파일" />
                    <img src="./img/exampleImg.jpg" alt="이미지 파일" />
                    <img src="./img/exampleImg.jpg" alt="이미지 파일" />
                    <img src="./img/exampleImg.jpg" alt="이미지 파일" />
                </div>

            </div>
        </div>

        {/* 주변가격정보 */}
        <div className="priceInfo">

            <div className="priceList">
                
                <div className="textarea">
                    <h3>주변가격정보</h3>
                    <a href="https://studiomeal.com/archives/197">더보기</a>  
                </div>

                <div className="pricearea">
                   <h4>상품명</h4>
                   <h4>가격</h4>
                   <h4>판매업소</h4>
                   <h4>날짜</h4>
                </div>
            </div>
        </div>

        {/* 리뷰정보 */}
        <div className="reviewInfo">

             <div className="reviewList">
                
                <div className="textarea">
                    <h3>리뷰</h3>
                </div>

                <div className="reviewarea">

                </div>
            </div>

        </div>

     
    </> 
    );
}

export default Content;