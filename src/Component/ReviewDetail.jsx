import React, { useEffect } from "react";
import {useState, useRef} from "react";
import { FaStar } from 'react-icons/fa';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import {useLocation} from "react-router";
import Bottom from "./Bottom";
import CommentsForm from "./CommentsForm";
import '../css/ReviewDetail.scss'

function ReviewDetail() {

    const location = useLocation();
    
    const ReviewInfo = location.state.Review;
    
    const ReviewScore = [];

    const [ImageSize, setImageSize] = useState(0);
    
    const [modalView, setModalView] = useState(false);
    
    const [DetailReviewInfo, setDetailReviewInfo] = useState(ReviewInfo);

    console.log(DetailReviewInfo);

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

    const [noewSlideNumber, setNowSlideNumber] = useState(1);

    for(let i=0; i<DetailReviewInfo.ReviewScore; i++)
    {
        ReviewScore.push(i);
    }

    // Good버튼 누를 때 활성화 됩니다. (한명단 한번만 체크되게 하기 위해서 선언)
    const [GoodPointBool, setGoodPointBool] = useState(true);

    const GoodToggle = () => {  
        if(DetailReviewInfo.pointDownBool == true && DetailReviewInfo.pointUpBool == false) {
            setDetailReviewInfo({...DetailReviewInfo,  GoodPoint: DetailReviewInfo.GoodPoint + 1, BadPoint: DetailReviewInfo.BadPoint - 1, pointDownBool: false, pointUpBool: true  });
        } else if(DetailReviewInfo.pointUpBool == false)
        {
           setDetailReviewInfo({...DetailReviewInfo,  GoodPoint: DetailReviewInfo.GoodPoint + 1, pointUpBool: true });
        } 
    
        if(DetailReviewInfo.pointUpBool == true) {
            setDetailReviewInfo({...DetailReviewInfo,  GoodPoint: DetailReviewInfo.GoodPoint - 1, pointUpBool: false });
        }
    };

    const BadToggle = () => {  

        if(DetailReviewInfo.pointUpBool == true && DetailReviewInfo.pointDownBool == false) {
            setDetailReviewInfo({...DetailReviewInfo,  GoodPoint: DetailReviewInfo.GoodPoint - 1, BadPoint: DetailReviewInfo.BadPoint + 1, pointDownBool: true, pointUpBool: false  });
        }

        else if(DetailReviewInfo.pointDownBool == false)
        {
           setDetailReviewInfo({...DetailReviewInfo,  BadPoint: DetailReviewInfo.BadPoint + 1, pointDownBool: true });
        } else if(DetailReviewInfo.pointDownBool == true) {
           setDetailReviewInfo({...DetailReviewInfo,  BadPoint: DetailReviewInfo.BadPoint - 1, pointDownBool: false });
        }
    };



    useEffect(()=>{
        ImageBox.current.style.transform = `translateX(-${ImageSize}px)`;
    }, [ImageSize]);

    function moveImg() {
        if(ImageSize > 0)
        {
            setImageSize(ImageSize - ImageInfo.current.clientWidth - 10);
            console.log(ImageInfo.current.style.transform);
            setNowSlideNumber(noewSlideNumber - 1);
        }           
    }

    function moveImg2() {
            const MaxSize = ImageInfo.current.clientWidth * 2
            if(ImageSize < MaxSize){
                setImageSize(ImageSize + ImageInfo.current.clientWidth + 10);
            }
            setNowSlideNumber(noewSlideNumber + 1);
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
                    <AiOutlineArrowLeft className="Arrow" onClick={moveImg} style={noewSlideNumber === 1 ? {display: 'none'} : ''}/>
                    <AiOutlineArrowRight className="Arrow2" onClick={moveImg2} style={noewSlideNumber === 3 ? {display: 'none'} : ''}/>
                </div>
            </div>
            
            <header className="ReviewDetailHeader">
                <h3>???님 리뷰</h3>
            </header>


            <div className="ReviewDetailContent">
                {/* 제목과 작성일을 나타내는 div */}
                <div className="ContentTopArea">
                    <h2>{DetailReviewInfo.ReviewTitle}</h2>
                    <p>{DetailReviewInfo.ReviewDate}</p>
                </div>
                
                {/* 리뷰 스코어가 들어갈 div */}
                <div className="ContentScore">
                    {ReviewScore.map((a, idx)=> (<FaStar className="star" key={idx}/>))}
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
                                <div key={a.id}>
                                    <img src={a.Img} alt={a.id} key={a.id} onClick={()=>{setModalView(true); }}/>
                                </div>
                            ))}

                    </div>
            </div>

                {/* 작성글 추천이 들어갈 btn */}
                <div className="ReviewBtn">

                    {/* <button onClick={()=>{GoodToggle(review.id)}}>{review.GoodPoint} GOOD</button>
                    <button onClick={()=>{BadToggle(review.id)}}>{review.BadPoint} Bad</button> */}

                    <button onClick={()=>{GoodToggle()}}>{DetailReviewInfo.GoodPoint} GOOD</button>
                    <button onClick={()=>{BadToggle()}}>{DetailReviewInfo.BadPoint} Bad</button>
                </div> 
            </div>
            <CommentsForm/>
            <Bottom/> 
        </div>
    )
}

export default ReviewDetail
