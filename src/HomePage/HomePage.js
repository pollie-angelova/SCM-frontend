import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Header, Page, Footer, MoreThanSection } from '../_components'
import { authActions } from '../_actions/auth.actions'
import { Segment } from 'semantic-ui-react'
import './HomePage.less'

class HomePage extends React.Component {

    componentDidMount() {
        this.props.dispatch(authActions.handleToken())
    }

    render() {
        return (
            <Page clasName='page'>
                <Header />
                <Segment className='home_page'>
                    <div className='slogan'>
                        <div className='slogan fast'> Fast </div>
                        <div className=" slogan easy">Easy</div>
                        <div className="slogan cheap">Cheap</div>
                    </div>
                </Segment>
                <MoreThanSection></MoreThanSection>
                <Footer />
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
