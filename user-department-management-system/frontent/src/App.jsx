import Panel from './components/Panel'
import './App.css'
import Hero from './components/Hero'
import RouterConfig from './config/RouterConfig'

function App() {
  return (
    <div className='flex'>
      <div>
        <Panel />
      </div>
      <div className='ml-80 w-full'>
        <RouterConfig />
      </div>
    </div>
  )
}

export default App
