import React from 'react'
import { Container, Form } from 'semantic-ui-react';
//import {Button} from '../_components';
//import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import './TrackOrder.less'
import './Input'
import { deliveryActions } from '../_actions/delivery.actions';

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
                </Container>
            </section>
        )

    }
}

TrackOrderSection.propTypes = {
    // showButton: PropTypes.bool
};

function mapStateToProps(state) {
    return {};
}

const wrapperFunc = connect(mapStateToProps);
const connectedTrackOrder = wrapperFunc(TrackOrderSection);

export { connectedTrackOrder as TrackOrderSegment };


