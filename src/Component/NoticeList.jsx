import {React, useState} from "react";
import Header from "./Header";
import Bottom from "./Bottom";
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
            writedays: '2022-05-09',
            readbool: false
        },
        {
            id: 2,
            title: '0510공지사항',
            content: '얼씨구 절씨구',
            writedays: '2022-05-09',
            readbool: false
        },
        {
            id: 3,
            title: '0510공지사항',
            content: '얼씨구 절씨구',
            writedays: '2022-05-09',
            readbool: false
        },
        {
            id: 4,
            title: '0510공지사항',
            content: '얼씨구 절씨구',
            writedays: '2022-05-09',
            readbool: false
        },
        {
            id: 5,
            title: '0510공지사항',
            content: '얼씨구 절씨구',
            writedays: '2022-05-09',
            readbool: false
        },
        {
            id: 6,
            title: '0510공지사항',
            content: '얼씨구 절씨구',
            writedays: '2022-05-09',
            readbool: false
        },
        {
            id: 7,
            title: '0510공지사항',
            content: '얼씨구 절씨구',
            writedays: '2022-05-09',
            readbool: false
        },
        {
            id: 8,
            title: '0510공지사항',
            content: '얼씨구 절씨구',
            writedays: '2022-05-09',
            readbool: false
        },
        {
            id: 9,
            title: '0510공지사항1313',
            content: '얼씨구 절씨구',
            writedays: '2022-05-09',
            readbool: false
        },
        {
            id: 10,
            title: '0510공지사항',
            content: '얼씨구 절씨구',
            writedays: '2022-05-09',
            readbool: false
        },

    ])

    const history = useHistory();

    const readCheck = (id) => {
        setNotice(
            Notice.map(check => 
                check.id === id ? {...check, readbool: true} : check,))
    }

    return (
        <div className="NoticeListBigBox">
            <Header fontColor="black"/>
            <div className="NoticeListMiddleBox">
                <h1>공지사항</h1>
                <hr />
                {Notice.map((ref) => (
                    
                        <div className="ListForm" key={ref.id} onClick={()=>{readCheck(ref.id); history.push({pathname: "/NoticeDetail",state: {Notice: ref}})}} style={ref.readbool ? {color: 'gray'} : {}}>
                            <div className="Text">
                                <p className="Title">{ref.title}</p>
                                <p className="WriteDay">{ref.writedays}</p>
                            </div>
                            <FiArrowRightCircle className="Icons"/>
                        </div>
                   
                ))}
            
            <footer className="NoticeListBottomArea">
            <FiArrowLeftCircle className="ArrowBtn"/>
               <ul className="NoticeListNumber">
                   <li>1</li>
                   <li>2</li>
                   <li>3</li>
                   <li>4</li>
                   <li>5</li>
               </ul>
               <FiArrowRightCircle className="ArrowBtn"/>
            </footer>
            </div>
            <Bottom/>
        </div>
    )
}

export default NoticeList;