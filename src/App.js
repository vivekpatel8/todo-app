// import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/header';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import { AboutUs } from './MyComponents/AboutUs';
import { useState, useEffect } from 'react';
import { AddItem } from './MyComponents/AddItem';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let intitlist = JSON.parse(localStorage.getItem("list"));
  const Additem = (title, desc) => {
    const obj = { title: title, des: desc };
    setlist([...list, obj]);
  }

  const OnDelete = (item) => {
    setlist(list.filter((e) => {
      return e !== item;
    }));
  }

  const [list, setlist] = useState(
    intitlist
  );
  
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <>
      <Router>
        <Header tittle="My todo list" searchBar={true} />
        <Switch>
          <Route path="/aboutus">
            <AboutUs/>
          </Route>
          <Route path="/">
          <AddItem Additem={Additem} />
          <Todos arr={list} OnDelete={OnDelete} />
          </Route>
        </Switch>        
        <Footer />
      </Router>
    </>
  );
}

export default App;