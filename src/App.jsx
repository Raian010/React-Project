import './App.css'
import CartAccounts from './components/CartAccounts/CartAccounts'
import Courses from './components/Course/Courses'
import Header from './components/Header/Header'

function App() {


  return (
    <>
      <Header></Header>
      <div className='flex justify-evenly'>
        <Courses></Courses>
        <CartAccounts></CartAccounts>
      </div>
    </>
  )
}

export default App
