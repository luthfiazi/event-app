import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const CardEvent = () => (
    <Card>
        <Image src='/images/stevejobs.jpg' wrapped ui={false} />
        <Card.Content>
            <Card.Content extra>
                <a>
                    <Icon name='map marker alternate' />
                         Kota Bandung
                </a>
            </Card.Content>
            <Card.Header>Meeting With CEO</Card.Header>
            <Card.Meta>
                <span className='date'>13 Maret 2021</span>
            </Card.Meta>
            <Card.Content extra>
                <a>
                    <Icon name='user circle' />
                    Luthfi
                </a>
                <a>
                    <Icon name='user circle' />
                    Allan
                </a>
                <a>
                    <Icon name='user circle' />
                    Robin
                </a>
            </Card.Content>
            <Card.Description>
                Lorem lorem Ipsum Lorem lorem Ipsum Lorem lorem Ipsum Lorem lorem Ipsum Lorem lorem Ipsum
      </Card.Description>
        </Card.Content>
    </Card>
)

export default CardEvent