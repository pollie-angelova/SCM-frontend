import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Header, Page, Footer, Drivers, Vehicles, VehicleProps,DeliveryArchive,Transits } from '../_components'
import { authActions } from '../_actions/auth.actions'
import { Container, Input, Menu, Segment, Form, Button } from 'semantic-ui-react'
import './AdminPage.less'

class AdminPage extends React.Component {

    onDriverChange() {

    }

    componentDidMount() {
        this.props.dispatch(authActions.handleToken())
    }

    state = { activeItem: 'new_delivery' }

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
                content= <Segment attached='bottom'>
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


const NewDelivery = () => {

    // const availableDrivers = [
    //     { key: '1', value: 'Pesho', text: 'Pesho' }, // key = id v bazata, value i text imeto 
    //     { key: '2', value: 'Polya', text: 'Polya' },// na shofyora
    //     { key: '3', value: 'Gogo', text: 'Gogo' },
    //     { key: '4', value: 'Bogo', text: 'Bogo' },

    //   ]

    return (
        <Form>
            <Form.Field>
                <label>Sender</label>
                <input placeholder='Sender' />
            </Form.Field>
            <Form.Field>
                <label>Recepient</label>
                <input placeholder='Recepient' />
            </Form.Field>
            <Form.Field>
                <label>Source</label>
                <input placeholder='Source' />
            </Form.Field>
            <Form.Field>
                <label>Destination</label>
                <input placeholder='Destination' />
            </Form.Field>
            <Form.Field>
                <label>Weight</label>
                <Input
                    label={{ basic: true, content: 'kg' }}
                    labelPosition='right'
                    placeholder='Enter weight...'
                />
            </Form.Field>
            <Form.Field>
                <label>Price</label>
                <input placeholder='Price' />
            </Form.Field>
            {/* <Form.Field>
                <label>Driver</label>
                < Form.Dropdown placeholder='Select address'
                    fluid
                    selection
                    options={availableDrivers}
                    // onChange={this.onDriverChange.bind(this)}
                    />
            </Form.Field> */}
            <Button type='add' >Add</Button>
        </Form>

    );
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
