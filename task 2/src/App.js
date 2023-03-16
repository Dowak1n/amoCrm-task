// libraries
import React from 'react';
// components
import Header from "./components/layout/header";
import Home from "./components/home";
import Footer from "./components/layout/footer";



function App() {
  return (
      <div className='background'>
        <div className='container'>
            <div className='wrapper'>
                <Header/>
                <Home />
                <Footer/>
            </div>
        </div>
      </div>
  );
}

export default App;
