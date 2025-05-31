import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Plus from './images/Vector.svg'
import Dot11 from './images/Ellipse 11.svg'
import Ellipse12 from "./images/Ellipse 12.png"
import Ellipse13 from "./images/Ellipse 13.png"
import Ellipse15 from "./images/Ellipse 15.png"
import Ellipse121 from "./images/Ellipse 12 (1).png"
import Ellipse131 from "./images/Ellipse 13 (1).png"
import Comment from "./images/comment.svg"
import File from "./images/file.svg"
import Dots from "./images/dots.svg"

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="panel_1">
        <div className="panel-title">
          <img src={Dot11} alt="" />
          <div className="title">
            To Do
          </div>
          <div className="circle">
            <h3>4</h3>
          </div>
          <div className="square">
            <img src={Plus} alt="" />
          </div>           
        </div> 
        <div className="card_1">
          <div className="pill">Low</div>
          <h3>Brainstorming</h3>
          <p>Brainstorming brings team members' diverse experience into play.</p>
          <div className="card-footer">
            <div className="card-footer-images">
              <img src={Ellipse15} alt="" />
              <img src={Ellipse13} alt="" />
              <img src={Ellipse12} alt="" />
            </div>
            <div className="comment">
              <img src={Comment} alt="" />
              12 comments
            </div>
            <div className="file">
              <img src={File} alt="" />0 files
            </div>
          </div>
          <img className="dots" src={Dots} alt="" />
        </div>            
        <div className="card_1">
          <div className="pill">High</div>
          <h3>Research</h3>
          <p>User research helps you to create an optimal product for users.</p>
          <div className="card-footer">
            <div className="card-footer-images">
              <img src={Ellipse121} alt="" />
              <img src={Ellipse131} alt="" />
            </div>
            <div className="comment">
              <img src={Comment} alt="" />
              10 comments
            </div>
            <div className="file">
              <img src={File} alt="" />3 files
            </div>
          </div>
          <img className="dots" src={Dots} alt=""/>
        </div> 
        <div className="card_1">
          <div className="pill">High</div>
          <h3>Wireframes</h3>
          <p>Low fidelity wireframes include the most basic content and visuals.</p>
          <div className="card-footer">
            <div className="card-footer-images">
              <img src={Ellipse13} alt="" />
              <img src={Ellipse131} alt="" />
              <img src={Ellipse12} alt="" />
            </div>
            <div className="comment">
              <img src={Comment} alt="" />
              12 comments
            </div>
            <div className="file">
              <img src={File} alt="" />0 files
            </div>
          </div>
          <img className="dots" src={Dots} alt="" />
        </div>
      </div>   
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count} drabada
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>    
    </>
  )
}

export default App
      