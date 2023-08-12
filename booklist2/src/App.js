import BookList from "./components/BookList";
import SideBar from "./components/SideBar";
import Header from "./components/header";


function App() {
   
  return (
    <div className="grid grid-cols-5 gap-y-5 w-10/12 m-auto">
      <div className="col-span-5">
        <Header />
      </div>
      <div className="col-span-1">
        <SideBar/>
      </div>
      <div className="col-span-4">
        <BookList/>
      </div>
    </div>
  );
}
export default App;
