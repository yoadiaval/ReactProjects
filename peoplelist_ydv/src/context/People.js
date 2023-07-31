import { createContext, useState, useCallback } from "react";
import axios from "axios";

const PeopleContext = createContext();

function Provider({ children }) {
  const [people, setPeople] = useState([]);

  const fetchPeople = useCallback(async () => {
    const response = await axios.get("http://localhost:3001/peoplelist");
    setPeople(response.data);
  }, []);

  const addPerson = async (detailsPerson) => {
    const response = await axios.post("http://localhost:3001/peoplelist/", {
      detailsPerson,
    });

    const updatedPeople = [...people, response.data];
    console.log(updatedPeople);
    setPeople(updatedPeople);
  };

//es importante poner en esta funcion datailsPerson en lugar del que viene editedPerson(el que viene del componente), de lo contrario se editará el nombre del objeto en el db.json y una vez modificado el resto de componentes no podrá acceder. 
  const modifPerson = async(detailsPerson,id)=>{
    const response = await axios.put(`http://localhost:3001/peoplelist/${id}`, {
      detailsPerson,
    });

    const updatedPerson = people.map((person)=>{
      if(person.id === id){
        return {...person, ...response.data};
      }
      return person;
    });
    setPeople(updatedPerson)
  };

  const deletePerson = async (id) => {
    await axios.delete(`http://localhost:3001/peoplelist/${id}`);
    const updatedPerson = people.filter((person) => {
      return person.id !== id;
    });
    setPeople(updatedPerson);
  };

  const valueToShare = {
    people,
    fetchPeople,
    addPerson,
    modifPerson,
    deletePerson,
  };
  return (
    <PeopleContext.Provider value={valueToShare}>
      {children}
    </PeopleContext.Provider>
  );
}

export { Provider };
export default PeopleContext;
