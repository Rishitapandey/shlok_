import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Card from "./Card";

class CardList extends Component {
  render() {
    console.log(this.props.data);
    return (
     
          <Card
          key={this.props.data.id}
          verse={this.props.data.verse_number}
          chapter={this.props.data.chapter_number}
          text={this.props.data.text}
        />

      
    );
  }
}

export default CardList;
