import './App.scss';
import MovieClass from './movie-class/index.jsx';
import MovieFunction from './movie-function/movie.jsx';

// API KEY
// 84e7317b

function App() {
  // const person = {
  //   name: 'Andrzej',
  //   lastName: 'Maćkowski'
  // }

  const movies = [
    {
      title: 'Harry Potter',
      genre: 'fantasy',
      year: 2001
    },
    {
      title: 'Król Lew',
      genre: 'horror',
      year: 1994
    },
    {
      title: 'Shrek',
      genre: 'animated',
      year: 2001
    },
    {
      title: 'Matrix',
      genre: 'scifi',
      year: 1999
    }
  ]

  return (
    <div className="App">
      {/* <h1>Hello {person.name} {person.lastName}</h1> */}
      <MovieClass movie={movies[0]} />
      <MovieFunction/>
      </div>
  );
}
 

//   const formatName = (person) => {
//     if (person) return `${person.name} ${person.lastName}`
//     else return 'I do not know You'
//   };

// return (
//     <div className="App">
//     <h1>Hello, {formatName(person)}</h1>
//     <br />
//     <h2>Hello, {formatName()}</h2>
//   </div>
//   );



export default App;
