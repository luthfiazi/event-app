import React, { Component } from 'react'
import {
    Button,
    Form,
    Input,
    Select,
    TextArea,
} from 'semantic-ui-react'

const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
]

class FormRegistrasi extends Component {
    state = {}

    handleChange = (e, { value }) => this.setState({ value })

    render() {
        const { value } = this.state
        return (
            <Form>
                <Form.Group widths='equal'>
                    <Form.Field
                        control={Input}
                        // label='First name'
                        placeholder='Title'
                    />
                    <Form.Field
                        control={Select}
                        // label='Last name'
                        options={options}
                        placeholder='Location'
                    />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Field
                        control={Select}
                        // label='Gender'
                        options={options}
                        placeholder='Partisipan'
                    />
                    <Form.Field
                        control={Select}
                        // label='Gender'
                        options={options}
                        placeholder='Date'
                    />
                </Form.Group>
                <Form.Field
                    control={TextArea}
                    // label='About'
                    placeholder='Note'
                />
                <Button
                    content="Choose File"
                    labelPosition="left"
                    icon="file"
                    onClick={() => this.fileInputRef.current.click()}
                />
                <input
                    ref={this.fileInputRef}
                    type="file"
                    hidden
                    onChange={this.fileChange}
                />
                {/* <Form.Field control={Button}>Submit</Form.Field> */}
                <Button primary>Submit</Button>
            </Form>
        )
    }
}

export default FormRegistrasi