import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Usercard from "./Card";
import axios from "axios";
function Home() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState([]);
  useEffect(() => {
    const userFetch = async () => {
      let res = await axios.get("https://reqres.in/api/users?page=1");
      console.log(res.data);
      setUsers(res.data.data);
    };
    userFetch();
  }, []);
  useEffect(() => {
    let arr = [];
    users.forEach((el) => {
      console.log(el.first_name);
      if (el.first_name.includes(query) || el.last_name.includes(query)) {
        return arr.push(el);
      }
    });
    console.log(arr);
  }, [query, users]);
  console.log("Ser", users, query, filter);
  return (
    <>
      <Nav query={setQuery} />
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
