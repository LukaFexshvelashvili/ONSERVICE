import { Link } from "react-router-dom";
import InputBlock from "../../components/globals/InputBlock";
import CheckBox from "../../components/globals/CheckBox";
import { useState } from "react";

export default function Login() {
  const [remember, setRemember] = useState<boolean>(false);
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="font-medium tracking-wide w-[90%] max-w-[400px] text-center"
    >
      <h1 className="text-[38px] font-medium text-center text-blackF mobileSm:text-[32px]">
        ავტორიზაცია
      </h1>
      <div className="flex flex-col gap-5 mt-10 w-full select-none authChange:mt-14 text-start">
        <InputBlock title="ელ-ფოსტა / ნომერი" placeholder="example@gmail.com" />
        <InputBlock title="პაროლი" placeholder="*******" />
      </div>
      <div className="flex justify-between text-[14px] mt-3">
        <CheckBox
          title="დამიმახსოვრე"
          check={remember}
          setCheck={setRemember}
        />
      </div>
      <button className="linear_main tracking-wide h-[45px] w-full text-white mt-10 transition-opacity hover:opacity-95 font-medium rounded-[10px] authChange:mt-14">
        შესვლა
      </button>
      <p className=" text-inputLabel text-[14px] text-center mt-5">
        არ გაქვთ ანგარიში?{" "}
        <Link
          to={"/auth/register"}
          className="text-main cursor-pointer transition-colors hover:text-secondMain"
        >
          შექმენი
        </Link>
      </p>
      <Link
        to={"/auth/recover"}
        className="text-main cursor-pointer transition-colors inline-block hover:text-secondMain text-center mt-4 text-[14px]"
      >
        დაგავიწყდათ პაროლი?
      </Link>
    </form>
  );
}
