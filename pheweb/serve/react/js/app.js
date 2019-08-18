import React from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter,
    Route,
    Switch,
    withRouter
} from 'react-router-dom'
import Home from './components/Home'
import Variant from './components/Variant'

ReactDOM.render(
    <BrowserRouter>
    <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
    <div style={{flex: 1, height: '100%', padding: '10px', display: 'flex', flexFlow: 'row nowrap', justifyContent: 'flex-start'}}>
    <Route exact path='/coding' component={Home}/>
    <Route path='/variant/:variant' component={Variant}/>
    </div>
    </div>
    </BrowserRouter>
    , document.getElementById('reactEntry'))
