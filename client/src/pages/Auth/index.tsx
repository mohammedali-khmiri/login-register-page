import { useState } from "react";
import { Tab } from "@headlessui/react";
import Login from "./Login";
import Register from "./Register";
import { Link, Outlet } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Auth = () => {
  // let [categories] = useState({
  //   Login: [{ id: 1, element: <Login /> }],
  //   Register: [{ id: 2, element: <Register /> }],
  // });
  return (
    <div className="w-full max-h-screen max-w-md  px-2 py-5 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1  justify-center gap-2">
          <Link to="login" >
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 px-20 text-sm font-medium leading-5 text-blue-700",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              Login
            </Tab>
          </Link>
          <Link to="register">
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 px-20 text-sm font-medium leading-5 text-blue-700",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              Register
            </Tab>
          </Link>
        </Tab.List>
        <Tab.Panels className="mt-2">
          <Tab.Panel
            className={classNames(
              "rounded-xl bg-white p-3",
              "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
            )}
          >
            <div>
              <Login />
            </div>
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              "rounded-xl bg-white p-3",
              "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
            )}
          >
            <div>
              <Register />
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Auth;
