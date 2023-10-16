import { RequestError } from "./RequestError";
import { KEY_JWT } from "./constants";

class MainApi {
  constructor({
    url = process.env.REACT_APP_API || "http://localhost:3000",
    headers = {
      Authorization: `Bearer ${localStorage.getItem(KEY_JWT)}`,
      "Content-Type": "application/json",
    },
    setLoggedIn,
  }) {
    this.url = url;
    this.headers = headers;
    this.setLoggedIn = setLoggedIn;
  }

  async handleResponse(response) {
    if (response.ok) {
      return await response.json();
    }

    throw new RequestError({
      status: response.status,
      ...(await response.json()),
    });
  }

  getProfile = async () => {
    const response = await fetch(`${this.url}/users/me`, {
      method: "GET",
      headers: this.headers,
    });

    return this.handleResponse(response);
  };

  updateProfile = async ({ email, name }) => {
    const response = await fetch(`${this.url}/users/me`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({ email, name }),
    });

    return this.handleResponse(response);
  };

  getMovies = async () => {
    const response = await fetch(`${this.url}/movies`, {
      method: "GET",
      headers: this.headers,
    });

    return this.handleResponse(response);
  };

  addMovie = async (movieData) => {
    const response = await fetch(`${this.url}/movies`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(movieData),
    });

    return this.handleResponse(response);
  };

  deleteMovie = async (movieId) => {
    const response = await fetch(`${this.url}/movies/${movieId}`, {
      method: "DELETE",
      headers: this.headers,
    });

    return this.handleResponse(response);
  };

  signup = async (userData) => {
    const response = await fetch(`${this.url}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    return this.handleResponse(response);
  };

  signin = async (userData) => {
    const response = await fetch(`${this.url}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    return this.handleResponse(response);
  };

  signout = async () => {
    const response = await fetch(`${this.url}/signout`, {
      method: "DELETE",
      headers: this.headers,
    });

    return this.handleResponse(response);
  };
}

export const mainApi = (opts) => new MainApi(opts);