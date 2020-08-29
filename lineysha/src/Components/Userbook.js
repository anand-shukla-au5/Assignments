import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Userbook() {
  const [userdata, setData] = useState();
  let { id } = useParams();
  useEffect(() => {
    const userFetch = async () => {
      console.log(id);
      let res = await axios.get(`https://reqres.in/api/users/${id}`);
      setData(res.data.data);
    };
    userFetch(id);
  }, [id]);
  console.log(userdata);
  return (
    <>
      {userdata && (
        <div className="profileContainer">
          <h1>
            {userdata.first_name} {userdata.last_name}
          </h1>
          <div className="profileData">
            <img src={userdata.avatar} alt="" />
            <ul>
              <li>{userdata.email}</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
