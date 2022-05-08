import React, { useEffect } from "react";
import {useState, useRef} from "react";
import { FaStar } from 'react-icons/fa';
import Header from "./Header";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import '../css/ReviewDetail.scss'

function ReviewDetail() {

    const [modalView, setModalView] = useState(true);
    const ImageInfo = useRef(null);
    const [ImageSize, setImageSize] = useState(0);
    
    useEffect(()=>{console.log(ImageSize)})

    return (
        <>
         <div className={modalView==true ? "imageSlide" : "imageSlidenone"}>

            <div className="SlideTop">
                <button onClick={()=>{setModalView(false)}}>X</button>
            </div>
    
            <div className="ImageArea">
                <img src="../img/Daegu.jpg" alt="1"  ref={ImageInfo} />
                <img src="../img/Daegu.jpg" alt="1"   />
                <img src="../img/Daegu.jpg" alt="1"   onClick={()=>{console.log("A")}}/>
            </div>
            
            <div className="ArrowArea">
                                                                
                <AiOutlineArrowLeft className="Arrow" onClick={()=>{ImageInfo.current.style = 'transform: translateX(-150px)'}}/>
                <AiOutlineArrowRight className="Arrow" onClick={()=>{setImageSize(ImageInfo.current.width + ImageSize);}}/>
            </div>
            
        </div>
        
        <header className="ReviewDetailHeader">
            <h3>???님 리뷰</h3>
        </header>


        <div className="ReviewDetailContent">
            {/* 제목과 작성일을 나타내는 div */}
            <div className="ContentTopArea">
                <h2>제목</h2>
                <p>2022.05.07</p>
            </div>
            
             {/* 리뷰 스코어가 들어갈 div */}
            <div className="ContentScore">
                <FaStar className="star"/>
                <FaStar className="star"/>
                <FaStar className="star"/>
                <FaStar className="star"/>
                <FaStar className="star"/>
            </div>
            
            {/* 내용이 들어갈 div */}
            <div className="ContentText">
               <p>
                우리나라에서 가장 더운 지역 대구. 하지만 매년 여름 열리는 치맥 페스티벌과 함께라면 더위도 문제없다. 
                놀이동산 이월드는 가족과 함께 나들이하기에 좋으며, 두류공원도 산책코스로 제격! 
                음악 분수쇼로 유명한 수성못과 독특한 외관이 인상적인 전시공간 디아크는 대구의 야경 명소로 손꼽힌다. 
                우리나라 3대 시장인 서문시장 야시장도 대구의 대표 핫플레이스!

                우리나라에서 가장 더운 지역 대구. 하지만 매년 여름 열리는 치맥 페스티벌과 함께라면 더위도 문제없다. 
                놀이동산 이월드는 가족과 함께 나들이하기에 좋으며, 두류공원도 산책코스로 제격! 
                음악 분수쇼로 유명한 수성못과 독특한 외관이 인상적인 전시공간 디아크는 대구의 야경 명소로 손꼽힌다. 
                우리나라 3대 시장인 서문시장 야시장도 대구의 대표 핫플레이스!
               </p>
               
               <div className="imageArea">
                    <img src="../img/Daegu.jpg" alt="1" onClick={()=>{setModalView(true)}}/>
                    <img src="../img/Daegu.jpg" alt="2" />
                    <img src="../img/Daegu.jpg" alt="3" />
               </div>
            </div>

            {/* 작성글 추천이 들어갈 btn */}
            <div className="ReviewBtn">
                <button onClick={()=>{console.log("A")}}>GOOD</button>
                <button onClick={()=>{console.log("A")}}>Bad</button>
            </div>      
        </div>

        <footer className="GoBack">
            <button>돌아가기</button>
        </footer>
        </>
    )
}

export default ReviewDetail
