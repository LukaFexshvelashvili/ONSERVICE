import { useState } from "react";
import { MoonIcon } from "../../assets/icons/icons";

import AuthSideContent from "./AuthSideContent";
import { Link, Outlet } from "react-router-dom";

export default function Authentication() {
  return (
    <div className="flex w-full h-[100vh] min-h-[400px] items-stretch bg-bodyBg authChange:flex-col">
      <AuthNavBar />
      <div className="flex flex-1 items-center justify-center">
        <Outlet />
      </div>
      <div className="flex flex-1 linear_main authChange:hidden">
        <AuthSideContent />
      </div>
    </div>
  );
}

const AuthNavBar = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <nav className="fixed flex items-center justify-between w-full top-[25px] px-[25px] z-10 mobile:px-[5%] mobile:top-[15px]">
      <Link
        to={"/"}
        className="rounded-info text-black bg-white px-6 h-[40px] text-[16px] flex justify-center items-center shadow-def select-none cursor-pointer transition-colors hover:bg-whiteHover"
      >
        <span className="text-main mr-1.5">ონ</span> სერვისი
      </Link>
      <div className="flex items-center">
        <div
          onClick={() => setDarkMode((state) => !state)}
          className={`rounded-info h-[40px] aspect-square flex justify-center items-center shadow-def select-none cursor-pointer transition-colors ${
            darkMode
              ? " bg-whiteBgActive hover:bg-whiteBgActive mobile:bg-white mobile:hover:bg-whiteHover"
              : " bg-whiteBg hover:bg-whiteBgHover mobile:bg-white mobile:hover:bg-whiteHover"
          }`}
        >
          <MoonIcon
            className={`h-[20px] aspect-square [&>path]:transition-all shadow-def ${
              darkMode
                ? "[&>path]:fill-white mobile:[&>path]:fill-black"
                : "[&>path]:fill-white mobile:[&>path]:fill-black"
            }`}
          />
        </div>
      </div>
    </nav>
  );
};
