import './App.css';
import axios from 'axios';
import React,{useState,useEffect} from 'react'
function Todos(props){
  var [b,setb]=useState(false);
    return(
      <div>
        <p>{b?"":props?.title ?? "Remind me to eat my lunch"}</p>
        <input type={"checkbox"} onClick={()=>{setb(!b);}} style={{"display":b?"none":"flow"}} />
      </div>
    )
}

function App() {
  const [a,seta]=useState([]);
  const [b,setb]=useState();
  const getData=()=>{
  axios.get('https://jsonplaceholder.typicode.com/todos')
  .then(res=>{seta(res.data)})
  .then(res=>{console.log(1)})
  }

  const AddTodo=()=>{
    var c =b;
    return <h1>{c}</h1>
  }
  return(
    <div className="App">
      <input type={"text"} placeholder={"Add your todo"} onChange={(e)=>setb(e.target.value)}/>
      <button onClick={AddTodo} > Add todo </button>
      <button onClick={getData}>Get  data</button>
      <p> User Id : { 1 ?? "default value"}</p>
      <p>Work to be Done</p>
      <div>{a.map((elem=>{
        return <Todos key={elem.id} title={elem.title}/>
      }))}</div>
    </div>
  );
}

export default App;
