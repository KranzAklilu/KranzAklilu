import clsx from "clsx";
import FilterWorkBadge from "../../components/FilterWorkBadge";
import WorkCard from "../../components/WorkCard";
import projects from "../../data/projects";

const Work = () => {
  const filteredTechStack = projects
    .map(({ technologiesUsed }) => technologiesUsed)
    .flat();

  return (
    <div className="px-4 w-full">
      <h1 className="text-5xl font-bold mb-2">Work</h1>
      <p className="font-normal text-sm mb-3 text-gray-600">
        This are my commercial and also non-commercial projects. Some of this
        projects might be in a Private Repo.
      </p>
      {/* <FilterWorkBadge technologiesUsed={filteredTechStack} /> */}
      <div className="flex items-center overflow-x-scroll border border-black">
        {Array(9)
          .fill(0)
          .map((_, index) => (
            <span
              key={index}
              style={{ minWidth: "110px" }}
              className={clsx(
                "mt-2 cursor-pointer rounded-sm mx-2 px-4 py-1 text-center text-xl font-bold",
                {
                  "bg-gray-100 text-gray-600": !(index === 0),
                  "bg-black text-white": index === 0,
                }
              )}
            >
              All ({index + 1})
            </span>
          ))}
      </div>
      <div
        className="grid my-8 mx-5"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        }}
      >
        {projects.map((project, index) => (
          <WorkCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Work;
