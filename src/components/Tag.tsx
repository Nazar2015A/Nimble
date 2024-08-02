import React from "react";

interface TagProps {
  value: string;
}

const Tag: React.FC<TagProps> = ({ value }) => {
  return (
    <div className="flex justify-center items-center bg-black hover:bg-black/80 transition-colors px-2 py-0.5 rounded-md">
      <p className="text-sm font-semibold text-white">{value}</p>
    </div>
  );
};

export default Tag;
