import React, { Component, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Chapter.css"
import axios from "axios";
function Chapter() {
  const location = useLocation();
  const { from } = location.state;
  const { verse } = location.state;
  const [textData, setData] = useState("");
  const [transData, setTransData] = useState([]);

  const urlData = `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${from}/verses/${verse}/`;

  const options = {
    method: "GET",
    url: urlData,
    headers: {
      "X-RapidAPI-Key": "d383b78e79msh79d74254afe3a3ap11c7eajsnef8ffd99ae04",
      "X-RapidAPI-Host": "bhagavad-gita3.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      setData(response.data);
      setTransData(response.data.translations);
      var data = response.data.translations;
      var loopData = "";
      var i;
      for (i = 0; i < data.length; i++) {
        loopData += `<p>${data[i].description}</p>`;
      }
      setTransData({ loopData });
      console.log(loopData);
    })
    .catch(function (error) {
      console.error(error);
    });

  return (
    <div>
      <div className="container chapter-box m-5 p-5 text-center">
        <div className="row">
          <h4 className = "shlok-chapter">Chapter: {from}</h4>
          <h4 className = "verse">Verse:{verse}</h4>
          <h4 className = "shlok">Shlok</h4>
          <p className = "shlok-p p-2">{textData.text}</p>
          <h4 className = "translation">Translations</h4>
          <p dangerouslySetInnerHTML={{ __html: transData.loopData }}></p>
          <h4  className = "transLiteration">TransLiteration</h4>
          <p>{textData.transliteration}</p>
          <h4 className = "Word-Meaning">Word-Meaning</h4>
          <p  className = "Word-Meaning-p">{textData.word_meanings}</p>
        </div>
      </div>
    </div>
  );
}

export default Chapter;
