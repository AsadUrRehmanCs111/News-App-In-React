import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  apiKey=process.env.REACT_APP_NEWS_API
  
  render() {
    return (
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<News  apiKey={this.apiKey} country="in" category="general"/>} /> 
        <Route path="business" element={<News key="business" apiKey={this.apiKey} country="in" category="business"/>} />
        <Route path="entertainment" element={<News key="entertainment" apiKey={this.apiKey} country="in" category="entertainment"/>} />
        <Route path="general" element={<News key="general" apiKey={this.apiKey} country="in" category="general"/>} />
        <Route path="health" element={<News key= "health" apiKey={this.apiKey} country="in" category="health"/>} />
        <Route path="science" element={<News key="science" apiKey={this.apiKey} country="in" category="science"/>} />
        <Route path="sports" element={<News key="sports"  apiKey={this.apiKey} country="in" category="sports"/>} /> 
        <Route path="technology" element={<News key="technology" apiKey={this.apiKey} country="in" category="technology"/>} />  
        
      </Routes>
      </BrowserRouter>
    );
  }
}
