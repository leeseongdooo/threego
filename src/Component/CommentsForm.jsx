import {useState, React} from "react";
import '../css/CommentsForm.scss'

// 사용자 댓글 폼
function UserCommentsForm({CommentsList, GoodToggle, BadToggle}) {
    return(
        <>
            <div className="User">    
                <div className="TopArea">
                    <img src={CommentsList.UserImg} alt="" />
                    <div className="UserNameAndDay">
                        <p>{CommentsList.UserName}</p>
                        <p>{CommentsList.WriteDate}</p>
                    </div>
                </div>

                <div className="ContentsArea">
                    <p className="ContentsText">
                    Lorem ipsum dolor sit amet, consectetur qui officia deserunt mollit anim id est laborum.
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

function UserCommentsWriteForm()
{

    const [WriteLength, setWriteLength] = useState(0);

    return(
        <div className="WriteBigBox">
            <div className="WriteAreaBox">
                <div className="WriterInfo">
                    <img src="" alt="" />
                    <p>사용자 이름</p>
                </div>
                
                <textarea className="TextWrite" onChange={(e)=>{setWriteLength(e.target.value.length)}}></textarea>
            </div>

            <div className="FinishArea">
                <p>{WriteLength} / 300</p>
                <button className="FinishWriteBtn">등록</button>
            </div>
        </div>
    )
}


function CommentsForm() {
    const [CommentsList, setCommentsList] = useState([ 
        {
            id: 1,
            UserImg: '/img/Yeosu.jpg',
            UserName: '리리',
            WriteDate: '2022.04.28',
            WriteContents: '이곳은 제목',
            GoodPoint: 10,
            BadPoint: 3,
            pointUpBool: false,
            pointDownBool: false
        },
        {
            id: 2,
            UserImg: '/img/Yeosu.jpg',
            UserName: '리리2',
            WriteDate: '2022.04.29',
            WriteContents: '너무 재미있었어요',
            GoodPoint: 50,
            BadPoint: 20,
            pointUpBool: false,
            pointDownBool: false
        },
        {
            id: 3,
            UserImg: '/img/Yeosu.jpg',
            UserName: '리리2',
            WriteDate: '2022.04.29',
            WriteContents: '너무 재미있었어요',
            GoodPoint: 5,
            BadPoint: 0,
            pointUpBool: false,
            pointDownBool: false
        },
        {
            id: 4,
            UserImg: '/img/Yeosu.jpg',
            UserName: '리리2',
            WriteDate: '2022.04.29',
            WriteContents: '너무 재미있었어요',
            GoodPoint: 5,
            BadPoint: 0,
            pointUpBool: false,
            pointDownBool: false
        }
    ]);

    // Good버튼 누르면 활성화
    const [GoodPointBool, setGoodPointBool] = useState(true);

    // Bad버튼 누를 때 활성화 됩니다.
    const [BadPointBool, setBadPointBool] = useState(true);

    const GoodToggle = id => {  
        if(GoodPointBool == true)
        {
            setCommentsList((arr) => 
                CommentsList.map(rev => 
                    rev.id === id ? rev.pointUpBool === false ? { ...rev, GoodPoint: rev.GoodPoint + 1, pointUpBool: true} : { ...rev, GoodPoint: rev.GoodPoint - 1, pointUpBool: false}  : rev,
                )
            );
            console.log(CommentsList);       
        }  
    };

    const BadToggle = id => {      
        if(BadPointBool == true || BadPointBool == null)
        {
            setCommentsList(
                CommentsList.map(rev => 
                    rev.id === id ? rev.pointDownBool === false ? { ...rev, BadPoint: rev.BadPoint + 1, pointDownBool: true} : { ...rev, BadPoint: rev.BadPoint - 1, pointDownBool: false}  : rev,
                )
            );   
        }
    };

    return (
        <div className="CommentsFormBigBox"> 
            <UserCommentsWriteForm/>
            {CommentsList.map(List => (<UserCommentsForm CommentsList={List} GoodToggle={GoodToggle} BadToggle={BadToggle} key={List.id}/>))}
        </div>
    )
}

export default CommentsForm;