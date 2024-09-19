/**
 * Props 구성
 * Props: 컴포넌트에 데이터를 전달하는 역할
 * Props : html attribute (속성)
 * react 는 props 를 하나의 Object로 묶어서 전달
 * props는 컴포넌트 함수에 첫번째 인수로 전달 된다.
 * attribute를 통해 값을 전달하고 속성의 이름은 자유롭게 정할 수 있다.
 * 글자,숫자,객체,배열등을 전달 할 수 있다.
 *
 */

import React from "react";
import { useState } from "react";
import componentImg from "./assets/components.png";
import cofgImg from "./assets/config.png";
import jsxImg from "./assets/jsx-ui.png";
import Card from "./components/Card/Card";
import TabButton from "./TabButton";
/**
 * 자바스크립트 구조분해 (destructuring)
 *
 */

// 컴포넌트 분리

function App() {
  //selectedLabel(첫번째) : 컴포넌트 함수가 재실행 될때 변경되는 값
  //setSelectedLabel(두번째값) : 저장된 값을 수정하고 컴포넌트 함수가 재실행 하도록 명령
  //useState("") : 초기화값
  //**함수 안에서  useState 는 최상단에서 선언 해야한다.**
  const [selectedLabel, setSelectedLabel] = useState("버튼을 클릭해 주세요");

  console.log("App컴포넌트 실행");

  // let showContent = "버튼을 클릭해주세요";

  function HandleSelect(label) {
    setSelectedLabel(label);
    console.log("!!!!!!!!!!!!!!", selectedLabel);
  }

  return (
    <div className="app">
      <h1>React Props 연습</h1>
      <div className="card-container">
        <Card
          title="리액트 props"
          content="react props는 컴포넌트에 데이터를 전달하는 방법입니다."
          backgroundColor="pink"
          textColor="#333"
          img={componentImg}
          array={["자바스크립트"]}
        />
        <Card
          title="리액트 props"
          content="react props는 컴포넌트에 데이터를 전달하는 방법입니다."
          backgroundColor="yellow"
          textColor="#666"
          img={cofgImg}
          array={["플러터"]}
        />
        <Card
          title="리액트 props"
          content="react props는 컴포넌트에 데이터를 전달하는 방법입니다."
          backgroundColor="gray"
          textColor="#437"
          img={jsxImg}
        />
      </div>
      <section className="example">
        <h2>예시</h2>
        <menu>
          <TabButton onSelect={() => HandleSelect("props")}>
            데이터 전달
          </TabButton>
          <TabButton onSelect={() => HandleSelect("component")}>
            재사용 컴포넌트
          </TabButton>
          <TabButton onSelect={() => HandleSelect("styling")}>
            동적 스타일링
          </TabButton>
        </menu>
      </section>
      {/* 리액트 컴포넌트는 오직 한번 실행 한다. */}
      {selectedLabel}
    </div>
  );
}

export default App;
