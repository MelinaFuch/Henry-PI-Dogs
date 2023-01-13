import './App.css';
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home/Home';
import LandingPage from './components/LandingPage/LandingPage';
import Create from './components/Create/Create';
import Detail from './components/Detail/Detail';


function App() {
  return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/createdog' component={Create}/>
          <Route exact path='/dogs/:id' component={Detail}/>
        </Switch>
      </div>
  );
}

//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

export default App;
