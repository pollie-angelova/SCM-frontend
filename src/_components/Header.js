import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Image } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import './Header.less'
import { authActions } from '../_actions/auth.actions'

class Header extends Component {
    state = {}

    handleUserClick(e) {
        e.preventDefault()
        this.props.dispatch(authActions.logout())
    }

    render() {

        return (
            //     <header className='header'>
            //         <NavLink to = '/'><Image className = 'logo' src='/images/visteon_wordmark_orange.png' /></NavLink>
            //         <a href='#' onClick={this.handleUserClick.bind(this)}><Image className = 'user' src= '/images/user_icon.png'/></a>
            //         <ul className='mainMenu'>
            //             <li><NavLink to='/about'>About</NavLink></li>
            //             <li>
            //                 <NavLink to='/services'>Services</NavLink>
            //                 <ul className='subMenu'>
            //                     <li><NavLink to='/services/sso'>Single Sign-On (SSO)</NavLink></li>
            //                     <li><NavLink to='/services/ota'>Over the Air (OTA)</NavLink></li>
            //                     <li><NavLink to='/services/appStore'>Application Store</NavLink></li>
            //                 </ul>
            //             </li>
            //             <li><NavLink to = '/solutions'>Solutions</NavLink></li>
            //             <li><NavLink to = '/case_studies'>Case Studies</NavLink></li>
            //             <li><NavLink to = '/contacts'>Contacts</NavLink></li>
            //         </ul>
            //     </header>

            <header className='header'>

                <a href='#' onClick={this.handleUserClick.bind(this)}><Image className='user' src='/images/user_icon.png' /></a>
                <ul className='mainMenu'>

                    <li><NavLink to='/services'>Services</NavLink>
                        <ul className='subMenu'>
                            <li><NavLink to='/services/in_BG'>In Bulgaria</NavLink></li>
                            <li><NavLink to='/services/abroud'>Services Abroad</NavLink></li>
                            <li><NavLink to='/services/delivery_calculator'>Delivery Calculator</NavLink></li>
                        </ul>
                    </li>
                    <li><NavLink to='/track_order'>Track Order</NavLink></li>
                    <li><NavLink to='/my_account'>My Account</NavLink></li>

                    <li><NavLink to='/support'>Support</NavLink>
                        <ul className='subMenu'>
                            <li><NavLink to='/support/about_us'>About Us</NavLink></li>
                            <li><NavLink to='/support/offices'>Offices</NavLink></li>
                            <li><NavLink to='/support/FAQs'>FAQs</NavLink></li>
                            <li><NavLink to='/support/contacts'>Contacts</NavLink></li>
                        </ul>
                    </li>
                </ul>
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
