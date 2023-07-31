import { GoTrash } from "react-icons/go";
import { useContext } from "react";
import PeopleContext from "../context/People";

function Table() {
  const { deletePerson, people } = useContext(PeopleContext);

  const renderedPeople = people.map((person, index) => {
    const handleClick = () => {
      //console.log(person.id);
      deletePerson(person.id);
    };
    return (
      <tr key={index}>
        <td className="border-b ">{person.detailsPerson.name}</td>
        <td className="border-b">{person.detailsPerson.lastName}</td>
        <td className="border-b">{person.detailsPerson.email}</td>
        <td className="border-b p-5">{person.detailsPerson.years}</td>
        <td className="border-b">{person.detailsPerson.position}</td>
        <td className="border-b">
          <GoTrash onClick={handleClick} className="block float-right" />
        </td>
      </tr>
    );
  });

  return (
    <div className="p-6">
      <table className="table-auto  border-spacing-2">
        <thead>
          <tr className="border-b-2">
            <th className="p-5">Name</th>
            <th className="p-2">Last name</th>
            <th className="p-2">Email</th>
            <th className="p-5">Years of experience</th>
            <th className="p-2 ">Position</th>
            <th className="p-2">Delete</th>
          </tr>
        </thead>
        <tbody>{renderedPeople}</tbody>
      </table>
    </div>
  );
}

export default Table;
