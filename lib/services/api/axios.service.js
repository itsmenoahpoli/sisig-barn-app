import axios from "axios";

export default class AxiosService {
  constructor() {
    this.apiEndpoint = "/";
  }

  axiosInstance = (payloadType = "json-payload") => {
    let instance = axios.create({
      baseURL: process.env.API_BASEURL,
      headers:
        payloadType === "file-payload"
          ? {
              Accept: "application/json",
              "Content-Type": "multipart/form-data",
            }
          : {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
    });

    return instance;
  };
}
