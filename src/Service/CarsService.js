import { axiosInstance } from "./AxiosService";

class CarsService {
  async getAll() {
    const response = await axiosInstance.get("/cars");
    return response.data;
  }
  async add(body){
    const res = await axiosInstance.post("/cars", body);
    return res;
  }
  async get (id) {
    const res = await axiosInstance.get(`/cars/${id}`);
    console.log(res);
    return res;
  }
  async edit(id,body){
    const res = await axiosInstance.put(`/cars/${id}`, body);
    return res;
  }
}

export default new CarsService();