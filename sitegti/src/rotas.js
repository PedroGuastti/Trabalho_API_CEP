import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Inicio from '../src/pages/Inicio'
import Login from '../src/pages/Login'
import NaoEncontrado from '../src/pages/NaoEncontrado'

export default function Rotas(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Inicio} />
                <Route exact path="/login" component={Login} />
                <Route component={NaoEncontrado} />
            </Switch>
        </BrowserRouter>
    )
}