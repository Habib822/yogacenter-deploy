import { useEffect, useState } from "react";
import { Tabs } from "antd";
import api from "../service/api";

import Loader from "../component/Loader";

const { TabPane } = Tabs;

function AdminScreen() {
  // useEffect(() => {
  //   if(!JSON.parse(localStorage.getItem("currentUser")).isAdmin ){
  //     window.location.href = "/main";
  //   }
  // }, []);

  const items = [
    {
      key: "1",
      tab: "Bookings",
      content: <Bookings />,
    },
    {
      key: "2",
      tab: "Session",
      content: <Sessions />,
    },
    {
      key: "3",
      tab: "Add session",
      content: <AddSession />,
    },
    {
      key: "4",
      tab: "Users",
      content: <Users />,
    },
  ];

  return (
    <div className="bs">
      <h1>Admin panel</h1>
      <Tabs defaultActiveKey="1">
        {items.map((item) => (
          <TabPane tab={item.tab} key={item.key}>
            {item.content}
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
}
export default AdminScreen;

export function Bookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await api.get("/api/bookings/getallbookings");
        setBookings(response.data); // Assuming response is an object with a 'data' property
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="row">
      <div className="col-md-10">
        <h2>Bookings</h2>
        {loading && <Loader />}

        <table className="table tabel-bordered table-dark">
          <thead className=" bs">
            <tr>
              <th>booking Id </th>
              <th> User ID</th>
              <th>session</th>
              <th>Date & Time</th>
            </tr>
          </thead>
          <tbody>
            {bookings.length > 0 &&
              bookings.map((booking) => {
                return (
                  <tr>
                    <td>{booking._id}</td>
                    <td>{booking.user_id}</td>
                    <td>{booking.session_id}</td>
                    <td>{booking.dateTime}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>

        {error && <div>Error: {error.message}</div>}
      </div>
    </div>
  );
}

export function Sessions() {
  const [sessions, setsessions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await api.get("/api/session/getallsession");
        setsessions(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="row">
      <div className="col-md-10">
        <h2>sessions</h2>
        {loading && <Loader />}

        <table className="table tabel-bordered table-dark">
          <thead className=" bs">
            <tr>
              <th>sessions Id </th>
              <th>sessions</th>
              <th>price</th>
            </tr>
          </thead>
          <tbody>
            {sessions.length > 0 &&
              sessions.map((session) => {
                return (
                  <tr>
                    <td>{session._id}</td>
                    <td>{session.name}</td>
                    <td>{session.price}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>

        {error && <div>Error: {error.message}</div>}
      </div>
    </div>
  );
}

export function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await api.get("/api/users/getallusers");
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(error);
      }
    };

    fetchData();
  });

  return (
    <div className="row">
      <div className="col-md-10">
        <h2>Users</h2>
        {loading && <Loader />}
        <table className="table tabel-bordered table-dark bs">
          <thead>
            <tr>
              <th>Users Id </th>
              <th>User name</th>
              <th>User Email</th>
              <th>Is Admin account</th>
            </tr>
          </thead>
          <tbdy>
            {users.length > 0 &&
              users.map((user) => {
                return (
                  <tr>
                    <td>{user._id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.isAdmin ? "Yes" : "No"}</td>
                  </tr>
                );
              })}
          </tbdy>
        </table>
      </div>
    </div>
  );
}

export function AddSession() {
  const [name, setname] = useState();
  const [duration, setduration] = useState();
  const [price, setprice] = useState();
  const [images, setimages] = useState();
  const [session_id, setsession_id] = useState();
  const [date_time, setdate_time] = useState();

  function AddSession() {
    const newSession = {
      name,
      duration,
      price,
      images,
      session_id,
      date_time,
    };
    console.log(newSession);
  }

  return (
    <div className="row">
      <div className="col-md-6">
        <h2>Add sessions</h2>
        <input
          type="text"
          className="form-control"
          placeholder="Session name"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />

        <input
          type="text"
          className="form-control"
          placeholder=" session duration"
          value={duration}
          onChange={(e) => setduration(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          placeholder=" session price"
          value={price}
          onChange={(e) => setprice(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          placeholder=" session images"
          value={images}
          onChange={(e) => setimages(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          placeholder=" session sessoin id"
          value={session_id}
          onChange={(e) => setsession_id(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          placeholder=" session date and time"
          value={date_time}
          onChange={(e) => setdate_time(e.target.value)}
        />
      </div>
      <div className="col-md-6">
        <button className="btn btn-primary" onClick={AddSession}>
          Add Session
        </button>
      </div>
    </div>
  );
}
