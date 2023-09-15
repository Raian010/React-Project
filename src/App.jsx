import { useState } from 'react'
import './App.css'
import CartAccounts from './components/CartAccounts/CartAccounts'
import Courses from './components/Course/Courses'
import Header from './components/Header/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [selectCourses,setSelectCourses] = useState([]);
  const [totalCredit,setTotalCredit] = useState(0);
  const handleCourse = course => {
       const isExist = selectCourses.find(selectCourse => selectCourse.id === course.id);
       let credit = course.credit_hour;
       if(isExist){
        toast.success('This is already registered', {
          position: toast.POSITION.TOP_RIGHT, 
          autoClose: 2000, 
          hideProgressBar: false, 
          closeOnClick: true, 
          pauseOnHover: true,
        });
       }
       else{
        selectCourses.forEach(selectCourse => {
           credit = credit + selectCourse.credit_hour;
        })
        setTotalCredit(credit);
        const newCourses = [...selectCourses,course];
       setSelectCourses(newCourses);
       }
  }

  return (
    <>
      <Header></Header>
      <div className='flex justify-evenly'>
        <Courses handleCourse={handleCourse}></Courses>
        <CartAccounts totalCredit={totalCredit} selectCourses={selectCourses}></CartAccounts>
        <ToastContainer />
      </div>
      
    </>
  )
}



export default App
