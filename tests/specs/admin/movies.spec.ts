import { runQuery } from '@actions/db/runQuery';
import { test } from '@contexts/appContexts';

import moviesData from '@fixtures/data/movies.json';

test('Admin can add a movie', async ({ login, movies }) => {
  const movie = moviesData.guerra_mundial_z;
  await runQuery(`DELETE FROM movies WHERE title = '${movie.title}'`);

  await login.open();
  await login.submitLoginForm();
  await movies.checkLoggedIn();

  await movies.create(
    movie.title,
    movie.overview,
    movie.company,
    String(movie.releaseYear)
  );
});

test('Admin cannot add a movie with empty data', async ({
  login,
  movies,
}) => {
  await login.open();
  await login.submitLoginForm();

  await movies.checkLoggedIn();

  await movies.gotoForm();
  await movies.submit();

  await movies.checkAlertHasText([
    /informe o título/i,
    /informe a sinopse/i,
    /informe a empresa/i,
    /informe o ano/i,
  ]);
});
