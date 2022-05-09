import './App.css';
import React,{useEffect,useState} from 'react'
import axios from 'axios';
const url = 'https://jsonplaceholder.typicode.com/comments'
function App() {
  const [list,setlist]=useState([]);



  const fetchTours = async()=>{
    try{
      const respons=await fetch(url);
      const tours= await respons.json();
      const abcc=[...new Set(tours)]
      setlist(abcc);
      console.log(list);
      

    }catch(e){
        console.log(e)
    }
  
  }

  function putPost(){

    const data={

      name:'Tuan',
      mobile:'0123456'
    }

  /*  axios.post(`https://jsonplaceholder.typicode.com/comments`, data)
      .then(res => {
        console.log(res);
        console.log(res.data);
        setlist([...list,res.data])
      })
      .catch(err => {
        console.log(err);
      })*/
   
     fetch(url,{
          method: list.id ? 'PUT' : 'POST',
          body:JSON.stringify(data),
          headers:{
            'Content-Type':'application/json',
            'Accpet': 'application/json',
          },
      })
      .then((response) => response.json())
      .then((json) => setlist([...list,json]))
     
     
  
     
   
  }


  useEffect(()=>{
    fetchTours();
    
  },[])

  return (
    <div className="App">
      <h1>Call API</h1>
      <button onClick={putPost}>Submit</button>
        {list.map((item,index)=>{
            return (
              <div key={index}>
              <h1>{item.name}</h1>
              </div>
            )
        })}
    </div>
  );
}

export default App;
