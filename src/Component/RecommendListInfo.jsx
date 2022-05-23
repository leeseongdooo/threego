import React, {useState, useRef} from "react";
import Header from "./Header";
import Bottom from "./Bottom";
import '../css/RecommendListInfo.scss'
import { GoLocation } from "react-icons/go";

function TourForm({TravelInfo}) {

    return (
        <div className="tourForm">
            <div className="TopTextArea">
                <h1 className="NumberText">{TravelInfo.id}</h1>
                <h2>{TravelInfo.tourname}</h2>
            </div>
            <p className="LocationInfo"><GoLocation/> {TravelInfo.locationInfo}</p> 
            
            <div className="ImageForm" >
                <img src={TravelInfo.tourImage} alt="사진" />
            </div>
            
           
            <p className="GuideInfoText">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in</p>
        </div>
    )
}

function RecommendListInfo() {

    const [TravelInfo, setTravelInfo] = useState([
        {
            id: 1,
            tourname: '83타워',
            tourImage: 'https://w.namu.la/s/ee6ed0776cd6c688c20f346b1541109f2f8184abb7eb28cc170f3a4232f8ebe0522ef1f462806b37593a6b83f6e1d839a14c7f2887bed03ec3f7ee0e15ae6396ffca840233187a75efa7be7506071f8dfe1b6c2044078f789cab5e36095817f7',
            locationInfo: '대구 달서구 두류동',
            tourInfoText: '가이드에 대한 설명'
        },
        {
            id: 2,
            tourname: '스파크랜드',
            tourImage: '/img/Daegu.jpg',
            locationInfo: '대구 중구 동성로6길 61',
            tourInfoText: '가이드에 대한 설명'
        },
        {
            id: 3,
            tourname: '김광석다시그리기길',
            tourImage: 'https://t1.daumcdn.net/cfile/tistory/2421B5475825742739',
            locationInfo: '대구 중구 대봉동 6-11',
            tourInfoText: '가이드에 대한 설명'
        }
    ])

    return (
        <div className="RecommendListInfoBigBox">
            <Header fontColor="black"/>
            
            <div className="TitleImageBox">
                <img src="/img/Daegu.jpg" alt="지역에 대한 이미지" />
            </div>

            <h1 className="TourName">대구 광역시 투어</h1>

            <div className="RecommendListInfoContentBox">    
                {TravelInfo.map((List) => <TourForm key={List.id} TravelInfo={List}/>)}
            </div>
            
            <div className="BtnBox">
                <button className="GoTravelBtn" onClick={()=>{console.log("A")}}>여행시작!</button>
            </div>
            <Bottom/>
        </div>
    )
}

export default RecommendListInfo