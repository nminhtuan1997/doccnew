import React from "react";

function List({List,remove,edit}) {


  return (
    <div className="List">
        {List.map((item,index)=>{
                const {id,title}=item
                return(
                    <div key={index}>
                        <p>{title}</p>
                        <button onClick={()=>edit(id)}>Edit</button>
                        <button onClick={()=>remove(id)}>Remove</button>
                    </div>

                )
                    
                
        })}
    </div>
  );
}

export default List;
