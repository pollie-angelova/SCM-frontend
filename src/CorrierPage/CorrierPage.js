import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Header, Page, Footer } from '../_components'
import { Table, Container,Form } from 'semantic-ui-react'
import './CorrierPage.less'
import moment from 'moment'

const DELIVERIES = []

const now = new Date().getTime();
const statusesArr = ['new', 'delivered', 'transit'];
const cities = ['Sofia', 'Plovdiv', 'Burgas', 'Varna', 'Stara Zagora'];
const users = ['John Doe', 'Jane Dee', 'Rudyard Kipling', 'Brad Pitt', 'Megan Fox'];

for (let i = 0; i < 10; i++) {
    DELIVERIES.unshift({
        id: i + 1,
        date: now - i * 3600 * 1000,
        status: statusesArr[Math.floor(Math.random() * statusesArr.length)],
        source: cities[Math.floor(Math.random() * cities.length)],
        destination: cities[Math.floor(Math.random() * cities.length)],
        recepient: users[Math.floor(Math.random() * users.length)],
        sender: users[Math.floor(Math.random() * users.length)],
    })
}


    const statuses = [
        { key: '1', value: 'new', text: 'new' },
        { key: '2', value: 'awaiting_pickup', text: 'awaiting pickup' },
        { key: '3', value: 'in_transit', text: 'in transit' },
        { key: '4', value: 'awaiting_devivery', text: 'awaiting devivery' },
        {key: '5', value: 'delivered', text: 'delivered' },

      ]

class CorrierPage extends React.Component {

    componentDidMount() {

    }

    renderDelivery(delivery) {
        return (
            <Table.Row>
                <Table.Cell>{moment(delivery.date).calendar()}</Table.Cell>
                <Table.Cell>
                    {delivery.source}
                    <br />
                    {delivery.sender}
                </Table.Cell>
                <Table.Cell>
                    {delivery.destination}
                    <br />
                    {delivery.recepient}
                </Table.Cell>
                <Table.Cell>{delivery.status}</Table.Cell>
                <Table.Cell>
                < Form.Dropdown placeholder='Change Status'
                    fluid
                    selection
                    options={statuses}
                    // onChange={this.onDriverChange.bind(this)}
                    />
                </Table.Cell>
            </Table.Row>
        )
    }

    render() {
        return (
            <Page clasName='page'>
                <Header />
                <Container className='admin_page'>
                    <h2>Administration - Courier</h2>
                    <Table celled>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Date</Table.HeaderCell>
                                <Table.HeaderCell>Source</Table.HeaderCell>
                                <Table.HeaderCell>Destination</Table.HeaderCell>
                                <Table.HeaderCell>Status</Table.HeaderCell>
                                <Table.HeaderCell></Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {DELIVERIES.map(this.renderDelivery)}
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

CorrierPage.propTypes = {
    dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
    // const { auth } = state
    return {}
}


const connectedCorrierPage = connect(mapStateToProps)(CorrierPage)
export { connectedCorrierPage as CorrierPage }
