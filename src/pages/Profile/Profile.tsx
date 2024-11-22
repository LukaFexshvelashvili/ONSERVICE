export default function Profile() {
  return (
    <>
      <h1 className="text-black text-[52px] leading-[64px] flex-1">
        გამარჯობა, <span className="text-main">ლუკა </span> <br />
      </h1>
      <p className="mt-5 text-desc text-[26px]">თქვენი პროფილი</p>
      <div className="info_box w-full rounded-info bg-white shadow-def p-7 mt-6 select-none">
        <p className="text-black2 ">მომხმარებლის ინფორმაცია</p>
        <div className="flex items-center gap-10 justify-center text-[14px] my-5">
          <div className="flex flex-col gap-2">
            <p className="font-bpg text-black2">სახელი</p>
            <div className="rounded-md bg-inputBg px-3 h-[40px] w-[200px] text-desc flex items-center">
              ლუკა
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bpg text-black2">გვარი</p>
            <div className="rounded-md bg-inputBg px-3 h-[40px] w-[200px] text-desc flex items-center">
              ფეხშველაშვილი
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bpg text-black2">მეილი</p>
            <div className="rounded-md bg-inputBg px-3 h-[40px] w-[200px] text-desc flex items-center">
              luki***@gmail.com
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bpg text-black2">ნომერი</p>
            <div className="rounded-md bg-inputBg px-3 h-[40px] w-[200px] text-desc flex items-center">
              +995 551 1* ** **
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
