import React from 'react'
import { Grid, Image, Button } from 'semantic-ui-react'
// import { connect } from 'react-redux'
import './MoreThanSection.less'

export class MoreThanSection extends React.Component {

    render() {
        return (
            <section className="more_section">
                <h2>More than Shipping</h2>

                <Grid container columns={3}>
                    <Grid.Column verticalAlign='middle' textAlign='center'>
                        <Image inline src='/images//moving.jpg' />
                        <h4>Package It Right</h4>
                        <div className='content'>
                        The right packaging can cut costs and still keeps your shipments safe. 
                        Learn how to make your packaging more efficient
                        </div>
                        <Button>Read More</Button>

                    </Grid.Column>
                    <Grid.Column verticalAlign='middle' textAlign='center' >
                        <Image inline src='/images/second.jpg' />
                        <h4>On Your Schedule</h4>
                        <div className='content'>
                        Visit Office or thousands of other locations where you already shop,
                        to find the services you need
                        </div>
                        <Button>FAQs</Button>
                    </Grid.Column>
                    <Grid.Column verticalAlign='middle' textAlign='center'>
                        <Image inline src='/images/third.jpg' />
                        <h4>New here?</h4>
                        <div className='content'>
                        Get started with shipping basics, benefits of account creation and other FAQs 
                        for new customers.
                        </div>
                        <Button>Offices</Button>
                    </Grid.Column>
                </Grid>
            </section>
        )

    }
}

// function mapStateToProps(state) {
//     return {};
//             }

//             const wrapperFunc = connect(mapStateToProps);
//             const connectedMoreThan = wrapperFunc(MoreThanSection);

// export {connectedMoreThan as MoreThanSection};


