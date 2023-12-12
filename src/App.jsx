import { format } from "date-fns";
import "./App.css";
import IdCard from "./components /IdCard";


const App = () => {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <IdCard firstName='John' lastName='Doe' gender='male' height={178} birth={format(new Date(1992, 7, 14), 'MM/dd/yyyy')} picture="https://randomuser.me/api/portraits/men/44.jpg" />
      <IdCard firstName='Delores' lastName='Obrien' gender='female' height={172} birth={format(new Date(1988, 5, 11), 'MM/dd/yyyy')} picture="https://randomuser.me/api/portraits/women/44.jpg" />
    </div>
  );
}

export default App;
