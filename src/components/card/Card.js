import React from 'react'
import './Card.css'

const Card = ({id, name, username, email, phone, address:{city}}) =>(
    <main className="card-main">
       <img className="card-main-img" src={`https://robohash.org/${id}?set=set3&size=200x200&bgset=bg2`} alt="Robo portrait"/>
        <em className="card-main-title">{name}</em>
        <q>{username}</q>
        <ul className="card-main-desc">
            <li>{email}</li>
            <li>{phone}</li>
            <li>{city}</li>
        </ul>
    </main>
)

export default Card