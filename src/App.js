import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Router, Route, Switch } from 'react-router-dom'

import { HomePage } from './HomePage'
import {TrackOrderPage} from './TrackOrderPage'
import  {CalculateDeliveryPage} from './CalculateDeriveryPage'
import {MyAccountPage} from './MyAccountPage'
import { AdminPage } from './AdminPage'
import { CorrierPage } from './CorrierPage'

import { history } from './_helpers'


class App extends Component {

    componentDidMount() {
        history.listen((location, action) => {
            // this.props.dispatch(/*alertActions.clear()*/)
        })
    }

    render() {
        return (
            <Router history={history}>
                <div id='router'>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path= "/track_order" component={TrackOrderPage}/>
                        <Route exact path ="/delivery_calculator" component= {CalculateDeliveryPage}/>
                        <Route exact path = "/my_account" component={MyAccountPage} />
                        <Route exact path = "/admin" component={AdminPage} />
                        <Route exact path = "/courier" component={CorrierPage} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

const connectedApp = connect()(App)
export { connectedApp as App }
