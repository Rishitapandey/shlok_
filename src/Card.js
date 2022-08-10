import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { Link } from "react-router-dom";
import Chapter from "./Chapter";
import "./Card.css";
import icon from "./krishan_icon.jpg";
class Card extends Component {
  render() {
    return (
      <>
     {/* <div className='col-4'>  
    
    <div className="card w-75">
          <div className="card-body">
            <h5 className="card-title">Chapter: {this.props.chapter}</h5>
            <h5 className="verse">Verse: {this.props.verse}</h5>

            <p className="card-text">{this.props.text}</p>
         <Link to="/Chapter" state={{ from: this.props.chapter,
        verse:this.props.verse }}className="btn btn-primary" >see More</Link>
        </div>
        </div>
  </div> */}
            <div className="col-4">
              <div className="card m-2">
                <div className="card-body">
                  <h5 className="card-title d-inline">
                    Chapter {this.props.chapter}
                  </h5>
                  <br />
                  <h5 className="verse d-inline">Verse {this.props.verse}</h5>
                  <img
                    style={{ height: "55px", width: "55px" }}
                    className="krishan_icon"
                    src={icon}
                    alt="icon"
                    srcSet=""
                  />
                  <p className="card-text">{this.props.text}</p>
                  <Link 
                    to="/Chapter"
                    state={{
                      from: this.props.chapter,
                      verse: this.props.verse,
                    }}
                    className="btn btn-primary see_more"
                  >
                    see More
                  </Link>
                </div>
              </div>
            </div>
        
      </>
    );
  }
}

export default Card;
