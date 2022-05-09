import React from 'react';
import { removeNewHobby } from "../../action/hobby";
import {useDispatch} from 'react-redux';


function Hobbylist({Hobby1}){
  const dispatch=useDispatch();
  const xoa=(id)=>{
      const action=removeNewHobby(id);
      dispatch(action)
  }
  return (
   
    <div className="as">
        {Hobby1.map((item,index)=>{
          return( 
            <>
            <div key={index}>
            <h2>{item.title}</h2>
            <button onClick={()=>xoa(item.id)}>Xoa</button>
            </div>
            </>
          )
        })}
    </div>
  )
}
export default Hobbylist
