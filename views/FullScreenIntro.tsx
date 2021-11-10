import ShiftedBackground from "../components/ShiftedBackground";

const FullScreenIntro = () => {
  return (
    <div className="px-20 h-screen pb-20 text-center flex flex-col justify-center items-center text-gray-800">
      <h1 className="uppercase font-bold sm:text-5xl text-4xl">
        Junior <ShiftedBackground>JavaScript</ShiftedBackground> Developer
      </h1>
      <h6 className="text-gray-500 text-xs sm:text-sm mx-5">
        Hey I am Kranz and I build fullstack apps using React, Typescript,
        NodeJs and more...
      </h6>
    </div>
  );
};

export default FullScreenIntro;
