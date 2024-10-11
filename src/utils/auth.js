import { baseUrl } from "./constants";
import { checkServerResponse } from "./api";

export function userSignin(email, password) {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(checkServerResponse);
}

export function userRegistration(email, password, username) {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name: username }),
  }).then(checkServerResponse);
}
