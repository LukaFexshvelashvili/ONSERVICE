import InputBlock from "../../components/globals/InputBlock";

export default function RecoverPassword() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="font-medium tracking-wide w-[90%] max-w-[400px]"
    >
      <h1 className="text-[38px] font-medium text-center text-blackF mobileSm:text-[32px]">
        პაროლის აღდგენა
      </h1>
      {/* <div className="text-center rounded-info border-2 border-main bg-mainClear flex justify-center items-center py-4 px-2 text-main my-4 text-[14px] max-w-[400px] mx-auto">
        ინსტრუქციები გამოგზავნილია თქვენ ელ-ფოსტაზე (შეამოწმეთ სპამის
        საქაღალდეც)
      </div> */}
      <div className="flex flex-col gap-6 mt-6 w-full select-none authChange:mt-14">
        <InputBlock
          title="შეიყვანეთ თქვენი ელ-ფოსტა"
          placeholder="example@gmail.com"
        />
      </div>

      <button className="linear_main tracking-wide h-[45px] w-full text-white mt-10 transition-opacity hover:opacity-95 font-medium rounded-[10px] authChange:mt-14">
        კოდის მოთხოვნა
      </button>
    </form>
  );
}
