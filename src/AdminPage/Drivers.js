import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Table} from 'semantic-ui-react'

const DRIVERS = []
const statuses = ['new', 'delivered', 'transit'];
const couriers = ['John Doe', 'Jane Dee', 'Rudyard Kipling', 'Brad Pitt', 'Megan Fox'];

for (let i = 0; i < 10; i++) {
    DRIVERS.unshift({
        id: i + 1,
        couriers: couriers[Math.floor(Math.random() * couriers.length)],
        status: statuses[Math.floor(Math.random() * statuses.length)],  
    })
}

class Drivers extends React.Component {

    renderDriver(driver) {
        return (
            <Table.Row>
                <Table.Cell>
                    {driver.couriers}
                </Table.Cell>
                <Table.Cell>{driver.status}</Table.Cell>
            </Table.Row>
        )
    }

    render() {
        return (
            
                    <Table celled>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Name</Table.HeaderCell>
                                <Table.HeaderCell>Status</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {DRIVERS.map(this.renderDriver)}
                        </Table.Body>
                    </Table>
        )
    }
}

Drivers.propTypes = {
    dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
    return {}
}


const connectedDrivers = connect(mapStateToProps)(Drivers)
export { connectedDrivers as Drivers }
