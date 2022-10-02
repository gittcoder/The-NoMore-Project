
import React, { Component} from 'react';
import ResponsiveAppBar from './screens/NavBar';

function App()
{
    return (
    <div
       className="App">
        <header className="App-header" >
        {/* style={{ backgroundColor: `url(${bg})`}} */}
        
        <ResponsiveAppBar/>
        
      </header>
    </div>
  );

}

export default App;
