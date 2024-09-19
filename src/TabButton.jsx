export default function TabButton({ children, onSelect }) {
  function handleClick() {}
  console.log("App컴포넌트 실행");
  //함수를 넣을때 : 괄호를 빼고 이름만 넣는다.
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
