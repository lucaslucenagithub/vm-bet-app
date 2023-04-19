import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Box, Card, Grid } from '@mui/material'

export default function BetsCarousel(props) {
    var data = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            content: [{
                name: "Random Name #2",
                description: "Hello World!"
            },
            {
                name: "Random Name #2",
                description: "Hello World!"
            }]
        },
        {
            name: "Random Name #2",
            description: "Probably the most random thing you have ever seen!",
            content: [{
                name: "Random Name #2",
                description: "Hello World!"
            },
            {
                name: "Random Name #2",
                description: "Hello World!"
            }]
        }, {
            name: "Random Name #3",
            description: "Probably the most random thing you have ever seen!",
            content: [{
                name: "Random Name #2",
                description: "Hello World!"
            },
            {
                name: "Random Name #2",
                description: "Hello World!"
            }]
        }, {
            name: "Random Name #4",
            description: "Probably the most random thing you have ever seen!",
            content: [{
                name: "Random Name #2",
                description: "Hello World!"
            },
            {
                name: "Random Name #2",
                description: "Hello World!"
            }]
        }, {
            name: "Random Name #5",
            description: "Probably the most random thing you have ever seen!",
            content: [{
                name: "Random Name #2",
                description: "Hello World!"
            },
            {
                name: "Random Name #2",
                description: "Hello World!"
            }]
        }, {
            name: "Random Name #6",
            description: "Probably the most random thing you have ever seen!",
            content: [{
                name: "Random Name #2",
                description: "Hello World!"
            },
            {
                name: "Random Name #2",
                description: "Hello World!"
            }]
        },
    ]

    const sliderItems: number = 3

    let items = []

    for (let i = 0; i < data.length; i += sliderItems) {
        if (i % sliderItems === 0) {
            items.unshift(
                <Card
                    raised
                    className="Banner"
                    key={i.toString()}
                    color='secondary.main'
                    sx={{ backgroundColor: 'secondary.main', border:  'none', boxShadow: 'none' }}
                >
                    <Box display={'flex'}>
                        {data.slice(i, i + sliderItems).map((da, index) => {
                            return <Item key={index.toString()} item={da} />
                        })}
                    </Box>
                </Card>
            )   
        }
    }
    return (
        <Box width={'100%'} mb={2}>
            <Carousel
                autoPlay={false}
                animation="slide"
                indicators={false}
                navButtonsAlwaysVisible={true}
                cycleNavigation
            >
                {items}
            </Carousel>
        </Box>
    );
}

function Item(props) {
    return (
        <Paper sx={{ padding: '10px', height: '200px', marginRight: '5px', marginTop: '5px' }}>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}