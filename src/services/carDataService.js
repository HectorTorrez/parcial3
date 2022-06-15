import http from "../http-common";

class DataService {
  getAll() {
    return http.get("/car");
  }

  get(id) {
    return http.get(`/car/${id}`);
  }

  create(data) {
    return http.post("/car", data);
  }

  update(id, data) {
    return http.put(`/car/${id}`, data);
  }

  delete(id) {
    return http.delete(`/car/${id}`);
  }



  findByTitle(title) {
    return http.get(`/car?title=${title}`);
  }
}

export default new DataService();
