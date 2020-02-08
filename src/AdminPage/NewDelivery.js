import React from 'react'
import { connect } from 'react-redux'
import { Input, Form, Button } from 'semantic-ui-react'

const NewDelivery = (props) => {


    const availableDrivers = [
        { key: '1', value: 'Pesho', text: 'Pesho' }, // key = id v bazata, value i text imeto
        { key: '2', value: 'Polya', text: 'Polya' },// na shofyora
        { key: '3', value: 'Gogo', text: 'Gogo' },
        { key: '4', value: 'Bogo', text: 'Bogo' },

    ]

    return (
        <Form>
            <Form.Field>
                <label>Sender</label>
                <input placeholder='Sender' />
            </Form.Field>
            <Form.Field>
                <label>Recepient</label>
                <input placeholder='Recepient' />
            </Form.Field>
            <Form.Field>
                <label>Source</label>
                <input placeholder='Source' />
            </Form.Field>
            <Form.Field>
                <label>Destination</label>
                <input placeholder='Destination' />
            </Form.Field>
            <Form.Field>
                <label>Weight</label>
                <Input
                    label={{ basic: true, content: 'kg' }}
                    labelPosition='right'
                    placeholder='Enter weight...'
                />
            </Form.Field>
            <Form.Field>
                <label>Price</label>
                <input placeholder='Price' />
            </Form.Field>
            <Form.Field>
                <label>Driver</label>
                < Form.Dropdown placeholder='Select address'
                    fluid
                    selection
                    options={availableDrivers}
                // onChange={this.onDriverChange.bind(this)}
                />
            </Form.Field>
            <Button type='add' >Add</Button>
        </Form>

    );
}

function mapStateToProps(state) {
    // const { auth } = state
    return {}
}

const connectedNewDelivery = connect(mapStateToProps)(NewDelivery)
export { connectedNewDelivery as NewDelivery }
