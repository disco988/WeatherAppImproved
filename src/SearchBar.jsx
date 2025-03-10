import { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const SearchBar = ({ fetchLocations }) => {
  const [input, setInput] = useState("");

  const handleAddLocation = () => {
    fetchLocations(input);
    setInput("");
  };

  return (
    <div className="align-center flex items-center w-full justify-center">
      <Input value={input} onKeyDown={(e) => e.key === "Enter" && handleAddLocation()} onChange={(e) => setInput(e.target.value)}></Input>
      <Button onClick={handleAddLocation}>Add</Button>
    </div>
  );
};

export default SearchBar;
