// import { data } from "autoprefixer";
import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import Course from "./Course";

const Courses = ({handleCourse}) => {
    const [courses,setCourses] = useState([]);
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCourses(data));
    },[])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-5 w-3/4">
           {
            courses.map((course,idx) => <Course key={idx} handleCourse={handleCourse} course={course}></Course>)
           }
        </div>
    );
};

Courses.propTypes= {
    handleCourse: PropTypes.func.isRequired
}

export default Courses;