import React, { useEffect } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";

const AuthLayout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (!localStorage.getItem('accessToken')) {
      navigate("/", { state: pathname });
      console.log(pathname)
    }
  }, []);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;