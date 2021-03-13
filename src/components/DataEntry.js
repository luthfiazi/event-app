import React from 'react'
import { Icon, Menu, Table } from 'semantic-ui-react'
import Cari from './Cari'

const DataEntry = () => (
    <div>
        <Cari />
        <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>No</Table.HeaderCell>
                    <Table.HeaderCell>Title</Table.HeaderCell>
                    <Table.HeaderCell>Location</Table.HeaderCell>
                    <Table.HeaderCell>Date</Table.HeaderCell>
                    <Table.HeaderCell>Participan</Table.HeaderCell>
                    <Table.HeaderCell>Note</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                <Table.Row>
                    <Table.Cell>
                        {/* <Label ribbon>First</Label> */}1
                    </Table.Cell>
                    <Table.Cell>Frontend</Table.Cell>
                    <Table.Cell>Bandung</Table.Cell>
                    <Table.Cell>12-12-2021</Table.Cell>
                    <Table.Cell>Luthfi</Table.Cell>
                    <Table.Cell>See You</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>2</Table.Cell>
                    <Table.Cell>Frontend</Table.Cell>
                    <Table.Cell>Jakarta</Table.Cell>
                    <Table.Cell>12-12-2021</Table.Cell>
                    <Table.Cell>Robin</Table.Cell>
                    <Table.Cell>See You</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>3</Table.Cell>
                    <Table.Cell>Frontend</Table.Cell>
                    <Table.Cell>Bali</Table.Cell>
                    <Table.Cell>12-12-2021</Table.Cell>
                    <Table.Cell>Bani</Table.Cell>
                    <Table.Cell>See You</Table.Cell>
                </Table.Row>
            </Table.Body>

            <Table.Footer>
                <Table.Row>
                    <Table.HeaderCell colSpan='6'>
                        <Menu floated='right' pagination>
                            <Menu.Item as='a' icon>
                                <Icon name='chevron left' />
                            </Menu.Item>
                            <Menu.Item as='a'>1</Menu.Item>
                            <Menu.Item as='a'>2</Menu.Item>
                            <Menu.Item as='a'>3</Menu.Item>
                            <Menu.Item as='a'>4</Menu.Item>
                            <Menu.Item as='a' icon>
                                <Icon name='chevron right' />
                            </Menu.Item>
                        </Menu>
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer>
        </Table>
    </div>
)

export default DataEntry