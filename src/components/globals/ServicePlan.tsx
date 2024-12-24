import { TWebService } from "../../services/ServiceLists";

export default function ServicePlan({ data }: { data: TWebService }) {
  return (
    <div
      className="ServicePlan group overflow-hidden relative p-6 rounded-lg w-[320px] min-w-[320px] h-[460px] cursor-pointer shadow-def hover:-translate-y-2 duration-700 transition-transform flex flex-col items-center"
      style={{
        background: data.start_color
          ? `linear-gradient(to bottom, ${data.start_color},${data.end_color})`
          : "white",
      }}
    >
      <div className="flex flex-col gap-1 items-center  z-10">
        <p
          className={`${
            data.start_color ? "text-white" : "text-blackF"
          }  text-[14px]`}
        >
          {data.name}
        </p>
        <h3
          className={`${
            data.start_color ? "text-white" : "text-main"
          } font-medium text-[24px]`}
        >
          {data.start_price ? (
            <>
              {data.start_price}₾-{data.end_price}₾
            </>
          ) : (
            "???₾"
          )}
        </h3>
        <p
          className={`${
            data.start_color ? "text-white" : "text-main"
          }  font-medium opacity-40 relative flex justify-center items-center h-[24px]`}
        >
          <div
            className={`h-[2px] w-full ${
              data.start_color ? "bg-white" : "bg-main"
            } absolute`}
          ></div>
          {data.old_start_price && (
            <>
              {data.old_start_price}₾-{data.old_end_price}₾
            </>
          )}
        </p>
      </div>
      <div
        className={`line h-1 w-8 rounded-md  ${
          data.start_color ? "bg-whiteOpacity" : "bg-lineDecor"
        } my-3`}
      ></div>
      <div className="flex flex-col w-full items-start justify-start gap-3 mt-2  z-10">
        {data.services.map((text: string, i: number) => (
          <div key={i} className="flex items-start gap-1">
            <div className="h-[20px] aspect-square flex justify-center items-center">
              <div
                className={`h-[5px] aspect-square rounded-full ${
                  data.start_color ? "bg-white" : "bg-desc"
                }`}
              ></div>
            </div>
            <p
              className={`min-h-[20px] font-regular text-[14px] tracking-wider ${
                data.start_color ? "text-white" : "text-blackF"
              }`}
            >
              {text}
            </p>
          </div>
        ))}
      </div>
      <div
        className={` absolute bottom-6 w-[200px] h-[35px] rounded-lg cursor-pointer transition-colors duration-300  z-10 ${
          data.start_color
            ? "bg-whiteOpacity group-hover:bg-whiteOpacityHover text-white"
            : "bg-whiteClear group-hover:bg-whiteClearHover text-blackF"
        } flex justify-center items-center  font-regular tracking-wider text-[14px]`}
      >
        {data.start_deadline_days ? (
          <>
            {data.start_deadline_days}-{data.end_deadline_days} სამუშაო დღე
          </>
        ) : (
          <>??? სამუშაო დღე</>
        )}
      </div>
    </div>
  );
}
