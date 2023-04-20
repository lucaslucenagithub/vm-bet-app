import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Box, Card, Grid } from '@mui/material'
import Image from 'next/image'

export default function BetsCarousel(props) {
    var data = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            image: '/America-MG-team-photo-imago-540x600.webp'
        },
        {
            name: "Random Name #2",
            description: "Probably the most random thing you have ever seen!",
            image: '/America-MG-team-photo-imago-540x600.webp'
        }, {
            name: "Random Name #3",
            description: "Probably the most random thing you have ever seen!",
            image: '/America-MG-team-photo-imago-540x600.webp'
        }, {
            name: "Random Name #4",
            description: "Probably the most random thing you have ever seen!",
            image: '/America-MG-team-photo-imago-540x600.webp'
        }, {
            name: "Random Name #5",
            description: "Probably the most random thing you have ever seen!",
            image: '/America-MG-team-photo-imago-540x600.webp'
        }, {
            name: "Random Name #6",
            description: "Probably the most random thing you have ever seen!",
            image: '/America-MG-team-photo-imago-540x600.webp'
        },
    ]

    const sliderItems: number = 3

    let items: any[] = []

    for (let i = 0; i < data.length; i += sliderItems) {
        if (i % sliderItems === 0) {
            items.unshift(
                <Card
                    raised
                    className="Banner"
                    key={i.toString()}
                    color='background.default'
                    sx={{ backgroundColor: 'background.default', border: 'none', boxShadow: 'none' }}
                >
                    <Box display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} sx={{ height: '100%' }}>
                        {data.slice(i, i + sliderItems).map((da, index) => {
                            return <Item key={index.toString()} item={da} image={da.image} />
                        })}
                    </Box>
                </Card>
            )
        }
    }
    return (
        <Carousel
            autoPlay={false}
            animation="slide"
            indicators={false}
            navButtonsAlwaysVisible={true}
            cycleNavigation
            sx={{ mb: 1 }}
        >
            {items}
        </Carousel>
    )
}

function Item(props) {
    return (
        <Box
            className="bet-carousel-item"
            sx={{
                height: '200px',
                width: '400px',
                marginRight: '5px',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                position: 'relative'
            }}>

            <Image
                alt="circle"
                src={'/circle-bets-cards-320x160.webp'}
                width={320}
                height={200}
                style={{ borderRadius: '10px', position: 'absolute', top: '0', left: '0', zIndex: 1 }}
            />

            <Image
                alt="team"
                src={props.item.image ?? ''}
                width={230}
                height={200}
                style={{ borderRadius: '10px', position: 'absolute', top: '0', right: '0' }}
            />

        </Box>
    )
}