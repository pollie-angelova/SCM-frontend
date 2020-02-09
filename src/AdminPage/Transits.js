import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Table, List } from 'semantic-ui-react'
import moment from 'moment'
import { deliveryControlActions } from '../_actions/deliverycontrol.actions'

class Transits extends React.Component {

    componentDidMount() {
        this.props.dispatch(deliveryControlActions.getAllTransits());
    }

    renderTransit(transit) {

        const legs = transit.legs.map((leg, i) => {
            return (<List.Item key={i} icon='linkify'>
                <List>
                    <List.Item>{leg.startAddress}</List.Item>
                    <List.Item>{leg.endAddress}</List.Item>
                </List>
            </List.Item>)
        })

        return (
            <Table.Row key={transit.id}>
                <Table.Cell>{moment(transit.dateCreated).calendar()}</Table.Cell>
                <Table.Cell>
                    <List>

                    </List>
                    { legs }
                </Table.Cell>
                <Table.Cell>{ transit.courierId.name }</Table.Cell>
            </Table.Row>
        )
    }

    render() {
        return (

            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Date</Table.HeaderCell>
                        <Table.HeaderCell>Transit</Table.HeaderCell>
                        <Table.HeaderCell>Driver</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    { this.props.transits.map(this.renderTransit.bind(this)) }
                </Table.Body>
            </Table>

        )
    }
}

Transits.propTypes = {
    dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
    const { delivery } = state
    return {
        transits: delivery.transits
    }
}


const connectedTransits = connect(mapStateToProps)(Transits)
export { connectedTransits as Transits }
