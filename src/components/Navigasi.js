import React from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'


function Navigasi() {
    // state = { activeItem: 'Nastha-Event' }

    // handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    // render() {
    //     const { activeItem } = this.state

    return (
        <Segment inverted>
            <Menu inverted pointing secondary>
                <Menu.Item
                    as={NavLink} to='/'
                    name='Nastha-Event'
                // active={activeItem === 'Nastha-Event'}
                // onClick={this.handleItemClick}
                />
                <Menu.Item
                    as={NavLink} to='Formulir'
                    name='Add Event'
                // active={activeItem === 'Add Event'}
                // onClick={this.handleItemClick}
                />
                <Menu.Item
                    as={NavLink} to='Dashboard'
                    name='Dashboard'
                // active={activeItem === 'Dashboard'}
                // onClick={this.handleItemClick}
                />
            </Menu>
        </Segment>
    )
}
// }

export default Navigasi

