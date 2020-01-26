import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button, Form, Grid, Segment } from 'semantic-ui-react'
import { Header, Page, Footer } from '../_components'
import { MapContainer } from '../_components'
import './CalculateDeliveryPage.less'

class CalculateDeliveryPage extends React.Component {

    render() {
        return (
            <Page clasName='page'>
                <Header />
                <div className="calculate_form">
                    <Segment placeholder >
                        <Grid columns={2} stretched>
                            <Grid.Column verticalAlign='middle' width={6}>
                                <Form>
                                    <Form.Input label='Source Address:' />
                                    <Form.Input label='Destination Address:' />
                                    <Button content='Calculate' primary />
                                </Form>
                            </Grid.Column>

                            <Grid.Column verticalAlign='middle' width={10}>
                                <div className='calculate_map'>
                                    <MapContainer />
                                </div>
                            </Grid.Column>

                        </Grid>
                    </Segment>
                </div>
                <Footer />
            </Page>
        )
    }
}

CalculateDeliveryPage.propTypes = {
    dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
    return {}
}


const connectedCalculateDeliveryPage = connect(mapStateToProps)(CalculateDeliveryPage)
export { connectedCalculateDeliveryPage as CalculateDeliveryPage }
