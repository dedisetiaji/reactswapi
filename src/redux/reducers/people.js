import initial_state from './initial_state'
const people_reducer=(state=initial_state,action)=>{
    switch(action.type)
    {
        case "GET_PEOPLE_REQUEST":
        return{
            list:[],
            fetching:true,
        }
        case "GET_PEOPLE_SUCCESS":
        return{
            list:[...state.list,...action.results],
            fetching:false
        }

        case "GET_PEOPLE_ERROR":
        return{
            fetching:false,
            error:action.error,
            list:[]
        }

        default:
        return state
    }
}
export default people_reducer