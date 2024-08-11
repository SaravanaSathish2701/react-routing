import { Link } from "react-router-dom";
import links from "../json/links";
import data from "../json/data";

const All = () => {
  return (
    <div className="container">
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          style={{
            marginLeft: "10%",
            justifyContent: "space-around",
            position: "relative",
            color: "black",
            fontSize: "20px",
            textDecoration: "none",
          }}
        >
          {link.title}
        </Link>
      ))}

      <hr />
      {data.map((cou) => (
        <Link
          key={cou.id}
          to={`/${cou.title}/${cou.id}`}
          style={{ margin: 16 }}
        >
          <img
            alt={cou.title}
            src={cou.image}
            style={{
              marginTop: 40,
              height: "200px",
              width: "200px",
              marginLeft: "7%",
              position: "relative",
            }}
          />
        </Link>
      ))}
    </div>
  );
};

export default All;
