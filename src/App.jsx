import { useState } from 'react'
import Counter from './components/Counter.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Default React Project</h1>
      <h2>by benny al-ashari</h2>
      <div className="card">
        <Counter />
      </div>
      <p className="read-the-docs">
        Click on the button to increment - This is here just so you can see how React works
      </p>
    </>
  )
}

export default App
