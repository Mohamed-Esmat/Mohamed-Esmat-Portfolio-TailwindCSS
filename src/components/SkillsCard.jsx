import { memo } from "react";

const SkillsCard = ({ ...skill }) => {
  if (!skill) {
    return null; // Handle case where skill is not provided
  }

  return (
    <div className="  rounded-lg p-6 flex flex-col items-center text-center">
      <div className="text-emerald-500 mb-4">{skill?.icon}</div>
      <h3 className="text-xl font-semibold mb-2">{skill?.title}</h3>
      <p className="text-gray-600">{skill?.text}</p>
    </div>
  );
};
export default memo(SkillsCard);
