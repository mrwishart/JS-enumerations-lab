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
  let result = this.films.some((film) => {
    return film.year === year;
  });
  return result;
};

Cinema.prototype.lengthOver = function (length) {
  let result = this.films.every((film) => {
    return film.length >= length;
  });
  return result;
};

Cinema.prototype.totalRunningTime = function () {
  let result = this.films.reduce((total, film) => {
    return total + film.length;
  }, 0);

  return result;
};

Cinema.prototype.filterByProperty = function (property, value) {
  let result = this.films.filter((film) => {
    return film[property] === value;
  });
  return result;
};

module.exports = Cinema;
