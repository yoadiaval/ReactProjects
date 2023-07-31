import PersonShow from "./PersonShow";
import { useContext } from "react";
import PeopleContext from "../context/People";

function PersonList() {
  const { people } = useContext(PeopleContext);
  const renderedPerson = people.map((person, index) => {
    return (
      <PersonShow
        key={index}
        value={person.detailsPerson}
        id={person.id}
      />
    );
  });
  return <div className="flex flex-wrap mx-5 mt-2">{renderedPerson}</div>;
}

export default PersonList;
