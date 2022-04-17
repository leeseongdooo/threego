import React, { useRef, useState } from "react";
import Header from "./Header";
import Bottom from "./Bottom";
import { Link } from 'react-router-dom';

// 추천 여행지 영역
function RecommendInfo({recommend}) {
    return(
      <div className="imgarea" style={{backgroundImage: "url(" + recommend.background + ")"}}>
        <div className="infotext">
            <h3>{recommend.recommendTitle}</h3>
        </div>

        <div className="ButtonBox">
            <button>여행시작</button>
            <button>리뷰보기</button>
        </div>
      </div>
    )
}

// 가격영역
function Price({product}) {
    return (
        <div className="productInfo">
            <span>{product.productName}</span>
            <span>{product.productPrice}</span>
            <span>{product.productSell}</span>
            <span>{product.productDate}</span>
        </div>
    )
}

// 리뷰영역 
function ReviewInfo({review}) {
    return (
        <div className="reviewBox">
            <div className="reviewImg"></div>
            <div className="reviewText">
                <h3>{review.reviewTitle}</h3>
                <span>{review.reviewUser}</span>
                <p>{review.reviewStar}</p>
            </div>
        </div>
    )
}


function MainPage(props) {
   
    // 상품정보 오브젝트
    const [product, setProduct] = useState([
        {
            productId: 1,
            productName: '오징어',
            productPrice: 3000,
            productSell: '롯데마트',
            productDate: '2022-02-28'
        },
        {
            productId: 2,
            productName: '오징어',
            productPrice: 3000,
            productSell: '롯데마트',
            productDate: '2022-02-28'
        },
        {
            productId: 3,
            productName: '오징어',
            productPrice: 3000,
            productSell: '롯데마트',
            productDate: '2022-02-28'
        },
        {
            productId: 4,
            productName: '오징어',
            productPrice: 3000,
            productSell: '롯데마트',
            productDate: '2022-02-28'
        }
    ]);

    const [recommend, setRecommend] = useState([
        {
            // 배경이미지도 추가할 예정 
            recommendId: 1,
            recommendTitle: '엄마, 아빠도 좋아하시는 대구 여행 코스',
            recommendSmallTitle: '꽃배경 인생샷 성지와 배가 든든해지는 맛집',
            background:  "https://cdn.pixabay.com/photo/2021/09/02/16/48/cat-6593947_960_720.jpg"
        },
        {
            recommendId: 2,
            recommendTitle: '커피를 좋아하는 사람들이 만든 대구 여행 코스',
            recommendSmallTitle: '꽃배경 인생샷 성지와 배가 든든해지는 맛집',
            background: '/img/Daegu.jpg'
        },
        {
            recommendId: 3,
            recommendTitle: '등산을 좋아하는 사람들이 만든 대구 여행 코스',
            recommendSmallTitle: '꽃배경 인생샷 성지와 배가 든든해지는 맛집',
            background: '../img/exampleImg.jpg'
        }
    ])

    const [review, setReview] = useState([
        {
            //리뷰이미지 추가할 예정
            reviewId: 1,
            reviewTitle: '리뷰제목1',
            reviewUser: '사용자명1',
            reviewStar: '별갯수1',
        },
        {
            //리뷰이미지 추가할 예정
            reviewId: 2,
            reviewTitle: '리뷰제목2',
            reviewUser: '사용자명2',
            reviewStar: '별갯수2',
        },
        {
            //리뷰이미지 추가할 예정
            reviewId: 3,
            reviewTitle: '리뷰제목3',
            reviewUser: '사용자명3',
            reviewStar: '별갯수3',
        },
        {
            //리뷰이미지 추가할 예정
            reviewId: 4,
            reviewTitle: '리뷰제목4',
            reviewUser: '사용자명4',
            reviewStar: '별갯수4'
        },
    ])

   const [slide, setSlide] = useState(1)

   const [slidex, setSlidex] = useState(0);

   const content = useRef();
    return (
        // 이미지 있는 부분까지
        <>
        <Header ></Header>
        
        <div className="slideBigBox">
            <div className="slide-Box">
                <div className="Content" style={{transform: `translateX(${slidex}px)`}} ref={content}>
                    {/* 이미지 안쪽에 텍스트와 버튼 */}
                    <div className="explanation">
                        <div>
                            <h1>DAEGU</h1>
                            <h2>복현오거리 막창골목</h2>
                        </div>
                        {/* 버튼 div */}
                        
                    </div>
                </div>            
                <div className="Content" style={{transform: `translateX(${slidex}px)`}}>
                    {/* 이미지 안쪽에 텍스트와 버튼 */}
                    <div className="explanation">
                        <div>
                            <h1>DAEG3U</h1>
                            <h2>복현오거리 막창골목2</h2>
                        </div>
                        {/* 버튼 div */}
                        
                    </div>
                </div>
            </div>
            
            <p>{slide} / 3</p>

        <div className="slideBtnBox">
            <div>
                <button onClick={(e) => {
                if(slide > 1){
                    setSlidex(slidex + content.current.clientWidth)
                    setSlide(slide - 1)
                    console.log(slidex)
                }
                }}>뒤</button>

                <button onClick={() => {
                    if(slide >= 1){
                    setSlidex(slidex - content.current.clientWidth)
                    setSlide(slide + 1)
                    console.log(slidex)
                    if(slide == 3)
                    {
                        setSlidex(slidex);
                        setSlide(3)
                    }
                }
                }}>앞</button>
            </div>
        </div>

        </div>
       
    
        {/* 추천 여행지 div */}
        <div className="recommend">
          
            <div className="travelList">
            <div className="textarea">
                    <h3>추천 여행지</h3>
                    <Link to='/RecommendList'>더보기</Link>
            </div>
                {recommend.map(a => (
                    <RecommendInfo recommend={a} key={recommend.recommendId}/>
                ))}
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
                  {/* 상단 텍스트 */}
                  <div className="toptext">
                    <h4>상품명</h4>
                    <h4>가격</h4>
                    <h4>판매업소</h4>
                    <h4>날짜</h4>
                  </div>
                  <hr />
                  <div>
                    {product.map(product => (
                      <Price product={product} key={product.productId}/>
                    ))}
                  </div>

                </div>
            </div>
        </div>

        {/* 리뷰정보 */}
        <div className="reviewInfo">

             <div className="reviewList">
        
                <div className="textarea">
                    <h3>리뷰</h3>
                    <a href="https://studiomeal.com/archives/197">더보기</a>  
                </div>

                <div className="reviewarea">
                    {review.map(review => (
                        <ReviewInfo review={review} key={review.reviewId}/>
                    ))}
                </div>
            </div>

        </div>

        <Bottom/>

     
    </> 
    );
}

export default MainPage;