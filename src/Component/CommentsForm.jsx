import {useState, React, useEffect} from "react";
import '../css/CommentsForm.scss'

// 사용자 댓글 폼
function UserCommentsForm({CommentsList, GoodToggle, BadToggle, realComment, setCommentsList}) {
    return(
        <>
            <div className="User">    
                <div className="TopArea">
                    <div className="TopAreaOneBox">    
                        <img src={CommentsList.UserImg} alt="" />
                        <div className="UserNameAndDay">
                            <p>{CommentsList.UserName}</p>
                            <p>{CommentsList.WriteDate}</p>
                        </div>
                    </div> 

                    <div>
                        <button className="DeleteBtn" onClick={()=>{setCommentsList(realComment.filter(List => List.id !== CommentsList.id))}}>삭제</button>
                    </div>
                    
                </div>

                <div className="ContentsArea">
                    <p className="ContentsText">
                    {CommentsList.WriteContents}
                    </p>
                </div>

                <div className="ReactionBtnArea">
                    <button onClick={()=>{GoodToggle(CommentsList.id)}}>{CommentsList.GoodPoint} 좋아요</button>
                    <button onClick={()=>{BadToggle(CommentsList.id)}}>{CommentsList.BadPoint}싫어요</button>
                </div>
            </div>
        </>
    )
}

function UserCommentsWriteForm({CommentsList, setCommentsList})
{

    const [WriteLength, setWriteLength] = useState(0);
    const [Warning, setWarning] = useState(false);
    const [WriteComments, setWriteComments] = useState();
    const [CommentsListLength, setCommentsListLength] = useState(CommentsList.length + 1);   
    
    const [NewComments, setNewComments] = useState({
        id: CommentsListLength,
        UserImg: '',
        UserName: '이성두',
        WriteDate: '2022.04.28',
        WriteContents:WriteComments,
        GoodPoint: 0,
        BadPoint: 0,
        pointUpBool: false,
        pointDownBool: false 
     })

    useEffect(()=>{
        if(WriteLength >= 300) {
            setWarning(true);
        } else {
            console.log(WriteComments);
            setWarning(false);
        }
    }, [WriteLength,WriteComments]);

    useEffect(()=>{
        setNewComments({...NewComments, id:CommentsListLength, WriteContents:WriteComments});
    },[NewComments])

    return(
        <div className="WriteBigBox">
            <div className="WriteAreaBox">
                <div className="WriterInfo">
                    <img src="" alt="" />
                    <p>이성두</p>
                </div>
                
                <textarea className="TextWrite" onChange={(e)=>{
                    setWriteComments(e.target.value);
                    setWriteLength(e.target.value.length);
                }} value={WriteComments}></textarea>
            </div>

            <div className="FinishArea">
                <p>{WriteLength} / 300 </p>
                <p style={Warning ? {color: 'red'} : {display: 'none'}}>줄여주세요</p>
                <p style={WriteLength <= 0 ? {color: 'red'} : {display: 'none'}}>텍스트를 적어주세요</p>
                <button className="FinishWriteBtn" onClick={()=> {
                    setCommentsListLength(CommentsListLength + 1);
                    setCommentsList([...CommentsList, NewComments]);
                    setWriteComments("");
                }} 
                    style={Warning ? {backgroundColor: 'red'} : {}} 
                    disabled={Warning || WriteLength <= 0 ? true : false}>등록</button>
            </div>
        </div>
    )
}


function CommentsForm() {
    const [CommentsList, setCommentsList] = useState([]);

    // Good버튼 누르면 활성화
    const [GoodPointBool, setGoodPointBool] = useState(true);

    // Bad버튼 누를 때 활성화 됩니다.
    const [BadPointBool, setBadPointBool] = useState(true);

    const GoodToggle = id => {  
        if(GoodPointBool == true)
        {            
            setCommentsList(
                CommentsList.map(rev => 
                    rev.id === id ? rev.pointUpBool === false && rev.pointDownBool === true ? { ...rev, GoodPoint: rev.GoodPoint + 1, BadPoint: rev.BadPoint - 1, pointDownBool: false, pointUpBool: true} :
                    rev.pointUpBool === false ? { ...rev, GoodPoint: rev.GoodPoint + 1, pointUpBool: true} : { ...rev, GoodPoint: rev.GoodPoint - 1, pointUpBool: false}  : rev
                )   
            )
        }
    };

    const BadToggle = id => {      
        if(BadPointBool == true || BadPointBool == null)
        {
            setCommentsList(
                CommentsList.map(rev => 
                    rev.id === id ? rev.pointDownBool === false && rev.pointUpBool === true  ? { ...rev, GoodPoint: rev.GoodPoint - 1, BadPoint: rev.BadPoint + 1, pointDownBool: true, pointUpBool: false} : 
                    rev.pointDownBool === false ? { ...rev, BadPoint: rev.BadPoint + 1, pointDownBool: true}  : { ...rev, BadPoint: rev.BadPoint - 1, pointDownBool: false} : rev,
                )
            );   
        }
    };
  
    return (
        <div className="CommentsFormBigBox"> 
            <UserCommentsWriteForm CommentsList={CommentsList} setCommentsList={setCommentsList}/>
            
            {
                CommentsList.length == 0 ?  
                <div className="NoComments">
                    <h3>아직 댓글이 없어요 ㅜ.ㅜ</h3>
                </div> : 
                CommentsList.map(List => (<UserCommentsForm setCommentsList={setCommentsList} realComment={CommentsList} CommentsList={List} GoodToggle={GoodToggle} BadToggle={BadToggle} key={List.id}/>))
            }          
           

            
        </div>
    )
}

export default CommentsForm;