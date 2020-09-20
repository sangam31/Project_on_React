import React from 'react'
import CardItems from './CardItems'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>
                Check out these EPIC Destinations!
            </h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItems
                            src='images/img-9.jpg'
                            text='Explore thenhidden waterfall deep inside the Amazon Jungle'
                            label='Advanture'
                            path='/services' 
                        />
                        <CardItems
                            src='images/img-2.jpg'
                            text='Travel through the Islands of Bali in a private Cruise'
                            label='Luxury'
                            path='/services' 
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItems
                            src='images/img-3.jpg'
                            text='Set Sail in the Atlantic Ocean visiting Uncharted Water'
                            label='Mystery'
                            path='/services' 
                        />
                        <CardItems
                            src='images/img-6.jpg'
                            text='Remember the path you cross #travel'
                            label='CrossPath'
                            path='/products' 
                        />
                        <CardItems
                            src='images/img-8.jpg'
                            text='Ride through the Sahara Desert on a guided camel tour'
                            label='Adrenaline'
                            path='/services' 
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
