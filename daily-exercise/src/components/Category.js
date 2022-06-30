import React from 'react'
import { Stack, Typography } from '@mui/material'
import Icon from './../assets/icons/gym.png';
const Category = ({ item, category, setCategory }) => {
    console.log(item)
    return (
        <Stack type='button' alignItems="center"
            justifyContent="center" className='bodyPart-card'
            sx={{
                background: "#fff", borderBottomLeftRadius: "20px",
                width: '270px',
                height: '280px',
                cursor: "pointer", gap: "47px",
                borderTop: category === item ? '4px solid #ff2625' : ''
            }}
            onClick={() => {
                setCategory(item)
                window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' })
            }}
        >
            <img src={Icon} alt="dumbell" style={{
                width: '40px',
                height: '40px'
            }} />
            <Typography fontSize="24px"
                fontWeight="bold" fontFamily="Alegreya"
                color="#3A1212" textTransform="capitalize">
                {item.name || item}</Typography>


        </Stack>
    )
}

export default Category