// import { useState, useEffect } from "react";

// const Info = () => {
//   const [name, setName] = useState("");
//   const [nickname, setNickname] = useState("");

//   // 수정시(렌더링시)에 계속
//   //   useEffect(() => {
//   //     console.log("렌더링이 완료되었습니다!");
//   //     console.log({
//   //       name,
//   //       nickname,
//   //     });
//   //   });

//   // 마운트 될때만
//   //   useEffect(() => {
//   //     console.log("마운트 될때만 실행됩니다.");
//   //   }, []);

//   // 특정값이 업데이트 될때만
//   // useEffect(() => {
//   //   console.log(name);
//   // }, [name]);

//   // 뒷정리 (언마운트 되기전에 어떤 작업 수행 하고싶으면)
//   useEffect(() => {
//     console.log("effect");
//     console.log(name);
//     return () => {
//       console.log("cleanup");
//       console.log(name);
//     };
//   }, []);
//   const onChangeName = (e) => {
//     setName(e.target.value);
//   };

//   const onChangeNickname = (e) => {
//     setNickname(e.target.value);
//   };

//   return (
//     <div>
//       <div>
//         <input value={name} onChange={onChangeName} />
//         <input value={nickname} onChange={onChangeNickname} />
//       </div>
//       <div>
//         <div>
//           <b>이름:</b> {name}
//         </div>
//         <div>
//           <b>닉네임:</b> {nickname}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Info;

import { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const Info = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickname: "",
  });
  const { name, nickname } = state;
  const onChange = (e) => {
    dispatch(e.target);
  };

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b>
          {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
