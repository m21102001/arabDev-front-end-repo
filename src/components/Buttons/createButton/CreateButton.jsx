import React from "react";

const CreateButton = ({ text }) => {
  return (
    <button className="px-3 py-2 text-bold transition all 0.5s text-[#3b49df] border-2 border-[#3b49df] hover:bg-[#3b49df] rounded-md hover:text-[white] md:w-[100%] ">
      {text}
    </button>
  );
};

export default CreateButton;