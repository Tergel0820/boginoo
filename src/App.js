import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Login, Signup, ForgetPassword, ShortUrl } from "./components";
import { AuthProvider } from "./providers/authcontext";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/forgetpassword" element={<ForgetPassword />}></Route>
          <Route path=":docId" element={<ShortUrl />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;