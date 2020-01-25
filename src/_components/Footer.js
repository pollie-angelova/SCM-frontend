import React from 'react'
import { Grid, Icon } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";
import './Footer.less'

export class Footer extends React.Component {
  render() {
    return (
      <section className='fluid footer'>
        <GridColumnsFooter />
      </section>
    );
  }
}

const GridColumnsFooter = () => (
  <Grid className='footer-grid'>
    <Grid.Row>
      <Grid.Column width={5}>
      <NavLink to='/'><Icon id ="logo-footer" name='dropbox' size="massive"  link /></NavLink>
      </Grid.Column>
      <Grid.Column width={2}>
        <ul>
          <li className='h2-column'>Services</li>
        </ul>

      </Grid.Column>
      <Grid.Column width={2}>
        <ul>
          <li>My Acount</li>
        </ul>
      </Grid.Column>
      <Grid.Column width={2}>
        <ul>
          <li className="h2-column">FAQs</li>
        </ul>
      </Grid.Column>
      <Grid.Column width={2}>
        <ul>
          <li className="h2-column">Contact Us</li>
        </ul>
      </Grid.Column>
      <Grid.Column width={2}>
        <ul>
          <li><ScrollUpButton style = {{"fill": "rgb(255,255,255)"}}/></li>
          {/* <li><button className="ui icon button"><i aria-hidden="true" className="chevron up"></i></button></li> */}
        </ul>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)



