import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "ef0d76e3-4021-4548-9c3d-00a0e96d3742",
  },
});

export const userAPI = {
  getUsers(currentPage = 1, pageSize = 6) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((responce) => {
        return responce.data;
      });
  },

  getTotalUsersCount() {
    return instance.get(`users?page=1&count=6`).then((responce) => {
      return responce.data;
    });
  },

  getProfileStatus(id) {
    return instance.get(`profile/status/${id}`).then((response) => {
      return response.data;
    });
  },

  updateProfileStatus(status) {
    return instance.put(`profile/status`, { status }).then((response) => {
      return response.data;
    });
  },

  authMe() {
    return instance.get(`auth/me`).then((responce) => {
      return responce.data;
    });
  },

  login(email, password, rememberMe = false, captcha = null) {
    return instance
      .post(`/auth/login`, { email, password, rememberMe, captcha })
      .then((response) => {
        return response.data;
      });
  },

  getCaptcha() {
    return instance.get(`security/get-captcha-url`).then((response) => {
      return response.data;
    });
  },

  logout() {
    return instance.delete(`auth/login`).then((response) => {
      return response.data;
    });
  },

  getProfile(userId) {
    return instance.get(`profile/${userId}`).then((responce) => {
      return responce.data;
    });
  },

  unfollow(id) {
    return instance.delete(`follow/${id}`).then((responce) => {
      return responce.data;
    });
  },

  follow(id) {
    return instance.post(`follow/${id}`).then((responce) => {
      return responce.data;
    });
  },

  getMusicAlbums() {
    return axios.get("http://localhost:4000/musicalbums/get-musicalbums")
    .then((response) => {
      return response.data
    })
  },

  deleteMusicAlbum(id) {
    return axios.delete(`http://localhost:4000/musicalbums/delete-album/${id}`)
  },

  getNews(country, category) {
    return axios
      .get(
        `http://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=1c08655261a244f09b1812a3dfeb395b`
      )
      .then((response) => {
        return response.data;
      });
  },
};
