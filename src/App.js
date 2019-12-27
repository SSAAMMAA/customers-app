import React, {Component} from 'react';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {

  renderHome = () => <h1>Home</h1>;

  renderCustomerContainer = () => <h1>Customer Container</h1>;
  
  renderCustomerListContainer = () => <h1>Customer List Container</h1>;

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
