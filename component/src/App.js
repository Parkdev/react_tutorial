// import logo from './logo.svg';
// import './App.css';

// 클래스형
// import { Component } from "react";

// class App extends Component {
//   render() {
//     const name = "react";
//     return <div className="react">{name}</div>;
//   }
// }

// 컴포넌트 사용 예시

// import MyComponent from "./MyComponent";

// const App = () => {
//   return <MyComponent />;
// };

// 컴포넌트 prop 사용 예시

// import MyComponent from "./MyComponent";

// const App = () => {
//   return <MyComponent name="react" />;
// };

import MyComponent from "./MyComponent";
import Counter from "./Counter";

const App = () => {
  return (
    <>
      <MyComponent favoriteNumber={1}>리액트</MyComponent>
      <Counter />
    </>
  );
};

export default App;
