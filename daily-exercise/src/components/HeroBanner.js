import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import heroBannerImage from './../assets/images/banner.png'
const HeroBanner = () => {
    return (
        <Box sx={{
            mt: {
                lg: '212px', xs: '70px'
            }, ml: {
                sm: '50px'
            },
        }} position="relative" p="20px">
            <Typography color="#ff2625" fontWeight="600" fontSize="28px">
                Fitness Club
            </Typography>
            <Typography fontWeight="700" sx={{
                fontSize: { lg: '44px', xs: '40px' }
            }} mt="24px" mb="34px">
                Sweat, smile <br /> & Repeat
            </Typography>
            <Typography fontSize="22px" lineHeight="45px" mb={4}>
                Checkout the most effective exercises.
            </Typography>
            <Button variant='contained' color='error' sx={{
                backgroundColor: "#ff2625",
                padding: "10px",
            }} href="#exercise">Explore exercises</Button>
            <Typography color="#ff2625" fontSize='200px' fontWeight="200"
                sx={{ opacity: 0.1, display: { lg: 'block', xs: 'none' } }}>
                Exercises
            </Typography>
            <img src={heroBannerImage} alt="herobannerimage" className='hero-banner-img' />
        </Box>
    )
}

export default HeroBanner