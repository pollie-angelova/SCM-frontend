import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Table} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import moment from 'moment'

const DELIVERIES = []

const now = new Date().getTime();
const statuses = ['new', 'delivered', 'transit'];
const cities = ['Sofia', 'Plovdiv', 'Burgas', 'Varna', 'Stara Zagora'];
const users = ['John Doe', 'Jane Dee', 'Rudyard Kipling', 'Brad Pitt', 'Megan Fox'];
const drivers = ['Georgi Georgiev', 'Ivan Ivanov', 'Nikolai Nikolov', 'Anton Antonov' ];
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
        reg_number:  vehicleIds[Math.floor(Math.random() * vehicleIds.length)],
    })
}

class DeliveryArchive extends React.Component {


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

    render() {
        return (
          
                    <Table celled>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Date</Table.HeaderCell>
                                <Table.HeaderCell>Source</Table.HeaderCell>
                                <Table.HeaderCell>Destination</Table.HeaderCell>
                                <Table.HeaderCell>Driver</Table.HeaderCell>
                                <Table.HeaderCell>Registration</Table.HeaderCell>
                                <Table.HeaderCell>Status</Table.HeaderCell>
                                <Table.HeaderCell></Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {DELIVERIES.map(this.renderDelivery)}
                        </Table.Body>
                    </Table>
              
        )
    }
}

DeliveryArchive.propTypes = {
    dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
    return {}
}


const connectedDeliveryArchive = connect(mapStateToProps)(DeliveryArchive)
export { connectedDeliveryArchive as DeliveryArchive}