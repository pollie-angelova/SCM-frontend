import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
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

// const GridColumnsFooter = () => (
//   <Grid className='footer-grid'>
//     <Grid.Row>
//       <Grid.Column width={7}>
//         <Image className='logo-footer' fluid size='medium' src='/images/Visteon_wordmark_white.png' />
//       </Grid.Column>
//       <Grid.Column width={3}>
//         <ul>
//           <li className='h2-column'>Services
//             <ul>
//               <li className='h3-column'>Single Sign-on</li>
//               <li className='h3-column'>Over the Air</li>
//               <li className='h3-column'>Application Store</li>
//             </ul>
//           </li>
//         </ul>

//       </Grid.Column>
//       <Grid.Column width={3}>
//         <ul>
//           <li>
//             Solutions
//               <ul>
//               <li>Telemetry</li>
//               <li>Updatability</li>
//               <li>Cognitive Services</li>
//             </ul>
//           </li>
//         </ul>
//       </Grid.Column>
//       <Grid.Column width={3}>
//         <ul>
//           <li className="h2-column-last"> Contacts</li>
//           <li className="h2-column-last"> MyVisteonProfile</li>
//         </ul>
//       </Grid.Column>
//     </Grid.Row>
//   </Grid>


const GridColumnsFooter = () => (
  <Grid className='footer-grid'>
    <Grid.Row>
      <Grid.Column width={6}>
        <Image className='logo-footer' size='medium' src='/images/Visteon_wordmark_white.png' />
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
          <li><button className="ui icon button"><i aria-hidden="true" className="chevron up"></i></button></li>
        </ul>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)



