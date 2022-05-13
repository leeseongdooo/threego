import React from "react";
import Header from "./Header";
import Bottom from "./Bottom";
import '../css/InquireWrite.scss';
import { IoDocumentAttachOutline } from "react-icons/io5";

function InquireWrite() {


    return (
        <div className="InquireWriteBox">
            <Header fontColor="black"/>
            
            <div className="InquireWriteContentBox">
                <h2>문의 작성</h2>
                <hr />

                <p>문의유형 선택</p>
                <input type="text" placeholder="제목을 입력해주세요" className="InquireTitle" />

                <p>제목</p>
                <input type="text" placeholder="제목을 입력해주세요" className="InquireTitle" />

                <p>내용</p>
                <textarea name="" id="" className="WriteContent" placeholder="내용을 입력해주세요" ></textarea>
                
                <p>사진등록</p>
                <label className="InquireImgLabel"  >
                    <IoDocumentAttachOutline size="40px"/>
                    <span>이미지 추가</span>
                    <input type="file" name="file" accept="image/*" />
                </label>

                <footer className="InquireWriteBottom">
                    <button >등록하기</button>
                </footer>
            </div>
            <Bottom></Bottom>
        </div>
    )
}

export default InquireWrite;