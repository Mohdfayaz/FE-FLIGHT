import React from "react";
import { Navigate, Outlet, useLoaderData } from "react-router";

const CandidateLayout = () => {
  const user = useLoaderData();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (user.role !== "candidate") {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default CandidateLayout;
