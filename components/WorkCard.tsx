import { FC } from "react";
import { Project } from "../data/projects";
import FilterWorkBadge from "./FilterWorkBadge";

const WorkCard: FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="mx-1 my-1 py-4">
      <img
        className="w-11/12 mx-auto"
        src={project.imageSrc}
        alt={`Image for ${project.name}`}
      />
      <div className="mx-2 my-3">
        <h3 className=" text-lg sm:text-left font-bold">{project.name}</h3>
        <ul className="flex justify-center my-2">
          {project.technologiesUsed.map((name, index) => (
            <li key={index}>
              {index < 3 && <FilterWorkBadge text={name} />}{" "}
              {index === 3 && <FilterWorkBadge text="2+" />}
            </li>
          ))}
        </ul>
        <p className="text-light text-gray-900 text-sm sm:text-left">
          {project.description}
        </p>
        <div className="flex items-center text-center px-3 mt-3 space-x-2">
          <button className="w-full border border-gray-700 transition-colors tansition-colors duration-300 bg-black text-white py-1 rounded-sm hover:bg-white hover:text-black">
            Preview
          </button>
          <button className="w-full border border-gray-700 py-1 rounded-sm hover:bg-black hover:text-white transition-colors tansition-colors duration-300">
            Github Repo
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
