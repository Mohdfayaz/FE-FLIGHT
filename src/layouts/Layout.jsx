import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { selectUser } from "../redux/features/auth/userSlice";

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-gray-900 text-white p-4 flex justify-between">
        <div>
          <Link to="/" className="mr-4">
            Home
          </Link>
          {!user && (
            <Link to="/register" className="mr-4">
              Register
            </Link>
          )}
          {!user && (
            <Link to="/login" className="mr-4">
              Login
            </Link>
          )}
          {user && user.role === "user" && (
            <>
              <Link to="/candidate/dashboard" className="mr-4">
                Dashboard
              </Link>
              <Link to="/candidate/profile" className="mr-4">
                Profile
              </Link>
              <Link to="/candidate/applications" className="mr-4">
                Applications
              </Link>
            </>
          )}
          {user && user.role === "recruiter" && (
            <>
              <Link to="/recruiter/dashboard" className="mr-4">
                Dashboard
              </Link>
              <Link to="/recruiter/profile" className="mr-4">
                Profile
              </Link>
              <Link to="/recruiter/create-job" className="mr-4">
                Create Job
              </Link>
              <Link to="/recruiter/manage-applications" className="mr-4">
                Manage Applications
              </Link>
            </>
          )}
          {user && user.role === "admin" && (
            <>
              <Link to="/admin/dashboard" className="mr-4">
                Dashboard
              </Link>
              <Link to="/admin/manage-recruiters" className="mr-4">
                Manage Recruiters
              </Link>
              <Link to="/admin/manage-companies" className="mr-4">
                Manage Companies
              </Link>
              <Link to="/admin/assign-recruiter" className="mr-4">
                Assign Recruiter
              </Link>
            </>
          )}
        </div>

        <div>
          {user && (
            <button
              className="bg-red-500 px-3 py-1 rounded"
              onClick={() => navigate("/logout", { replace: true })}
            >
              Logout
            </button>
          )}
        </div>
      </nav>

      <main className="flex-grow">{children}</main>
    </div>
  );
};

export default Layout;
