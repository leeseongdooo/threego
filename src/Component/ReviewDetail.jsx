import React, { useEffect } from "react";
import {useState, useRef} from "react";
import { Link } from "react-router-dom";
import { FaStar } from 'react-icons/fa';
import Header from "./Header";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import '../css/ReviewDetail.scss'


function ReviewDetail() {

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
        <>
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
                <h2>제목을 입력해주세요</h2>
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
            <div className="ContentText" >
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
                    {imgsource.map(a=> (
                        <div>
                            <img src={a.Img} alt={a.id} key={a.id} onClick={()=>{setModalView(true); }}/>
                        </div>
                    ))}

               </div>
            </div>

            {/* 작성글 추천이 들어갈 btn */}
            <div className="ReviewBtn">
                <button onClick={()=>{console.log("A")}}>GOOD</button>
                <button onClick={()=>{console.log("A")}}>Bad</button>
            </div>      
        </div>

        <footer className="GoBack">
                <Link to='/ReviewList' className="Link">
                    <button>돌아가기</button>
                </Link>
          
        </footer>
        </>
    )
}

export default ReviewDetail
