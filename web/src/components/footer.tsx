// components/Footer.js

import React from 'react'
import { Box, Container, Grid, Typography, Link } from '@mui/material'
import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import Image from 'next/image'
// import logo from '../public/logo.png'; // Replace this with your logo's import

const Footer = () => {
    return (
        <Box component={'footer'} sx={{
            backgroundColor: '#000',
            zIndex: 50,
            marginTop: '70px',
        }}>
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={4}>
                        {/* <Image src={logo} alt="vm-bet logo" width={100} height={100} className={classes.logo} /> */}
                        <Typography variant="h6" color="#fff" gutterBottom>
                            vm-bet
                        </Typography>
                        <Typography variant="subtitle1" color="#fff">
                            Your one-stop platform for online betting. Enjoy the best odds, exclusive promotions, and an amazing betting experience.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="#fff" gutterBottom>
                            Follow us
                        </Typography>
                        <Link href="https://facebook.com/vmbet" target="_blank" rel="noopener">
                            <Facebook fontSize="large" sx={{mr: 1}} />
                        </Link>
                        <Link href="https://instagram.com/vmbet" target="_blank" rel="noopener">
                            <Instagram fontSize="large" sx={{mr: 1}} />
                        </Link>
                        <Link href="https://twitter.com/vmbet" target="_blank" rel="noopener">
                            <Twitter fontSize="large" sx={{mr: 1}} />
                        </Link>
                    </Grid>
                </Grid>
                <Box mt={5}>
                    <Typography variant="body2" color="#fff" align="center">
                        © {new Date().getFullYear()} vm-bet. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    )
}

export default Footer