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

module.exports = Cinema;
