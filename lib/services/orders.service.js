import AxiosService from "lib/services/api/axios.service";
import { httpErrorHandler } from "lib/handlers";

import Swal from "sweetalert2";

export default class OrdersService {
  constructor() {
    this.axiosService = new AxiosService();
    this.apiEndpoint = "/orders";
  }

  async getAll(query) {
    try {
      let response = await this.axiosService
        .axiosInstance()
        .get(this.apiEndpoint + `?q=${query}`);

      return response;
    } catch (err) {
      httpErrorHandler(err);
    }
  }

  async createProduct(payload) {
    try {
      let response = await this.axiosService
        .axiosInstance()
        .post(this.apiEndpoint, payload);

      Swal.fire({
        icon: "success",
        title: "Created",
        text: "Order data successfully added to database",
        confirmButtonText: "Okay",
      });

      return response;
    } catch (err) {
      console.log(err);
      httpErrorHandler(err);
    }
  }

  async getProductById(productId) {
    try {
      let response = await this.axiosService
        .axiosInstance()
        .get(this.apiEndpoint + `/${productId}`);

      return response;
    } catch (err) {
      httpErrorHandler(err);
    }
  }

  async updateProductById(productId, payload) {
    try {
      let response = await this.axiosService
        .axiosInstance()
        .patch(this.apiEndpoint + `/${productId}`, payload);

      Swal.fire({
        icon: "success",
        title: "Updated",
        text: "Order record data successfully updated from database",
        confirmButtonText: "Okay",
      });

      return response;
    } catch (err) {
      httpErrorHandler(err);
    }
  }

  async deleteProductById(productId) {
    try {
      let response = await this.axiosService
        .axiosInstance()
        .delete(this.apiEndpoint + `/${productId}`, null, null);

      Swal.fire({
        icon: "warning",
        title: "Deleted",
        text: "Order record data successfully deleted from database",
        confirmButtonText: "Okay",
      });

      return response;
    } catch (err) {
      httpErrorHandler(err);
    }
  }
}
