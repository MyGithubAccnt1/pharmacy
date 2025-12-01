import { useState } from "react";

export function Input({ type, name }) {
  return <input type={type} name={name} className="p-2 w-full bg-[#E8F0FE]" />;
}

export default function Index() {
  const [flip, setFlip] = useState(false);

  return (
    <div className="w-full h-dvh flex flex-col items-center md:flex-row md:justify-around bg-[url('/stars_galaxy.jpg')]">
      <div className="w-full flex items-center justify-center md:w-2/4 xl:w-1/4 md:h-3/4 md:rounded-lg h-full backdrop-blur-[3px] bg-[rgba(255,255,255,0.1)] border-3 border-[rgba(255,255,255,0.3)]">
        <form className="h-3/4 w-3/4 relative overflow-hidden">
          <div
            className={`absolute h-full w-full flex flex-col justify-around items-center transition-all duration-1500 ${flip ? "" : "translate-x-[150%]"}`}
          >
            <button className="button-title" type="button">
              SIGN IN
            </button>

            <div className="w-full min-h-1/4 flex flex-col gap-8 justify-between items-center">
              <div className="flex flex-col gap-1 w-full">
                <b className="font-bold">Email</b>
                <Input type="email" />
              </div>
              <div className="flex flex-col gap-1 w-full">
                <b className="font-bold">Password</b>
                <Input type="password" />
                <div className="flex items-center gap-1 cursor-pointer">
                  <input name="remember_me" type="checkbox" />
                  <small
                    className="select-none"
                    onClick={() =>
                      (document.querySelector('[name="remember_me"]').checked =
                        !document.querySelector('[name="remember_me"]').checked)
                    }
                  >
                    REMEMBER ME
                  </small>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="relative w-[calc(100%-15px)] py-2 rounded-full cursor-pointer bg-linear-to-b from-[rgba(0,0,0,0.1)] via-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.1)]"
            >
              <small className="button-login">LOGIN</small>
            </button>
            <small className="text-sm">
              You don`t have an account?{" "}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={() => setFlip(false)}
              >
                Sign up here.
              </span>
            </small>
          </div>

          <div
            className={`absolute h-full w-full flex flex-col justify-around items-center transition-all duration-1500 ${flip ? "-translate-x-[150%]" : ""}`}
          >
            <button className="button-title" type="button">
              SIGN UP
            </button>

            <div className="w-full min-h-1/4 flex flex-col gap-8 justify-between items-center">
              <div className="flex flex-col gap-1 w-full">
                <b className="font-bold">Email</b>
                <Input type="email" />
              </div>
              <div className="flex flex-col gap-1 w-full">
                <b className="font-bold">Password</b>
                <Input type="password" />
              </div>
            </div>
            <button
              type="submit"
              className="relative w-[calc(100%-15px)] py-2 rounded-full cursor-pointer bg-linear-to-b from-[rgba(0,0,0,0.1)] via-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.1)]"
            >
              <small className="button-login">REGISTER</small>
            </button>
            <small className="text-sm">
              You don`t have an account?{" "}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={() => setFlip(true)}
              >
                Sign in here.
              </span>
            </small>
          </div>
        </form>
      </div>
    </div>
  );
}
