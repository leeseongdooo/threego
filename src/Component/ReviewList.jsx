import React, { useEffect } from "react";
import Bottom from "./Bottom";
import Header from "./Header";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
// css
import "../css/ReviewList.scss";
import {useHistory} from "react-router";


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


function ReviewForm({review, GoodToggle,BadToggle, history}) {

    return (
        <div className="UserReviewForm">
                    
        {/* 사용자 정보 :) 유저 이미지, 이름, 별점 */}
        <div className="userInfo">  
          <div className="BoxOne">
            <img src={review.ReviewImg} alt="유저 이미지" />
            <div className="NameAndReview">
                <h3 className="userName">{review.UserName}</h3>
                <ReviewScore className="ReviewStar" review={review}/>
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
                <button onClick={()=>{GoodToggle(review.id)}}>{review.GoodPoint} GOOD</button>
                <button onClick={()=>{BadToggle(review.id)}}>{review.BadPoint} Bad</button>
            </div>             

            <div className="more">
                
            <span onClick={()=>{history.push({pathname: "/ReviewDetail", state: {Review: review}})}}>더보기</span>
                
            </div>
        </div>
    </div>
    )
}

function ReviewList() {
    
    const history = useHistory();

    const [review, setReview] = useState([ 
        {
            id: 1,
            ReviewImg: '/img/Yeosu.jpg',
            UserName: '리리',
            ReviewDate: '2022.04.28',
            ReviewTitle: '이곳은 제목',
            ReviewScore: 1,
            GoodPoint: 10,
            BadPoint: 3,
            pointUpBool: false,
            pointDownBool: false
        },
        {
            id: 2,
            ReviewImg: '/img/Yeosu.jpg',
            UserName: '리리2',
            ReviewDate: '2022.04.29',
            ReviewTitle: '너무 재미있었어요',
            ReviewScore: 5,
            GoodPoint: 50,
            BadPoint: 20,
            pointUpBool: false,
            pointDownBool: false
        },
        {
            id: 3,
            ReviewImg: '/img/Yeosu.jpg',
            UserName: '리리2',
            ReviewDate: '2022.04.29',
            ReviewTitle: '너무 재미있었어요',
            ReviewScore: 1,
            GoodPoint: 5,
            BadPoint: 0,
            pointUpBool: false,
            pointDownBool: false
        },
        {
            id: 4,
            ReviewImg: '/img/Yeosu.jpg',
            UserName: '리리2',
            ReviewDate: '2022.04.29',
            ReviewTitle: '너무 재미있었어요',
            ReviewScore: 4,
            GoodPoint: 3,
            BadPoint: 0,
            pointUpBool: false,
            pointDownBool: false
        },
        {
            id: 5,
            ReviewImg: '/img/Yeosu.jpg',
            UserName: '리리',
            ReviewDate: '2022.04.28',
            ReviewTitle: '너무 재미있었어요',
            ReviewScore: 5,
            GoodPoint: 0,
            BadPoint: 20,
            pointUpBool: false,
            pointDownBool: false
        },
        {
            id: 6,
            ReviewImg: '/img/Yeosu.jpg',
            UserName: '리리2',
            ReviewDate: '2022.04.29',
            ReviewTitle: '너무 재미있었어요',
            ReviewScore: 2,
            GoodPoint: 10,
            BadPoint: 30,
            pointUpBool: false,
            pointDownBool: false
        },
        {
            id: 7,
            ReviewImg: '/img/Yeosu.jpg',
            UserName: '리리2',
            ReviewDate: '2022.04.29',
            ReviewTitle: '너무 재미있었어요',
            ReviewScore: 5,
            GoodPoint: 40,
            BadPoint: 50,
            pointUpBool: false,
            pointDownBool: false
        },
        {
            id: 8,
            ReviewImg: '/img/Yeosu.jpg',
            UserName: '리리2',
            ReviewDate: '2022.04.29',
            ReviewTitle: '너무 재미있었어요',
            ReviewScore: 5,
            GoodPoint: 60,
            BadPoint: 0,
            pointUpBool: false,
            pointDownBool: false
        },
        {
            id: 9,
            ReviewImg: '/img/Yeosu.jpg',
            UserName: '리리',
            ReviewDate: '2023.04.27',
            ReviewTitle: '너무 재미있었어요',
            ReviewScore: 5,
            GoodPoint: 0,
            BadPoint: 0,
            pointUpBool: false,
            pointDownBool: false
        },
        {
            id: 10,
            ReviewImg: '/img/Yeosu.jpg',
            UserName: '리리2',
            ReviewDate: '2022.05.29',
            ReviewTitle: '너무 재미있었어요',
            ReviewScore: 5,
            GoodPoint: 0,
            BadPoint: 0,
            pointUpBool: false,
            pointDownBool: false
        }
    ]);

    let AllReviewScore = 0;

    for(let i=0; i<review.length; i++)
    {
        AllReviewScore += review[i].ReviewScore;
    }

    AllReviewScore = Math.round(AllReviewScore/10);


    // 전체를 합해서 나누기 한 후 반올림한 값 (상단 별점 부분)
    const TopScore = () => {
        const result = [];
        for (let i = 0; i < AllReviewScore; i++) {
            result.push(<FaStar className="star" key={i}/>);
        }
          return result;
    };

    // 최신값 논리값 변수
    const [LatestBool, SetLatestBool] = useState(true)

    //추천순 논리값 변수
    const [RecBool, SetRecBool] = useState()
    
    // Good버튼 누를 때 활성화 됩니다. (한명단 한번만 체크되게 하기 위해서 선언)
    const [GoodPointBool, setGoodPointBool] = useState(true);

    // Bad버튼 누를 때 활성화 됩니다.
    const [BadPointBool, setBadPointBool] = useState(true);
    
    // Loading 변수
    const [Loading, setLoading] = useState(false);

    // 페이지 번호 입니다.
    const [PageNumber, setPageNumber] = useState(1);

    const PageNumberClick = (e) => {
        let pageNumber = parseInt(e.target.innerHTML);
        console.log(typeof pageNumber);
        setPageNumber(pageNumber);        
    }

    const RightIconClick = () => {
        setPageNumber(PageNumber + 1);
    }

    const LeftIconClick = () => {
        setPageNumber(PageNumber - 1);
    }

    useEffect(()=> {
        console.log(PageNumber)
    }, [PageNumber])


    useEffect(() => {
        console.log(RecBool, LatestBool)
    }, [RecBool])

    useEffect(() => {
        console.log(GoodPointBool);
    }, [GoodPointBool])
    
    
    // 최신순 별점순 리뷰정렬
    if(RecBool === true)
    {
        review.sort(function(a,b){ return b.ReviewScore - a.ReviewScore })
    } 
    else if(LatestBool === true) {
        review.sort(function(a, b) {
            let x = a.ReviewDate.toLowerCase();
            let y = b.ReviewDate.toLowerCase();
    
            if(x > y)
            {
                return 1;
            } 
            if(x < y)
            {
                return -1;
            }
            return 0;
        })
    }
   
    // 좋아요버튼 눌렀을 때
    const GoodToggle = id => {  
        if(GoodPointBool == true)
        {
            setReview((arr) => 
                review.map(rev => 
                    rev.id === id ? rev.pointUpBool === false ? { ...rev, GoodPoint: rev.GoodPoint + 1, pointUpBool: true} : { ...rev, GoodPoint: rev.GoodPoint - 1, pointUpBool: false}  : rev,
                )
            );
            console.log(review);       
        }  
    };

    const BadToggle = id => {      
        if(BadPointBool == true || BadPointBool == null)
        {
            setReview(
                review.map(rev => 
                    rev.id === id ? rev.pointDownBool === false ? { ...rev, BadPoint: rev.BadPoint + 1, pointDownBool: true} : { ...rev, BadPoint: rev.BadPoint - 1, pointDownBool: false}  : rev,
                )
            );   
        }
    };
    
    const MiddleForm = () => {
        return (
            <>
               <div className="ReviewMiddleArea">
                    
                    <div className="UmmName">
                        <h2 className="ReviewCount">{review.length}개</h2>
                        
                        <ul>
                            <li onClick={()=>{SetLatestBool(true); SetRecBool(false);}} style={LatestBool ? {color: "royalblue"} : {color: "#676767"}}>최신순</li>
                            <li onClick={()=>{SetRecBool(true); SetLatestBool(false);}} style={RecBool ? {color: "royalblue"} : {color: "#676767"}}>별점순</li>
                        </ul>
                    </div>
                    {/* 리뷰내용들 */}
                    {review.map(a => (
                            <ReviewForm review={a} key={a.id} GoodToggle={GoodToggle} BadToggle={BadToggle} history={history}/>
                        ))}


                </div>
                
                <footer className="ReviewBottomArea">
                    <BsFillArrowLeftCircleFill className="ArrowBtn" onClick={()=>{LeftIconClick()}} style={PageNumber <= 1 ? {opacity: 0} : {}}/>
                        <ul className="ReviewListNumber">
                                    <li onClick={(e)=>{PageNumberClick(e)}}>1</li>
                                    <li onClick={(e)=>{PageNumberClick(e)}}>2</li>
                                    <li onClick={(e)=>{PageNumberClick(e)}}>3</li>  
                                    <li onClick={(e)=>{PageNumberClick(e)}}>4</li>
                                    <li onClick={(e)=>{PageNumberClick(e)}}>5</li>
                                    <li onClick={(e)=>{PageNumberClick(e)}}>6</li>
                                    <li onClick={(e)=>{PageNumberClick(e)}}>7</li>
                                    <li onClick={(e)=>{PageNumberClick(e)}}>8</li>  
                                    <li onClick={(e)=>{PageNumberClick(e)}}>9</li>
                                    <li onClick={(e)=>{PageNumberClick(e)}}>10</li>
                        </ul>
                    <BsFillArrowRightCircleFill className="ArrowBtn" onClick={() => {RightIconClick()}}/>
                </footer>
            </>
        )
    }

    return(
        <div className="ReviewListBigBox">
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

            {Loading == true ? <h2 className="Loading">로딩중입니다.</h2> : <MiddleForm/> }
         

            <Bottom/>
        </div>
    )
}

export default ReviewList;