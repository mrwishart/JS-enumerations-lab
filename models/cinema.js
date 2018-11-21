const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function () {
  let result = this.films.map((film) => {
    return film.title;
  })
  return result;
};

Cinema.prototype.findFilmByTitle = function (title) {
  let result = this.films.find((film) => {
    return film.title === title;
  });
  return result;
};

Cinema.prototype.filterByGenre = function (genre) {
  let result = this.films.filter((film) => {
    return film.genre === genre;
  });
  return result;
};

Cinema.prototype.isFilmInYear = function (year) {
  // let result = this.films.reduce((accum, film) => {
  //   return (accum || film.year === year);
  // }, false);

  let result = this.films.some((film) => {
    return film.year === year;
  })

  return result;
};

module.exports = Cinema;
