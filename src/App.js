import './App.css';
import Nav from './components/Navbar/Nav';
import Home from './components/Home/Home';
import About from './components/About/About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
