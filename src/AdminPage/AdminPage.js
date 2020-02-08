import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Header, Page, Footer } from '../_components'
import { authActions } from '../_actions/auth.actions'
import { Table, Container, Input, Menu, Segment, Form, Button } from 'semantic-ui-react'
import './AdminPage.less'
import { Link } from 'react-router-dom'
import moment from 'moment'

const DELIVERIES = []

const now = new Date().getTime();
const statuses = ['new', 'delivered', 'transit'];
const cities = ['Sofia', 'Plovdiv', 'Burgas', 'Varna', 'Stara Zagora'];
const users = ['John Doe', 'Jane Dee', 'Rudyard Kipling', 'Brad Pitt', 'Megan Fox'];
const drivers = ['Georgi Georgiev', 'Ivan Ivanov', 'Nikolai Nikolov', 'Anton Antonov'];
const vehicleIds = ['CA1234AC', 'C5255AB', 'CB9634AP', 'CA5789PP', "C9634CC", "C5555BC"]

for (let i = 0; i < 10; i++) {
    DELIVERIES.unshift({
        id: i + 1,
        date: now - i * 3600 * 1000,
        status: statuses[Math.floor(Math.random() * statuses.length)],
        source: cities[Math.floor(Math.random() * cities.length)],
        destination: cities[Math.floor(Math.random() * cities.length)],
        recepient: users[Math.floor(Math.random() * users.length)],
        sender: users[Math.floor(Math.random() * users.length)],
        driver: drivers[Math.floor(Math.random() * drivers.length)],
        reg_number: vehicleIds[Math.floor(Math.random() * vehicleIds.length)],
    })
}

class AdminPage extends React.Component {

    onDriverChange(){

    }

    componentDidMount() {
        this.props.dispatch(authActions.handleToken())
    }

    renderDelivery(delivery) {
        return (
            <Table.Row>
                <Table.Cell>{moment(delivery.date).calendar()}</Table.Cell>
                <Table.Cell>
                    {delivery.source}
                    <br />
                    {delivery.sender}
                </Table.Cell>
                <Table.Cell>
                    {delivery.destination}
                    <br />
                    {delivery.recepient}
                </Table.Cell>
                <Table.Cell>{delivery.driver}</Table.Cell>
                <Table.Cell>{delivery.reg_number}</Table.Cell>
                <Table.Cell>{delivery.status}</Table.Cell>
                <Table.Cell>
                    <Link to='/'>Modify</Link>
                </Table.Cell>
            </Table.Row>
        )
    }


    state = { activeItem: 'new_delivery' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render() {

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

                        <Segment attached='bottom'>
                            <NewDelivery />
                        </Segment>

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
