import { axiosInstance } from "./AxiosService";

class AuthService {
  constructor() {
    this.axiosInstance = axiosInstance;
    this.setAxiosAuthorizationHeader();
  }

  setAxiosAuthorizationHeader(tokenParam = null) {
    try {
      let token = tokenParam ? tokenParam : localStorage.getItem("token");

      if (token) {
        this.axiosInstance.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${token}`;
      }
    } catch (error) {}
  }

  async register(data) {
    try {
      let response = await this.axiosInstance.post("/register", data);
      if (response.data.status === 'success' ) {
        
        // localStorage.setItem("token", response.data.authorisation.token);
        // this.setAxiosAuthorizationHeader(response.data.authorisation.token);
         return response.data;
      }
    } catch (error) {}
  }

  async login(data) {
    try {
      let response = await this.axiosInstance.post("/login", data);
      if (response.data) {
        
        localStorage.setItem("token", response.data.authorisation.token);
        this.setAxiosAuthorizationHeader(response.data.authorisation.token);
        return response.data;
      }
    } catch (error) {}
  }

  async logout() {
    try {
      let response = await this.axiosInstance.post("/logout");

      if (response.data.status === 'success' ) {
        
        localStorage.removeItem("token");
        this.setAxiosAuthorizationHeader(null);
         return response.data;
      }
    } catch (error) {
      
    }
  }

  async refresh() {
    try {
      const response = await this.axiosInstance.post("/refresh");

      if (response.data) {
        localStorage.setItem("token", response.data.authorisation.token);
        this.setAxiosAuthorizationHeader(response.data.authorisation.token);
      }
      return response.data;
    } catch (error) {}
  }

  
}

export const authService = new AuthService();