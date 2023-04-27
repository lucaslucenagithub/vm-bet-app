import React, { useState, useEffect } from "react"
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
        }
    ]

    const [screenSize, setScreenSize] = useState({ width: 0, height: 0 })

    const updateScreenSize = () => {
        setScreenSize({ width: window.innerWidth, height: window.innerHeight })
    }

    useEffect(() => {
        updateScreenSize()

        window.addEventListener('resize', updateScreenSize)

        return () => {
            window.removeEventListener('resize', updateScreenSize)
        }
    }, [])

    const renderItem = (item) => (
        <Box
            component={'div'}
            className="card-container"
            sx={(theme) => ({
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "center",
                position: "relative",
                borderRadius: "10px",
                overflow: "hidden",
                height: 200,
                width: "100%",
                mb: 1,
                [theme.breakpoints.down("lg")]: {
                    width: "95%",
                },
                [theme.breakpoints.down("md")]: {
                    height: "160px",
                }
            })}
        >
            <Box
                sx={(theme) => ({
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
                })}
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
                sx={(theme) => ({
                    position: "absolute",
                    left: 0,
                    zIndex: 2,
                    width: "90%",
                    height: "100%",
                    // [theme.breakpoints.down("lg")]: {
                    //     width: "80%",
                    // }
                })}
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
            showStatus={false}
            showIndicators={true}
            centerMode={true}
            centerSlidePercentage={screenSize.width > 1200 ?
                33.33 : screenSize.width > 900 ?
                    38 : screenSize.width > 600 ?
                        46 : screenSize.width > 350 ?
                            67 : 93.33}
            swipeScrollTolerance={5}
            swipeable={true}
            emulateTouch={true}
            autoFocus={true}
        >
            {data.map((item, index) => (
                renderItem(item)
            ))}
        </Carousel>
    )
}

export default BetsCarousel