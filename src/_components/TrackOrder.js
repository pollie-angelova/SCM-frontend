import React from 'react'
import { Container, Form, Table } from 'semantic-ui-react';
import { connect } from 'react-redux'
import './TrackOrder.less'
import './Input'
import { deliveryActions } from '../_actions/delivery.actions';
import { DELIVERY_STATUSES } from '../_constants';
import moment from 'moment';

export class TrackOrderSection extends React.Component {

    state = {
        deliveryId: '',
    }

    handleSubmit(e) {
        this.props.dispatch(deliveryActions.trackDelivery(this.state.deliveryId));
    }

    handleChange(e, data) {
        this.setState({ deliveryId: data.value });
    }

    renderHistory(history) {

        const historyStatusLabel = DELIVERY_STATUSES.find(s => s.value === history.name).text;

        return (
            <Table.Row key={history._id}>
                <Table.Cell>{moment(history.dateCreated).calendar()}</Table.Cell>
                <Table.Cell>
                    { historyStatusLabel}
                </Table.Cell>
            </Table.Row>
        )
    }

    render() {
        return (
            <section className='top-background'>
                <Container className="top-container">
                    <h2>Enter Order ID</h2>
                    <Form onSubmit={this.handleSubmit.bind(this)}>
                        <Form.Group inline>
                            <Form.Input placeholder='Search...' name='orderId' onChange={this.handleChange.bind(this)} />
                            <Form.Button content='Track' />
                        </Form.Group>
                    </Form>

                    { this.props.delivery &&
                        <Table celled>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Date</Table.HeaderCell>
                                    <Table.HeaderCell width={3}>Status</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                {this.props.delivery.history.reverse().map(this.renderHistory.bind(this))}
                            </Table.Body>
                        </Table>
                    }

                </Container>
            </section>
        )

    }
}

TrackOrderSection.propTypes = {
    // showButton: PropTypes.bool
};

function mapStateToProps(state) {
    const { delivery } = state;
    return {
        delivery: delivery.delivery
    };
}

const wrapperFunc = connect(mapStateToProps);
const connectedTrackOrder = wrapperFunc(TrackOrderSection);

export { connectedTrackOrder as TrackOrderSegment };


