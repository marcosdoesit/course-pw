import { test } from '@support/index';
import { runQuery } from '@support/db';

import moviesData from '@support/fixtures/movies.json';

test('Admin can add a movie', async ({ page }) => {
  const movie = moviesData.guerra_mundial_z;
  await runQuery(`DELETE FROM movies WHERE title = '${movie.title}'`);

  await page.login.open();
  await page.login.submitLoginForm();
  await page.movies.checkLoggedIn();

  await page.movies.create(
    movie.title,
    movie.overview,
    movie.company,
    String(movie.releaseYear)
  );
});
