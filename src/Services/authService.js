import { postToEndpoint } from '../Components/Services/publicApiServices';

export const registerUser = async (body) => {
  try {
    const req = await postToEndpoint('register', body);
    window.localStorage.setItem('token', JSON.stringify(req.token));
    window.localStorage.setItem('user', JSON.stringify(req.user));
    return req;
  } catch (error) {
    throw new Error(error?.message);
  }
};

export const loginUser = async (body) => {
  try {
    const req = await postToEndpoint('login', body);
    if (req.success) {
      window.localStorage.setItem('token', JSON.stringify(req.token));
      window.localStorage.setItem('user', JSON.stringify(req.user));
    }
    return req;
  } catch (error) {
    throw new Error(error?.message);
  }
};
