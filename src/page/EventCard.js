import React from 'react'
import { Card, Container } from 'semantic-ui-react'
import CardEvent from '../components/CardEvent'

export default function EventCard() {
    return (
        <div>
            <Container>
                <Card.Group>
                    <CardEvent />
                    <CardEvent />
                    <CardEvent />
                    <CardEvent />
                    <CardEvent />
                    <CardEvent />
                </Card.Group>
            </Container>
        </div>
    )
}
