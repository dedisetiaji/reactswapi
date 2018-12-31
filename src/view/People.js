import React from 'react'
import {action} from '../redux/actions/'
import {connect} from 'react-redux'
import {Link,withRouter} from 'react-router-dom'
class People extends React.Component
{
    componentDidMount()
    {
        const {action}=this.props
        action()
    }
    render()
    {
        return(<div>
             <ul>
                {this.props.list.map((el,id)=>
                 <Link to={`people/${encodeURIComponent(el.url)}`} key={id}>
                     <li>{el.name}</li>
                 </Link>
                )}
             </ul>
            {/* {JSON.stringify(this.props.list)} */}
            
        </div>)
    }
}
const mapStateToProps=(state)=>{
   
    return{
        list:state.people_reducer.list
    }
}
function mapDispatchToProps (dispatch) {
   
    return {
      action:()=>dispatch(action),
      download:()=>dispatch(action)
    }
  }
const App=withRouter(connect(mapStateToProps,mapDispatchToProps)(People))
export default App
