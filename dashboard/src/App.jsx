import './App.css'
import Aside from './components/aside'
import Hero from './components/hero'

function App() {

  return (
    <div className='flex shadow-2xl h-screen max-w-6xl mx-auto my-6'>
      <Aside />
      <Hero />
    </div>
  )
}

export default App
