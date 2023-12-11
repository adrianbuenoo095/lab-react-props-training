import "./App.css";
import IdCard from "./components /IdCard";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <IdCard firstName='John' lastName='Doe' gender='male' height={178} birth={new Date("1992-07-14").toString} picture="https://randomuser.me/api/portraits/men/44.jpg" />

    </div>
  );
}

export default App;
