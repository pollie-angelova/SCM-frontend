import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Router, Route, Switch } from 'react-router-dom'

import { HomePage } from './HomePage'
import {TrackOrderPage} from './TrackOrderPage'
import  {CalculateDeliveryPage} from './CalculateDeriveryPage'
import {MyAccount} from './MyAccountPage'

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
                        <Route exact path = "/my_account" component={MyAccount} />
                        {/*<Route exact path="/login" component={LoginPage} />
                        <PrivateRoute exact path="/contacts" component={ContactsPage} />
                        <PrivateRoute exact path="/about" component={AboutPage} />
                        <PrivateRoute exact path="/services/ota" component={OTAServicePage} />
                        <PrivateRoute exact path="/services/sso" component={SSOServicePage} />
                        <PrivateRoute exact path="/services/appstore" component={AppStoreServicePage} />
                        <Redirect to="/" /> */}
                    </Switch>
                </div>
            </Router>
        )
    }
}

const connectedApp = connect()(App)
export { connectedApp as App }
