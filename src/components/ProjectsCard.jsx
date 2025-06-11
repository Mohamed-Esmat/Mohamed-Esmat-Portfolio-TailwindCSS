import { FaGithubSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { useState } from "react";

const ProjectsCard = ({ title, url, image, githubUrl, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full hover:shadow-lg group hover:scale-[1.02] transition-all  duration-300 ease-in-out mx-auto w-96 max-w-7xl">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
      />
      <div className="flex flex-col justify-between flex-1 p-6 relative transition-all duration-300 ease-in-out">
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <div
            className={`text-gray-600 mb-4 text-sm relative transition-height
              duration-400 ease-in-out ${
                isHovered ? "max-h-[12rem]" : "max-h-[5.5rem] overflow-hidden"
              }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <p>{description}</p>

            {!isHovered && (
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none transition-all duration-300 ease-in-out" />
            )}
          </div>
        </div>
        <div className="mt-auto pt-4 flex  gap-3 items-center border-t border-gray-200">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-500 hover:underline text-sm font-medium flex items-center"
          >
            <TbWorldWww className="inline-block mr-1 text-2xl hover:text-blue-500 transition-colors duration-300" />
          </a>
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-500 hover:underline text-sm font-medium flex items-center"
            >
              <FaGithubSquare className="inline-block mr-1 text-2xl hover:text-black transition-colors duration-300" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProjectsCard;
