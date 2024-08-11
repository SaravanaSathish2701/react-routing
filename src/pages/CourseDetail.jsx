import { useParams } from "react-router-dom";
import data from "../json/data.json";

const CourseDetail = () => {
  const { courseId } = useParams();
  const course = data.find((cou) => cou.id === courseId);

  if (!course) {
    return <h2>Course not found</h2>;
  }

  return (
    <div className="course-detail">
      <h1>{course.title}</h1>
      <img
        src={course.image}
        alt={course.title}
        style={{ margin: 16, width: "100%", maxWidth: "500px", height: "auto" }}
      />
      <p style={{ fontSize: "1.2em", marginTop: "20px" }}>
        {course.description}
      </p>
    </div>
  );
};

export default CourseDetail;
