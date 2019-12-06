import React from 'react'
import Card from '../card/Card'

const CardList = ({users}) => (
    <React.Fragment>
        {
            users.map(user => <Card key={user.id} {...user}/>)
        }
    </React.Fragment>
)

export default CardList