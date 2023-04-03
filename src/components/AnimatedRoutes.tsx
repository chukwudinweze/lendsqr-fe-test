import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import LoginPage from "../Pages/LoginPage";
import NotFound from "../Pages/NotFound";
import UserDashboard from "../Pages/UserDashboard";
import UserDetailsPage from "../Pages/UserdetailsPage";
import Users from "../Pages/Users";

const AnimatedRoutes = () => {
  const location = useLocation();
  const [delayedLocation, setDelayedLocation] = useState(location);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDelayedLocation(location);
    }, 50);
    return () => clearTimeout(timeoutId);
  }, [location]);
  return (
    <AnimatePresence initial={false}>
      <Routes location={delayedLocation} key={location.pathname}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetailsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
