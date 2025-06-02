import axios from "axios";

export const BACKEND_ENDPOINT = "https://xcountries-backend.azurewebsites.net/all";

export const fetchCountries = async () => {
    try{ 
        const res = await axios.get(BACKEND_ENDPOINT);
        // console.log(res.data);
        return res.data;
    }
    catch(e){
         console.error("API fetch failed:", e);
        return []; 
    }
}