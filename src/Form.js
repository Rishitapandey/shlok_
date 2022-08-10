
import React ,{Component, useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import CardList from './CardList';
import BackGround from './BackGround';
import "./Form.css";

class Form extends Component {
   state = {inputValue : '' , responseVerse : null};
   

   handleSubmit = async (event) => {
    event.preventDefault();
    const updatedResponseVerse = await axios.get('https://api.bhagavadgita.io/v2/search', {
        params: {
            'query': this.state.inputValue
        },
        headers: {
            'accept': 'application/json',
            'X-API-KEY': 'gita-api-key!'
        }
    });  
       
    
    this.setState({inputValue : '' , responseVerse : updatedResponseVerse});   
    }; //handleSubmit closing

    
    render() {
      // console.log(this.state.responseVerse);
    return (
        <div>
              
        <div className="search-box">
        <form class="d-flex  ">
          <input
            class="form-control me-2"
            // type="search"
            placeholder="Search for shlok"
            aria-label="Search"
            type="text"
            onChange={event => this.setState({inputValue : event.target.value})}
            // placeholder="" 
            required
          />
          <button class="btn btn-danger" type="submit" onClick={this.handleSubmit}>
            search
          </button>
        </form>
      </div>
       <div>
        <div className="container">
          <div className="row">
          {this.state.responseVerse !== null ? (this.state.responseVerse.data.map(info => (<CardList data={info}/>))) : <BackGround />} 

          </div>
        </div>
    </div>
        </div>
    )

    
 
} 



}

export default Form;