import {Switch, Route} from 'react-router-dom'
import './App.css'
import HomePage from './components/HomePage'
import IndividualBook from './components/IndividualBook'

function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/book/:id">
        <IndividualBook />
      </Route>
    </Switch>
      
    </div>
  );
}

export default App;
