import PropTypes from 'prop-types';
import { FaBook } from 'react-icons/fa';
const Course = ({course,handleCourse}) => {
    const {img,title,details,price,credit_hour} = course;
    return (
        <div className="border p-1 rounded-lg text-center">
           <div className="flex justify-center">
           <img className="my-2" src={img} alt="" />
           </div>
            <h2 className="text-2xl my-1 font-semibold">{title} </h2>
            <p className="text-sm my-1  font-thin">{details}</p>
            <div className="flex items-center justify-around my-1">
                <p className="text-sm font-extralight"><span className='text-lg mr-3'>$</span> Price: {price} </p>
                <p className='flex items-center'><span className='mr-3'><FaBook /></span> Credit: {credit_hour}hr </p>
            </div>
            <button onClick={() => handleCourse(course)} className='bg-blue-500 w-full text-white my-2 p-2 rounded-xl'>Select</button>
        </div>
    );
};

Course.propTypes= {
    course: PropTypes.object.isRequired,
    handleCourse:PropTypes.func
}

export default Course;