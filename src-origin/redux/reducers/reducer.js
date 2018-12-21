const initia_state=
{
    list:[],
    fetching:false,
    error:null
}
const reducer=(state={list:[]},action)=>{
    switch(action.type)
    {
        case "GET_PEOPLE_REQUEST":
        return{
            fetching:false,
        }
        case "GET_PEOPLE_SUCCESS":
        return{
            fetching:true,
            list:[...state.list]
        }
        case "GET_PEOPLE_ERROR":
        return{
            fetching:true,
            error:action.error
        }
        default:
        return state
    }
}