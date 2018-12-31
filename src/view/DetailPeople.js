import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {people_detail} from '../redux/actions/'
class App extends React.Component
{
    componentDidMount()
    {
       const url=this.props.match.params.url
      
       this.props.people_detail(url)
    }
    
    render()
    {
        return(<div>
            <p>Name : {this.props.list.name}</p>
            <p>Height : {this.props.list.height}</p>
            <p>Mass : {this.props.list.mass}</p>
            <p>Skin Color : {this.props.list.skin_color}</p>
            <p>Eye Color : {this.props.list.eye_color}</p>
            <p>Birthyear : {this.props.list.birth_year}</p>
            <p>Gender : {this.props.list.gender}</p>
            <p>Films :</p>
            <ul>
            {
                this.props.films.map(el=><Link key={el.title} to={`/films/${encodeURIComponent(el.url)}`}><li>{el.title}</li></Link>)
            }
            </ul>
            <p>Species :</p>
            <ul>
            {
                this.props.species.map(el=><Link key={el.name} to={`/species/${encodeURIComponent(el.url)}`}><li>{el.name}</li></Link>)
            }
            </ul>
            <p>Vehicles :</p>
            <ul>
            {
                this.props.vehicles.map(el=><Link key={el.name} to={`/vehicles/${encodeURIComponent(el.url)}`}><li>{el.name}</li></Link>)
            }
            </ul>
            <p>Starships :</p>
            <ul>
            {
                this.props.starships.map(el=><Link key={el.name} to={`/starships/${encodeURIComponent(el.url)}`}><li>{el.name}</li></Link>)
            }
            </ul>
        </div>)
    }
}
const mapStateToProps=(state)=>{
    const payload={...state.detail_people.payload}
   
    return{
        list:{...state.detail_people.list},
        films:Object.assign([],payload.films),
        species:Object.assign([],payload.species),
        vehicles:Object.assign([],payload.vehicles),
        starships:Object.assign([],payload.starships),
    }
}
const mapDispatchToProps=(dispatch)=>{
   return bindActionCreators({people_detail},dispatch)
}
const DetailPeople=connect(mapStateToProps,mapDispatchToProps)(App)
export default DetailPeople