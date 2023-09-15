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
  const [remainingCredit,setRemainingCredit] = useState(20);
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

        const creditRemaining = 20 - credit;

        if(creditRemaining < 0){
          toast.warn('You can not go below 0 credit hours', {
            position: toast.POSITION.TOP_RIGHT, 
            autoClose: 3000, 
            hideProgressBar: false, 
            closeOnClick: true, 
            pauseOnHover: true,
          });
        }

        if(credit > 20){
          toast.warn('You can not add more than 20 credit hours', {
            position: toast.POSITION.TOP_RIGHT, 
            autoClose: 3000, 
            hideProgressBar: false, 
            closeOnClick: true, 
            pauseOnHover: true,
          });
        }
        else{
          setTotalCredit(credit);
          setRemainingCredit(creditRemaining);
        const newCourses = [...selectCourses,course];
       setSelectCourses(newCourses);
        }
       }
  }

  return (
    <>
      <Header></Header>
      <div className='flex justify-evenly'>
        <Courses handleCourse={handleCourse}></Courses>
        <CartAccounts totalCredit={totalCredit} remainingCredit={remainingCredit} selectCourses={selectCourses}></CartAccounts>
        <ToastContainer />
      </div>
      
    </>
  )
}



export default App
