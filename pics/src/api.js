import axios from 'axios';

const searchImages = async(term)=>{
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: "Client-ID v9FlRd4CuFOsp2URqc9X6AM1wPlI24ftRelJzMM5v1E",
      },
      params: {
        query: term,
      },
    });
  
    return response.data.results;
}

export default searchImages;