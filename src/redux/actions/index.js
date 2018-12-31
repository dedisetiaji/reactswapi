const action={
    type:"GET_PEOPLE_REQUEST"
}
const people_detail=(url)=>({
    type:"GET_DETAIL_PEOPLE",
    url
})
const films=(url)=>({
    type:"GET_FILMS",
    url
})
export {action,people_detail,films}