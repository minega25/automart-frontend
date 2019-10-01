import httpService from './httpService';
import { apiUrl } from '../config.json';
import authService from './authService';

const token = authService.getJwt();
const apiEndpoint = `${apiUrl}/car?status=available`;

export function registerCar(car) {

}

export async function getCars() {
  return await httpService.get(apiEndpoint, {
    headers: { 'x-auth-token': token },
  });
}

export function getCar(id) {

}

export function updateCar(id) {

}

export default {
  getCars,
  getCar,
  registerCar,
  updateCar,
};
