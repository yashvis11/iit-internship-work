/*STATES:
data is stored in state and is displayed by being rendered 
to progress progress does not store only 
display setProgress doesn't work with progress just the 
useState by telling it to update and render the 
data back to progress
*/

//PROPS: These are parent to child communication not the other way around
import Header from "../component/Header";
import CourseCard from "../component/CourseCard";
import EnrollmentCard from "../component/EnrollmentCard";
import Courses from "../data/courses.json";
import { use, useState } from "react";
import SearchBar from "../component/SearchBar";
import { Link } from "react-router-dom"; //function to help move from page to page

type DashboardProps = {
  studentName: string;
};

export default function Dashboard({ studentName }: DashboardProps) {
  const [progress, setProgress] = useState<number>(40); //40 is in state right now not progress
  const [enrolled, setEnrolled] = useState<boolean>(false);
  const [reactProgress, setReactProgress] = useState<number>(50);

  //defined the use state
  //defined the use state
  //using a variable progress and the method setProgress to store value inside the variable
  //equating it to useState which will be of type number and default value will be 0
  const [student, setStudent] = useState({
    name: "Rahul",
    course: "Full Stack",
    progress: 20,
  });
  const [courses, setCourses] = useState(Courses);
  //handleEnroll is a variable storing a function
  //it does not store what is returned by it
  //it is sort of the reference of the setEnroll function
  //console.log(courses);
  //export must return
  const handleEnroll = () => {
    setEnrolled(true);
  };

  return (
    <>
      <div>
        <Header />
        <div style={{ padding: "10px" }}>
          <div>
            <h2>Welcome, {studentName}</h2>
            <p>Your learning overview is shown below:</p>
          </div>

          <nav style={{ display: "flex", gap: "20px" }}></nav>
          <Link to="/courses">Courses</Link>
          <div></div>
          <Link to="/profile">Profile</Link>
        </div>
      </div>
    </>
  );
}
