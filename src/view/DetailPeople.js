import React from 'react'
// import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {people_detail} from '../redux/actions/'
class App extends React.Component
{
    componentDidMount()
    {
       this.props.people_detail(this.props.match.params.id)
    }
    
    render()
    {
         
        return(<div>
           <h1>Name : {this.props.name}</h1>
           <h1>Height : {this.props.height}</h1>
        </div>)
    }
}
const mapStateToProps=(state)=>{
    return{
      detail_people:state.detail_people.list,
      name:state.detail_people.name,
      height:state.detail_people.height,
    }
}
const mapDispatchToProps=(dispatch)=>{
   return bindActionCreators({people_detail},dispatch)
}
const DetailPeople=connect(mapStateToProps,mapDispatchToProps)(App)
export default DetailPeople