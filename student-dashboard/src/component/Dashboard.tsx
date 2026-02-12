/*STATES:
data is stored in state and is displayed by being rendered 
to progress progress does not store only 
display setProgress doesn't work with progress just the 
useState by telling it to update and render the 
data back to progress
*/

//PROPS: These are parent to child communication not the other way around
import Header from "./Header";
import CourseCard from "./CourseCard";
import EnrollmentCard from "./EnrollmentCard";
import { use, useState } from "react";

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
  const [courses, setCourses] = useState([
    { title: "React", progress: 40 },
    { title: "Node.js", progress: 30 },
    { title: "AI", progress: 10 },
  ]);

  const handleEnroll = () => {
    //handleEnroll is a variable storing a function
    setEnrolled(true); //it does not store what is returned by it
  }; //it is sort of the reference of the setEnroll function
  //console.log(courses);
  //export must return
  return (
    //what the Dashboard returns as we used export
    <>
      <div>
        <Header />
        <div style={{ padding: "20px" }}>
          {/*Student Overview*/}
          <div>
            <h2>Welcome, {studentName}</h2>
            <p>Your learning overview is shown below:</p>
          </div>
          {/*Enrolled Courses*/}
          <div>
            <h3>Enrolled courses:</h3>
            <EnrollmentCard onEnroll={handleEnroll} />{" "}
            {/*passing the handleEnroll function(giving it's reference)
            to the child using the prop onEnroll
            only access through reference is checked not the code body*/}
            {/*enrolled is set from the useState and the condition is applied 
            even if enrolled will always be true because the logic needs to be UI 
            based and flexible not event driven*/}
            <p>Status: {enrolled ? "Enrolled" : "Not Enrolled"}</p>
            {/*the "title" and "progress" are both props like onEnroll one passes function
            one values*/}
            <CourseCard
              title="React"
              progress={reactProgress}
              studentName={studentName} //studentName needs to exist in CourseCard as well for it to display
            />
            <button
              onClick={() => {
                setReactProgress(reactProgress + 10); //calls setReactProgress with reactProgress'
                // original value being incremented by 10 later passed onto the state
              }}
            >
              Complete React lesson
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
