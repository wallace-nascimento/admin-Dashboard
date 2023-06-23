import { useContext } from "react";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom"

import Table2 from './components/table/Table';

import './style/dark.scss';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import List from './pages/list/List';
import Single from './pages/single/Single';
import New from './pages/new/New';
import { productInputs, userInputs } from "./formSource";
import { DarkModeContext } from "./components/context/darkModelContext";

function App() {

  const {darkMode} = useContext(DarkModeContext)

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <HashRouter>
        <Routes>
          <Route path="/">
            <Route index  element={<Home /> } />
            <Route path="login" element={ <Login/> } />
            <Route path="users">
              <Route index element={<List/>} />
              <Route path=":usersId" element={<Single/>} />
              <Route path="new" element={<New inputs={userInputs} title="Add New User" />} />
            </Route>
            <Route path="/products/new"  element={<New inputs={productInputs} title="Add New Product" />}/>
              
            
          </Route>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
