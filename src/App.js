import React, { useState } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Alert from './components/Alert';
import Textform from './components/Textform';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
  };

  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-' + cls);
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextCrafts - Dark mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextCrafts - Light mode';
    }
  };

  return (
    <>
      <Router>
        {/*to do comment or ctrl+k+c*/}
        <Navbar title="TextCraft" aboutText="About" mode={mode} toggleMode={toggleMode} />
        {/**/}
        <Alert alert={alert} />
        <div className='container my-3'>{/*my-3 is bootstrap class to give margin in y 3 */}

          {/*swich of react router part //// exact is used because react do partial matching*/}
          
          <Route exact path="/">
  <Textform showAlert={showAlert} heading={'Enter the text to analyze'} mode={mode} />
</Route>

            <Route exact path="/about">
              <About mode={mode}  />
            </Route>

            
         

        </div>
      </Router>

    </>
  );
}

export default App;
