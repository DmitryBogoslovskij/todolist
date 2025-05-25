import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Ellipse12 from "./images/ellipse 12.png"
import Ellipse13 from "./images/ellipse 13.png"
import Ellipse15 from "./images/ellipse 15.png"
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
      