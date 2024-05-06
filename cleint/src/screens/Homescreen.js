import React, { useState, useEffect } from "react";
import api from "../service/api";
import Session from "../component/session";
import Loader from "../component/Loader";
import { DatePicker } from "antd";
import "antd/dist/reset.css";
import moment from "moment";


function Homescreen() {
  const [sessions, setSessions] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);
  const [Error, setError] = useState(false);
  const [dateTime, setDateTime] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = (await api.get("/api/session/getallsessions")).data;
        console.log(data);
        setSessions(data); // Assuming you want to set the session state
        setIsLoading(false);
      } catch (Error) {
        setError(true);
        console.log(Error);
        setIsLoading(false);
      }
    };

    fetchData();

    // Cleanup function can be defined if needed
  }, []);

  function filterByTime(item) {
    setDateTime(moment(item[0]).format("DD-MM-YYYY HH:mm"));
  }

  return (
    <div className="container">
      <div className="row mt-5 bs">
        <div className="col-md-3">
          <DatePicker
            format={"DD-MM-YYYY 'HH:mm"}
            showTime
            onChange={filterByTime}
            onch
          />
        </div>
      </div>

      <div className="row justify-content-center md-5">
        {IsLoading ? (
          <h1>
            <Loader />{" "}
          </h1>
        ) : sessions.length > 1 ? (
          sessions.map((session) => {
            return (
              <div className="col-md-9 mt-3" key={session._id}>
                <Session session={session} dateTime={dateTime} />
              </div>
            );
          })
        ) : (
          <Error />
        )}
      </div>
      
    </div>
    
  );
}

export default Homescreen;
