import React from 'react'
import { Container } from 'semantic-ui-react';
//import {Button} from '../_components';
//import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import './TrackOrder.less'
import './Input'
import InputField from './Input';

export class TrackOrderSection extends React.Component {
    render() {
        return (
            <section className='background'>
                <Container className = "neshto">
                <h2 className='nadpis'>Enter Order ID</h2>
                <InputField>
                <div class="ui input track"><input type="text" placeholder="Search..." /></div>
                </InputField>
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


