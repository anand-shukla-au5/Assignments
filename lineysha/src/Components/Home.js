import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Usercard from "./Card";
import axios from "axios";
function Home() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const userFetch = async () => {
      let res = await axios.get("https://reqres.in/api/users?page=1");
      console.log(res.data);
      setUsers(res.data.data);
    };
    userFetch();
  }, []);
  console.log("Ser", users);
  return (
    <>
      <Nav />
      <div className="container">
        <h1 className="userHead">User List</h1>
        <div className="userContent">
          {users &&
            users.map((el) => {
              return <Usercard key={el.id} data={el} />;
            })}
        </div>
      </div>
    </>
  );
}

export default Home;
