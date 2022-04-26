import {React,useEffect,useState} from "react";
import Header from "./Header";
import Bottom from "./Bottom";
import '../css/RecommendList.css'

function Categorie(props) {

    const [click, setClick] = useState(false);

    const [clickStyle, setClickStyle] = useState(
        {
            backgroundColor: 'black',
            color: 'white'
        }
    )
    


    return(
        <>
        <Header/>
        <h1 className="NowLocation">대구광역시</h1>
            <div className="Category-Box">
                <div className="Small-Box">
                    <div className="SmallBtn" onClick={(e) => {props.all();  setClick(e.target.outerText); }} style={click==="전체" ? clickStyle : null} >
                        <span>전체</span>
                    </div>

                    <div className="SmallBtn" onClick={(e)=>{props.categorie(e.target.outerText); setClick(e.target.outerText)}} style={click==="카페" ? clickStyle : null} >
                        <span>카페</span>
                    </div>

                    <div className="SmallBtn" onClick={(e)=>{props.categorie(e.target.outerText); setClick(e.target.outerText)}} style={click==="맛집" ? clickStyle : null} >
                        <span>맛집</span>
                    </div>

                    <div className="SmallBtn" onClick={(e)=>{props.categorie(e.target.outerText); setClick(e.target.outerText)}} style={click==="숙소" ? clickStyle : null} >
                        <span>숙소</span>
                    </div>

                    <div className="SmallBtn" onClick={(e)=>{props.categorie(e.target.outerText); setClick(e.target.outerText)}} style={click==="액티비티" ? clickStyle : null} >
                        <span>액티비티</span>
                    </div>
                </div>
            </div>
        </>
    );
}

// 혹시 모르니 남겨둘게요~
function TravelCard() {


    return(
        <div className="TravelBox">
           <div className="TravelCard">
                <div className="ImageBox"></div>
                
                <div className="TextBox">
                    <h3>대구광역시</h3>
                    <span>꽃배경 인생샷 성지와 든든해지는 맛집이 있어요</span>
                    <span></span>
                </div>
                
                <div className="ButtonBox">
                    <button >여행시작</button>
                    <button>리뷰보기</button>
                </div>
           </div>


           <div className="TravelCard" >
                <div className="ImageBox"></div>
                
                <div className="TextBox">
                    <h3>대구광역시</h3>
                    <span>꽃배경 인생샷 성지와 든든해지는 맛집이 있어요</span>
                    <span></span>
                </div>
                
                <div className="ButtonBox">
                    <button >여행시작</button>
                    <button>리뷰보기</button>
                </div>
           </div>


           <div className="TravelCard">
                <div className="ImageBox"></div>
                <div className="TextBox">
                    <h3>대구광역시</h3>
                    <span>꽃배경 인생샷 성지와 든든해지는 맛집이 있어요</span>
                    <span></span>
                </div>
                
                <div className="ButtonBox">
                    <button >여행시작</button>
                    <button>리뷰보기</button>
                </div>
           </div>
       </div>
    )
}

function RecommendList() {

    // 전체 카테고리를 누르면 모두 나오게 다른 카테고리 누르면 false되서 카테고리 항목만 나오게 했습니다
    const [all, setAll] = useState(true); 

    const [categorie, setCategorie] = useState('');

    const [travelInfo, setTravelInfo] = useState([
        {
            // 배경이미지도 추가할 예정 
            recommendId: 1,
            Categorie: '카페',
            recommendTitle: '영진전문대학',
            recommendSmallTitle: '영진전문대학교은 대한민국 대구광역시 북구와 경상북도 칠곡군에 있는 전문대학이다.',
            recommendImage: '/img/Yeongjin.jpg'
        },
        {
            recommendId: 2,
            Categorie: '맛집',
            recommendTitle: '스파크랜드',
            recommendSmallTitle: '스파크랜드는 쇼핑몰이자 놀이테마파크로서 중구의 새로운 랜드마크로 떠오르고 있다.',
            recommendImage: '/img/Daegu.jpg'
        },
        {
            recommendId: 3,
            Categorie: '액티비티',
            recommendTitle: '이월드',
            recommendSmallTitle: '이월드는 1987년 10월 타워건립 및 종합테마파크 조성공사 재 착공을 시작으로 1993년 종합 테마파크 마스트플랜을 확정한 후 1995년 3월 개장한 폭포, 분수, 조명, 꽃으로 장식된 유럽식 도시공원으로 남녀노소 누구나 즐길 수 있는 놀이기구, 전시. 예술공간, 깔끔한 식당가 등이 마련되어 있다. ',
            recommendImage: '/img/Eworld.jpg',
        
        },
        {
            recommendId: 4,
            Categorie: '숙소',
            recommendTitle: '대구 메리어트 호텔',
            recommendSmallTitle: '혁신 리더들에게 대구 메리어트 호텔은 완벽한 비즈니스와 활력을 불어넣는 경험을 제공하는 대구 최초의 메리어트 인터내셔널 5성급 호텔 입니다.',
            recommendImage: '/img/Hotel.jpg'
        },
    ]);

    return(
    <>
        <div className="RecommendBox">   
            <Categorie categorie={(categorie) => {setCategorie(categorie); setAll(false)}} 
                        all={() => {setAll(true)}}/>
            <div className="TravelBox">
                {travelInfo.map((travel) => {
                    // 참이라면
                    if(all === true){
                        return (
                            <div className="TravelCard" key={travel.recommendId}>

                                <div className="ImageBox" style={{backgroundImage: "url(" + travel.recommendImage + ")"}}></div>
                                <div className="TextBox">
                                    <h3>{travel.recommendTitle}</h3>
                                    <span>{travel.recommendSmallTitle}</span>
                                    <span></span>
                                </div>
                                
                                <div className="ButtonBox">
                                    <button >여행시작</button>
                                    <button>리뷰보기</button>
                                </div>
                            </div>
                        )
                        // 다른 카테고리가 있다면
                    } else if(travel.Categorie == categorie)
                    {
                        return (
                            <div className="TravelCard" key={travel.recommendId}>
                                <div className="ImageBox" style={{backgroundImage: "url(" + travel.recommendImage + ")"}}></div>
                                <div className="TextBox">
                                    <h3>{travel.recommendTitle}</h3>
                                    <span>{travel.recommendSmallTitle}</span>
                                    <span></span>
                                </div>
                                
                                <div className="ButtonBox">
                                    <button >여행시작</button>
                                    <button>리뷰보기</button>
                                </div>
                            </div>
                        )
                    }
                })}    
            </div>
            <Bottom/>
        </div>
    </>
    );
}

export default RecommendList;