// global css
import "./global.css";
// react bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// react router dom
import { Routes, Route } from "react-router-dom";
import Topbar from "./components/Topbar";
import Home from "./pages/events";
import Register from "./pages/register";
import Login from "./pages/login";
import CreateEvent from "./pages/createEvent";
import UpdateEvent from "./pages/updateEvent";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import SingleEvent from "./pages/singleEvent";

const App = () => {
  return (
    <>
      <Topbar />
      <div className="custom_vh">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/create-event" exact element={<CreateEvent />} />
          <Route path="/event/:id" exact element={<SingleEvent />} />
          <Route path="/edit-event/:id" exact element={<UpdateEvent />} />
          {/* error routing */}
          <Route path="/*" exact element={<NotFound />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
};

export default App;
