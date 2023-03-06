import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1 className="text-7xl	">hey there is home</h1>
      <Link to="auth/login">
        <button
          type="submit"
          className="inline-block rounded-lg bg-green-500 px-5 py-3 mt-10 text-sm font-medium text-white"
        >
          Login
        </button>
      </Link>
    </div>
  );
};

export default Home;
