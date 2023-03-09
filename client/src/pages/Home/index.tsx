import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

const Home = () => {
  return (
    <div className="w-screen h-screen  ">
      <Navbar />

      <div className="m-48  ">
        <h1 className="text-7xl self-auto">hey there is home</h1>
        <Link to="auth/login">
          <button
            type="submit"
            className="inline-block rounded-lg bg-green-500 px-5 py-3 mt-10 text-sm font-medium text-white"
          >
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
