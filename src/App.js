import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomeContainer from './containers/HomeContainer';
import CustomersContainer from './containers/CustomersContainer';

class App extends Component {

  renderHome = () => <HomeContainer/>;

  renderCustomerContainer = () => <h1>Customer Container</h1>;
  
  renderCustomerListContainer = () => <CustomersContainer/>

  renderCustomerNewContainer = () => <h1>Customer New Container</h1>;

  
  
  render(){
    return (
      <Router>

        {/* Ruter solo puede tener un elemento, no puede haber por ejemplo dos div */}
        <div className="App">
          <Route exact path="/" component={this.renderHome}/>
          <Route exact path="/customers" component={this.renderCustomerListContainer}/>
          <Switch>
           {/*ante la primer coincidencia valida utiliza esa  */}
            <Route path="/customers/new" component={this.renderCustomerNewContainer}/>
            <Route path="/customers/:dni" component={this.renderCustomerContainer}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
