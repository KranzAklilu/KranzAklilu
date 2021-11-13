import ShiftedBackground from "../../components/ShiftedBackground";

const Resume = () => {
  return (
    <div className="text-center px-4 my-10">
      <h1 className="text-5xl font-bold mb-2">Resume</h1>
      <p className="font-normal text-sm mb-3 text-gray-600 mx-5">
        This are my commercial and also non-commercial projects. Some of this
        This are my commercial and also non-commercial projects. Some of this
        projects might be in a Private Repo. projects might be in a Private
        Repo.
      </p>
      <div className="my-3 ">
        <ShiftedBackground className="text-2xl mt-4">
          education
        </ShiftedBackground>
        <h3 className="text-lg font-bold mt-2">Addis Ababa University</h3>
        <p className="text-sm">Software Enginnering</p>
        <p className="text-sm text-gray-700">2020-2021</p>
      </div>
      <div className="my-3 ">
        <ShiftedBackground className="text-2xl mt-4">skills</ShiftedBackground>
      </div>{" "}
    </div>
  );
};

export default Resume;
