import { useContext, useState } from "react";
import Input from "./Input";
import Button from "./Button";
import PersonContext from "../context/People";

function EditPerson({ value, id, onChange }) {
  const [editPerson, setEditPerson] = useState({
    name: value.name,
    lastName: value.lastName,
    email: value.email,
    years: value.years,
    position: value.position,
  });

  const { modifPerson } = useContext(PersonContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditPerson((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    modifPerson(editPerson, id);
    onChange();
  };

  return (
    <form onSubmit={handleSubmit} className="ml-5 py-5">
      Name:{" "}
      <Input onChange={handleChange} name="name" value={editPerson.name} />
      Last Name:{" "}
      <Input
        onChange={handleChange}
        name="lastName"
        value={editPerson.lastName}
      />
      Email:{" "}
      <Input onChange={handleChange} name="email" value={editPerson.email} />
      Years of experience:{" "}
      <Input onChange={handleChange} name="years" value={editPerson.years} />
      <select
        value={editPerson.position}
        name="position"
        onChange={handleChange}
      >
        <option value="no selected">Select an option...</option>
        <option value="full-stack">Full stack Developer</option>
        <option value="front-end">Front-End Developer</option>
      </select>
      <Button secondary className="mt-3">
        Save
      </Button>
    </form>
  );
}

export default EditPerson;
