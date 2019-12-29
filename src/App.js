import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Router, Redirect, Route, Switch } from 'react-router-dom'

import { history } from './_helpers'


import { PrivateRoute } from './_components/PrivateRoute';




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
                        {/* <PrivateRoute exact path="/" component={HomePage} />
                        <Route exact path="/login" component={LoginPage} />
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
