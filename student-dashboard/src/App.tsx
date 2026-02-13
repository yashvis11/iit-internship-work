import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Profile from "./pages/Profile";
import { Routes, Route } from "react-router-dom"; //Routes being the list of all the routes
//Route being the specific route


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard studentName="Rohan" />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}
export default App;
