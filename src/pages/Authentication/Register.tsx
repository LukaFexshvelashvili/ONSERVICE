import InputBlock from "../../components/globals/InputBlock";

export default function Register() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="font-medium tracking-wide w-[90%] max-w-[400px]"
    >
      <h1 className="text-[38px] font-medium text-center text-blackF mobileSm:text-[32px]">
        ანგარიშის შექმნა
      </h1>
      <div className="flex flex-col gap-6 mt-10 w-full select-none authChange:mt-14">
        <div className=" flex items-center gap-5 ">
          <InputBlock title="სახელი" placeholder="სახელი" />
          <InputBlock title="გვარი" placeholder="გვარი" />
        </div>
        <InputBlock title="ელ-ფოსტა / ნომერი" placeholder="example@gmail.com" />
        <InputBlock title="პაროლი" placeholder="*******" />
        <InputBlock title="გაიმეორეთ პაროლი" placeholder="*******" />
      </div>
      <div className="flex justify-between text-[14px] mt-3">
        <div className="flex items-center text-inputLabel gap-1.5 cursor-pointer">
          <div className="h-[12px] aspect-square border-2 border-main bg-transparent rounded-[4px]"></div>
          ვეთანხმები{" "}
          <span className="text-main cursor-pointer transition-colors hover:text-secondMain">
            {" "}
            წესებს და პირობებს
          </span>
        </div>
      </div>
      <button className="linear_main tracking-wide h-[45px] w-full text-white mt-10 transition-opacity hover:opacity-95 font-medium rounded-[10px] authChange:mt-14">
        რეგისტრაცია
      </button>
      <p className=" text-inputLabel text-[14px] text-center mt-5">
        უკვე გაქვთ ანგარიში?{" "}
        <span className="text-main cursor-pointer transition-colors hover:text-secondMain">
          ავტორიზაცია
        </span>
      </p>
    </form>
  );
}
