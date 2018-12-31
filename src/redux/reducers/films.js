import initial_state from './initial_state'
const films=(state=initial_state,action)=>{
    switch(action.type)
    {
        case "GET_FILMS":
        return{
            fetching:true,
        }
        case "GET_FILMS_SUCCESS":
        return{
            fetching:false,
            list:action.results,
            payload:action.payload
        }
        case "GET_FILMS_ERROR":
        return{
            fetching:false,
            error:action.error
        }
        default:
        return state
    }
}