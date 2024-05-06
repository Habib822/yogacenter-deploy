import React, { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import api from "../service/api";
import Loader from "../component/Loader";


function BookingScreen() {
  const { sessions_id } = useParams();
  const [searchParams] = useSearchParams();
  const dateTime = searchParams.get("datetime");

  const [IsLoading, setIsLoading] = useState(true);
  const [Error, setError] = useState();
  const [session, setSession] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await api.post("/api/session/getsessionbyid", {
          sessionid: sessions_id,
        });
        const data = response.data; // Access data property from the response object
        console.log(response);
        setSession(data); // Assuming you want to set the session state
        setIsLoading(false);
      } catch (error) {
        setError(true);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [sessions_id]);

  console.log(session);

  if (IsLoading) {
    return (
      <h1>
        <Loader />.
      </h1>
    );
  }
  if (Error) {
    return <Error />;
  }
  async function bookSession() {
    if (!session) return;

    const bookingDetails = {
      session,
      user_id: JSON.parse(localStorage.getItem("currentUser"))._id,
      dateTime,

      //add more when I set the booking page inshallah
    };
    try {
      const result = await api.post(
        "/api/bookings/booksession",
        bookingDetails
      );
      return result.data;
    } catch (error) {}
  }

  return (
    <div>
      <div classmane="row">
        <div classname="col-md-5 justify-content-center mt-5">
          <h1>{session.name}</h1>
        </div>
        <div className="book-container">
          <div className="flex-20">
            <div className="left-side">
              <div className="details">
                <h1>Booking Details: </h1>
                <b>
                  <h3>
                    Name:
                    {JSON.parse(localStorage.getItem("currentUser")).name}{" "}
                  </h3>
                  <h3>Date/Time : {dateTime}</h3>
                </b>
              </div>
              <hr className="line" />
              <div className="payment">
                <h1>Amount: </h1>

                <b>
                  <p> Price: {session.price} per Session</p>
                </b>

                <div>
                  <button className="btn btn-primary" onClick={bookSession}>
                    JOIN NOW
                  </button>
                </div>
              </div>
            </div>
            <div className="right-img">
              {session && (
                <img
                  src={`../${session.images[1]}`}
                  className="d-block"
                  alt="bigImage"
                />
              )}
            </div>
          </div>{" "}
          <p className="temp">{session.description}</p>
        </div>
      </div>
    </div>
  );
}

export default BookingScreen;
