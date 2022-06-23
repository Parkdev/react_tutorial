import "./App.css";

function App() {
  const name = "리액트";
  const zero = 1;
  const undef = undefined;
  const style = {
    // background-color는 backgroundColor와 같이 - 가 사라지고 카멜 표기법으로 작성해야함
    backgroundColor: "black",
    color: "aqua",
    fontSize: "48px", //font-size
    fontWeight: "bold", //font-weight
    padding: 16, //단위 생략시 px
  };
  return (
    <>
      <h1>{name} 안녕!</h1>
      <h2>안녕안녕</h2>
      {/* 조건부 연산자는 if문 사용 못함 */}
      {name === "리액트" ? <h1>PASS</h1> : <h2>FAIL</h2>}
      {/* 조건부 더 짧게 */}
      {name === "리액트" && <h1> PASS2</h1>}

      {/* 기본적으로 1 = true, 0 = false */}
      {zero ? <div>짠</div> : null}
      {/* &&는 0 시 0을 출력함 */}
      {zero && <div>짜잔</div>}
      {/* ||은 or && 는 and ; undefined는 아무것도 출력하지않음*/}
      {undef || "값이 undefinded입니다."}
      {/* 스타일 적용해보기 */}
      <div style={style}>{name}</div>
      {/* 클래스 이름 설정하기 */}
      <div className="react">{name}</div>
      {/* self closing : 열고 닫기를 하나로 */}
      <input //시작태그 여러줄로 작성하면 이런식으로도 주석처리 가능함
      />
    </>
  );
}

export default App;
