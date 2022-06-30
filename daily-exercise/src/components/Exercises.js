import { Box, Pagination, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard'

const Exercises = ({ setExercises, exercises, selectedCategory }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 12;
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercise = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (selectedCategory === 'All') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${selectedCategory}`, exerciseOptions);
      }

      setExercises(exercisesData);
    }
    fetchExercisesData()
  }, [selectedCategory]);

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: '1800', behavior: 'smooth' })
  }
  return (
    <Box id='Exercises' sx={{ mt: { lg: '110px' } }}
      mt={'50px'}
      p='20px'
    >
      <Typography variant='h3' mb='46px'>
        Showing Results {exercises.length > 0 ? `( ${indexOfFirstExercise + 1}-${indexOfLastExercise} of ${exercises.length - 1})` : ''}
      </Typography>
      <Stack direction='row'
        sx={{
          gap: { lg: '110px', xs: '50px' }
        }}
        flexWrap='wrap'
        justifyContent={'center'}
      >
        {currentExercise.map((exercise) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > exercisesPerPage && (
          <Pagination color='standard'
            shape='rounded'
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size={'large'}
          />
        )}
      </Stack>
    </Box>
  )
}

export default Exercises