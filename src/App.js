import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';
import ListEmployees from './components/ListEmployees';
import { GlobalProvider } from './context/GlobalState';
function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <label>Employee Management</label>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/add" component={AddEmployee} exact />
          <Route path="/edit/:id" component={EditEmployee} exact />
          <Route path="/list" component={ListEmployees} exact />
        </Switch>
      </div>
    </GlobalProvider>

  );
}

export default App;