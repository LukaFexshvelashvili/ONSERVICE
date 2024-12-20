export default function InputBlock(props: {
  title: string;
  placeholder: string;
}) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-inputLabel font-medium text-[14px] tracking-wide">
        {props.title}
      </p>
      <input
        type="text"
        className=" rounded-[10px] text-[14px] text-black bg-inputBg w-full px-4 h-[45px] outline-none tracking-wide transition-colors font-medium focus:bg-inputBgActive"
        placeholder={props.placeholder}
      />
    </div>
  );
}
