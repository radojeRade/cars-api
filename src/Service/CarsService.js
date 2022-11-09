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
}

export default new CarsService();