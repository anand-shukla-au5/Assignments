import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Button } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function Userbook() {
  const [userdata, setData] = useState();
  const [time, setTime] = useState(null);
  const [date, setDate] = useState(null);
  const [booked, setBooked] = useState([]);
  let { id } = useParams();
  useEffect(() => {
    const userFetch = async () => {
      console.log(id);
      let res = await axios.get(`https://reqres.in/api/users/${id}`);
      setData(res.data.data);
    };
    userFetch(id);
  }, [id]);
  console.log(userdata, time, date, "Booked", booked);
  const handleBook = () => {
    if (time && date) {
      let arr = booked;
      let obj = { time, date };
      arr.push(obj);
      setBooked(arr);
      alert("Booked Succesfully");
    } else {
      alert("Please Choose date and time");
    }
  };
  return (
    <>
      {userdata && (
        <div className="profileContainer">
          <h1>
            {userdata.first_name} {userdata.last_name}
          </h1>
          <div className="profileData">
            <div>
              <img src={userdata.avatar} alt="" />
              <p>{userdata.email}</p>
              <Button
                onClick={() => handleBook()}
                id="buttonBook"
                variant="contained"
              >
                Book
              </Button>
            </div>
            <div className="booking">
              <FormControl className="">
                <InputLabel id="demo-simple-select-helper-label">
                  Booking Time
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                >
                  <MenuItem value={15}>15 mins</MenuItem>
                  <MenuItem value={30}>30 mins</MenuItem>
                  <MenuItem value={45}>45 mins</MenuItem>
                  <MenuItem value={60}>60 mins</MenuItem>
                </Select>
                <FormHelperText>Select the booking time</FormHelperText>
              </FormControl>
            </div>
            <Calendar
              className="calender"
              onChange={(date) => setDate(date)}
              value={date}
            />
          </div>
        </div>
      )}
    </>
  );
}
