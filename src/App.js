import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";

function App() {

  const onDelete=(todo)=>{
    console.log("I am ondelete of todo",todo);
  }

  let todos=[
    {
      sno: 1,
      title:"Go to the market",
      desc: "You need to go to the market to get this job done"
    },
    {
      sno: 2,
      title:"Go to the salon",
      desc: "You need to go to the salon to get this job done"
    },
    {
      sno: 3,
      title:"Go to the ghat",
      desc: "You need to go to the ghat to get this job done"
    }
  ]
  return (
    <>
 <Header title="My Todos List" searchBar={false}/>
 <Todos todos={todos} onDelete={onDelete}/>
 <Footer/>
    </>
  );
}

export default App;
