import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Table, Form } from 'semantic-ui-react'

const VEHICLE_PROPS = []
const capacities = ['4000', '10000', '20000'];


for (let i = 0; i < 1; i++) {
    VEHICLE_PROPS.unshift({
        id: i + 1,
        capacity: capacities[Math.floor(Math.random() * capacities.length)],
    })
}

const vehicleIds = [
    { key: '1', value: 'CA1234CA', text: 'CA1234CA' },
    { key: '2', value: 'A1234A', text: 'A1234A' },
    { key: '3', value: 'PA1234PA', text: 'PA1234PA' },
    { key: '4', value: 'PB1234PB', text: 'PB1234PB' },

]

class VehicleProps extends React.Component {

    renderProp(vehicle_prop) {
        return (

            <Table.Row>
                <Table.Cell>{vehicle_prop.capacity}</Table.Cell>
            </Table.Row>
        )
    }

    render() {
        return (

            
            <Form>
                <Form.Dropdown placeholder='Select Vehicle'
                fluid
                selection
                options={vehicleIds}
            // onChange={this.onDriverChange.bind(this)}
            />

            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Capacity</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {VEHICLE_PROPS.map(this.renderProp)}
                </Table.Body>
            </Table>
            </Form>
        )
    }
}

VehicleProps.propTypes = {
    dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
    return {}
}


const connectedVehicleProps = connect(mapStateToProps)(VehicleProps)
export { connectedVehicleProps as VehicleProps }
