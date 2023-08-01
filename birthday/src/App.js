import List from "./List";


function App(){
    return (
      <div className="bg-pink-600 h-screen">
        <div className="p-6 w-1/3 mx-auto mt-20 bg-white shadow-lg rounded-xl">
          <h1 className="text-2xl text-center">5 Birthday Today</h1>
          <List />
        </div>
      </div>
    ); 
    
}

export default App;