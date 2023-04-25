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

    const sliderItems: number = 4

    let items: any[] = []

    for (let i = 0; i < data.length; i += sliderItems) {
        if (i % sliderItems === 0) {
            items.unshift(
                <Card
                    raised
                    className="Banner"
                    key={i.toString()}
                    color='background.default'
                    sx={{ height: 150, backgroundColor: 'background.default', border: 'none', boxShadow: 'none', display: 'flex', justifyContent: 'space-between' }}
                >
                    <Box display={'flex'} >
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
            sx={(theme) => ({
                [theme.breakpoints.up("xs")]: {
                    height: "160px",
                    width: "250px",
                },
                [theme.breakpoints.up("md")]: {
                    height: "200px",
                    width: "400px",
                },
                marginRight: "5px",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                position: "relative",
            })}
        >
            <Box
                component="div"
                sx={(theme) => ({
                    width: 160,
                    height: 200,
                    borderRadius: "10px",
                    overflow: "hidden",
                    [theme.breakpoints.up("md")]: {
                        width: 320,
                        height: 200,
                    },
                    zIndex: 1,
                })}
            >
                <Image
                    alt="circle"
                    src="/circle-bets-cards-320x160.webp"
                    fill
                    style={{ objectFit: "cover" }}
                />
            </Box>

            <Box
                component="div"
                sx={(theme) => ({
                    width: 120,
                    height: 200,
                    borderRadius: "10px",
                    overflow: "hidden",
                    [theme.breakpoints.up("md")]: {
                        width: 230,
                        height: 200,
                    },
                })}
            >
                <Image
                    alt="team"
                    src={props.item.image ?? ""}
                    fill
                    style={{ objectFit: "cover" }}
                />
            </Box>
        </Box>
    )
}