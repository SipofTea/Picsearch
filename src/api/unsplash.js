import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID IcE_1r-1BflfJIHVQwShWU1YgBj1PaWXQBrwhr94CT8",
  },
});
