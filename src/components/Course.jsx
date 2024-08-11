import PropTypes from "prop-types";

const Course = ({ image, title, description }) => {
  return (
    <div className="course">
      <h1 className="course-title">{title}</h1>
      <img src={image} alt={title} className="course-image" />
      <p className="course-description">{description}</p>
    </div>
  );
};

Course.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Course;
