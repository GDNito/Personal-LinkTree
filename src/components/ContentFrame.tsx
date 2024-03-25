import AcountInfos from "./AcountInfos";
import Links from "./Links";

const ContentFrame = () => {
  return (
    <div className="h-screen flex flex-col py-8 items-center border-2 sm:w-2/4 sm:h-full sm:ml-[calc(25vw)] ">
      <AcountInfos />
      <Links />
    </div>
  );
};

export default ContentFrame;
