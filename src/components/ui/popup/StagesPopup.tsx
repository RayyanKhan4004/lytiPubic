import React from "react";

interface PopupTriggerProps {
  data: any;
  onClose: () => void;
}

const StagesPopup: React.FC<PopupTriggerProps> = ({ data, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-[600px] relative">
        <button
          className="absolute top-2 right-2 text-2xl cursor-pointer"
          onClick={onClose}
        >
          ✖️
        </button>

        <h2 className="text-xl font-semibold mb-4">Transaction Details</h2>

        <p>
          <strong>Name:</strong> {data.name}
        </p>
        <p>
          <strong>Address:</strong> {data.address}
        </p>
        <p>
          <strong>Agent:</strong> {data.agent}
        </p>

        <div className="mt-6">
          <button
            className="bg-black text-white px-6 py-2 rounded-md"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default StagesPopup;
