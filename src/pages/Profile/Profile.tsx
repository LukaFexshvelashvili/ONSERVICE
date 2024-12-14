export default function Profile() {
  return (
    <>
      <h1 className="text-black text-[52px] leading-[64px] flex-1 mobile:text-[46px]">
        გამარჯობა, <span className="text-main">ლუკა </span> <br />
      </h1>
      <p className="mt-5 text-desc text-[26px] mobile:text-center mobile:text-[18px] mobile:mt-3">
        თქვენი პროფილი
      </p>
      <div className="info_box w-full rounded-info bg-white shadow-def p-7 mt-6 select-none">
        <p className="text-black2 mobile:text-center ">
          მომხმარებლის ინფორმაცია
        </p>
        <div className="flex items-center gap-10 justify-center text-[14px] my-5 flex-wrap mobile:flex-col">
          <div className="flex flex-col gap-2 mobile:w-full ">
            <p className="font-bpg text-black2">სახელი</p>
            <div className="rounded-md bg-inputBg px-3 h-[40px] w-[200px] text-desc flex items-center mobile:w-full">
              ლუკა
            </div>
          </div>
          <div className="flex flex-col gap-2 mobile:w-full">
            <p className="font-bpg text-black2">გვარი</p>
            <div className="rounded-md bg-inputBg px-3 h-[40px] w-[200px] text-desc flex items-center mobile:w-full">
              ფეხშველაშვილი
            </div>
          </div>
          <div className="flex flex-col gap-2 mobile:w-full">
            <p className="font-bpg text-black2">მეილი</p>
            <div className="rounded-md bg-inputBg px-3 h-[40px] w-[200px] text-desc flex items-center mobile:w-full">
              luki***@gmail.com
            </div>
          </div>
          <div className="flex flex-col gap-2 mobile:w-full">
            <p className="font-bpg text-black2">ნომერი</p>
            <div className="rounded-md bg-inputBg px-3 h-[40px] w-[200px] text-desc flex items-center mobile:w-full">
              +995 551 1* ** **
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
