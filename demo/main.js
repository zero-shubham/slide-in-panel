import "./styles.css";

import ReactDOM from 'react-dom';
import React from 'react';

import Container from "slide-in-panel/dist/container";

import Page from "./Components/page";
import Navbar from  "./Components/navbar";

const jsx = (
    <Container canvas={<Page/>} panel={<Navbar />} canvasStyle={{border: "10px solid green"}}/>
);

ReactDOM.render(jsx, document.getElementById("root"));
