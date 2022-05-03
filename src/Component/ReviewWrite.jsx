import React, { useState } from "react";
import { FaStar } from 'react-icons/fa';
import '../css/ReviewWrite.scss'
import { useEffect } from "react";

function ReviewWrite() {


    // 별의 갯수만큼 ARRAY 설정
    const ARRAY = [0, 1, 2, 3, 4];

    const [active, setActive] = useState([
        {
            id:1,
            active: false
        },
        {
            id:2,
            active: false
        },
        {
            id:3,
            active: false
        },
        {
            id:4,
            active: false
        },
        {
            id:5,
            active: false
        }
     ]);

    const handleStarClick = index => {
        let Actives = [...active]; // active 배열 복사
        for (let i = 0; i < 5; i++) {
          Actives[i] = i <= index ? true : false; // 복사한 active에서 클릭한 값만큼 true로 바꿔준다.
        }
        // 복사한 active를 setActive를 통해 값을 변경한다.
        setActive(Actives);
      };

      // useEffect를 통해서 active값이 변하거나 페이지가 렌더링 될 때 console.log에 active를 나타나게 설정
    useEffect(()=>{
        console.log(active)
        sendReview();
    }, [active])

    // filterBoolean을 통해서 active에 True인 boolean값을 가져온다.
    const sendReview = () => {
        let score = active.filter(Boolean).length; // 그럼 이 값이 점수가 된다.
        console.log(score);
    };

    const [Image, setImage] = useState('asdfasdf')

    const ReviewImage = (e) => {
        const ReviewImg = e.target.files;
        setImage(ReviewImg[0].name);
    }

    return (
        <>
            {/* 상단부분 */}
            <header className="ReviewWriteHeader">
                리뷰 작성 
            </header>

            <div className="ReviewArea">
                <div className="PointArea">
                    <h3>여행은 어떠셨나요??</h3>
                    <div className="ScoreBox">
                        {ARRAY.map((el, idx) => { // map을 통해 ARRAY값을 가져오고 
                            return (
                                <FaStar
                                key={idx} // key = 0~4까지
                                size="50" // 
                                onClick={() => {handleStarClick(el);}} // 클릭시 handleStarClick 함수 실행 
                                className={active[el] && 'yellowStar'} // 참이라면 yellowStar 활성화
                                />
                            );
                        })}  
                    </div>
                    {/* <h2>{active.filter(Boolean).length}</h2> */}
                </div>

                <div className="WriteArea">
                    <input type="text" placeholder="제목을 입력해주세요" className="Title"/>
                    <textarea name="" id="" className="WriteContent" ></textarea>
                    
                    <div className="ReviewWriteImageArea">
                        <div className="ImageGuideText">
                            <h5>사진 등록</h5>
                        </div>
                    
                        <input type="file" id="image" accept="img/*" onChange={ReviewImage} />
                        <br /> <br />
                        <img src={"img/" + Image} alt="+" className="SampleImage" />
                        <img src={"img/" + Image} alt="+" className="SampleImage" />
                        <img src={"img/" + Image} alt="+" className="SampleImage" />
                    </div>
                </div>

                <footer className="ReviewWriteBottom">
                    <button onClick={() => {console.log("A")}}>등록하기</button>
                </footer>
            </div>
                
        </>
    )
}

export default ReviewWrite;