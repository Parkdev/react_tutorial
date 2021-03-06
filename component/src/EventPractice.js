// import { Component } from "react";

// class EventPractice extends Component {
//   state = {
//     message: "",
//   };
//   render() {
//     return (
//       <div>
//         <h1>이벤트 연습</h1>
//         <input
//           type="text"
//           name="message"
//           placeholder="아무거나 입력해 보세요"
//           value={this.state.message}
//           onChange={(e) => {
//             this.setState({
//               message: e.target.value,
//             });
//           }}
//         />
//         <button
//           onClick={() => {
//             alert(this.state.message);
//             this.setState({
//               message: "",
//             });
//           }}
//         >
//           확인
//         </button>
//       </div>
//     );
//   }
// }

//임의 메서드 만들기 (가독성 높히기)
// class EventPractice extends Component {
//   state = {
//     message: "",
//   };

//   constructor(props) {
//     super(props);
//     //메서드가 특정 html 요소로 등록되는 과정에서아래 바인드를 실행하지 않으면 관계가 끊어져버림
//     this.handleChange = this.handleChange.bind(this);
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleChange(e) {
//     this.setState({
//       message: e.target.value,
//     });
//   }

//   handleClick() {
//     alert(this.state.message);
//     this.setState({
//       message: "",
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>이벤트 연습</h1>
//         <input
//           type="text"
//           name="message"
//           palceholde="아무거나 입력해 보세요"
//           value={this.state.message}
//           onChange={this.handleChange}
//         />
//         <button onClick={this.handleClick}>확인</button>
//       </div>
//     );
//   }
// }

//Property Initializer Syntax
// 'class EventPractice extends Component {
//   state = {
//     message: "",
//   };

//   handleChange = (e) => {
//     this.setState({
//       message: e.target.value,
//     });
//   };

//   handleClick = () => {
//     alert(this.state.message);
//     this.setState({
//       message: "",
//     });
//   };

//   render() {
//     return (
//       <div>
//         <h1>이벤트 연습</h1>
//         <input
//           type="text"
//           name="message"
//           placeholde="아무거나 입력해 보세요"
//           value={this.state.message}
//           onChange={this.handleChange}
//         />
//         <button onClick={this.handleClick}>확인</button>
//       </div>
//     );
//   }
// }

// []로 함수 하나로 여러개 다루기
// class EventPractice extends Component {
//   state = {
//     username: "",
//     message: "",
//   };

//   handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };

//   handleClick = () => {
//     alert(this.state.username + ": " + this.state.message);
//     this.setState({
//       username: "",
//       message: "",
//     });
//   };

//   //onKeyPress 이벤트
//   handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       this.handleClick();
//     }
//   };

//   render() {
//     return (
//       <div>
//         <h1>이벤트 연습</h1>
//         <input
//           type="text"
//           name="username"
//           placeholder="사용자명"
//           value={this.state.username}
//           onChange={this.handleChange}
//         />
//         <input
//           type="text"
//           name="message"
//           placeholder="아무거나 입력해 보세요"
//           value={this.state.message}
//           onChange={this.handleChange}
//           onKeyPress={this.handleKeyPress}
//         />
//         <button onClick={this.handleClick}>확인</button>
//       </div>
//     );
//   }
// }

//class to function
// import { useState } from "react";

// const EventPractice = () => {
//   const [username, setUsername] = useState("");
//   const [message, setMessage] = useState("");
//   const onChangeUsername = (e) => setUsername(e.target.value);
//   const onChangeMessage = (e) => setMessage(e.target.value);
//   const onClick = () => {
//     alert(username + ": " + message);
//     setUsername("");
//     setMessage("");
//   };
//   const onKeyPress = (e) => {
//     if (e.key === "Enter") {
//       onClick();
//     }
//   };
//   return (
//     <div>
//       <h1>이벤트 연습</h1>
//       <input
//         type="text"
//         name="username"
//         placeholder="사용자명"
//         value={username}
//         onChange={onChangeUsername}
//       />
//       <input
//         type="text"
//         name="message"
//         placeholder="아무거나 입력해 보세요"
//         value={message}
//         onChange={onChangeMessage}
//         onKeyPress={onKeyPress}
//       />
//       <button onClick={onClick}>확인</button>
//     </div>
//   );
// };

//하나의 함수로 여러 기능 처리하기 (함수 버전)
import { useState } from "react";

const EventPractice = () => {
  const [form, setForm] = useState({
    username: "",
    message: "",
  });
  const { username, message } = form;

  const onChange = (e) => {
    const nextForm = {
      ...form, //기존의 form 내용을 이 자리에 복사
      [e.target.name]: e.target.value,
    };
    console.log(form);
    setForm(nextForm);
  };
  const onClick = () => {
    alert(username + ": " + message);
    setForm({
      username: "",
      message: "",
    });
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractice;
