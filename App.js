import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import List from './List';

function App() {
  const [name,setname]=useState('');
  const [list,setlist]=useState([]);
  const [idedit,setidedit]=useState();
  const [edit,setedit]=useState(false);
 
 
  function handleSubmit(e){
    e.preventDefault();
    if(!name){
      ///git
    }
    if(edit){
      setlist(list.map((item)=>{
        if(item.id===idedit){
          return {...item,title:name}
        }
        return item;
      }))
      setname('');
      setedit(false);
    }
   
    if(name && !edit){
      const newlist= {
        id: new Date().getTime().toString(),
        title:name
      };
        setlist([...list,newlist])
        setname('')
    } 
  }

  function removeid(id){
    setlist(list.filter((item)=>item.id!==id))
  }
  function editid(id){
      list.map((item)=>{
        if(item.id==id){
          setname(item.title);
          setedit(true)
          setidedit(item.id)
        }
      })


  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" className="inut" value={name} onChange={(e)=>setname(e.target.value)}/>
        <button type="submit">{edit?'Edit':'Add'}</button>
        
      </form>

      <List List={list} remove={removeid} edit={editid}/>
    </div>
  );
}

export default App;
