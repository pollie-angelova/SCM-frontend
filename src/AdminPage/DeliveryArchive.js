import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Table, Dropdown } from 'semantic-ui-react'
import moment from 'moment'
import { deliveryControlActions } from '../_actions/deliverycontrol.actions'
import { DELIVERY_STATUSES } from '../_constants'

class DeliveryArchive extends React.Component {

    componentDidMount() {
        this.props.dispatch(deliveryControlActions.getAllDeliveries());
    }

    updateDelivery(e, { name, value }) {
        const deliveryItem = this.props.deliveries.find(d => d.id === name);
        const newHistoryItem = { name: value }
        const updatedDelivery = {
            history: [...deliveryItem.history, newHistoryItem]
        }
        this.props.dispatch(deliveryControlActions.updateDelivery(name, updatedDelivery))
    }

    renderDelivery(delivery) {

        const deliveryStatus = delivery.history.length
            ? delivery.history[delivery.history.length - 1].name
            : 'new';

        return (
            <Table.Row key={delivery.id}>
                <Table.Cell>{moment(delivery.dateCreated).calendar()}</Table.Cell>
                <Table.Cell>
                    {delivery.senderId.name}
                    <br />
                    {delivery.source.coordinates.join(', ')}
                </Table.Cell>
                <Table.Cell>
                    {delivery.recepientId.name}
                    <br />
                    {delivery.destination.coordinates.join(', ')}
                </Table.Cell>
                <Table.Cell>{delivery.courierId.name}</Table.Cell>

                <Table.Cell>
                    <Dropdown fluid selection
                        name={delivery.id}
                        defaultValue={deliveryStatus}
                        options={DELIVERY_STATUSES}
                        onChange={this.updateDelivery.bind(this)} />
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
                        <Table.HeaderCell width={3}>Status</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    { this.props.deliveries.reverse().map(this.renderDelivery.bind(this)) }
                </Table.Body>
            </Table>

        )
    }
}

DeliveryArchive.propTypes = {
    dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
    const { delivery } = state;
    return {
        deliveries: delivery.deliveries
    }
}

const connectedDeliveryArchive = connect(mapStateToProps)(DeliveryArchive)
export { connectedDeliveryArchive as DeliveryArchive }
