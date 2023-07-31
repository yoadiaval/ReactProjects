import CardPage from "./pages/CardPage";
import TablePage from "./pages/TablePage";
import SideBar from "./components/SideBar";
import { useEffect, useContext } from "react";
import PeopleContext from "./context/People";
import Route from "./components/Route";

function App() {
  //Obtengo lista de personas almacenada en json
  const { fetchPeople } = useContext(PeopleContext);

  //Renderizo lista ed personas cada que se modifica fetchPerson
  useEffect(() => {
    fetchPeople();
  }, [fetchPeople]);

  return (
    <div className="flex">
      <div className="w-1/3">
        <SideBar />
      </div>
      <div className=" w-2/3 h-screen overflow-scroll">
        <Route path="/card">
          <CardPage />
        </Route>
        <Route path="/">
          <TablePage />
        </Route>
      </div>
    </div>
  );
}

export default App;
