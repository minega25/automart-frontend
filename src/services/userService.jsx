import { toast } from 'react-toastify';
import http from './httpService';
import { apiUrl } from '../config.json';

const apiEndpoint = `${apiUrl}/auth/signup`;

export default async function register(user) {
  const res = await http.post(apiEndpoint, {
    first_name: user.first_name,
    last_name: user.last_name,
    address: user.address,
    password: user.password,
    email: user.email,
  });
  toast.success(res.data.message);
  return res;
}
