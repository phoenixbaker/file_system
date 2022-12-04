import apiSauce from "apisauce";

const apiClient = apiSauce.create({
  baseURL: "http://localhost:4001/api",
});

export default apiClient;
