import { axiosInstance } from "./AxiosService";

class CarsService {

  async getAll() {
    const response = await axiosInstance.get("/cars");
    console.log(response);
    return response.data.data;
  }

  async add(body){
    console.log(body);
    const res = await axiosInstance.post("/cars", body);
    console.log(res.data);
    return res;
  }

  async get(id) {
    console.log('usao')
    const res = await axiosInstance.get(`/cars/${id}`);
    // console.log(res)
    return res;
  }

  async edit(id, body){
    const res = await axiosInstance.put(`/cars/${id}`, body);
    return res;
  }

  async delete(id){
    const res = await axiosInstance.delete(`/cars/${id}`);
    return res;
  }
}

export default new CarsService();