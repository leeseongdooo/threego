import React, { useState } from "react";

function List() {
  let [title, titleSet] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "리액트 독학"
  ]);
  let [like, setLike] = useState([0, 0, 0]);

  return (
    <div className="List">
      
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      {title.map((a, i) => {
          console.log(i);
        return (
          <div className="list" key={a}>
            <h3>
              {a}
              <button onClick={() =>
                  setLike((arr) =>
                    arr.map((el, idx) => (idx === i ? el + 1 : el))
                  )
                 
                }
              >
                <span role="img" aria-label="good">👍</span>
              </button>
              <button
                onClick={() =>
                  setLike((arr) =>
                    arr.map((el, idx) => (idx === i ? el - 1 : el))
                  )
                }
              >
                <span role="img" aria-label="bad">
                  👎
                </span>
              </button>
              {like[i]}
            </h3>
            <p>2월 18일 발행</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default List;