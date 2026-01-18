import React from "react";

interface PillProps {
  label: string;
  onClick?: () => void;
  active?: boolean;
}

const Pill: React.FC<PillProps> = ({ label, onClick, active = false }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
        active
          ? "bg-blue-500 text-white border-blue-500"
          : "bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200"
      }`}
    >
      {label}
    </button>
  );
};

export default Pill;
