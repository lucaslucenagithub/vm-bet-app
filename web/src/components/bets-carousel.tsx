import React from "react"
import { Carousel } from "react-responsive-carousel"
import Image from "next/image"
import { Box, Typography } from "@mui/material"

import "react-responsive-carousel/lib/styles/carousel.min.css"

const BetsCarousel = (props) => {   

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
        }, {
            name: "Random Name #6",
            description: "Probably the most random thing you have ever seen!",
            image: '/America-MG-team-photo-imago-540x600.webp'
        }, {
            name: "Random Name #6",
            description: "Probably the most random thing you have ever seen!",
            image: '/America-MG-team-photo-imago-540x600.webp'
        }, {
            name: "Random Name #6",
            description: "Probably the most random thing you have ever seen!",
            image: '/America-MG-team-photo-imago-540x600.webp'
        }, {
            name: "Random Name #6",
            description: "Probably the most random thing you have ever seen!",
            image: '/America-MG-team-photo-imago-540x600.webp'
        },
    ]

    const renderItem = (item) => (
        <Box
            className="card-container"
            sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "center",
                position: "relative",
                borderRadius: "10px",
                overflow: "hidden",
                height: 200,
                width: "100%",
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    left: 0,
                    zIndex: 3,
                    width: "50%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 2,
                }}
            >
                <Typography variant="h6">{item.name}</Typography>
                <Typography variant="body1">{item.description}</Typography>
            </Box>
            <Box sx={{ position: "relative", width: "50%", height: "100%" }}>
                <Image
                    src={item.image}
                    alt={item.name}
                    layout="fill"
                    objectFit="cover"
                />
            </Box>
            <Box
                sx={{
                    position: "absolute",
                    left: 0,
                    zIndex: 2,
                    width: "90%",
                    height: "100%",
                }}
            >
                <Image
                    src="/circle-bets-cards-320x160.webp"
                    alt="circle"
                    layout="fill"
                    objectFit="cover"
                />
            </Box>
        </Box>
    )

    return (
        <Carousel
            showArrows={true}
            showThumbs={false}
            infiniteLoop={true}
            showStatus={false}
            showIndicators={false}
            emulateTouch={true}
            centerMode={true}
            centerSlidePercentage={33}
            swipeScrollTolerance={3}
        >
            {data.map((item, index) => (
                <Box mb={1} key={index}>{renderItem(item)}</Box>
            ))}
        </Carousel>
    )
}

export default BetsCarousel