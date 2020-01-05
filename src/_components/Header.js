import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import './Header.less'
import { authActions } from '../_actions/auth.actions'

const HOVER_TIME = 500;

class Header extends Component {
    state = {
        hoveredElement: null
    }

    hoverIntentTimeout = null;

    handleUserClick(e) {
        e.preventDefault()
        this.props.dispatch(authActions.logout())
    }

    handleMouseOver(e) {
        clearTimeout(this.hoverIntentTimeout);
        this.setState({ hoveredElement: e.currentTarget.id });
    }

    handleMouseOut(e) {
        this.hoverIntentTimeout = setTimeout(() => {
            this.setState({ hoveredElement: null });
            this.hoverIntentTimeout = null;
        }, HOVER_TIME);
        
    }

    render() {

        return (
            <header className='header'>

                <div id="logo">
                    <NavLink to='/'><Icon name='dropbox' size="huge" link /></NavLink>
                </div>

                <ul className='mainMenu'>
                    <li id='services'
                        className={this.state.hoveredElement === 'services' ? 'hover' : ''}
                        onMouseOver={this.handleMouseOver.bind(this)} 
                        onMouseOut={this.handleMouseOut.bind(this)}><NavLink to='/services'>Services</NavLink>
                        <ul className='subMenu'>
                            <li><NavLink to='/services/in_BG'>In Bulgaria</NavLink></li>
                            <li><NavLink to='/services/abroud'>Services Abroad</NavLink></li>
                            <li><NavLink to='/services/delivery_calculator'>Delivery Calculator</NavLink></li>
                        </ul>
                    </li>
                    <li><NavLink to='/track_order'>Track Order</NavLink></li>
                    <li><NavLink to='/my_account'>My Account</NavLink></li>

                    <li id='support'
                        className={this.state.hoveredElement === 'support' ? 'hover' : ''}
                        onMouseOver={this.handleMouseOver.bind(this)} 
                        onMouseOut={this.handleMouseOut.bind(this)}><NavLink to='/support'>Support</NavLink>
                        <ul className='subMenu'>
                            <li><NavLink to='/support/about_us'>About Us</NavLink></li>
                            <li><NavLink to='/support/offices'>Offices</NavLink></li>
                            <li><NavLink to='/support/FAQs'>FAQs</NavLink></li>
                            <li><NavLink to='/support/contacts'>Contacts</NavLink></li>
                        </ul>
                    </li>
                </ul>

                <Icon id='user' name='user' size="big" link onClick={this.handleUserClick.bind(this)} />

            </header>

        )
    }
}

Header.propTypes = {
    dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
    return {}
}

const connectedHeader = connect(mapStateToProps)(Header)
export { connectedHeader as Header }
