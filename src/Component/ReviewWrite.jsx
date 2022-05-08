import React, { useState } from "react";
import { FaStar } from 'react-icons/fa';
import '../css/ReviewWrite.scss'
import { useEffect } from "react";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { isDisabled } from "@testing-library/user-event/dist/utils";


function ReviewWrite() {


    // 별의 갯수만큼 ARRAY 설정
    const ARRAY = [0, 1, 2, 3, 4];
    const [titleSize, setTitleSize] = useState();
    const [contentSize, setContentSize] = useState();

    const [PreviewImage, setPreviewImage] = useState([
        {
            id:1,
            Image:'/Daegu.jpg'
        },
        {
            id:2,
            Image:'/DaeguCafe.jpg'
        },
        {
            id:3,
            Image:'/DaeguCafe.jpg'
        } 
    ]);

    const TitlesizeCalculation = (e) => {
        setTitleSize(e.target.value.length);
    }

    const ContentsizeCalculation = (e) => {
        setContentSize(e.target.value.length);
    }

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

    useEffect(() => {
        console.log(titleSize)
    }, [titleSize])

    useEffect(() => {
        console.log(contentSize)
    }, [contentSize])

    // filterBoolean을 통해서 active에 True인 boolean값을 가져온다.
    const sendReview = () => {
        let score = active.filter(Boolean).length; // 그럼 이 값이 점수가 된다.
        console.log(score);
    };


    const ReviewImage = (e) => {
        const ReviewImg = e.target.files;
        console.log(ReviewImg[0].name)

        const newPreviewImg = {
            id: PreviewImage.length + 1,
            Image: ReviewImg[0].name
        }

        console.log(newPreviewImg);
        PreviewImage.push(newPreviewImg);
        console.log(PreviewImage);
    }

    const ImgFilePreview={
        display: 'none'
    }
    console.log(PreviewImage.length)
    return (
        <>
            {/* 상단부분 */}
            <header className="ReviewWriteHeader">
                리뷰 작성 
            </header>

            <div className="ReviewArea">
                <div className="PointArea">
                    <h2>여행은 어떠셨나요??</h2>
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
                    <div className="GuideText" >
                        <p>제목</p>
                        <p>최소 10자</p>
                    </div>

                    <input type="text" placeholder="제목을 입력해주세요" className="Title" onChange={TitlesizeCalculation}/>
            
                    <div className="GuideText">
                        <p>내용</p>
                        <p>최소 10자</p>
                    </div>

                    <textarea name="" id="" className="WriteContent" placeholder="내용을 입력해주세요" onChange={ContentsizeCalculation} ></textarea>
   
                    

                    <div className="GuideText">
                        <p>사진등록</p>
                    </div>

                    <div className="ReviewWriteImageArea">
        
                        
                        {/* <img src={"/img/" + Image} alt="Image" /> */}
                        {/* accept="image/*"은 이미지만 업로드 가능하게 하는것 */}

                        {PreviewImage.map(a => (<img src={"/img/" + a.Image} alt="" key={a.id}/>))}
                     
                        
                        <label className="ReviewImgLabel" style={PreviewImage.length >=3 ? ImgFilePreview : {}} >
                            <IoDocumentAttachOutline size="40px"/>
                            <span>이미지 추가</span>
                            <input type="file" accept="image/*" onChange={ReviewImage}/>
                        </label>

                    </div>
                </div>

                <footer className="ReviewWriteBottom">
                    <button onClick={()=>{console.log("A")}} disabled={titleSize>=10  && contentSize>=10 ? "" : "disabled"}>등록하기</button>
                </footer>
            </div>
                
        </>
    )
}

export default ReviewWrite;