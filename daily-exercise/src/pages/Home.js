import { Box } from '@mui/material'
import React, { useState } from 'react'
import Exercises from '../components/Exercises';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [exercises, setExercises] = useState([]);
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Exercises
        setExercises={setExercises}
        selectedCategory={selectedCategory}
        exercises={exercises}
      />
    </Box>
  )
}

export default Home;