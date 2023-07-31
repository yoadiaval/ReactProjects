import Button from "./Button";
import { useContext, useState } from "react";
import Label from "./Label";
import Input from "./Input";
import PersonContext from "../context/People";

function CreatePerson() {
  const [detailsPerson, setDetailsPerson] = useState({
    name: "",
    lastName: "",
    email: "",
    years: "",
    position: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDetailsPerson((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const { addPerson } = useContext(PersonContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(detailsPerson);
    addPerson(detailsPerson);
    setDetailsPerson({
      name: "",
      lastName: "",
      email: "",
      years: "",
      position: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="ml-5 py-5">
        <Label>Name</Label>
        <Input value={detailsPerson.name} name="name" onChange={handleChange} />
        <Label>Last Name</Label>
        <Input
          value={detailsPerson.lastName}
          name="lastName"
          onChange={handleChange}
        />
        <Label>Email</Label>
        <Input
          value={detailsPerson.email}
          name="email"
          type="email"
          onChange={handleChange}
        />
        <Label>Years of experience</Label>
        <Input
          value={detailsPerson.years}
          type="number"
          name="years"
          onChange={handleChange}
        />
        <Label>Position</Label>
        <select
          value={detailsPerson.position}
          name="position"
          onChange={handleChange}
        >
          <option value="no selected">Select an option...</option>
          <option value="full-stack">Full stack Developer</option>
          <option value="front-end">Front-End Developer</option>
        </select>
        <Button secondary className="rounded mt-10">
          Send
        </Button>
      </form>
    </div>
  );
}

export default CreatePerson;
