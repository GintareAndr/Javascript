/* ------------------------------ TASK 4 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */
class Movie {
    constructor (title, director, budget) {
        this.title = title;
        this.director = director;
        this.budget = budget;

    }

    wasExpensive() {
        return (this.budget > 100000000? true : false)
    }
}
  function Movie  (title, director,budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;

    this.wasExpensive = () => {
        return (this.budget > 100000000 ? true : false)
    };
  }

  const movieOne = new Movie("vienas namuose", "melages");
  const movieTwo = new Movie("as tavo", "kapeika");
  const movieThree = new Movie("titanikas", "simpsonai");
  const movieFour = new Movie("kempiniukas", "driftas");

  console.log(movieOne);
  console.log(movieTwo);
  console.log(movieThree);
  console.log(movieFour);
  console.log(movieOne.wasExpensive());
  console.log(movieTwo.wasExpensive());
  console.log(movieThree.wasExpensive());
  console.log(movieFour.wasExpensive());