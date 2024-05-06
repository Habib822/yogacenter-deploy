import React, { useState, useEffect } from "react";
import axios from "axios";
import { Tabs } from "antd";

import Loader from "../component/Loader";


const { Item } = Tabs;

const Profilescreen = () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));
 
  
  

  useEffect(() => {
    if (!user) {
      window.location.href = "/login";
    }
  });

  return (
    <div className="ml3-mt-3">
      <Tabs defaultActiveKey="1">
        <Item className="profile" tab="Profile" key="1">
          <h2>My Profile: </h2>
          <br />
          <h4>Name: {user ? user.name : ""}</h4>
          <h4>Email: {user ? user.email : ""}</h4>
          <h4> Admin Account: {user && user.isAdmin ? "YES" : "NO"}</h4>
        </Item>
        <Item tab="Booking" key="2">
          <MyBookings user={user} />
        </Item>
      </Tabs>
    </div>
  );
};

export default Profilescreen;

export function MyBookings() {
  
  const [setSessions] = useState([]);
  const [bookings, setbooking] = useState([]);
  const [loading, setLoading] = useState(false);
  const [ setError] = useState();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    const fetchBookings = async () => {
      try {
        setLoading(true);
        const data = await (
          await axios.post("/api/Bookings/getbookingsbyuserid", {
            user_id: user._id,
          })
        ).data;
        console.log(data);
        setSessions(data);
        setbooking(data);
        setLoading(false);
      } catch (e) {
        console.error(e);
        setLoading(false);
        setError(e);
      }
    };

    if (user) {
      fetchBookings();
    }
  }, ); 

  async function cancelBooking(bookingId, sessionId) {
    try {
      setLoading(false);

      const result = await axios.post("/api/bookings/cancelbooking", {
        bookingId,
        sessionId,
      }).data;
      console.log(result);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div className="row">
        <div className="col-md-6 ">
          {loading && <Loader />}
          {bookings &&
            bookings.map((booking) => {
              return (
                <div className="bs">
                  <h2>{booking.session}</h2>
                  <h2>
                    <b>bookingId</b> : {booking._id}
                  </h2>
                  <h2>
                    <b>Date and Time </b>: {booking.datetime}
                  </h2>
                  <h2>
                    state: {booking.state !== "booked" ? "booked" : "Cancelled"}
                  </h2>

                  <div style={{ display: "right", justifyContent: "flex-end" }}>
                    <button
                      className="btn btn-primary m-2"
                      onClick={() => {
                        cancelBooking(booking._id, booking.session._id);
                      }}
                    >
                      {" "}
                      CANCEL BOOKING
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
