import axios from "axios";

export const getPetService= async()=>{
    try {
      const response = await axios.get(`https://6652009d20f4f4c4427970fe.mockapi.io/pet-service`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  export const getPetServiceDetail= async(id)=>{
    try {
      const response = await axios.get(`https://6652009d20f4f4c4427970fe.mockapi.io/pet-service/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  export const getHotelService= async()=>{
    try {
      const response = await axios.get(`https://6652009d20f4f4c4427970fe.mockapi.io/hotel-service`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  export const getHotelServiceDetail= async(id)=>{
    try {
      const response = await axios.get(`https://6652009d20f4f4c4427970fe.mockapi.io/hotel-service/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };