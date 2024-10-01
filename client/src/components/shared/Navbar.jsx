import { Link } from "react-router-dom";
import AvatarPopover from "./Avatarpop";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="bg-white shadow-md">
      <div className="flex items-center justify-between mx-4 my-2">
        <h1 className="text-2xl font-bold">
          Job<span className="text-blue-400">Portal</span>
        </h1>

        <div className="flex items-center">
          {!user ? (
            <div className="space-x-4">
              <Link to="/login" className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800">
                Login
              </Link>
              <Link to="/signup" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                SignUp
              </Link>
            </div>
          ) : (
            <>
              <ul className="flex font-medium items-center gap-7">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/jobs">Jobs</Link>
                </li>
                <li>
                  <Link to="/browse">Browse</Link>
                </li>
              </ul>
              <div className="ml-4">
                <AvatarPopover />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
