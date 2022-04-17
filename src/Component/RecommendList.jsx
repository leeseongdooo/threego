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
            recommendTitle: '엄마, 아빠도 좋아하시는 대구 여행 코스',
            recommendSmallTitle: '꽃배경 인생샷 성지와 배가 든든해지는 맛집'
        },
        {
            recommendId: 2,
            Categorie: '맛집',
            recommendTitle: '커피를 좋아하는 사람들이 좋아할 대구 여행 코스',
            recommendSmallTitle: '꽃배경 인생샷 성지와 배가 든든해지는 맛집'
        },
        {
            recommendId: 3,
            Categorie: '숙소',
            recommendTitle: '등산을 좋아하는 사람들이 만든 대구 여행 코스',
            recommendSmallTitle: '꽃배경 인생샷 성지와 배가 든든해지는 맛집'
        },
        {
            recommendId: 4,
            Categorie: '액티비티',
            recommendTitle: '등산을 좋아하는 사람들이 만든 대구 여행 코스',
            recommendSmallTitle: '꽃배경 인생샷 성지와 배가 든든해지는 맛집'
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
                                <div className="ImageBox"></div>
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
                                <div className="ImageBox"></div>
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