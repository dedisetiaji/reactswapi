import initial_state from './initial_state'
const detail_people=(state={initial_state},action)=>{
    switch(action.type)
    {
        case "GET_DETAIL_PEOPLE":
        return{
            list:[],
            fetching:true
        }
        case "GET_DETAIL_PEOPLE_SUCCESS":
        return{
            list:action.results,
            payload:action.payload
        }
        case "GET_DETAIL_PEOPLE_ERROR":
        return{
            error:action.error,
            fetching:true
        }
        case "GET_DETAIL_PEOPLE_TIMEOUT":
        return{
            error:"TIMEOUT",
            fetching:true
        }
        default:
        return false
    }
}
export default detail_people