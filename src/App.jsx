import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import All from "./pages/All";
import FullStack from "./pages/FullStack";
import DataScience from "./pages/DataScience";
import CyberSecurity from "./pages/CyberSecurity";
import Devops from "./pages/Devops";
import CourseDetail from "./pages/CourseDetail";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="/FullStack" element={<FullStack />} />
          <Route path="/Datascience" element={<DataScience />} />
          <Route path="/Cybersecurity" element={<CyberSecurity />} />
          <Route path="/Devops" element={<Devops />} />
          <Route path="/:coursetitle/:courseId" element={<CourseDetail />} />
          <Route
            path="*"
            element={
              <img
                src="https://w3layouts.b-cdn.net/wp-content/uploads/2020/04/fog-error-page-990x619.jpg"
                style={{ width: "100%" }}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
