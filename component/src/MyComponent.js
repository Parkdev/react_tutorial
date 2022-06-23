// 기본 컴포넌트

// const MyComponent = () => {
//   return <div>나의 새롭고 멋진 컴포넌트</div>;
// };

// prop 적용

// const MyComponent = props => {
//   return (
//     <div>
//       안녕하세요, 제 이름은 {props.name}입니다. <br />
//       {/* // 부모 컴포넌트 태그 사이의 내용을 보여주는 props.children  */}
//       children 값은 {props.children} 입니다.
//     </div>
//   );
// };

// //prop 기본값 설정 방법
// MyComponent.defaultProps = {
//   name: "기본 이름",
// };

// export default MyComponent;

// prop 비구조화 할당 문법

// const MyComponent = (props) => {
//   const { name, children } = props;
//   return (
//     <div>
//       안녕하세요, 제 이름은요 {name}입니다. <br />
//       children 값은 {children}입니다.
//     </div>
//   );
// };

// MyComponent.defaultProps = {
//   name: "기본이래도",
// };

// export default MyComponent;

// 비구조화 할당 문법2

// const MyComponent = ({ name, children }) => {
//   return (
//     <div>
//       안녕하세요, 제 이름은요 {name}입니다. <br />
//       children 값은 {children}입니다.
//     </div>
//   );
// };

// MyComponent.defaultProps = {
//   name: "기본이라니까",
// };

// export default MyComponent;

// props 검증
// import PropTypes from "prop-types";

// const MyComponent = ({ name, favoriteNumber, children }) => {
//   return (
//     <div>
//       안녕하세요, 제 이름은 {name}입니다. <br />
//       children 값은 {children}입니다. <br />
//       제가 좋아하는 숫자는 {favoriteNumber}입니다.
//     </div>
//   );
// };

// MyComponent.defaultProps = {
//   name: "기본",
// };

// MyComponent.propTypes = {
//   name: PropTypes.string,
//   favoriteNumber: PropTypes.number.isRequired,
// };

// export default MyComponent;

// 클래스형 컴포넌트 props 사용하기

import { Component } from "react";
import PropTypes from "prop-types";

class MyComponent extends Component {
  //내부지정방법
  static defaultProps = {
    name: "기본 이름",
  };
  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };
  render() {
    const { name, favoriteNumber, children } = this.props; // 비구조화 할당
    return (
      <div>
        안녕하세요, 제 이름은 {name}입니다. <br />
        children 값은 {children}입니다. <br />
        제가 좋아하는 숫자는 {favoriteNumber}입니다.
      </div>
    );
  }
}
//외부지정방법
// MyComponent.defaultProps = {
//   name: "기본 이름",
// };

// MyComponent.propTypes = {
//   name: PropTypes.string,
//   favoriteNumber: PropTypes.number.isRequired,
// };

export default MyComponent;
