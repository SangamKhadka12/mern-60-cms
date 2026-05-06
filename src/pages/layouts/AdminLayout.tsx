import { NavLink, Outlet } from "react-router";
import { Pageheading } from "../../components/ui/typography/Title";
import useAuth from "../../lib/types/hook/useAuth";
import { Icon } from "@iconify/react";

export default function AdminLayout() {
  const {loggedInUserDetail} = useAuth()
  return (
    <>
      <header className="w-full p-5 bg-indigo-950 text-white flex justify-between items-center">
        <Pageheading className="text-white">Admin Portal</Pageheading>
        <nav>
          <ul>
            <li>
              <NavLink to="/admin">
                {loggedInUserDetail?.firstName +
                  " " +
                  loggedInUserDetail?.lastName}
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <section className="w-full flex ">
        <div className="flex w-1/6 h-screen flex-col justify-between border-e border-gray-100 bg-white">
          <div className="px-4 py-6">
            <ul className="mt-6 space-y-1">
              <li>
                <NavLink
                  to="/admin"
                  className="flex items-center gap-3 rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                >
                  <Icon icon="fa:home" />
                  Dashboard
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/admin/users"
                  className="flex items-center gap-3 rounded-lg  px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-700"
                >
                  <Icon icon="fa:users" />
                  Users
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
            <a
              href="#"
              className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
            >
              <img
                alt=""
                src={loggedInUserDetail?.image}
                className="size-10 rounded-full object-cover"
              />

              <div>
                <p className="text-xs">
                  <strong className="block font-medium">{loggedInUserDetail?.firstName + " "+ loggedInUserDetail?.lastName}</strong>
                  <span> {loggedInUserDetail?.email} </span>
                </p>
              </div>
            </a>
          </div>
        </div>

        <section className="w-5/6 flex bg-gray-100 p-5 rounded-md ">
          <Outlet />
        </section>
      </section>
      <footer className="w-full px-5 py-3 bg-indigo-950 text-white flex justify-center items-center">
        &copy; Sangam Khadka
      </footer>
    </>
  );
}