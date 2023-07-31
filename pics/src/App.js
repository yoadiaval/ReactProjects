import { useState } from 'react'
import SearchBar from "./component/SearchBar";
import searchImages from "./api";
import ImageList from "./component/ImageList";

function App(){
    const [images, setImages] = useState([]);

    

    const handleSubmit = async(term)=>{
       const result =  await searchImages(term)
       setImages(result)
       console.log(result)
    }
    return (
      <div>
        <SearchBar onSubmit={handleSubmit} />
        <ImageList images={images}  />
      </div>
    );
};

export default App;