import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const list = [
  {
    name: "Даниил Прус",
    date: "25.09.2022 08:30",
    text: "Хочемо ознайомити вас з нашою реферальною програмою!",
    img: "https://lms.ithillel.ua/uploads/images/5b056e5e1df116bb358e6b9ea483acda.jpg?width=100&height=100",
  },
  {
    name: "Кирило Пашкевич",
    date: "23.09.2022 04:02",
    text: "Шановні студенти, повідомляємо що сьогоднішнє заняття 23.09.2022 відміняється та переноситься на 25.09.2022 на 13-00. Всім гарного дня та до зустрічі :)",
    img: "https://lms.ithillel.ua/uploads/images/e52781b9eda2c10b42bee38e5f177c1f.jpg?width=100&height=100",
  },
  {
    name: "Артем",
    date: "23.09.2022 04:02",
    text: "Ласкаво прошу до світу Реакт",
    img: "https://media-exp1.licdn.com/dms/image/C5603AQG7Kt1a3jCgZQ/profile-displayphoto-shrink_800_800/0/1517435267761?e=1670457600&v=beta&t=oPLEzCwlubODpVjguPTvEr1L0BIK2nEg8GnTStxKEBk",
  },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App list={list} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
