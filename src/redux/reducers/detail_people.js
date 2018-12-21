import initial_state from './initial_state'
const detail_people=(state=initial_state,action)=>{
    switch(action.type)
    {
        case "GET_DETAIL_PEOPLE":
        return{
            list:[],
            fetching:true,
            id:action.id
        }
        case "GET_DETAIL_PEOPLE_SUCCESS":
        return{
            list:action.results,
            fetching:true,
            id:action.id,
            name:action.results.name,
            height:action.results.height

        }
        case "GET_DETAIL_PEOPLE_ERROR":
        return{
            error:action.error,
            fetching:true
        }
        default:
        return false
    }
}
export default detail_people