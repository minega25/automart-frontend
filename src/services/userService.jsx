import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/auth/signup";

export function register(user) {
  return http.post(apiEndpoint, {
    first_name: user.first_name,
    last_name: user.last_name,
    address: user.address,
    password: user.password,
    email: user.email
  });
}
