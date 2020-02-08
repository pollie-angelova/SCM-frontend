import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Table} from 'semantic-ui-react'

const VEHICLES = []
const statuses = ['new', 'delivered', 'transit'];
const couriers = ['John Doe', 'Jane Dee', 'Rudyard Kipling', 'Brad Pitt', 'Megan Fox'];
const vehicleIds = ['CA1234AC', 'C5255AB', 'CB9634AP', 'CA5789PP', "C9634CC", "C5555BC"]

for (let i = 0; i < 10; i++) {
    VEHICLES.unshift({
        id: i + 1,
        courier: couriers[Math.floor(Math.random() * couriers.length)],
        reg_number: vehicleIds[Math.floor(Math.random() * vehicleIds.length)],
        status: statuses[Math.floor(Math.random() * statuses.length)],  
    })
}

class Vehicles extends React.Component {

    renderDriver(vehicle) {
        return (
            <Table.Row>
                <Table.Cell>{vehicle.reg_number}</Table.Cell>
                <Table.Cell>{vehicle.courier}</Table.Cell>
                <Table.Cell>{vehicle.status}</Table.Cell>
            </Table.Row>
        )
    }

    render() {
        return (
            
                    <Table celled>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Vechicle ID</Table.HeaderCell>
                                <Table.HeaderCell>Driver Name</Table.HeaderCell>
                                <Table.HeaderCell>Status</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {VEHICLES.map(this.renderDriver)}
                        </Table.Body>
                    </Table>
        )
    }
}

Vehicles.propTypes = {
    dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
    return {}
}


const connectedVehicles = connect(mapStateToProps)(Vehicles)
export { connectedVehicles as Vehicles }
