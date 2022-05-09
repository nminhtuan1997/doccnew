import React from "react";
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import { addNewHobby } from "../action/hobby";
import HobbyList from '../components/Home/Hobbylist';



function HomePage() {
    const hobbyList=useSelector(state=>state.hobby.list);
    const dispatch=useDispatch();
    const handleclick=()=>{
        const newHobby={
            id: new Date().getTime().toString(),
            title:'ass'
        };
        const action=addNewHobby(newHobby);
        dispatch(action);

    }
  return (
      
    <div className="Home">
        <h2>asdasd</h2>
        <HobbyList Hobby1={hobbyList} />
        <button onClick={handleclick}>Submit</button>
    </div>
  );
}

export default HomePage;
