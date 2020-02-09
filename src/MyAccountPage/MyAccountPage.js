import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Header, Page, Footer } from '../_components'
import { Table, Container, Form, Button, Grid, GridColumn } from 'semantic-ui-react'
import './MyAccountPage.less'
import moment from 'moment'
import { DELIVERY_STATUSES } from '../_constants'
import { deliveryControlActions } from '../_actions/deliverycontrol.actions'

class MyAccountPage extends React.Component {

    componentDidMount() {
        this.props.dispatch(deliveryControlActions.getAllDeliveries());
    }

    renderDelivery(delivery) {

        const deliveryStatus = delivery.history.length
            ? delivery.history[delivery.history.length - 1].name
            : 'new';

        const deliveryStatusLabel = DELIVERY_STATUSES.find(s => s.value === deliveryStatus).text;

        return (
            <Table.Row key={delivery.id}>
                <Table.Cell>{moment(delivery.dateCreated).calendar()}</Table.Cell>
                <Table.Cell>
                    {delivery.senderId.name}
                    <br />
                    {delivery.source.coordinates.join(', ')}
                </Table.Cell>
                <Table.Cell>
                    {delivery.recepientId.name}
                    <br />
                    {delivery.destination.coordinates.join(', ')}
                </Table.Cell>
                <Table.Cell>{deliveryStatusLabel}</Table.Cell>
            </Table.Row>
        )
    }

    render() {
        return (
            <Page clasName='page'>
                <Header />
                <Container className='admin_page'>
                    <h2>My Account</h2>
                    <Grid centered>
                        <GridColumn width={8}>
                            <Form>
                                <Form.Field>
                                    <label>Name</label>
                                    <input placeholder='Polya Angelova' />
                                </Form.Field>
                                <Form.Field>
                                    <label>Email</label>
                                    <input placeholder='polya@scm.com' />
                                </Form.Field>
                                <Form.Field>
                                    <label>Password</label>
                                    <input type="password" placeholder='******' />
                                </Form.Field>
                                <div style={{ textAlign: 'center' }}>
                                    <Button type='submit'>Save</Button>
                                </div>
                            </Form>
                        </GridColumn>
                    </Grid>
                    <br />
                    <br />
                    <Table celled>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Date</Table.HeaderCell>
                                <Table.HeaderCell>Source</Table.HeaderCell>
                                <Table.HeaderCell>Destination</Table.HeaderCell>
                                <Table.HeaderCell>Status</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {this.props.deliveries.reverse().slice(0, 5).reverse().map(this.renderDelivery.bind(this))}
                        </Table.Body>
                    </Table>
                </Container>
                <br />
                <br />
                <Footer />
            </Page>
        )
    }
}

MyAccountPage.propTypes = {
    dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
    const { delivery } = state;
    return {
        deliveries: delivery.deliveries
    }
}


const connectedMyAccountPage = connect(mapStateToProps)(MyAccountPage)
export { connectedMyAccountPage as MyAccountPage }
