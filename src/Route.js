import React,{lazy,Suspense} from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
const People=lazy(()=>import('./view/People'))
const DetailPeople=lazy(()=>import('./view/DetailPeople'))
const Films=lazy(()=>import('./view/Films'))
const NotFound=lazy(()=>import('./view/NotFound'))

class MainRoute extends React.Component
{
   render()
   {
       return(
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                    <Route path="/" exact component={People} />
                    <Route path="/people/:url" exact component={DetailPeople} />
                    <Route path="/films/:url" exact component={Films} />
                    <Route component={NotFound} />
                </Switch>
            </Suspense>
               
            
        </Router>
       )
   }
}
export default MainRoute