import React from "react";
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Forgot from "./Forgot";
import {Quiz} from './components/Quiz'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Java1 from './components/java/Java1'
import Python1 from './components/python/Python1'
import Python2 from './components/python/Python2'
import Python3 from './components/python/Python3'
import Python4 from './components/python/Python4'
import Csharp1 from './components/csharp/Csharp1'
import Cpp1 from './components/cpp/Cpp1'
import Cpp2 from './components/cpp/Cpp2'
import Cpp3 from './components/cpp/Cpp3'
import Cpp4 from './components/cpp/Cpp4'
import Javascript1 from './components/nodejs/Javascript1'
import Javascript2 from './components/nodejs/Javascript2'
import Javascript3 from './components/nodejs/Javascript3'
import Javascript4 from './components/nodejs/Javascript4'

function App(){
    return(
      <Router>
        <Switch>
            <Route path = "/" exact component = {Home} />
            <Route path = "/Login" component = {Login} />
            <Route path = "/Register" component = {Register} />
            <Route path = "/Forgot" component = {Forgot} />
            <Route path = "/Quiz" component = {Quiz} />
            <Route path = "/Cpp1" component = {Cpp1} />
            <Route path = "/Python1" component = {Python1} />
            <Route path = "/Python2" component = {Python2} />
            <Route path = "/Python3" component = {Python3} />
            <Route path = "/Python4" component = {Python4} />
            <Route path = "/Java1" component = {Java1} />
            <Route path = "/Javascript1" component = {Javascript1} />
            <Route path = "/Javascript2" component = {Javascript2} />
            <Route path = "/Javascript3" component = {Javascript3} />
            <Route path = "/Javascript4" component = {Javascript4} />
            <Route path = "/Csharp1" component = {Csharp1} />
            <Route path = "/Cpp2" component = {Cpp2} />
            <Route path = "/Cpp3" component = {Cpp3} />
            <Route path = "/Cpp4" component = {Cpp4} /> 
        </Switch>
      </Router>
    );
}
export default App;