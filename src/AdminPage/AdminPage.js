import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Header, Page, Footer } from '../_components'
import { NewDelivery, Drivers, Vehicles, VehicleProps, DeliveryArchive, Transits } from '.'
import { userActions } from '../_actions';
import { Container, Menu, Segment, } from 'semantic-ui-react'
import './AdminPage.less'

class AdminPage extends React.Component {

    state = {
        activeItem: 'new_delivery'
    }

    componentDidMount() {
        this.props.dispatch(userActions.getAllUsers());
        this.props.dispatch(userActions.getAvailableDrivers());
    }

    onDriverChange() {

    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {

        let content;
        switch (this.state.activeItem) {
            case 'new_delivery':
                content =
                    <Segment attached='bottom'>
                        <NewDelivery />
                    </Segment>
                break;
            case 'drivers':
                content = <Segment attached='bottom'>
                    <Drivers />
                </Segment>
                break;
            case 'vehicles':
                content = <Segment attached='bottom'>
                    <Vehicles />
                </Segment>
                break;
            case 'vehicle_properties':
                content = <Segment attached='bottom'>
                    <VehicleProps />
                </Segment>
                break;
            case 'all_deliveries':
                content = <Segment attached='bottom'>
                    <DeliveryArchive />
                </Segment>
                break;
            case 'transits':
                content = <Segment attached='bottom'>
                    <Transits />
                </Segment>
                break;
            default:
                break;
        }
        const { activeItem } = this.state

        return (
            <Page clasName='page'>
                <Header />
                <Container className='admin_page'>
                    <h2>Administration</h2>

                    <div>
                        <Menu attached='top' tabular>
                            <Menu.Item
                                name='new_delivery'
                                active={activeItem === 'new_delivery'}
                                onClick={this.handleItemClick}
                            />
                            <Menu.Item
                                name='drivers'
                                active={activeItem === 'drivers'}
                                onClick={this.handleItemClick}
                            />
                            <Menu.Item
                                name='vehicles'
                                active={activeItem === 'vehicles'}
                                onClick={this.handleItemClick}
                            />
                            <Menu.Item
                                name='vehicle_properties'
                                active={activeItem === 'vehicle_properties'}
                                onClick={this.handleItemClick}
                            />
                            <Menu.Item
                                name='transits'
                                active={activeItem === 'transits'}
                                onClick={this.handleItemClick}
                            />
                            <Menu.Item
                                name='all_deliveries'
                                active={activeItem === 'all_deliveries'}
                                onClick={this.handleItemClick}
                            />

                        </Menu>
                        {content}
                    </div>

                </Container>
                <br />
                <br />
                <Footer />
            </Page>
        )
    }
}

AdminPage.propTypes = {
    dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
    // const { auth } = state
    return {}
}


const connectedAdminPage = connect(mapStateToProps)(AdminPage)
export { connectedAdminPage as AdminPage }
