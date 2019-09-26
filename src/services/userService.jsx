import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/api/v1/auth/signup";

export function register(user) {
  return http.post(apiEndpoint, {
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.username,
    password: user.password,
    address: user.address,
    name: user.name
  });
}
