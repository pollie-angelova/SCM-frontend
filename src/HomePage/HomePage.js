import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Header, Page, Footer} from '../_components'
import { authActions } from '../_actions/auth.actions'

class HomePage extends React.Component {

    componentDidMount() {
        this.props.dispatch(authActions.handleToken())
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
