import { Link, createLazyFileRoute, useMatch } from "@tanstack/react-router";
import * as React from "react";

export const Route = createLazyFileRoute("/_auth")({
  component: RouteComponent,
});

function RouteComponent() {
  const isLoginPage = useMatch({
    from: "/_auth/auth/login",
    shouldThrow: false,
  });
  const isRegisterRoute = useMatch({
    from: "/_auth/auth/register",
    shouldThrow: false,
  });

  const registerUsernameRef = React.useRef<HTMLInputElement>(null);
  const loginUsernameRef = React.useRef<HTMLInputElement>(null);

  const handleChangeRoute = () => {
    if (isLoginPage) {
      loginUsernameRef.current?.focus();
    } else {
      registerUsernameRef.current?.focus();
    }
  };

  console.log(isLoginPage, isRegisterRoute);

  if (!isLoginPage && !isRegisterRoute) {
    return null;
  }

  return (
    <div className="relative mx-auto mt-20 w-full max-w-4xl px-4">
      <div className="relative grid grid-cols-2 gap-4 overflow-hidden rounded-lg border border-slate-50 bg-white shadow-xl">
        <div
          className={`absolute top-0 flex h-full w-1/2 items-center justify-center bg-slate-300 text-white transition-all duration-300 ${!isLoginPage ? "left-0" : "left-1/2"}`}
        >
          <Link
            to={isLoginPage ? "/auth/register" : "/auth/login"}
            onClick={handleChangeRoute}
          >
            <button
              type="button"
              className="rounded bg-blue-500 px-4 py-2 font-semibold hover:bg-blue-700"
            >
              {isLoginPage ? "Register" : "Login"}
            </button>
          </Link>
        </div>
        <div className="col-span-1 p-8">
          <h1 className="mb-6 text-center font-bold text-2xl text-gray-700">
            Login
          </h1>
          <form>
            <label className="mb-4 block text-gray-600">
              Username:
              <input
                ref={loginUsernameRef}
                type="text"
                className="mt-1 w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
                disabled={!isLoginPage}
              />
            </label>
            <label className="mb-4 block text-gray-600">
              Password:
              <input
                type="password"
                className="mt-1 w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
                disabled={!isLoginPage}
              />
            </label>
            <button
              type="submit"
              className="w-full rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-700"
              disabled={!isLoginPage}
            >
              Login
            </button>
          </form>
        </div>
        <div className="col-span-1 p-8">
          <h1 className="mb-6 text-center font-bold text-2xl text-gray-700">
            Register
          </h1>
          <form>
            <label className="mb-4 block text-gray-600">
              Username:
              <input
                ref={registerUsernameRef}
                type="text"
                className="mt-1 w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
                disabled={!!isLoginPage}
              />
            </label>
            <label className="mb-4 block text-gray-600">
              Password:
              <input
                type="password"
                className="mt-1 w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
                disabled={!!isLoginPage}
              />
            </label>
            <button
              type="submit"
              className="w-full rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-700"
              disabled={!!isLoginPage}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
