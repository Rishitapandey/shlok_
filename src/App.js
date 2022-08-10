
import React ,{Component, useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Form from './Form';
import Home from './Home';
import Footer from './Footer';
import Chapter from './Chapter';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Link } from "react-router-dom";

import Navbar from './Navbar'
class App extends Component {

  // state = {
  //   inputValue : '',
  //   verser : [],
  // };
 
  // modifyOutput = (newData) => {
  //   this.setState({inputValue : '', verses : newData})
  // }
  
  render(){

    return (
      <div>
      <Navbar />
      {/* <Home /> */}
        <Routes>
        <Route exact path="/"element={<Home/>}/>
                  <Route exact path="/Chapter" element={<Chapter/>}/>
            
                </Routes>
                {/* <Form onSubmit={this.modifyOutput} /> */}

        <Footer />

      </div>
    )
  }
  
}

export default App;