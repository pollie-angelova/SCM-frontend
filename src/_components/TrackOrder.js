import React from 'react'
import { Container, Input, Form } from 'semantic-ui-react';
//import {Button} from '../_components';
//import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import './TrackOrder.less'
import './Input'

export class TrackOrderSection extends React.Component {
    render() {
        return (
            <section className='top-background'>
                <Container className="top-container">
                    <h2>Enter Order ID</h2>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group inline>
                            <Form.Input placeholder='Search...' name='orderId' />
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


