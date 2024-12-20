export default function CheckBox(props: {
  title: string;
  check: boolean;
  setCheck: Function;
}) {
  return (
    <div
      onClick={() => props.setCheck((state: boolean) => !state)}
      className="flex items-center text-inputLabel gap-1.5 cursor-pointer select-none"
    >
      <div
        className={`h-[16px] aspect-square border-2 border-main rounded-[4px] transition-colors ${
          props.check ? "bg-main" : "bg-transparent"
        } `}
      >
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="12"
          height="12"
          viewBox="0 0 100 100"
          enable-background="new 0 0 100 100"
          xmlSpace="preserve"
          className={`transition-colors ${
            props.check ? "fill-white" : "fill-transparent"
          }`}
        >
          <path
            d="M88.04,30.319L75.124,17.401c-0.454-0.453-1.067-0.709-1.71-0.709c-0.642,0-1.256,0.256-1.709,0.709L37.392,51.714
	l-9.094-9.093c-0.945-0.944-2.474-0.944-3.419,0L11.96,55.539c-0.453,0.453-0.709,1.068-0.709,1.709c0,0.641,0.256,1.256,0.709,1.71
	L35.607,82.6c0.453,0.453,1.067,0.708,1.709,0.708c0.029,0,0.055-0.016,0.083-0.016c0.024,0,0.05,0.014,0.075,0.014
	c0.621,0,1.236-0.236,1.709-0.708L88.04,33.738C88.985,32.794,88.985,31.264,88.04,30.319z"
          />
        </svg>
      </div>
      {props.title}
    </div>
  );
}
