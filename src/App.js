import React, { Component } from 'react';
//import logo from './logo.svg';
//import { Navbar,NavbarBrand } from 'reactstrap';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {

  //constructor(props){
  //  super(props);
//
  //  this.state={
  //    dishes: DISHES
  //  };
//
  //}
  render(){ 
    return (
      <BrowserRouter>
        <div >
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
