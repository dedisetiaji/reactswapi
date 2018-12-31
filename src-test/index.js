import React from 'react'
import {lazy,Suspense} from 'react'
import ReactDOM from 'react-dom'
const Comp=lazy(()=>import('./Comp'))

class App extends React.Component
{
    render()
    {
        return(<div>
            <Suspense fallback={<div>Loading...</div>}>
                <Comp/>
            </Suspense>
        </div>)
    }
}
ReactDOM.render(<App/>,document.getElementById("root"))