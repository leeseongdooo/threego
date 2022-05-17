import {React, useEffect, useState} from "react";
import Header from "./Header";
import Bottom from "./Bottom";
import Page from "./Page";
import { FiArrowRightCircle, FiArrowLeftCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import '../css/NoticeList.scss'
import {useHistory} from "react-router";


function NoticeList() {


    //제목 내용 작성일자 상태
    const [Notice, setNotice] = useState([
        {
            id: 1,
            title: '0510공지사항',
            content: '얼씨구 절씨구',
            date: '2022-05-09',
            readbool: false
        },
        {
            id: 2,
            title: '0510공지사항',
            content: '얼씨구 절씨구',
            date: '2022-05-09',
            readbool: false
        },
        {
            id: 3,
            title: '0510공지사항',
            content: '얼씨구 절씨구',
            date: '2022-05-09',
            readbool: false
        },
        {
            id: 4,
            title: '0510공지사항',
            content: '얼씨구 절씨구',
            date: '2022-05-09',
            readbool: false
        },
        {
            id: 5,
            title: '0510공지사항',
            content: '얼씨구 절씨구',
            date: '2022-05-09',
            readbool: false
        },
        {
            id: 6,
            title: '0510공지사항',
            content: '얼씨구 절씨구',
            date: '2022-05-09',
            readbool: false
        },
        {
            id: 7,
            title: '0510공지사항',
            content: '얼씨구 절씨구',
            date: '2022-05-09',
            readbool: false
        },
        {
            id: 8,
            title: '0510공지사항',
            content: '얼씨구 절씨구',
            date: '2022-05-09',
            readbool: false
        },
        {
            id: 9,
            title: '0510공지사항1313',
            content: '얼씨구 절씨구',
            date: '2022-05-09',
            readbool: false
        },
        {
            id: 10,
            title: '0510공지사항',
            content: '얼씨구 절씨구',
            date: '2022-05-09',
            readbool: false
        },
    ])

    // 페이지 번호 입니다.
    const [PageNumber, setPageNumber] = useState(1);

    // api 로딩
    const [Loading, setLoading] = useState(false);
    // 서버에서 데이터를 받아오는 중입니다.
    const history = useHistory();

    const readCheck = (id) => {
        setNotice(
            Notice.map(check => 
                check.id === id ? {...check, readbool: true} : check))
    }

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

    function NoticeList() {
        return (
            <>
                {Notice.map((ref) => (
                    <div className="ListForm" key={ref.id} onClick={()=>{readCheck(ref.id); history.push({pathname: "/NoticeDetail",state: {Notice: ref}})}} style={ref.readbool ? {color: 'gray'} : {}}>
                        <div className="Text">
                            <p className="Title">{ref.title}</p>
                            <p className="WriteDay">{ref.date}</p>
                        </div>
                        <FiArrowRightCircle className="Icons"/>
                    </div>
                ))}

            <footer className="NoticeListBottomArea">
                <div className="PageNumberBox">
                    <FiArrowLeftCircle className="ArrowBtn" onClick={()=>{LeftIconClick()}} style={PageNumber == 1 ? {opacity: 0} : {}}/>
                        <ul className="NoticeListNumber">
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
                    <FiArrowRightCircle className="ArrowBtn" onClick={() => {RightIconClick()}}/>
                </div>
            </footer>
            </>
        )
    }

    return (
        <div className="NoticeListBigBox">
            <Header fontColor="black"/>
            
            <div className="NoticeListMiddleBox" >
                <h1>공지사항</h1>
                <hr />
                
                {Loading == true ? <h3>데이터를 불러오고 있습니다.</h3> : <NoticeList/> }

            </div>
            <Bottom/>
        </div>
    )
}

export default NoticeList;