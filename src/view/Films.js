import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {films} from '../redux/actions'
class Films extends React.Component
{
    componentDidMount()
    {
        const url=decodeURIComponent(this.props.match.params.url)
        this.props.films(url)
    }
    render()
    {
        return(<div></div>)
    }
}
const mapStateToProps=(state)=>{
    return{
        list:{...state.list}
    }
}
const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({films},dispatch)
}
const App=connect(mapStateToProps,mapDispatchToProps)(Films)
export default App