import { baseUrl } from "./constants";
import { checkServerResponse } from "./api";

export const userSignin = (email, password) => {
  return new Promise((resolve, reject) => {
    resolve({ token: "a fake token" });
  });
};

export const userRegistration = (email, password, name) => {
  return new Promise((resolve, reject) => {
    resolve({ token: "a fake token" });
  });
};

export const checkToken = (token) => {
  // Pretend we did a fetch request that gave us back a user
  return new Promise((resolve, reject) => {
    resolve({
      data: { name: "fake user", email: "fake@example,com", id: "fake-id" },
    });
  });
};

// export function userSignin(email, password) {
//   return fetch(`${baseUrl}/signin`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ email, password }),
//   }).then(checkServerResponse);
// }

// export function userRegistration(email, password, username) {
//   return fetch(`${baseUrl}/signup`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ email, password, name: username }),
//   }).then(checkServerResponse);
// }
