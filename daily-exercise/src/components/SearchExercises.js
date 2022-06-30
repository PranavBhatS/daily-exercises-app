import { Button, Stack, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizantalScollbar from './HorizantalScollbar';

const SearchExercises = ({ setExercises, selectedCategory, setSelectedCategory }) => {
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState([]);
    useEffect(() => {
        const exercisesData = async () => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
            setCategory(['All', ...bodyPartsData])
        }
        exercisesData();
    }, [])
    const handlerSearch = async () => {
        if (search) {
            const exerciseData = await fetchData('exercises', exerciseOptions);
            const searchedExercises = exerciseData.filter(exercise => {
                return exercise.name.toLowerCase().includes(search)
                    || exercise.equipment.toLowerCase().includes(search)
                    || exercise.bodyPart.toLowerCase().includes(search)
                    || exercise.target.toLowerCase().includes(search)
            })
            setSearch('');
            setExercises(searchedExercises);
        }
    }
    return (
        <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
            <Typography
                fontWeight={700}
                sx={{
                    fontSize: { lg: '44px', xs: '30px' }
                }}
                mb='50px'
                textAlign='center'
            >Awesome Exercises You <br /> Should Know</Typography>
            <Box position="relative" mb="72px">
                <TextField
                    sx={{
                        input: {
                            fontWeight: '700',
                            border: 'none',
                            borderRadius: '14px 0px',
                        },
                        width: {
                            lg: '800px', xs: '350px'
                        },
                        backgroundColor: '#fff',
                        borderRadius: '4px'
                    }}
                    height="76px"
                    value={search}
                    onChange={e => setSearch(e.target.value.toLowerCase())}
                    placeholder="Search Exercises"
                    type="text"
                />
                <Button className="seach-btn"
                    sx={{
                        bgcolor: '#ff2625',
                        color: '#fff',
                        textTransform: 'none',
                        width: { lg: '175px', xs: '80px' },
                        fontSize: { lg: '20px', xs: '14px' },
                        height: '56px',
                        position: 'absolute',
                        right: '0'
                    }}
                    onClick={handlerSearch}
                >
                    Search
                </Button>
            </Box>
            <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
                <HorizantalScollbar data={category}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory} />
            </Box>
        </Stack>
    )
}

export default SearchExercises