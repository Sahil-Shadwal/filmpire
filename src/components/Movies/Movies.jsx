import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, useMediaQuery, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';
import { useGetMoviesQuery } from '../../services/TMDB';
import { FeaturedMovie, MovieList, Pagination } from '../index';

const Movies = () => {
  const [page, setPage] = useState(1);
  const { genreIdOrCategoryName, searchQuery } = useSelector((state) => state.currentGenreOrCategory);
  const { data, error, isFetching } = useGetMoviesQuery({ genreIdOrCategoryName, page, searchQuery });

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
    <div>
      <FeaturedMovie movie={data.results[0]} />
      <MovieList movies={data} numberOfMovies={18} />
      <Pagination currentPage={page} setPage={setPage} totalPages={data.total_pages} />
    </div>
  );
};

export default Movies;
