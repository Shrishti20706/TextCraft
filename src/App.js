//npx create-react-app newsapp
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import Textform from './components/Textform';

//react router(react router dom (react router dom is package)quick start for tutorial)
import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";



//dont need to import react because we are using function based component and not using react here
//giving some information to your component is called props
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000)
  }

  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')

  }

  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("dark mode has been enabled", "success");
      document.title = 'TextUtils-Dark mode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled", "success");
      document.title = 'TextUtils-light mode';

    }
  }
  return (
    <>
      <Router>
        {/*to do comment or ctrl+k+c*/}
        <Navbar title="TextUtil" aboutText="About" mode={mode} toggleMode={toggleMode} />
        {/**/}
        <Alert alert={alert} />
        <div className='container my-3'>{/*my-3 is bootstrap class to give margin in y 3 */}

          {/*swich of react router part //// exact is used because react do partial matching*/}
          <Switch>
          <Route exact path="/TextUtils">
              <Textform showAlert={showAlert} heading={'Enter the text to analyze'} mode={mode} />
            </Route>
            <Route exact path="/about">
              <About mode={mode}  />
            </Route>

            
          </Switch>

        </div>
      </Router>

    </>
  );
}

export default App;
