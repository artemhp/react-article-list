import "./App.css";
import Post from "./components/Post";
function App(props) {
  return (
    <div className="wrapper">
      {props.list.map((item) => {
        return (
          <Post
            name={item.name}
            date={item.date}
            text={item.text}
            img={item.img}
          />
        );
      })}
    </div>
  );
}

export default App;
