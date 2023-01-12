import './App.css';
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home/Home';
import LandingPage from './components/LandingPage/LandingPage';


function App() {
  return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route exact path='/home' component={Home}/>
        </Switch>
      </div>
  );
}

//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

export default App;
