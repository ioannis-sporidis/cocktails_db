import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Favourites from './pages/Favourites';
import SingleCocktail from './pages/SingleCocktail';
import Error from './pages/Error';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/favourites'>
          <Favourites />
        </Route>
        <Route path='/cocktail/:id'>
          <SingleCocktail />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
