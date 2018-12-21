const action={
    type:"GET_PEOPLE_REQUEST"
}
const people_detail=(id)=>({
    type:"GET_DETAIL_PEOPLE",
    id
})
export {action,people_detail}