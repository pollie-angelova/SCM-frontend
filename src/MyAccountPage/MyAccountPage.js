import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Header, Page, Footer } from '../_components'
import { Table, Container, Form, Button, Grid, GridColumn } from 'semantic-ui-react'
import './MyAccountPage.less'
import moment from 'moment'

const DELIVERIES = []

const now = new Date().getTime();
const statuses = ['new', 'delivered', 'transit'];
const cities = ['Sofia', 'Plovdiv', 'Burgas', 'Varna', 'Stara Zagora'];
const users = ['John Doe', 'Jane Dee', 'Rudyard Kipling', 'Brad Pitt', 'Megan Fox'];

for (let i = 0; i < 10; i++) {
    DELIVERIES.unshift({
        id: i + 1,
        date: now - i * 3600 * 1000,
        status: statuses[Math.floor(Math.random() * statuses.length)],
        source: cities[Math.floor(Math.random() * cities.length)],
        destination: cities[Math.floor(Math.random() * cities.length)],
        recepient: users[Math.floor(Math.random() * users.length)],
        sender: users[Math.floor(Math.random() * users.length)],
    })
}

class MyAccountPage extends React.Component {

    componentDidMount() {

    }

    renderDelivery(delivery) {
        return (
            <Table.Row>
                <Table.Cell>{moment(delivery.date).calendar()}</Table.Cell>
                <Table.Cell>
                    Sofia
                </Table.Cell>
                <Table.Cell>
                    {delivery.destination}
                    <br />
                    {delivery.recepient}
                </Table.Cell>
                <Table.Cell>{delivery.status}</Table.Cell>
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
                            {DELIVERIES.slice(0, 5).map(this.renderDelivery)}
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
    // const { auth } = state
    return {}
}


const connectedMyAccountPage = connect(mapStateToProps)(MyAccountPage)
export { connectedMyAccountPage as MyAccountPage }
