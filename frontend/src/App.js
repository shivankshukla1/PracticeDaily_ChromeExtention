import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from './components/Home';
import {Todo} from "./components/Todo";
import {View, view} from "./View";
import { Happy } from './Happy';
function App() {
  return (
      <div>
        <View/>
      </div>
    );
}

export default App;
