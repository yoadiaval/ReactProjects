import EditPerson from "./EditPerson";
import { useContext, useState } from "react";
import { GoTrash, GoPencil } from "react-icons/go";
import PersonContext from "../context/People";

function PersonShow({ value, id }) {
  const [showEdit, setShowEdit] = useState(false);

  const { deletePerson } = useContext(PersonContext);

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  const handleClick = () => {
    deletePerson(id);
  };

  let content = (
    <div className="block">
      <div>Name: {value.name}</div>
      <div>Last Name: {value.lastName}</div>
      <div>Email: {value.email}</div>
      <div>Years of Experience: {value.years}</div>
      <div>Position: {value.position}</div>
    </div>
  );

  if (showEdit) {
    content = <EditPerson onChange={handleEditClick} value={value} id={id} />;
  }

  return (
    <div className="py-5 px-5 my-1 mx-1 border ">
      <div className="flex flex-row-reverse">
        <GoTrash className="mx-3" onClick={handleClick} />
        <GoPencil onClick={handleEditClick} />
      </div>
      {content}
    </div>
  );
}

export default PersonShow;
