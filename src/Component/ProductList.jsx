import React, {useState, useEffect} from "react";
import axios from "axios";
import Header from "./Header";
import Bottom from "./Bottom";
import { GoLocation } from "react-icons/go";
import '../css/ProductList.scss';


// 상품정보 박스에 요소들
function ItemListForm() {
    return (
        <div className="ItemListForm">
            <h2>가격 : 4500원</h2>
            <div className="LocationInfo">
                <GoLocation/>
                <span className="LocationText">CU 복현점</span>
            </div>
            
            <div className="BottomArea">
                {/* API에서 Y면 YES N이면 NO */}
                <div className="YES">
                    <span>1 + 1 YES</span>
                </div>

                <div className="NO">
                    <span>SALE NO</span>
                </div>
                
            </div>            
        </div>
    )
}


function ProductList() {

    const [loading, setLoading] = useState(null);
    const [items, setItems] = useState([]);
    const [error, setError] = useState(false);
    // 유저가 선택한 item
    const [searchItem, setSearchItem] = useState([]);
   
    // 서비스 키를 저장하는 변수입니다. (env파일로 하면 안전하다고 해서 해봤는데 안되서 여기에 변수 만들었어욥 ㅜㅜ)
    const SERVICE_KEY = 's4sQT%2F2CNziwuHItpzeGE7tJ4gyBZ876iXoUvxDE4AQ4En96j9ISealB7QFnkf4GceyA3p2EPi0I6z3K7zqliQ%3D%3D'

    // 0506에 대한 상품정보 API를 호출
    const LoadData0506 = async() => {
        try {
            const response = await axios.get(
                `https://api.odcloud.kr/api/15083256/v1/uddi:44980de3-b41a-488e-baf4-e08be5c7c76c?serviceKey=${SERVICE_KEY}&page=1&perPage=10&returnType=JSON`
            )
            const responedata = response.data.data;
            setItems(responedata);
            console.log(items);
        }
        catch(e) {
            setError(e);
        }
        setLoading(false);
    }

    useEffect(()=>{
        console.log(items);
        LoadData0506()
    }, [])

    return (
        <div className="ProductListBigBox">
            
            <Header fontColor="black" />
            {/* 상품정보가 들어갈 영역입니다. */}
            <div className="ProductListContentBox">
                {/* 어떤 페이지인지 알려주는 Text */}
               <h3 className="TitleText">상품정보</h3>
                {/* 년도선택 박스  */}
               <select name="" id="">
                    <option value="">상품정보를 선택해주세요</option>
                   {items.map((List) => (
                               <option value="">{List.상품명}</option>
                   ))}
               </select>

               {/* 날짜 선택 */}
               <select name="" id=""  onChange={(e)=>{console.log(e.target.value)}}>
                   <option value="">날짜를 선택해주세요</option>
                   <option value="2022-05-06">2022-05-06</option>
                   <option value="2022-05-07">2022-05-06</option>
                   <option value="2022-05-08">2022-05-06</option>
               </select>
               {/* 상품 선택 */}
               <select name="" id="">
                   <option value="">상품을 선택해주세요</option>
                   <option value="허니버터아몬드(210g)">허니버터아몬드(210g)</option>
               </select>

                {/* 선택한 상품정보에 대한 값이 나오는 박스입니다. */}
                <div className="ProductListInfo">
                    {/* searchItem = 사용자가 찾고자 하는 아이템 */}
                    {/* 사용자가 (년도, 날짜, 상품)을 선택했을 때 해당되는 값이 저장되도록 설정 */}
                    {/* ↓↓ searchItem이 비어있을 때 아직 상품이 없다는 로직 */}
                    {searchItem >= 10 ? <h3>해당되는 상품이 없습니다.</h3> : <ItemListForm/>}

                </div>
            </div>
            
            <Bottom/>
        </div>
    )
}

export default ProductList;