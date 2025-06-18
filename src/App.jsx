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
import { TodoCard } from './components/TodoCard'

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
        <TodoCard title="Brainstorming" 
        description="Brainstorming brings team members' diverse experience into play."  images = {[
          Ellipse15,
          Ellipse13,
          Ellipse12
        ]}/>
        <TodoCard title="Research" 
        description="User research helps you to create an optimal product for users." images = {[
          Ellipse121,
          Ellipse131
        ]}/>
        <TodoCard title="Wireframes" 
        description="Low fidelity wireframes include the most basic content and visuals." images = {[
          Ellipse13,
          Ellipse131,
          Ellipse12
        ]}/>
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

      