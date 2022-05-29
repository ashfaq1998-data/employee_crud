import logo from './logo.svg';
import './App.css';

import ListEmployeeComponent from './component/ListEmployeeComponent';
import HeaderComponent from './component/HeaderComponent';
import FooterComponent from './component/FooterComponent';
import UpdateEmployeeComponent from './component/UpdateEmployeeComponent';
import CreateEmployeeComponent from './component/CreateEmployeeComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        
          <HeaderComponent></HeaderComponent>
          <div className="container">
            <Switch>
              <Route path="/" exact component={ListEmployeeComponent} />
              
              <Route path="/employees" exact component={ListEmployeeComponent} />
              <Route path="/add-employee" component={CreateEmployeeComponent} />
              <Route path="/update-employee/:id" component={UpdateEmployeeComponent} />
              
            </Switch>
          </div>
          <FooterComponent></FooterComponent>
        
      </Router>
    </div>
  );
}

export default App;
