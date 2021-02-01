import React from 'react'
import MyForm from './Components/Form'
import "./App.css"
import {Typography, AppBar, Toolbar} from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h4" align="center">CREATE NEW ACCOUNT</Typography>
        </Toolbar>
      </AppBar>
      <MyForm />
    </div>
  )
}

export default App
