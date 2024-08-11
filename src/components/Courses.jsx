import data from "../json/data.json";
import Course from "./Course";

const Courses = () => {
  return (
    <div className="courses-container">
      {data.map((course) => (
        <Course key={course.id} {...course} />
      ))}
    </div>
  );
};

export default Courses;
