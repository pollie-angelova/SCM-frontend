import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Header, Page,TrackOrderSegment, Footer} from '../_components'
import './TrackOrderPage.less'


class TrackOrderPage extends React.Component {

    render() {
        return (
            <Page clasName ='page'>
                <Header/>
                <TrackOrderSegment/>
                <Footer/>
            </Page>
        )
    }
}

TrackOrderPage.propTypes = {
    dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
    // const { auth } = state
    return {}
}


const connectedTrackOrderPage = connect(mapStateToProps)(TrackOrderPage)
export { connectedTrackOrderPage as TrackOrderPage}