import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("http://localhost:8080/api/tutorials");
  }

  // get(id) {
  //   return http.get(`http://localhost:8080/api/tutorials/${id}`);
  // }

  get(id) {
    return http.get(`http://localhost:8080/api/tutorials/${id}`)
     .catch(error => {
      console.error("Error fetching tutorial:", error);
      throw error;
    });
  }

  create(data) {
    return http.post("http://localhost:8080/api/tutorials", data);
  }

  update(id, data) {
    return http.put(`http://localhost:8080/api/tutorials/${id}`, data);
  }

  delete(id) {
    return http.delete(`http://localhost:8080/api/tutorials/${id}`);
  }

  deleteAll() {
    return http.delete(`http://localhost:8080/api/tutorials`);
  }

  findByTitle(title) {
    return http.get(`http://localhost:8080/api/tutorials?title=${title}`);
  }
}

const tutorialDataService = new TutorialDataService();
export default tutorialDataService;