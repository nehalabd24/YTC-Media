import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  url: BASE_URL,
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromApi = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (error) {
    console.error(error);
  }
};


// import axios from "axios";

// export const fetchFromApi = async (url) => {
//   const options = {
//     method: "GET",
//     url: "https://youtube-v31.p.rapidapi.com/search?part=snippet&q=new",
//     params: {
//       maxResults: "50",
//     },
//     headers: {
//       "X-RapidAPI-Key": "10b0897c11msh268dcb5682443b9p106322jsndce7f127086a",
//       "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
//     },
//   };

//   try {
//     const response = await axios.request(options);
//     console.log(response.data.items);
//   } catch (error) {
//     console.error(error);
//   }
// };
