import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, useMediaQuery, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';
import { useGetMoviesQuery } from '../../services/TMDB';
import MovieList from '../MovieList/MoviesList';

const Movies = () => {
  const [page, setPage] = useState(1);
  const { genreIdOrCategoryName } = useSelector((state) => state.currentGenreOrCategory);
  const { data, error, isFetching } = useGetMoviesQuery({ genreIdOrCategoryName, page });

  if (isFetching) {
    return (
      <Box display="flex" alignItems="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  if (!data.results.length) {
    return (
      <Box display="flex" alignItems="center" mt="20px">
        <Typography variant="h4">No movies found that matches that name.
          <br />
          Please search for something else.
        </Typography>
      </Box>
    );
  }
  if (error) return <div>Something went wrong</div>;

  return (
    <div><MovieList movies={data} /></div>
  );
};

export default Movies;
