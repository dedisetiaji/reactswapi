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
            {/* <button
                onClick={this.props.download}
            >
                {this.props.fetching?"Loading...":"Download"}
            </button> */}
            <ul>
               {this.props.list.map((el,id)=>
                <Link to={`people/${id+1}`} key={id}>
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
        list:state.people_reducer.list,
        fetching:state.people_reducer.fetching,
        error:state.people_reducer.error
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
