import http from "../http-common";

class userDataService {
  getAll() {
    return http.get("/user");
  }

  get(id) {
    return http.get(`/user/${id}`);
  }

  create(data) {
    return http.post("/user", data);
  }

  update(id, data) {
    return http.put(`/user/${id}`, data);
  }

  delete(id) {
    return http.delete(`/user/${id}`);
  }



  findByTitle(title) {
    return http.get(`/user?title=${title}`);
  }
}

export default new userDataService();