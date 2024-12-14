import InputBlock from "../../components/globals/InputBlock";

export default function Login() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="font-medium tracking-wide w-[90%] max-w-[400px]"
    >
      <h1 className="text-[38px] font-medium text-center text-blackF mobileSm:text-[32px]">
        ავტორიზაცია
      </h1>
      <div className="flex flex-col gap-5 mt-10 w-full select-none authChange:mt-14">
        <InputBlock title="ელ-ფოსტა / ნომერი" placeholder="example@gmail.com" />
        <InputBlock title="პაროლი" placeholder="*******" />
      </div>
      <div className="flex justify-between text-[14px] mt-3">
        <div className="flex items-center text-inputLabel gap-1.5 cursor-pointer">
          <div className="h-[12px] aspect-square border-2 border-main bg-transparent rounded-[4px]"></div>
          დამიმახსოვრე
        </div>
      </div>
      <button className="linear_main tracking-wide h-[45px] w-full text-white mt-10 transition-opacity hover:opacity-95 font-medium rounded-[10px] authChange:mt-14">
        შესვლა
      </button>
      <p className=" text-inputLabel text-[14px] text-center mt-5">
        არ გაქვთ ანგარიში?{" "}
        <span className="text-main cursor-pointer transition-colors hover:text-secondMain">
          შექმენი
        </span>
      </p>
      <p className="text-main cursor-pointer transition-colors hover:text-secondMain text-center mt-4 text-[14px]">
        დაგავიწყდათ პაროლი?
      </p>
    </form>
  );
}
