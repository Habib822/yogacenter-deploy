//import logo from "./public/logo.png";
import "./App.css";

import Navbar from "./component/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom"; // Import Routes
import Homescreen from "./screens/Homescreen";
import BookingScreen from "./screens/BookingScreen";
import Registerscreen from "./screens/Registerscreen";
import Loginscreen from "./screens/Loginscreen";
import Profilescreen from "./screens/Profilescreen";
import Contactusscreen from "./screens/Contactusscreen";
import Aboutusscreen from "./screens/Aboutusscreen";
import Mainscreen from "./screens/Mainscreen";
import AdminScreen from "./screens/AdminScreen";

export function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/main" exact element={<Mainscreen />} />
          <Route path="/home" exact element={<Homescreen />} />
          <Route path="/sessions" element={<Homescreen />} />
          <Route path="/register" exact element={<Registerscreen />} />
          <Route path="/login" exact element={<Loginscreen />} />
          <Route path="/profile" exact element={<Profilescreen />} />
          <Route path="/contactus" exact element={<Contactusscreen />} />
          <Route path="/about-us" exact element={<Aboutusscreen />} />

          <Route path="/admin" exact element={<AdminScreen />} />
          <Route
            path="/sessions/:sessions_id"
            exact
            element={<BookingScreen />}
          />
        </Routes>
      </BrowserRouter>
      <div className="gb"></div>
    </div>
  );
}

export default App;
