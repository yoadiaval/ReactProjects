import Dropdown from "../components/Dropdown";
import { useState } from "react";

function DropdownPage() {
  const [selection, SetSelection] = useState(null);

  const handleSelection = (option) => {
    SetSelection(option);
  };

  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
  ];

  return (
    <div className="flex">
      <Dropdown
        options={options}
        value={selection}
        onChange={handleSelection}
      />
    </div>
  );
}

export default DropdownPage;
