import { useState } from 'react'
import ironHackLogo from './assets/ironhack-logo-xs.png'
import menuTop from './assets/menu-top-xs.png'
import icon1 from './assets/icon1.png'
import icon2 from './assets/icon2.png'
import icon3 from './assets/icon3.png'
import icon4 from './assets/icon4.png'




import './App.css'

function App() {
 

  return (
    <>
      <div className="App"></div>

        <section className="card">
        <header>
          <img className="logo1" src= {ironHackLogo} />
          <img className="logo" src= {menuTop} />
        </header>  
        
        <h1> Say Hello to React JS</h1>
        <p>
          You will learn how to use<br />
          the most popular frontend library,<br />
          and become super Ninja developer.<br />
        </p>
        <button>Awesome!</ button>
        </section> 

      <div className="icons-row">
        <div className="icon-text">
          <img src={icon1} />
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive Uis.</p>
        </div>

        <div className="icon-text">
          <img src={icon2} />
          <h2>Components</h2>
          <p>React makes it painless to create interactive Uis.</p>
        </div>

        <div className="icon-text">
          <img src={icon3} />
          <h2>Single-Way</h2>
          <p>React makes it painless to create interactive Uis.</p>
        </div>

        <div className="icon-text">
          <img src={icon4} />
          <h2>Jsx</h2>
          <p>React makes it painless to create interactive Uis.</p>
        </div>

      </div>

    

    </>
  )
}

export default App
