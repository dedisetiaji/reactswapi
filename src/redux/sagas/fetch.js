import axios from 'axios'
const fetch=async function fetch(url)
{
    return axios({
        method:"GET",
        url:url
    })
}
export {fetch}