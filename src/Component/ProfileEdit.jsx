import {React, useState } from "react";
import Header from "./Header";
import Bottom from "./Bottom";
import '../css/ProfileEdit.scss'
// FaUserAlt
import { FaUser } from "react-icons/fa";
import { HiOutlineUserCircle } from "react-icons/hi";


function ProfileEdit() {

    return (
        <div className="ProfileEditBigBox">
            <Header fontColor="black"/>    
                <div className="ProfileContentBox">
                    <label className="ProfileImage">
                        <input type="file" />
                        <FaUser/>
                    </label>

                    <div className="InputInfo">
                        <p>닉네임</p>
                        <input type="text" />
                    </div>


                    <div className="FinalEditBtn">
                        <button>프로필 변경하기</button>
                    </div>
                </div>
            <Bottom/>   
        </div>
    )
}

export default ProfileEdit;