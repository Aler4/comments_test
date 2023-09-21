import React from 'react';
import logo from './logo.svg';
import './App.css';
import {AsideComponent, CommentsView, ItemsView} from "./components";
import {activeUserSelector} from "./redux/selectors";
import {useSelector} from "react-redux";
import {User} from "./types";
let user = {id:  1223124, name: 'shora2',comments: ['asdasdqwerq2', 'purapup2']};

function App() {
    const activeUser = useSelector(activeUserSelector)
  return (
    <div className="App">
                <AsideComponent />
            <div className="content">
                <ItemsView />
                <CommentsView/>
            </div>

    </div>
  );
}

export default App;
