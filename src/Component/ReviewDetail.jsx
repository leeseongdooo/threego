import React, { useEffect } from "react";
import {useState, useRef} from "react";
import { Link } from "react-router-dom";
import { FaStar } from 'react-icons/fa';
import Header from "./Header";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import '../css/ReviewDetail.scss'
import {useLocation} from "react-router";

function ReviewDetail() {

    const location = useLocation();
    const ReviewInfo = location.state.Review;
    const ReviewScore = [];
    console.log(ReviewInfo)

    const [ImageSize, setImageSize] = useState(0);
    
    const [modalView, setModalView] = useState(false);
    
    const ImageInfo = useRef(null);
    
    const ImageBox = useRef(null);
    
    const [imgsource, setImgsource] = useState([
        {
            id: 1,
            Img: '/img/Daegu.jpg'
        },
        {
            id: 2,
            Img: '/img/Yeosu.jpg'
        },
        {
            id: 3,
            Img: '/img/Daegu.jpg'
        }
    ])

    for(let i=0; i<ReviewInfo.ReviewScore; i++)
    {
        ReviewScore.push(i);
    }

    console.log(ReviewScore.length);

    useEffect(()=>{
        ImageBox.current.style.transform = `translateX(-${ImageSize}px)`;
    }, [ImageSize]);

    function moveImg() {
        if(ImageSize > 0)
        {
            setImageSize(ImageSize - ImageInfo.current.clientWidth - 10);
            console.log(ImageInfo.current.style.transform);
        }           
    }

    function moveImg2() {
            const MaxSize = ImageInfo.current.clientWidth * 2
            if(ImageSize < MaxSize){
                setImageSize(ImageSize + ImageInfo.current.clientWidth + 10);
            }
    }

    return (
        <div className="ReviewDetailBigBox">
        {/* 이미지 슬라이더 부분입니다 position:fixed로 설정해서 여기에 배치하였습니다. */}
         <div className={modalView==true ? "imageSlide" : "imageSlidenone"}>

            <div className="SlideTop">
                <button onClick={()=>{setModalView(false)}}>X</button>
            </div>
    
            <div className="ImageArea">
                <div ref={ImageBox} className="ImageBox">
                    {imgsource.map(a=> (
                        <img src={a.Img} alt="1" key={a.id}  ref={ImageInfo}/>
                    ))}
                </div>                
            </div>
            
            <div className="ArrowArea">
                                                                
                <AiOutlineArrowLeft className="Arrow" onClick={moveImg}/>
                <AiOutlineArrowRight className="Arrow" onClick={moveImg2}/>
            </div>
            
        </div>
        
        <header className="ReviewDetailHeader">
            <h3>???님 리뷰</h3>
        </header>


        <div className="ReviewDetailContent">
            {/* 제목과 작성일을 나타내는 div */}
            <div className="ContentTopArea">
                <h2>{ReviewInfo.ReviewTitle}</h2>
                <p>{ReviewInfo.ReviewDate}</p>
            </div>
            
             {/* 리뷰 스코어가 들어갈 div */}
            <div className="ContentScore">
                {ReviewScore.map(a=> (<FaStar className="star"/>))}
            </div>
            
            {/* 내용이 들어갈 div */}
            <div className="ContentText" >
               <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
               </p>
               
               <div className="imageArea">                    
                    {imgsource.map(a=> (
                        <div>
                            <img src={a.Img} alt={a.id} key={a.id} onClick={()=>{setModalView(true); }}/>
                        </div>
                    ))}

               </div>
            </div>

            {/* 작성글 추천이 들어갈 btn */}
            <div className="ReviewBtn">
                <button onClick={()=>{console.log("A")}}>{ReviewInfo.GoodPoint} GOOD</button>
                <button onClick={()=>{console.log("A")}}>{ReviewInfo.BadPoint} Bad</button>
            </div>      
        </div>

        <footer className="GoBack">
                <Link to='/ReviewList' className="Link">
                    <button>돌아가기</button>
                </Link>
          
        </footer>
        </div>
    )
}

export default ReviewDetail
