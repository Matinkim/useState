// export default function Card2(){
//     return (
//         <div></div>
//     )
// }
import "./Card.css";

export default function Card({
  title: subject,
  content: body,
  backgroundColor,
  textColor,
  img,
  array = ["react"],
}) {
  return (
    <div
      className="card"
      style={{ backgroundColor: backgroundColor, color: textColor }}
    >
      <img src={img} alt="" />
      <h2 className="card-title">{subject}</h2>
      <p className="card-content">{body} </p>
      <p>{array[0]}</p>
    </div>
  );
}

// 하나의(단일의) 함수만 내부로 보낼 때 default
//객체{} 형태로 내보내야햄

// export { Card,Card2 };
