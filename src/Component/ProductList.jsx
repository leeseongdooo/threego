import React, {useState, useEffect} from "react";
import axios from "axios";
import Header from "./Header";
import Bottom from "./Bottom";
import { GoLocation } from "react-icons/go";
import '../css/ProductList.scss';


// 상품정보 박스에 요소들
function ItemListForm({Info}) {
    return (
        <div className="ItemListForm">
            <h2>가격 : {Info.판매가격}</h2>
            <div className="LocationInfo">
                <GoLocation/>
                <span className="LocationText">{Info.판매업소}</span>
            </div>
            
            <div className="BottomArea">
                {/* API에서 Y면 YES N이면 NO */}
                <div className={Info.원플러스원 === "Y" ? "YES" : "NO"}>
                    <span>1 + 1 {Info.원플러스원 !== null ? Info.원플러스원 : "정보가 없습니다."}</span>
                </div>

                <div className={Info.세일여부 === "Y" ? "YES" : "NO"}>
                    <span>SALE {Info.세일여부 !== null ? Info.세일여부 : "정보가 없습니다."}</span>
                </div>
                
            </div>            
        </div>
    )
}


function ProductList() {

    const [loading, setLoading] = useState(null);
    // api값을 저장할 items
    const [items, setItems] = useState([]);
    const [newItems, setNewItems] = useState([]);
    const [error, setError] = useState(false);
    // 유저가 select에서 선택한 값을 저장
    const [searchItem, setSearchItem] = useState({
        id: 1,
        itemDate: '',
        itemName: '',
        clickBool: false,
    });
    // 서비스 키를 저장하는 변수입니다. (env파일로 하면 안전하다고 해서 해봤는데 안되서 여기에 변수 만들었어욥 ㅜㅜ)
    const SERVICE_KEY = 's4sQT%2F2CNziwuHItpzeGE7tJ4gyBZ876iXoUvxDE4AQ4En96j9ISealB7QFnkf4GceyA3p2EPi0I6z3K7zqliQ%3D%3D'

    // 0506에 대한 상품정보 API를 호출
    const LoadData0506 = async() => {
        try {
            const response = await axios.get(
                `https://api.odcloud.kr/api/15083256/v1/uddi:44980de3-b41a-488e-baf4-e08be5c7c76c?serviceKey=${SERVICE_KEY}&page=1&perPage=350&returnType=JSON`
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

    // LoadData0506을 실행
    useEffect(()=>{
        LoadData0506()
    }, [])

    // searchItem이 변경될때마다 setNewItems를 실행 
    useEffect(()=>{
        console.log(searchItem);
        setNewItems(items.filter(List => List.상품명 == searchItem.itemName && List.조사일 == searchItem.itemDate));
    }, [searchItem])

    useEffect(()=>{
        console.log(items);
    }, [items])
    
    // TextName은 items에서 상품명을 가져와서 저장하는 변수입니다 (중복제거X);
    let TextName = [];
    items.map((List)=> {TextName.push(List.상품명)}) // items에서 가져옴
    let DistinctTextName = [...new Set(TextName)]; // DistinctTextName은 TextName에서 중복되는이름들을 제거한 값입니다.
    return (
        <div className="ProductListBigBox">
            
            <Header fontColor="black" />
            {/* 상품정보가 들어갈 영역입니다. */}
            <div className="ProductListContentBox">
                {/* 어떤 페이지인지 알려주는 Text */}
               <h3 className="TitleText">상품정보</h3>
                {/* 년도선택 박스  */}

               {/* 날짜 선택 */}
               <select name="" id=""  onClick={(e)=>{setSearchItem({ ...searchItem,  itemDate: e.target.value});}}>
                   <option value="">날짜를 선택해주세요</option>
                   <option value="2022-05-06">2022-05-06</option>
                   <option value="2022-05-07">2022-05-07</option>
                   <option value="2022-05-08">2022-05-08</option>
               </select>
               {/* 상품 선택 */}
               <select name="" id="" onChange={(e)=>{setSearchItem({...searchItem, itemName: e.target.value});}}>
                   <option value="">상품을 선택해주세요</option>
                    {DistinctTextName.map(List => (<option value={List}>{List}</option>))}
               </select>
                
                {/* 클릭시 조건에 맞는 ITEM들은 SET합니다. */}
                {/* <div className="ButtonBox">
                    <button className="SearchItemBtn" onClick={()=>{setItems(items.filter(List => List.상품명 == searchItem.itemName && List.조사일 == searchItem.itemDate));}}>검색하기</button>
                </div> */}
                {/* 선택한 상품정보에 대한 값이 나오는 박스입니다. */}
                <div className="ProductListInfo">
                    {/* searchItem = 사용자가 찾고자 하는 아이템 */}
                    {/* 사용자가 (년도, 날짜, 상품)을 선택했을 때 해당되는 값이 저장되도록 설정 */}
                    {/* ↓↓ searchItem이 비어있을 때 아직 상품이 없다는 로직 */}
                    {searchItem.itemDate.length > 0 && searchItem.itemName.length > 0 ? newItems.map((List, index) => (<ItemListForm key={index} Info={List} />)) : 
                                        <h3>해당되는 상품이 없습니다.</h3>}

                </div>
            </div>
            
            <Bottom/>
        </div>
    )
}

export default ProductList;