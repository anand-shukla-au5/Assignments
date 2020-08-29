import React from "react";
import { Link } from "react-router-dom";
export default ({ data }) => {
  return (
    <div className="userCard">
      <Link className="userLink" to={"/user/" + data.id}>
        <h3>
          {data.first_name} {data.last_name}
        </h3>
        <p>{data.email}</p>
        <img src={data.avatar} alt="" sizes="" srcSet="" />
      </Link>
    </div>
  );
};
