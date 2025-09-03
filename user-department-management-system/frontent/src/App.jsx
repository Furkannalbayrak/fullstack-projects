import Panel from './components/Panel'
import './App.css'
import Hero from './components/Hero'
import RouterConfig from './config/RouterConfig'
import Header from './components/Header'

function App() {
  return (
    <div>
      <div className='hidden lg:flex'>
        <div>
          <Panel />
        </div>
        <div className='lg:ml-80 w-full'>
          <RouterConfig />
        </div>
      </div>

      <div className='flex flex-col lg:hidden'>
        <div>
          <Header/>
        </div>
        <div className='w-full mt-14'>
          <RouterConfig />
        </div>
      </div>

    </div>

  )
}

export default App
