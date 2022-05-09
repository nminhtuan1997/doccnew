const initialState={
    list:[],
    activeID:null
}
const hobbyReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'ADD_HOBBY':{
            const newlist=[...state.list]
            newlist.push(action.payload);
            return {
                    ...state,
                    list:newlist
            }

        }
        case 'REMOVE_HOBBY':{
       
            const listxoa=state.list.filter(item=>item.id!==action.payload)
            return {
                ...state,
                list:listxoa
            }
        }
        case 'SET_ACTIVE_HOBBY':{
            return state;
        }
        default:
             return state
    }
}
export default hobbyReducer;