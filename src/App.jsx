import { format } from "date-fns";
import "./App.css";
import IdCard from "./components /IdCard";


function App() {
  let birthInfo = format(new Date(1992, 7, 14), 'MM/dd/yyyy')
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <IdCard firstName='John' lastName='Doe' gender='male' height={178} birth={birthInfo} picture="https://randomuser.me/api/portraits/men/44.jpg" />

    </div>
  );
}

export default App;
