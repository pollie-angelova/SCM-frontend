import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Header, Page, Footer} from '../_components'
import { authActions } from '../_actions/auth.actions'
import { history } from '../_helpers/history';

class HomePage extends React.Component {

    componentDidMount() {
        authActions.handleToken(history);
    }

    render() {
        return (
            <Page clasName ='page'>
                <Header/>
               
                <Footer/>
            </Page>
        )
    }
}

HomePage.propTypes = {
    dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
    // const { auth } = state
    return {}
}


const connectedHomePage = connect(mapStateToProps)(HomePage)
export { connectedHomePage as HomePage }
