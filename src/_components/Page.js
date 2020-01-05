import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'semantic-ui-react';
import './Page.less'

export class Page extends React.Component {
    render() {
        let className = ['page']
        if (this.props.className) {
            className.push(this.props.className)
        }
        return (
            <div className={className.join(' ')}>
                <Container fluid>
                    { this.props.children }
                </Container>
            </div>
        );
    }
}

Page.propTypes = {
    className: PropTypes.string
}
